import { Link, useLocation } from "@tanstack/react-router";
import { ArrowUp, ArrowUpRight, Mail, MapPin } from "lucide-react";
import { MotionConfig, useReducedMotion } from "motion/react";
import { cloneElement, type ReactNode, useRef } from "react";
import { GlowCardGrid } from "#/components/glow-card-grid";
import {
	type AnimatedIconHandle,
	HoverGlowCard,
} from "#/components/hover-glow-card";
import { ThemeToggle } from "#/components/theme-toggle";
import { contactLinks, profile } from "#/lib/portfolio-data";
import { cn } from "#/lib/utils";

export function SiteShell({ children }: { children: ReactNode }) {
	const location = useLocation();
	return (
		<MotionConfig reducedMotion="user">
			<div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
				<a
					href="#main-content"
					className="sr-only fixed left-4 top-4 z-100 rounded-lg bg-foreground p-3 text-background focus:not-sr-only focus:fixed"
				>
					Skip to content
				</a>
				<div
					aria-hidden="true"
					className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,color-mix(in_oklch,var(--primary),transparent_95%),transparent_28rem),radial-gradient(circle_at_82%_5%,color-mix(in_oklch,var(--glow-violet),transparent_97%),transparent_26rem)]"
				/>
				<header className="sticky top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
					<nav
						aria-label="Main navigation"
						className="glass-nav mx-auto flex max-w-240 items-center justify-between gap-2 p-2 sm:px-3"
					>
						<Link
							aria-label="Ifeoluwa Adebowale home"
							className="flex shrink-0 items-center gap-3 rounded-lg"
							to="/"
						>
							<img
								src="/favicon.svg"
								alt=""
								width={36}
								height={36}
								className="size-9 rounded-full border border-primary/20 bg-primary/10"
							/>
							<span className="hidden sm:block">
								<span className="block text-sm font-semibold">
									{profile.name}
								</span>
								<span className="block text-xs text-muted-foreground">
									Senior full-stack engineer
								</span>
							</span>
						</Link>
						<div className="flex items-center gap-1 sm:gap-2">
							<div className="glass-pill flex p-1">
								{[
									{ label: "Home", to: "/" },
									{ label: "Experience", to: "/experience" },
								].map((item) => (
									<Link
										key={item.to}
										to={item.to}
										aria-current={
											location.pathname === item.to ? "page" : undefined
										}
										className={cn(
											"rounded-full px-2.5 py-2.5 text-xs font-medium sm:px-4",
											location.pathname === item.to
												? "bg-foreground text-background"
												: "text-muted-foreground hover:text-foreground",
										)}
									>
										{item.label}
									</Link>
								))}
								<a
									href="#contact"
									className="rounded-full px-2.5 py-2.5 text-xs font-medium text-muted-foreground hover:text-foreground sm:px-4"
								>
									Contact
								</a>
							</div>
							<ThemeToggle />
						</div>
					</nav>
				</header>
				<main
					id="main-content"
					tabIndex={-1}
					className="relative z-10 outline-none"
				>
					{children}
				</main>
				<Footer />
			</div>
		</MotionConfig>
	);
}

function Footer() {
	return (
		<footer
			id="contact"
			className="relative z-10 mt-8 border-t border-border px-4 pb-8 pt-14 sm:px-6"
		>
			<div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
				<div>
					<p className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
						<MapPin aria-hidden="true" className="size-4" />
						{profile.location}
					</p>
					<h2 className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
						Let’s talk about your team
						<br />
						and what you’re building.
					</h2>
					<p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground">
						For engineering opportunities or a conversation about my work, email
						me with a little context about the role, product, and team.
					</p>
					<a
						href={`mailto:${profile.email}`}
						className="mt-6 inline-flex items-center gap-2 font-medium text-primary link-underline"
					>
						<Mail aria-hidden="true" className="size-4" />
						{profile.email}
					</a>
				</div>
				<GlowCardGrid className="block" iconOpacity={0.2}>
					<HoverGlowCard className="p-3 sm:p-4" glowColor="var(--glow-teal)">
						<div className="grid gap-2">
							{contactLinks.map((link) => (
								<ContactLink key={link.label} link={link} />
							))}
						</div>
					</HoverGlowCard>
				</GlowCardGrid>
			</div>
			<div className="mx-auto mt-12 flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground">
				<p>{profile.name} · Built with React & TypeScript</p>
				<a
					href="#main-content"
					className="inline-flex items-center gap-2 rounded-md py-2 hover:text-foreground"
				>
					Back to top <ArrowUp aria-hidden="true" className="size-4" />
				</a>
			</div>
		</footer>
	);
}

function ContactLink({ link }: { link: (typeof contactLinks)[number] }) {
	const iconRef = useRef<AnimatedIconHandle>(null);
	const interaction = useRef({ hovered: false, focused: false });
	const reducedMotion = useReducedMotion();

	function updateAnimation(kind: "hovered" | "focused", active: boolean) {
		const wasActive =
			interaction.current.hovered || interaction.current.focused;
		interaction.current[kind] = active;
		const isActive = interaction.current.hovered || interaction.current.focused;
		if (isActive === wasActive) return;
		if (isActive && !reducedMotion) iconRef.current?.startAnimation();
		else iconRef.current?.stopAnimation();
	}

	return (
		<a
			href={link.href}
			onMouseEnter={() => updateAnimation("hovered", true)}
			onMouseLeave={() => updateAnimation("hovered", false)}
			onFocus={() => updateAnimation("focused", true)}
			onBlur={() => updateAnimation("focused", false)}
			target={link.href.startsWith("http") ? "_blank" : undefined}
			rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
			className="flex min-w-0 items-center gap-3 rounded-xl border border-border bg-background/55 px-3 py-3 transition-colors hover:bg-muted"
		>
			<span
				aria-hidden="true"
				className="shrink-0 text-muted-foreground [&_svg]:size-5"
			>
				{cloneElement(link.icon, { ref: iconRef })}
			</span>
			<span className="min-w-0 flex-1">
				<span className="block text-sm font-medium">{link.label}</span>
				<span className="mt-0.5 block break-all text-xs text-muted-foreground">
					{link.value}
				</span>
			</span>
			<ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
			{link.href.startsWith("http") && (
				<span className="sr-only">(opens in a new tab)</span>
			)}
		</a>
	);
}
