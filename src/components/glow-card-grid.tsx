import {
	type ComponentPropsWithoutRef,
	type CSSProperties,
	type ReactNode,
	useEffect,
	useRef,
} from "react";
import { cn } from "#/lib/utils";

export type GlowCardGridProps = ComponentPropsWithoutRef<"div"> & {
	cardRadius?: number;
	iconBlur?: number;
	iconSaturate?: number;
	iconBrightness?: number;
	iconScale?: number;
	iconOpacity?: number;
	borderWidth?: number;
	borderBlur?: number;
	borderSaturate?: number;
	borderBrightness?: number;
	borderContrast?: number;
};

/** Adapted from Chánh Đại's Glow Card Grid (MIT):
 * https://chanhdai.com/components/glow-card-grid
 * Pixel offsets preserve the effect on content-sized cards without size containment.
 */
export function GlowCardGrid({
	cardRadius = 16,
	iconBlur = 25,
	iconSaturate = 5,
	iconBrightness = 1.3,
	iconScale = 4,
	iconOpacity = 0.3,
	borderWidth = 3,
	borderBlur = 10,
	borderSaturate = 4.2,
	borderBrightness = 2.5,
	borderContrast = 2.5,
	className,
	style,
	...props
}: GlowCardGridProps) {
	const gridRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const grid = gridRef.current;
		if (!grid) return;
		const reduced = window.matchMedia(
			"(prefers-reduced-motion: reduce), (hover: none), (pointer: coarse)",
		);
		let frame = 0;
		let pointer: { x: number; y: number } | null = null;
		const cards = () =>
			Array.from(
				grid.querySelectorAll<HTMLElement>(
					"[data-slot='glow-card']:not([data-glow-disabled])",
				),
			).filter((card) => card.closest("[data-slot='glow-card-grid']") === grid);
		const reset = () => {
			cancelAnimationFrame(frame);
			frame = 0;
			pointer = null;
			for (const card of cards()) card.style.removeProperty("--glow-active");
		};
		const update = () => {
			frame = 0;
			if (!pointer || reduced.matches) return;
			// Read geometry together before writing styles; avoid layout thrashing.
			const positions = cards().map((card) => ({
				card,
				rect: card.getBoundingClientRect(),
			}));
			for (const { card, rect } of positions) {
				const nearby =
					rect.width > 0 &&
					rect.height > 0 &&
					pointer.x > rect.left - 160 &&
					pointer.x < rect.right + 160 &&
					pointer.y > rect.top - 160 &&
					pointer.y < rect.bottom + 160 &&
					rect.bottom > 0 &&
					rect.top < window.innerHeight;
				card.style.setProperty("--glow-active", nearby ? "1" : "0");
				if (!nearby) continue;
				card.style.setProperty(
					"--glow-x",
					`${pointer.x - rect.left - rect.width / 2}px`,
				);
				card.style.setProperty(
					"--glow-y",
					`${pointer.y - rect.top - rect.height / 2}px`,
				);
			}
		};
		const schedule = () => {
			if (pointer && !frame && !reduced.matches)
				frame = requestAnimationFrame(update);
		};
		const move = (event: PointerEvent) => {
			if (reduced.matches || event.pointerType === "touch") return;
			pointer = { x: event.clientX, y: event.clientY };
			schedule();
		};
		document.addEventListener("pointermove", move, { passive: true });
		document.documentElement.addEventListener("pointerleave", reset);
		window.addEventListener("blur", reset);
		window.addEventListener("scroll", schedule, {
			passive: true,
			capture: true,
		});
		window.addEventListener("resize", schedule);
		reduced.addEventListener("change", reset);
		return () => {
			reset();
			document.removeEventListener("pointermove", move);
			document.documentElement.removeEventListener("pointerleave", reset);
			window.removeEventListener("blur", reset);
			window.removeEventListener("scroll", schedule, true);
			window.removeEventListener("resize", schedule);
			reduced.removeEventListener("change", reset);
		};
	}, []);

	return (
		<div
			ref={gridRef}
			data-slot="glow-card-grid"
			className={cn(
				"grid w-full gap-4 sm:grid-cols-2 md:grid-cols-3",
				className,
			)}
			style={
				{
					"--card-radius": `${cardRadius}px`,
					"--card-icon-blur": `${iconBlur}px`,
					"--card-icon-saturate": iconSaturate,
					"--card-icon-brightness": iconBrightness,
					"--card-icon-scale": iconScale,
					"--card-icon-opacity": iconOpacity,
					"--card-border-width": `${borderWidth}px`,
					"--card-border-blur": `${borderBlur}px`,
					"--card-border-saturate": borderSaturate,
					"--card-border-brightness": borderBrightness,
					"--card-border-contrast": borderContrast,
					...style,
				} as CSSProperties
			}
			{...props}
		/>
	);
}

/** The same blurred artwork and masked backdrop border for every card variant. */
export function GlowCardEffects({ artwork }: { artwork: ReactNode }) {
	return (
		<>
			<div aria-hidden="true" className="glow-artwork">
				<div className="glow-source">{artwork}</div>
			</div>
			<div aria-hidden="true" className="glow-border" />
		</>
	);
}

export type GlowCardProps = {
	name: string;
	handle: string;
	avatar: string;
	className?: string;
};
export function GlowCard({ name, handle, avatar, className }: GlowCardProps) {
	return (
		<article
			data-slot="glow-card"
			className={cn(
				"glow-card relative flex h-52 items-center justify-center overflow-hidden border border-border bg-card",
				className,
			)}
		>
			<GlowCardEffects
				artwork={<img className="size-20" src={avatar} alt="" />}
			/>
			<div className="relative z-10 flex flex-col items-center gap-4">
				<img
					className="size-20 rounded-full"
					src={avatar}
					alt=""
					width={80}
					height={80}
				/>
				<div className="text-center">
					<h2 className="font-semibold">{name}</h2>
					<p className="text-sm text-muted-foreground">{handle}</p>
				</div>
			</div>
		</article>
	);
}
