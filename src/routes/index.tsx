import { LightningIcon } from "@phosphor-icons/react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { GlowCardGrid } from "#/components/glow-card-grid";
import { HoverGlowCard } from "#/components/hover-glow-card";
import { BotIcon } from "#/components/ui/bot";
import { BriefcaseBusinessIcon } from "#/components/ui/briefcase-business";
import { ArrowRightIcon } from "#/components/ui/arrow-right";
import { buttonVariants } from "#/components/ui/button";
import { focusAreas, heroStats, profile } from "#/lib/portfolio-data";
import { cn } from "#/lib/utils";
import { ActivityIcon } from "#/components/ui/activity";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<div id="top">
			<section className="relative flex min-h-screen items-center px-4 pt-16 pb-14 sm:px-6">
				<div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
					<motion.div
						initial={{ opacity: 0, y: 28 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, ease: "easeOut" }}
					>
						<p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 font-medium text-primary text-xs uppercase tracking-[0.25em]">
							<LightningIcon className="size-4" />
							5+ years across product, fintech, cloud, and reliability
						</p>
						<h1 className="max-w-4xl text-5xl font-black tracking-tight text-balance sm:text-6xl lg:text-7xl">
							I build serious software for teams that need senior ownership.
						</h1>
						<p className="mt-6 max-w-2xl text-muted-foreground text-pretty text-lg leading-8">
							{profile.summary}
						</p>

						<div className="mt-8 flex flex-wrap gap-3">
							<Link
								className={cn(
									buttonVariants({ size: "lg" }),
									"rounded-full normal-case tracking-normal",
								)}
								to="/experience"
							>
								View experience
								<ArrowRightIcon data-icon="inline-end" />
							</Link>
							<a
								className={cn(
									buttonVariants({ size: "lg", variant: "outline" }),
									"rounded-full border-border bg-background/60 normal-case tracking-normal backdrop-blur-xl",
								)}
								href="#contact"
							>
								Contact me
							</a>
						</div>
					</motion.div>

					<motion.div
						className="glass-panel border-foreground/0 relative overflow-hidden p-5"
						initial={{ opacity: 0, scale: 0.96, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
					>
						<div className="absolute inset-0 bg-[linear-gradient(135deg,color-mix(in_oklch,var(--primary),transparent_72%),transparent_38%),radial-gradient(circle_at_82%_18%,color-mix(in_oklch,var(--chart-1),transparent_68%),transparent_12rem)]" />
						<div className="relative grid gap-4">
							<div className="rounded-lg border border-white/10 bg-background/55 p-5 backdrop-blur-xl">
								<div className="mb-12 flex items-start justify-between">
									<div>
										<p className="text-muted-foreground text-xs uppercase tracking-[0.25em]">
											Current focus
										</p>
										<h2 className="mt-3 text-2xl font-black">
											Full-stack product systems
										</h2>
									</div>
									<ActivityIcon className="text-primary" size={36} />
								</div>
								<div className="grid grid-cols-3 gap-3">
									{heroStats.map((stat) => (
										<div
											className="rounded-md border border-border/60 bg-background/45 p-3"
											key={stat.label}
										>
											<p className="font-black text-2xl">{stat.value}</p>
											<p className="mt-2 text-muted-foreground text-xs leading-5">
												{stat.label}
											</p>
										</div>
									))}
								</div>
							</div>

							<GlowCardGrid
								borderWidth={1}
								cardRadius={8}
								className="grid gap-3 sm:grid-cols-2 md:grid-cols-2"
								iconOpacity={0.18}
							>
								<HoverGlowCard
									className="rounded-lg border-white/10 bg-foreground p-5 text-background shadow-none dark:bg-foreground"
									icon={<BriefcaseBusinessIcon />}
									iconClassName="text-background"
									iconSize={24}
								>
									<p className="text-sm leading-6">
										Multi-tenant products, internal tools, analytics dashboards,
										APIs, migrations, and backend business logic.
									</p>
								</HoverGlowCard>
								<HoverGlowCard
									className="rounded-lg border-white/10 bg-primary p-5 text-primary-foreground shadow-none"
									icon={<BotIcon />}
									iconClassName="text-primary-foreground"
									iconSize={24}
								>
									<p className="text-sm leading-6">
										AI integration, cloud/serverless workflows, mobile delivery,
										and production reliability habits.
									</p>
								</HoverGlowCard>
							</GlowCardGrid>
						</div>
					</motion.div>
				</div>
			</section>

			<section className="px-4 py-30 sm:px-6">
				<div className="mx-auto max-w-6xl">
					<motion.div
						className="mb-10 max-w-3xl"
						initial={{ opacity: 0, y: 24 }}
						transition={{ duration: 0.6, ease: "easeOut" }}
						viewport={{ once: true, amount: 0.35 }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						<p className="text-muted-foreground text-sm uppercase tracking-[0.28em]">
							What I bring
						</p>
						<h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
							I can move from interface detail to architecture decisions without
							losing the thread.
						</h2>
					</motion.div>

					<GlowCardGrid
						borderWidth={1}
						className="grid gap-4 md:grid-cols-3 pt-20"
						iconOpacity={0.2}
					>
						{focusAreas.map((area, index) => (
							<motion.div
								initial={{ opacity: 0, y: 22 }}
								key={area.title}
								transition={{
									duration: 0.5,
									delay: index * 0.08,
									ease: "easeOut",
								}}
								viewport={{ once: true, amount: 0.25 }}
								whileInView={{ opacity: 1, y: 0 }}
							>
								<HoverGlowCard
									icon={area.icon}
									iconSize={36}
									iconWrapperClassName="mb-10 mx-auto flex size-16 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary"
								>
									<h3 className="text-xl font-black text-center">{area.title}</h3>
									<p className="mt-4 text-muted-foreground text-sm leading-7">
										{area.description}
									</p>
								</HoverGlowCard>
							</motion.div>
						))}
					</GlowCardGrid>
				</div>
			</section>
		</div>
	);
}
