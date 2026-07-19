import { motion } from "motion/react";
import {
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
  useRef,
} from "react";
import { cn } from "#/lib/utils";

export type AnimatedIconHandle = {
  startAnimation: () => void;
  stopAnimation: () => void;
};

type HoverGlowCardProps = {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  iconClassName?: string;
  iconWrapperClassName?: string;
  iconSize?: number;
  hoverLift?: boolean;
  disableHoverGlow?: boolean;
};

type IconProps = {
  ref?: React.Ref<AnimatedIconHandle>;
  className?: string;
  size?: number;
};

export function HoverGlowCard({
  children,
  className,
  icon,
  iconClassName,
  iconWrapperClassName,
  iconSize = 24,
  hoverLift = true,
  disableHoverGlow = false,
}: HoverGlowCardProps) {
  const iconRef = useRef<AnimatedIconHandle>(null);

  const animatedIcon =
    isValidElement(icon) &&
    cloneElement(icon as ReactElement<IconProps>, {
      ref: iconRef,
      size: iconSize,
      className: cn((icon.props as IconProps).className, iconClassName),
    });

  return (
    <motion.article
      data-slot="glow-card"
      className={cn(
        "glass-panel group relative isolate overflow-hidden p-6 transition-colors",
        "ring-1 ring-border/60 [clip-path:inset(0_round_var(--card-radius,16px))]",
        !disableHoverGlow &&
          "before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-[inherit] before:bg-[radial-gradient(circle_at_calc((var(--pointer-x,0)+1)*50%)_calc((var(--pointer-y,0)+1)*50%),color-mix(in_oklch,var(--primary),transparent_76%),transparent_42%)] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
        "after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:border after:border-white/20 after:opacity-60",
        className,
      )}
      onHoverStart={() => iconRef.current?.startAnimation?.()}
      onHoverEnd={() => iconRef.current?.stopAnimation?.()}
      whileHover={
        hoverLift
          ? {
              y: -4,
              transition: { duration: 0.18, ease: "easeOut" },
            }
          : undefined
      }
    >
      {animatedIcon ? (
        <div
          className={cn(
            "mb-10 flex size-12 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary",
            iconWrapperClassName,
          )}
        >
          {animatedIcon}
        </div>
      ) : null}
      {children}
    </motion.article>
  );
}
