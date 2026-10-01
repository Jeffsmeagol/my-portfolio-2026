import { motion, useReducedMotion } from "motion/react";
import {
	type CSSProperties,
	cloneElement,
	isValidElement,
	type ReactElement,
	type ReactNode,
	useRef,
} from "react";
import { GlowCardEffects } from "#/components/glow-card-grid";
import { cn } from "#/lib/utils";

export type AnimatedIconHandle = {
	startAnimation: () => void;
	stopAnimation: () => void;
};
type HoverGlowCardProps = {
	children: ReactNode;
	className?: string;
	contentClassName?: string;
	icon?: ReactNode;
	iconClassName?: string;
	iconWrapperClassName?: string;
	iconSize?: number;
	hoverLift?: boolean;
	disableHoverGlow?: boolean;
	glowColor?: string;
	id?: string;
};
type IconProps = {
	ref?: React.Ref<AnimatedIconHandle>;
	className?: string;
	size?: number;
};

export function HoverGlowCard({
	children,
	className,
	contentClassName,
	icon,
	iconClassName,
	iconWrapperClassName,
	iconSize = 24,
	hoverLift = false,
	disableHoverGlow = false,
	glowColor = "var(--primary)",
	id,
}: HoverGlowCardProps) {
	const iconRef = useRef<AnimatedIconHandle>(null);
	const reducedMotion = useReducedMotion();
	const animatedIcon =
		isValidElement(icon) &&
		cloneElement(icon as ReactElement<IconProps>, {
			ref: iconRef,
			size: iconSize,
			className: cn((icon.props as IconProps).className, iconClassName),
		});
	const artwork = isValidElement(icon) ? (
		cloneElement(icon as ReactElement<IconProps>, {
			ref: undefined,
			size: 80,
			className: "size-20",
		})
	) : (
		<span className="size-20 rounded-full bg-current" />
	);
	return (
		<motion.article
			id={id}
			data-slot="glow-card"
			data-glow-disabled={disableHoverGlow || undefined}
			className={cn(
				"glass-panel glow-card group relative isolate h-full overflow-hidden p-6",
				className,
			)}
			style={{ "--glow-color": glowColor } as CSSProperties}
			onHoverStart={() => {
				if (!reducedMotion) iconRef.current?.startAnimation?.();
			}}
			onHoverEnd={() => iconRef.current?.stopAnimation?.()}
			whileHover={
				hoverLift && !reducedMotion
					? { y: -4, transition: { duration: 0.18 } }
					: undefined
			}
		>
			{!disableHoverGlow && <GlowCardEffects artwork={artwork} />}
			<div
				className={cn(
					"relative z-10 flex h-full min-w-0 flex-col",
					contentClassName,
				)}
			>
				{animatedIcon && (
					<div
						aria-hidden="true"
						className={cn(
							"mb-6 flex size-12 shrink-0 items-center justify-center rounded-xl border border-current/20 bg-current/5 text-(--glow-color)",
							iconWrapperClassName,
						)}
					>
						{animatedIcon}
					</div>
				)}
				{children}
			</div>
		</motion.article>
	);
}
