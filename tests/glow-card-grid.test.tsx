import { cleanup, render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { GlowCard, GlowCardGrid } from "../src/components/glow-card-grid";
import { HoverGlowCard } from "../src/components/hover-glow-card";

let reduced = false;
let frames: Map<number, FrameRequestCallback>;
let nextFrame: number;
let preferenceChanged: (() => void) | undefined;
const rect = (left: number) => ({ left, right: left + 200, top: 100, bottom: 300, width: 200, height: 200, x: left, y: 100, toJSON: () => ({}) });
function move(x: number, y: number, pointerType = "mouse") {
	const event = new Event("pointermove");
	Object.assign(event, { clientX: x, clientY: y, pointerType });
	document.dispatchEvent(event);
}
function flush() {
	const pending = [...frames.values()]; frames.clear();
	for (const callback of pending) callback(0);
}
function mount() {
	const result = render(<GlowCardGrid><div data-slot="glow-card" /><div data-slot="glow-card" /><div data-slot="glow-card" data-glow-disabled /></GlowCardGrid>);
	const cards = Array.from(result.container.querySelectorAll<HTMLElement>("[data-slot='glow-card']"));
	cards.forEach((card, index) => { card.getBoundingClientRect = () => rect(100 + index * 220); });
	return { ...result, cards };
}

beforeEach(() => {
	reduced = false; nextFrame = 1; frames = new Map(); preferenceChanged = undefined;
	vi.stubGlobal("requestAnimationFrame", vi.fn((callback: FrameRequestCallback) => { const id = nextFrame++; frames.set(id, callback); return id; }));
	vi.stubGlobal("cancelAnimationFrame", vi.fn((id: number) => frames.delete(id)));
	vi.stubGlobal("matchMedia", () => ({ get matches() { return reduced; }, addEventListener: (_: string, callback: () => void) => { preferenceChanged = callback; }, removeEventListener: vi.fn(), addListener: vi.fn(), removeListener: vi.fn() }));
});
afterEach(() => { cleanup(); vi.unstubAllGlobals(); });

describe("glow interaction", () => {
	it("coalesces pointer moves and maps the latest position into each neighboring card", () => {
		const { cards } = mount(); move(210, 200); move(250, 220);
		expect(frames.size).toBe(1); flush();
		expect(cards[0].style.getPropertyValue("--glow-x")).toBe("50px");
		expect(cards[0].style.getPropertyValue("--glow-y")).toBe("20px");
		expect(cards[1].style.getPropertyValue("--glow-x")).toBe("-170px");
		expect(cards[1].style.getPropertyValue("--glow-active")).toBe("1");
		expect(cards[2].style.getPropertyValue("--glow-active")).toBe("");
	});
	it("hides distant glows and clears them when the pointer leaves the document", () => {
		const { cards } = mount(); move(210, 200); flush(); move(1200, 600); flush();
		expect(cards[0].style.getPropertyValue("--glow-active")).toBe("0");
		move(210, 200); flush(); document.documentElement.dispatchEvent(new Event("pointerleave"));
		expect(cards[0].style.getPropertyValue("--glow-active")).toBe("");
	});
	it("ignores touch and reduced-motion input, including preference changes", () => {
		const { cards } = mount(); move(210, 200, "touch"); expect(frames.size).toBe(0);
		move(210, 200); flush(); reduced = true; preferenceChanged?.(); move(210, 200);
		expect(frames.size).toBe(0); expect(cards[0].style.getPropertyValue("--glow-active")).toBe("");
	});
	it("recomputes geometry on scroll and cancels queued work on unmount", () => {
		const { cards, unmount } = mount(); move(210, 200); flush();
		cards[0].getBoundingClientRect = () => rect(150); window.dispatchEvent(new Event("scroll")); flush();
		expect(cards[0].style.getPropertyValue("--glow-x")).toBe("-40px");
		move(220, 200); unmount(); expect(frames.size).toBe(0);
		move(220, 200); expect(frames.size).toBe(0);
	});
	it("renders the shared decorative layers in avatar and content cards", () => {
		const { container } = render(<GlowCardGrid borderWidth={4} cardRadius={24}><GlowCard name="Example" handle="@example" avatar="/favicon.svg" /><HoverGlowCard><a href="#contact">Contact</a></HoverGlowCard><HoverGlowCard disableHoverGlow>Plain panel</HoverGlowCard></GlowCardGrid>);
		expect(container.querySelectorAll('.glow-artwork[aria-hidden="true"]')).toHaveLength(2);
		expect(container.querySelectorAll('.glow-border[aria-hidden="true"]')).toHaveLength(2);
		expect((container.firstChild as HTMLElement).style.getPropertyValue("--card-border-width")).toBe("4px");
	});
});
