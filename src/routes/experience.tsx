import {
	ArrowLeftIcon,
	ArrowRightIcon,
	CheckCircleIcon,
} from "@phosphor-icons/react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { GlowCardGrid } from "#/components/glow-card-grid";
import { HoverGlowCard } from "#/components/hover-glow-card";
import { BriefcaseBusinessIcon } from "#/components/ui/briefcase-business";
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "#/components/ui/carousel";
import { WorkExperience } from "#/components/work-experience";
import {
	education,
	profile,
	projects,
	skillGroups,
	workExperiences,
} from "#/lib/portfolio-data";
import { cn } from "#/lib/utils";

export const Route = createFileRoute("/experience")({ component: Experience });

function Experience() {
	const [projectCarouselApi, setProjectCarouselApi] = useState<CarouselApi>();
	const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

	useEffect(() => {
		if (!projectCarouselApi) return;

		const updateSelectedProject = () => {
			setSelectedProjectIndex(projectCarouselApi.selectedScrollSnap());
		};

		updateSelectedProject();
		projectCarouselApi.on("select", updateSelectedProject);
		projectCarouselApi.on("reInit", updateSelectedProject);

		return () => {
			projectCarouselApi.off("select", updateSelectedProject);
			projectCarouselApi.off("reInit", updateSelectedProject);
		};
	}, [projectCarouselApi]);

	return (
		<div id="top">
			<section className="px-4 pt-26 pb-20 sm:px-6">
				<div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
					<motion.div
						className="lg:sticky lg:top-24 lg:self-start"
						initial={{ opacity: 0, y: 24 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: "easeOut" }}
					>
						<p className="text-muted-foreground text-sm uppercase tracking-[0.28em]">
							Experience
						</p>
						<h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
							The work behind the range.
						</h1>
						<p className="mt-5 text-muted-foreground leading-8">
							I have worked across product engineering, platform reliability,
							data-heavy dashboards, migrations, internal tooling, and AI
							integrations. This is the practical version of the resume: what I
							owned, where I helped teams move faster, and the tools I can bring
							into a senior role.
						</p>
						<p className="mt-4 text-muted-foreground text-sm leading-7">
							Currently: {profile.role}, building managed-service software and
							multi-tenant insurance systems.
						</p>

						<GlowCardGrid
							borderWidth={1}
							className="mt-8 block"
							iconOpacity={0.14}
						>
							<HoverGlowCard
								className="p-5"
								hoverLift={false}
								icon={education.icon}
								iconSize={24}
								iconWrapperClassName="mb-5"
							>
								<div>
									<h2 className="font-black">{education.school}</h2>
									<p className="mt-1 text-muted-foreground text-sm">
										{education.degree}
									</p>
								</div>
								<div className="mt-4 flex flex-wrap gap-2 text-muted-foreground text-xs">
									<span className="rounded-full border border-border bg-background/50 px-3 py-1">
										{education.period}
									</span>
									<span className="rounded-full border border-border bg-background/50 px-3 py-1">
										{education.location}
									</span>
								</div>
							</HoverGlowCard>
						</GlowCardGrid>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 24 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
					>
						<GlowCardGrid borderWidth={1} className="block" iconOpacity={0.1}>
							<HoverGlowCard
								className="p-3 sm:p-5"
								hoverLift={false}
								iconSize={22}
								iconWrapperClassName="mb-5"
								disableHoverGlow={true}
							>
								<WorkExperience
									className="rounded-lg bg-background/55 px-1 backdrop-blur-xl sm:px-3"
									experiences={workExperiences}
								/>
							</HoverGlowCard>
						</GlowCardGrid>
					</motion.div>
				</div>

				<GlowCardGrid
					borderWidth={1}
					className="mx-auto mt-18 grid max-w-6xl gap-4 md:grid-cols-3 pt-20"
					iconOpacity={0.18}
				>
					{skillGroups.map((group, index) => (
						<motion.div
							initial={{ opacity: 0, y: 18 }}
							key={group.title}
							transition={{ duration: 0.45, delay: index * 0.07 }}
							viewport={{ once: true, amount: 0.2 }}
							whileInView={{ opacity: 1, y: 0 }}
						>
							<HoverGlowCard className="p-5" icon={group.icon} iconSize={22}>
								<h2 className="font-black">{group.title}</h2>
								<ul className="mt-5 flex flex-wrap gap-2">
									{group.items.map((item) => (
										<li
											className="rounded-md border border-border bg-background/45 px-2.5 py-1.5 text-muted-foreground text-xs"
											key={item}
										>
											{item}
										</li>
									))}
								</ul>
							</HoverGlowCard>
						</motion.div>
					))}
				</GlowCardGrid>
			</section>

			<section className="px-4 py-24 sm:px-6">
				<div className="mx-auto max-w-6xl">
					<motion.div
						className="mb-20 flex flex-col justify-between gap-6 md:flex-row md:items-end"
						initial={{ opacity: 0, y: 24 }}
						transition={{ duration: 0.6, ease: "easeOut" }}
						viewport={{ once: true, amount: 0.25 }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						<div>
							<p className="text-muted-foreground text-sm uppercase tracking-[0.28em]">
								Selected project patterns
							</p>
							<h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
								Systems I have shipped, stabilized, redesigned, or rebuilt.
							</h2>
						</div>
					</motion.div>

					<GlowCardGrid
						borderWidth={1}
						className="block bg-background shadow-[28px_0_48px_color-mix(in_oklch,var(--background),transparent_20%)]"
						iconOpacity={0.16}
					>
						<Carousel
							className="relative px-2 py-8 md:px-12"
							opts={{ align: "center", loop: true }}
							setApi={setProjectCarouselApi}
						>
							<div className="pointer-events-none absolute inset-y-10 left-0 z-20 w-24 bg-linear-to-r from-background via-background/80 to-transparent md:w-32" />
							<div className="pointer-events-none absolute inset-y-10 right-0 z-20 w-24 bg-linear-to-l from-background via-background/80 to-transparent md:w-32" />
							<CarouselContent className="-ml-4 items-stretch py-6">
								{projects.map((project, index) => {
									const isActive = index === selectedProjectIndex;

									return (
										<CarouselItem
											className="basis-[82%] pl-4 sm:basis-[72%] md:basis-[58%] lg:basis-[44%]"
											key={project.title}
										>
											<motion.div
												animate={{
													filter: isActive ? "blur(0px)" : "blur(0.2px)",
													opacity: isActive ? 1 : 0.58,
													scale: isActive ? 1 : 0.88,
												}}
												className="h-full origin-center"
												transition={{
													type: "spring",
													stiffness: 260,
													damping: 28,
												}}
											>
												<HoverGlowCard
													className={cn(
														"flex min-h-107.5 flex-col p-6 shadow-2xl transition-shadow md:min-h-115",
														isActive
															? "border-primary/30 shadow-primary/15"
															: "shadow-black/5",
													)}
													icon={project.icon ?? <BriefcaseBusinessIcon />}
													iconSize={20}
												>
													<div className="mb-6">
														<span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-primary text-xs">
															{project.type}
														</span>
													</div>
													<h3 className="text-2xl font-black">
														{project.title}
													</h3>
													<p className="mt-4 flex-1 text-muted-foreground text-sm leading-7">
														{project.description}
													</p>
													<p className="mt-5 flex items-start gap-2 text-sm leading-6">
														<CheckCircleIcon className="mt-0.5 size-4 shrink-0 text-primary" />
														<span>{project.impact}</span>
													</p>
													<ul className="mt-6 flex flex-wrap gap-2">
														{project.tags.map((tag) => (
															<li
																className="rounded-md bg-muted px-2.5 py-1 text-muted-foreground text-xs"
																key={tag}
															>
																{tag}
															</li>
														))}
													</ul>
												</HoverGlowCard>
											</motion.div>
										</CarouselItem>
									);
								})}
							</CarouselContent>
							<CarouselPrevious className="inset-y-auto left-3 top-1/2 z-30 size-14 -translate-y-1/2 rounded-full border-primary/25 bg-background/80 shadow-2xl shadow-black/15 backdrop-blur-xl hover:border-primary/40 hover:bg-primary hover:text-primary-foreground disabled:opacity-40 md:left-0 [&_svg]:size-6" />
							<CarouselNext className="inset-y-auto top-1/2 right-3 z-30 size-14 -translate-y-1/2 rounded-full border-primary/25 bg-background/80 shadow-2xl shadow-black/15 backdrop-blur-xl hover:border-primary/40 hover:bg-primary hover:text-primary-foreground disabled:opacity-40 md:right-0 [&_svg]:size-6" />
						</Carousel>
					</GlowCardGrid>

					<div className="mt-20 flex justify-center gap-3 md:hidden">
						<span className="inline-flex items-center gap-2 text-muted-foreground text-xs uppercase tracking-[0.2em]">
							<ArrowLeftIcon className="size-3" />
							Swipe
							<ArrowRightIcon className="size-3" />
						</span>
					</div>
				</div>
			</section>
		</div>
	);
}
