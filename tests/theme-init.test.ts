import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { runInNewContext } from "node:vm";
import { describe, expect, it, vi } from "vitest";
const script = readFileSync(resolve(process.cwd(), "public/theme-init.js"), "utf8");
function initialize(stored: string | null, systemDark: boolean, blocked = false) {
	const toggle = vi.fn(); const style = { colorScheme: "" };
	runInNewContext(script, {
		localStorage: { getItem: () => { if (blocked) throw new Error("Storage denied"); return stored; } },
		matchMedia: () => ({ matches: systemDark }),
		document: { documentElement: { classList: { toggle }, style } },
	});
	return { toggle, style };
}
describe("theme before first paint", () => {
	it("honors a saved preference ahead of the system setting", () => {
		const { toggle, style } = initialize("light", true);
		expect(toggle).toHaveBeenCalledWith("dark", false); expect(style.colorScheme).toBe("light");
	});
	it("uses system preference when storage is blocked", () => {
		const { style } = initialize(null, true, true); expect(style.colorScheme).toBe("dark");
	});
	it("ignores invalid persisted values", () => { expect(initialize("invalid", false).style.colorScheme).toBe("light"); });
});
