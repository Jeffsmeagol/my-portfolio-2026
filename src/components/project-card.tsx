import { ArrowUpRight } from "lucide-react";
import { HoverGlowCard } from "#/components/hover-glow-card";
import { profile, type projects } from "#/lib/portfolio-data";

export function ProjectCard({
	project,
}: {
	project: (typeof projects)[number];
}) {
	return (
		<HoverGlowCard
			id={project.id}
			icon={project.icon}
			glowColor={project.glowColor}
			className="row-span-5 grid grid-rows-subgrid gap-y-0 p-6 sm:p-7"
			contentClassName="row-span-5 grid h-auto grid-rows-subgrid gap-y-0"
		>
			<div className="mb-5">
				<p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
					{project.type}
				</p>
				<h3 className="mt-3 text-2xl font-bold tracking-tight">
					{project.title}
				</h3>
				<p className="mt-2 text-xs text-muted-foreground">{project.context}</p>
				<p className="mt-5 text-sm leading-7 text-muted-foreground">
					{project.description}
				</p>
			</div>
			<div className="border-t border-border pt-5">
				<p className="text-xs font-semibold uppercase tracking-widest text-(--glow-color)">
					Contribution & outcome
				</p>
				<p className="mt-2 text-sm leading-6">{project.impact}</p>
			</div>
			<ul
				className="mt-5 flex flex-wrap gap-2 self-start"
				aria-label="Technologies and disciplines"
			>
				{project.tags.map((tag) => (
					<li
						key={tag}
						className="rounded-md border border-border bg-background/60 px-2 py-1 text-xs text-muted-foreground"
					>
						{tag}
					</li>
				))}
			</ul>
			<a
				className="flex w-fit items-center gap-2 self-end pt-6 text-sm font-medium underline-offset-4 hover:underline"
				href={`mailto:${profile.email}?subject=${encodeURIComponent(`Let's discuss ${project.title}`)}`}
			>
				Discuss this work <ArrowUpRight aria-hidden="true" className="size-4" />
			</a>
		</HoverGlowCard>
	);
}
