import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, FileText } from "lucide-react";
import { GlowCardGrid } from "#/components/glow-card-grid";
import { HoverGlowCard } from "#/components/hover-glow-card";
import { ProjectCard } from "#/components/project-card";
import { buttonVariants } from "#/components/ui/button";
import { WorkExperience } from "#/components/work-experience";
import {
	education,
	profile,
	projects,
	skillGroups,
	workExperiences,
} from "#/lib/portfolio-data";
import { cn } from "#/lib/utils";

export const Route = createFileRoute("/experience")({
	head: () => ({
		meta: [
			{ title: "Experience & Selected Work | Ifeoluwa Adebowale" },
			{
				name: "description",
				content:
					"Ifeoluwa Adebowale’s engineering experience across Idealab, Interswitch, full-stack contracting, and product teams. Explore contributions, technologies, and selected work.",
			},
		],
	}),
	component: Experience,
});

function Experience() {
	return (
		<div id="top">
			<section className="px-4 pb-16 pt-14 sm:px-6 sm:pt-20">
				<div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
					<div className="lg:sticky lg:top-28 lg:self-start">
						<p className="text-xs uppercase tracking-[0.2em] text-primary">
							Experience
						</p>
						<h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
							The work behind
							<br />
							the engineering.
						</h1>
						<p className="mt-5 text-base leading-8 text-muted-foreground">
							Product engineering at Idealab. Production reliability at
							Interswitch. Full-stack delivery for startups and business teams.
							Here’s what I contributed and the systems I worked on.
						</p>
						<div className="mt-6 flex flex-wrap gap-3">
							<a
								href="#projects"
								className={cn(
									buttonVariants({ variant: "outline" }),
									"rounded-full normal-case tracking-normal",
								)}
							>
								Selected work{" "}
								<ArrowDown aria-hidden="true" className="size-4" />
							</a>
							<a
								href={profile.resume}
								target="_blank"
								rel="noopener noreferrer"
								className={cn(
									buttonVariants({ variant: "ghost" }),
									"rounded-full normal-case tracking-normal",
								)}
							>
								<FileText aria-hidden="true" className="size-4" />
								View resume
								<span className="sr-only"> (opens in a new tab)</span>
							</a>
						</div>
						<GlowCardGrid className="mt-8 block" iconOpacity={0.2}>
							<HoverGlowCard
								icon={education.icon}
								glowColor="var(--glow-violet)"
								className="p-5"
								iconWrapperClassName="mb-4"
							>
								<p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
									Education
								</p>
								<h2 className="font-bold">{education.school}</h2>
								<p className="mt-2 text-sm text-muted-foreground">
									{education.degree}
								</p>
								<p className="mt-3 text-xs text-muted-foreground">
									{education.period} · {education.location}
								</p>
							</HoverGlowCard>
						</GlowCardGrid>
					</div>
					<div className="glass-panel min-w-0 p-4 sm:p-6">
						<h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
							Professional experience
						</h2>
						<p className="mb-5 text-xs text-muted-foreground">
							Expand each role to read my contributions.
						</p>
						<WorkExperience
							className="bg-transparent px-0"
							experiences={workExperiences}
						/>
					</div>
				</div>
			</section>
			<section
				id="projects"
				className="border-t border-border px-4 py-16 sm:px-6 sm:py-20"
			>
				<div className="mx-auto max-w-6xl">
					<p className="text-xs uppercase tracking-[0.2em] text-primary">
						Selected work
					</p>
					<h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
						Systems I’ve built and supported.
					</h2>
					<p className="mb-8 mt-4 max-w-2xl leading-7 text-muted-foreground">
						A closer look at my contributions across product delivery, data,
						infrastructure, and AI integration.
					</p>
					<GlowCardGrid className="md:grid-cols-2 lg:grid-cols-3">
						{[...projects.slice(1, 4), projects[0], ...projects.slice(4)].map(
							(project) => (
								<ProjectCard key={project.id} project={project} />
							),
						)}
					</GlowCardGrid>
				</div>
			</section>
			<section id="skills" className="px-4 py-16 sm:px-6 sm:py-20">
				<div className="mx-auto max-w-6xl">
					<p className="text-xs uppercase tracking-[0.2em] text-primary">
						Technical toolkit
					</p>
					<h2 className="mb-8 mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
						Tools I work with.
					</h2>
					<GlowCardGrid>
						{skillGroups.map((group, index) => (
							<HoverGlowCard
								key={group.title}
								icon={group.icon}
								glowColor={
									["var(--primary)", "var(--glow-teal)", "var(--glow-violet)"][
										index
									]
								}
							>
								<h3 className="text-xl font-bold">{group.title}</h3>
								<ul className="mt-5 flex flex-wrap gap-2">
									{group.items.map((item) => (
										<li
											key={item}
											className="rounded-md border border-border bg-background/60 px-2.5 py-1.5 text-xs text-muted-foreground"
										>
											{item}
										</li>
									))}
								</ul>
							</HoverGlowCard>
						))}
					</GlowCardGrid>
				</div>
			</section>
		</div>
	);
}
