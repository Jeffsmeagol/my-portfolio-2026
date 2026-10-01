import { createFileRoute, Link } from "@tanstack/react-router";
import {
	ArrowDown,
	ArrowRight,
	ArrowUpRight,
	FileText,
	MapPin,
} from "lucide-react";
import { GlowCardGrid } from "#/components/glow-card-grid";
import { HoverGlowCard } from "#/components/hover-glow-card";
import { ProjectCard } from "#/components/project-card";
import { BotIcon } from "#/components/ui/bot";
import { BriefcaseBusinessIcon } from "#/components/ui/briefcase-business";
import { buttonVariants } from "#/components/ui/button";
import { focusAreas, heroStats, profile, projects } from "#/lib/portfolio-data";
import { cn } from "#/lib/utils";

export const Route = createFileRoute("/")({ component: Home });
const featuredProjects = projects
	.filter((project) =>
		[
			"aktuarial-analytics",
			"tenant-operations",
			"interswitch-reliability",
		].includes(project.id),
	)
	.sort(
		(a, b) =>
			[
				"aktuarial-analytics",
				"tenant-operations",
				"interswitch-reliability",
			].indexOf(a.id) -
			[
				"aktuarial-analytics",
				"tenant-operations",
				"interswitch-reliability",
			].indexOf(b.id),
	);

function Home() {
	return (
		<div id="top">
			<section className="px-4 pb-16 pt-14 sm:px-6 sm:pt-20 lg:pb-20">
				<div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
					<div>
						<p className="mb-5 text-sm font-medium text-primary">
							{profile.name}{" "}
							<span className="mx-2 text-muted-foreground">/</span> Software
							Engineer
						</p>
						<h1 className="max-w-2xl text-4xl font-black leading-[1.08] tracking-tight text-balance sm:text-6xl">
							Product thinking.
							<br />
							Full-stack delivery.
							<br />
							<span className="text-primary">Production care.</span>
						</h1>
						<p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
							{profile.summary}
						</p>
						<p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
							<MapPin aria-hidden="true" className="size-4" />
							{profile.location} · Full-stack & platform engineering
						</p>
						<div className="mt-8 flex flex-wrap gap-3">
							<a
								href="#selected-work"
								className={cn(
									buttonVariants({ size: "lg" }),
									"rounded-full normal-case tracking-normal",
								)}
							>
								Explore my work{" "}
								<ArrowDown aria-hidden="true" className="size-4" />
							</a>
							<a
								href={profile.resume}
								target="_blank"
								rel="noopener noreferrer"
								className={cn(
									buttonVariants({ size: "lg", variant: "outline" }),
									"rounded-full normal-case tracking-normal",
								)}
							>
								<FileText aria-hidden="true" className="size-4" />
								View resume{" "}
								<span className="sr-only">(opens in a new tab)</span>
							</a>
						</div>
						<div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
							<a className="link-underline" href={`mailto:${profile.email}`}>
								Let’s talk
							</a>
							<a
								className="inline-flex items-center gap-1 link-underline"
								href={profile.github}
								target="_blank"
								rel="noopener noreferrer"
							>
								GitHub <ArrowUpRight aria-hidden="true" className="size-3.5" />
								<span className="sr-only">(opens in a new tab)</span>
							</a>
							<a
								className="inline-flex items-center gap-1 link-underline"
								href={profile.linkedin}
								target="_blank"
								rel="noopener noreferrer"
							>
								LinkedIn{" "}
								<ArrowUpRight aria-hidden="true" className="size-3.5" />
								<span className="sr-only">(opens in a new tab)</span>
							</a>
						</div>
					</div>
					<div className="space-y-4">
						<div className="glass-panel p-6 sm:p-7">
							<p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
								Currently at Idealab
							</p>
							<h2 className="mt-3 text-2xl font-bold tracking-tight">
								Making complex operations easier to run.
							</h2>
							<p className="mt-4 text-sm leading-7 text-muted-foreground">
								Building Aktuarial’s insurance workflows, analytics, and
								internal tenant tooling across the interface, API, and data
								layers.
							</p>
							<dl className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-5">
								{heroStats.map((stat) => (
									<div key={stat.value}>
										<dt className="text-xl font-bold sm:text-2xl">
											{stat.value}
										</dt>
										<dd className="mt-2 text-xs leading-5 text-muted-foreground">
											{stat.label}
										</dd>
									</div>
								))}
							</dl>
						</div>
						<GlowCardGrid
							className="grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2"
							cardRadius={16}
						>
							<HoverGlowCard icon={<BriefcaseBusinessIcon />} className="p-5">
								<h3 className="font-semibold">Built for real operations</h3>
								<p className="mt-3 text-sm leading-6 text-muted-foreground">
									Multi-tenant products, analytics, APIs, migrations, and
									business logic.
								</p>
							</HoverGlowCard>
							<HoverGlowCard
								icon={<BotIcon />}
								glowColor="var(--glow-teal)"
								className="p-5"
							>
								<h3 className="font-semibold">Ready for production</h3>
								<p className="mt-3 text-sm leading-6 text-muted-foreground">
									Cloud workflows, AI integrations, observability, and recovery.
								</p>
							</HoverGlowCard>
						</GlowCardGrid>
					</div>
				</div>
			</section>
			<section
				id="selected-work"
				className="border-t border-border px-4 py-16 sm:px-6 sm:py-20"
			>
				<div className="mx-auto max-w-6xl">
					<div className="mb-8 flex flex-wrap items-end justify-between gap-5">
						<div>
							<p className="text-xs uppercase tracking-[0.2em] text-primary">
								Selected work
							</p>
							<h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
								Real systems. Clear ownership.
							</h2>
							<p className="mt-3 max-w-xl text-muted-foreground">
								A few examples of the product and infrastructure work I bring to
								a team.
							</p>
						</div>
						<Link
							to="/experience"
							hash="projects"
							className="flex items-center gap-2 text-sm font-medium link-underline"
						>
							All work & experience{" "}
							<ArrowRight aria-hidden="true" className="size-4" />
						</Link>
					</div>
					<GlowCardGrid>
						{featuredProjects.map((project) => (
							<ProjectCard key={project.id} project={project} />
						))}
					</GlowCardGrid>
				</div>
			</section>
			<section className="px-4 py-16 sm:px-6 sm:py-20">
				<div className="mx-auto max-w-6xl">
					<div className="mb-8 max-w-2xl">
						<p className="text-xs uppercase tracking-[0.2em] text-primary">
							What I bring
						</p>
						<h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
							From interface detail to system design.
						</h2>
					</div>
					<GlowCardGrid>
						{focusAreas.map((area, index) => (
							<HoverGlowCard
								key={area.title}
								icon={area.icon}
								iconSize={28}
								glowColor={
									["var(--primary)", "var(--glow-teal)", "var(--glow-violet)"][
										index
									]
								}
							>
								<h3 className="text-xl font-bold">{area.title}</h3>
								<p className="mt-4 text-sm leading-7 text-muted-foreground">
									{area.description}
								</p>
							</HoverGlowCard>
						))}
					</GlowCardGrid>
				</div>
			</section>
		</div>
	);
}
