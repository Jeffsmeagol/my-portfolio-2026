import { motion } from "motion/react";
import type { ReactNode } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { GlowCardGrid } from "#/components/glow-card-grid";
import { HoverGlowCard } from "#/components/hover-glow-card";
import { ThemeToggle } from "#/components/theme-toggle";
import { AArrowUpIcon } from "#/components/ui/a-arrow-up";
import { ArrowUpRightIcon } from "#/components/ui/arrow-up-right";
import { MapPinIcon } from "#/components/ui/map-pin";
import { buttonVariants } from "#/components/ui/button";
import { contactLinks, profile } from "#/lib/portfolio-data";
import { cn } from "#/lib/utils";

const navItems = [
	{ label: "Home", to: "/" },
	{ label: "Experience", to: "/experience" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
	const location = useLocation();

	return (
		<div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
			<div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_20%_10%,color-mix(in_oklch,var(--primary),transparent_95%),transparent_28rem),radial-gradient(circle_at_82%_5%,color-mix(in_oklch,var(--chart-2),transparent_95%),transparent_26rem),linear-gradient(135deg,transparent_0%,color-mix(in_oklch,var(--muted),transparent_80%)_100%)]" />
			<div className="pointer-events-none fixed inset-0 z-0 bg-background/5 backdrop-blur-[1.5px]" />
			<div className="pointer-events-none fixed inset-3 z-0 rounded-[2rem] border border-white/10 bg-white/6 shadow-2xl shadow-black/5 backdrop-blur-md dark:border-white/5 dark:bg-white/2" />
			<div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(90deg,color-mix(in_oklch,var(--foreground),transparent_96%),transparent_1px),linear-gradient(0deg,color-mix(in_oklch,var(--foreground),transparent_98%),transparent_1px)] opacity-25 bg-size-[72px_72px]" />
			<div className="sticky top-0 z-50 shrink-0 pt-6">
				{/* <div className="pointer-events-none absolute inset-x-0 -top-6 bottom-0 -z-10 max-w-5xl mx-auto" /> */}
				<header className="mx-auto flex h-16 max-w-5xl items-center justify-between">
					<nav className="relative flex w-full items-center justify-between gap-2 glass-nav px-3 py-2.5">
						<Link
							aria-label="Ifeoluwa Adebowale home"
							className="group flex items-center gap-3"
							to="/"
						>
							<img
								src="/favicon.svg"
								alt="Ifeoluwa Adebowale"
								className="flex size-9 items-center justify-center rounded-full border border-primary/20 bg-primary/10"
							/>
							<span className="hidden leading-none sm:block">
								<span className="block font-semibold">
									Ifeoluwa Adebowale
								</span>
								<span className="block text-muted-foreground text-xs">
									Senior full-stack engineer
								</span>
							</span>
						</Link>

						<div className="flex items-center gap-2">
							<div className="glass-pill p-1 shadow-sm flex">
								{navItems.map((item) => (
									<Link
										className={cn(
											"relative overflow-hidden rounded-full px-4 py-2 text-xs uppercase tracking-widest transition-colors",
											location.pathname === item.to
												? "text-background hover:text-background"
												: "text-muted-foreground hover:text-foreground",
										)}
										key={item.to}
										to={item.to}
									>
										{location.pathname === item.to ? (
											<motion.span
												className="absolute inset-0 rounded-full bg-foreground"
												layoutId="portfolio-active-nav-pill"
												transition={{
													type: "spring",
													stiffness: 500,
													damping: 35,
												}}
											/>
										) : null}
										<span className="relative z-10">{item.label}</span>
									</Link>
								))}
								<a
									className="rounded-full px-4 py-2 text-muted-foreground text-xs uppercase tracking-widest transition-colors hover:text-foreground"
									href="#contact"
								>
									Contact
								</a>
							</div>
							<ThemeToggle />
						</div>
					</nav>
				</header>
			</div>

			<main className="relative z-10">{children}</main>
			<Footer />
		</div>
	);
}

function Footer() {
	return (
		<footer
			className="relative z-10 border-foreground/10 mt-30 border-t bg-background/10 p-4 backdrop-blur-xl sm:px-6"
			id="contact"
		>
			<motion.div
				className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr]"
				initial={{ opacity: 0, y: 24 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				viewport={{ once: true, amount: 0.2 }}
				whileInView={{ opacity: 1, y: 0 }}
			>
				<div>
					<p className="mb-4 flex items-center gap-2 text-muted-foreground text-sm [&_svg]:size-4">
						<MapPinIcon className="size-4" />
						{profile.location}
					</p>
					<h2 className="max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">
						Building something complex that needs a calm senior engineer?
					</h2>
					<p className="mt-5 max-w-xl text-muted-foreground text-sm leading-7 sm:text-base">
						I can help turn unclear product goals into shipped software, clean
						up legacy systems, lead implementation across the stack, and bring
						AI, cloud, data, and product judgment into the same room.
					</p>
				</div>

				<GlowCardGrid borderWidth={1} className="block" iconOpacity={0.14}>
					<HoverGlowCard
						className="grid content-start gap-3 p-4"
						hoverLift={false}
						iconSize={20}
						iconWrapperClassName="mb-2 size-10"
					>
						{contactLinks.map((link) => (
							<a
								className={cn(
									buttonVariants({ variant: "outline" }),
									"h-auto justify-between rounded-lg border-white/10 bg-background/35 px-4 py-3 normal-case tracking-normal backdrop-blur-xl",
								)}
								href={link.href}
								key={link.label}
								rel="noreferrer"
								target={link.href.startsWith("http") ? "_blank" : undefined}
							>
								<span className="flex items-center gap-2 text-left">
									<span className="[&_svg]:size-4">{link.icon}</span>
									<span>
										{/* <span className="block font-semibold text-sm">
											{link.label}
										</span> */}
										<span className="block text-muted-foreground text-xs">
											{link.value}
										</span>
									</span>
								</span>
								<ArrowUpRightIcon className="size-4" />
							</a>
						))}
					</HoverGlowCard>
				</GlowCardGrid>
			</motion.div>

			<a
				className="group mx-auto mt-4 flex w-fit items-center gap-2 text-muted-foreground text-xs uppercase tracking-[0.3em] transition-colors hover:text-foreground"
				href="#top"
			>
				<AArrowUpIcon
					className="transition-transform group-hover:-translate-y-1"
					size={18}
				/>
				Back to top
			</a>
		</footer>
	);
}
