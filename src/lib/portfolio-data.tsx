import {
	DeviceMobileIcon,
	EnvelopeIcon,
	GithubLogoIcon,
	LinkedinLogoIcon,
	ShieldCheckIcon,
} from "@phosphor-icons/react";
import { BotIcon } from "#/components/ui/bot";
import { BriefcaseBusinessIcon } from "#/components/ui/briefcase-business";
import { ChartLineIcon } from "#/components/ui/chart-line";
import { GraduationCapIcon } from "#/components/ui/graduation-cap";
import { PhoneIcon } from "#/components/ui/phone";
import type { ExperienceItemType } from "#/components/work-experience";

export const profile = {
	name: "Ifeoluwa Adebowale",
	role: "Senior Full-Stack Software Engineer",
	location: "Lagos, Nigeria",
	summary:
		"I build and modernize serious software: multi-tenant platforms, fintech-grade workflows, dense analytics dashboards, internal operations tools, APIs, mobile apps, cloud workflows, and AI-assisted systems. I am comfortable owning delivery from product thinking to production reliability.",
	email: "adebowalejeff@gmail.com",
	phone: "+234 8149236128",
	website: "https://adebowalejeff.com",
	github: "https://github.com/Jeffsmeagol",
	linkedin: "https://linkedin.com/in/ifeoluwa-adebowale/377779112",
};

export const contactLinks = [
	{
		label: "Email",
		value: profile.email,
		href: `mailto:${profile.email}`,
		icon: <EnvelopeIcon />,
	},
	{
		label: "Phone",
		value: profile.phone,
		href: "tel:+2348149236128",
		icon: <PhoneIcon />,
	},
	{
		label: "GitHub",
		value: "github.com/Jeffsmeagol",
		href: profile.github,
		icon: <GithubLogoIcon />,
	},
	{
		label: "LinkedIn",
		value: "linkedin.com/in/ifeoluwa-adebowale/377779112",
		href: profile.linkedin,
		icon: <LinkedinLogoIcon />,
	},
];

export const heroStats = [
	{ value: "5+", label: "years building production systems" },
	{ value: "99.99%", label: "uptime-minded engineering culture" },
	{ value: "50%+", label: "performance gains on modernization work" },
];

export const focusAreas = [
	{
		title: "Product Engineering",
		description:
			"React, Next.js, TanStack Router/Start/Query, TypeScript, shadcn/ui, React Native, Kotlin, SwiftUI, and product flows that survive real users and regulated operations.",
		icon: <BriefcaseBusinessIcon />,
	},
	{
		title: "Platforms & Data",
		description:
			"Node.js, NestJS, Java/Spring Boot, Python, REST, GraphQL, validation, middleware, migrations, backfills, multi-tenant logic, and data-heavy dashboards.",
		icon: <ChartLineIcon />,
	},
	{
		title: "Cloud, Reliability & AI",
		description:
			"AWS, Cloudflare, Docker, Kubernetes, CI/CD, observability, serverless, object storage, databases, AI integration, and uptime habits shaped by financial infrastructure work.",
		icon: <BotIcon />,
	},
];

export const workExperiences: ExperienceItemType[] = [
	{
		id: "idealab",
		companyName: "Idealab Software Services Limited",
		companyWebsite: "https://www.imslng.com/",
		isCurrentEmployer: true,
		positions: [
			{
				id: "idealab-software-engineer",
				title: "Software Engineer",
				employmentPeriod: { start: "12.2025" },
				employmentType: "Lagos, Nigeria",
				icon: <BriefcaseBusinessIcon />,
				isExpanded: true,
				description:
					"I work on digital solutions and managed-service products for insurance and internal operations teams. On **Aktuarial**, a multi-tenant Insurance Brokerage Management System for brokers and agents, I have owned work across the UI, middleware, validations, business-creation logic, data-model rewrites, migrations, and backfills. I recently led a major redesign of the legacy dashboard into a dense analytics experience with multiple data segments and websocket-driven updates, and helped integrate a multi-branch model so insurance businesses can open, close, and operate across several branches.\n\nI also bootstrapped a new internal tenant-operations app used to view, support, add, investigate, and troubleshoot broker tenants and users. The work sits close to product, support, and engineering: I collaborate with senior engineers on management-prioritized delivery, while also breaking down tasks for junior engineers and interns so the team keeps moving toward the organization's goals.",
				skills: [
					"Multi-tenant systems",
					"React",
					"TanStack",
					"TypeScript",
					"WebSockets",
					"Analytics dashboards",
					"Data migrations",
					"Middleware",
					"Validation",
					"Internal tools",
					"Business logic",
					"Backfills",
					"Full-stack ownership",
					"End-to-end testing",
				],
			},
		],
	},
	{
		id: "freelance",
		companyName: "Independent Contractor",
		positions: [
			{
				id: "freelance-fullstack",
				title: "Senior Full-Stack Developer",
				employmentPeriod: { start: "04.2024", end: "11.2025" },
				employmentType: "Remote Contract",
				icon: <BriefcaseBusinessIcon />,
				description:
					"Delivered full-stack products for startups and business teams, usually stepping into the ambiguous space between product needs, architecture, and implementation. I built React, Next.js, TanStack, TypeScript, Node.js, and NestJS applications; modernized legacy systems with zero-downtime migration plans; improved load and query performance by 50%+ in key flows; and implemented secure authentication with AuthJS, Passport.js, JWT, and OAuth.\n\nI have also integrated AI features into existing products, cleaned up AI-assisted codebases, and refactored brittle integrations into maintainable application services.",
				skills: [
					"React.js",
					"Next.js",
					"TanStack Start",
					"TanStack Query",
					"TypeScript",
					"NestJS",
					"Node.js",
					"AuthJS",
					"Better-auth",
					"PostgreSQL",
					"MySQL",
					"MongoDB",
					"Redis",
					"Prisma ORM",
					"TypeORM",
					"AI integration",
					"TailwindCSS",
					"Testing",
				],
			},
		],
	},
	{
		id: "tv-deluxe",
		companyName: "TV Deluxe Global",
		companyWebsite: "https://www.tvdeluxeglobal.com/",
		positions: [
			{
				id: "tv-deluxe-fullstack",
				title: "Full-Stack Engineer",
				employmentPeriod: { start: "04.2024", end: "07.2024" },
				employmentType: "Lagos, Nigeria",
				icon: <ChartLineIcon />,
				description:
					"Worked across client, admin, and backend applications, helping move product ideas into reliable services. I contributed to multi-country payment integrations, product delivery services for inventory workflows, SMS/email notification services, and deployment pipelines. The role required clean TypeScript boundaries, backend judgment, and the ability to keep several product surfaces aligned at once.",
				skills: [
					"React.js",
					"Next.js",
					"NestJS",
					"Payments",
					"MongoDB",
					"Notifications",
				],
			},
		],
	},
	{
		id: "interswitch",
		companyName: "Interswitch Group",
		companyWebsite: "https://interswitchgroup.com/",
		positions: [
			{
				id: "interswitch-sre",
				title: "DevOps / SRE Engineer",
				employmentPeriod: { start: "03.2023", end: "04.2024" },
				employmentType: "Lagos, Nigeria",
				icon: <ShieldCheckIcon />,
				description:
					"Supported critical production infrastructure inside one of Africa's major payments and fintech companies, working close to the reliability expectations of transaction-heavy financial systems. The work shaped how I think about senior engineering: a feature is not finished until it can be observed, recovered, and trusted. I helped sustain 99.99% uptime-minded operations, built Python and Bash automation that reduced MTTR, resolved performance bottlenecks with senior engineers, and contributed React interfaces that made operational workflows easier to use.\n\nThat exposure gave me practical fintech instincts around availability, incident response, secure delivery, auditability, payment-adjacent workflows, and the operational seriousness required for systems that move money or support money movement.",
				skills: [
					"Azure",
					"AWS",
					"Docker",
					"Kubernetes",
					"Python",
					"Bash",
					"Monitoring",
					"Observability",
					"Grafana",
					"Prometheus",
					"CI/CD",
					"Terraform",
					"Fintech operations",
					"Payments reliability",
				],
			},
		],
	},
	{
		id: "fireswitch",
		companyName: "FireSwitch Technologies Ltd",
		companyWebsite: "https://fireswitch.tech/",
		positions: [
			{
				id: "fireswitch-frontend",
				title: "Frontend Engineer",
				employmentPeriod: { start: "01.2021", end: "11.2022" },
				employmentType: "Ibadan, Nigeria",
				icon: <DeviceMobileIcon />,
				description:
					"Built responsive, accessible React and TypeScript interfaces from design to production, with enough backend exposure to understand how UI decisions affect APIs and data flows. I improved page-load performance through code splitting and lazy loading, helped build REST integrations with Node.js and Express.js, and strengthened the product foundation that later made full-stack ownership natural.",
				skills: [
					"React.js",
					"TypeScript",
					"Material UI",
					"Accessibility",
					"React Native",
					"Node.js",
					"Express.js",
				],
			},
		],
	},
];

export const skillGroups = [
	{
		title: "Frontend",
		icon: <BriefcaseBusinessIcon />,
		items: [
			"JavaScript",
			"TypeScript",
			"React.js",
			"Next.js",
			"TanStack Router",
			"TanStack Start",
			"TanStack Query",
			"React Native",
			"Kotlin",
			"Kotlin Multiplatform",
			"Swift",
			"SwiftUI",
			"Jetpack Compose",
			"HTML5/CSS3",
			"TailwindCSS",
			"Material UI",
			"shadcn/ui",
			"Redux/Zustand",
			"Three.js",
			"GSAP",
		],
	},
	{
		title: "Backend & Data",
		icon: <ChartLineIcon />,
		items: [
			"Node.js",
			"Express.js",
			"NestJS",
			"Java",
			"Spring Boot",
			"Python",
			"RESTful APIs",
			"GraphQL",
			"Microservices",
			"Better-auth",
			"AuthJS",
			"PostgreSQL",
			"MySQL",
			"MongoDB",
			"Redis",
			"Kafka",
			"Prisma ORM",
			"TypeORM",
			"Data migrations",
			"Backfills",
			"Database Design",
			"Financial workflows",
			"Reconciliation logic",
		],
	},
	{
		title: "Cloud, AI & Tools",
		icon: <BotIcon />,
		items: [
			"AWS",
			"Azure",
			"Google Cloud",
			"Cloudflare",
			"LangChain",
			"LangSmith",
			"Docker",
			"Kubernetes",
			"AI Integration",
			"OpenAI API",
			"Git/GitHub",
			"Bash/Shell",
			"CI/CD",
			"Terraform",
			"Jest",
			"Agile/Scrum",
			"Testing & QA",
			"Incident response",
			"Observability",
			"Security & compliance",
			"Transaction reliability",
		],
	},
];

export const education = {
	school: "Obafemi Awolowo University",
	degree: "BSc. Mechanical Engineering",
	location: "Osun, Nigeria",
	period: "2012 - 2019",
	icon: <GraduationCapIcon />,
};

export const projects = [
	{
		title: "Fintech Reliability Exposure",
		type: "Payments & Infrastructure",
		description:
			"Worked inside Interswitch's production environment, supporting infrastructure expectations common to payment systems: uptime, observability, incident response, secure change, and operational recovery.",
		impact:
			"Built the fintech discipline needed for transaction-heavy products where trust, traceability, and recovery matter.",
		tags: ["Fintech", "Payments", "SRE", "Observability"],
		icon: <ChartLineIcon />,
	},
	{
		title: "Aktuarial Analytics Dashboard",
		type: "Multi-Tenant Insurance Platform",
		description:
			"Redesigned a legacy dashboard into a dense analytics workspace for insurance brokers and agents, with multiple business segments, data-heavy views, and websocket-backed updates.",
		impact:
			"Turned a dated operational surface into a stronger decision cockpit for brokerage teams.",
		tags: ["React", "TypeScript", "WebSockets", "Analytics"],
		icon: <ChartLineIcon />,
	},
	{
		title: "Internal Tenant Operations App",
		type: "Support & Platform Tooling",
		description:
			"Bootstrapped an internal app for managing tenant users, support workflows, investigations, and broker troubleshooting across a multi-tenant product.",
		impact:
			"Gave support and engineering teams a faster path to inspect, assist, and resolve tenant issues.",
		tags: ["Internal Tools", "Multi-tenancy", "Support", "Platform Ops"],
		icon: <BriefcaseBusinessIcon />,
	},
	{
		title: "Multi-Branch Brokerage System",
		type: "Business Logic & Data Model",
		description:
			"Helped add branch-level operations so insurance businesses can open, close, and manage multiple branches inside the same brokerage platform.",
		impact:
			"Expanded the product model for larger, more operationally complex brokerage businesses.",
		tags: ["Business Logic", "Validation", "Data Models", "Middleware"],
		icon: <BriefcaseBusinessIcon />,
	},
	{
		title: "Legacy System Modernization",
		type: "Full-Stack Migration",
		description:
			"Migrated and refactored older systems into modern React, TanStack, Node.js, and TypeScript patterns, including data-model rewrites and backfills.",
		impact:
			"Improved performance by 50%+ in targeted flows while making the codebase easier to extend.",
		tags: ["React.js", "Node.js", "TypeScript", "Backfills"],
		icon: <ChartLineIcon />,
	},
	{
		title: "AI-Assisted Product Integrations",
		type: "AI Systems",
		description:
			"Integrated AI into application workflows and refactored AI-assisted apps where generated code or brittle integrations needed real engineering structure.",
		impact:
			"Made AI features easier to trust, maintain, and connect to existing product logic.",
		tags: ["AI Integration", "OpenAI API", "Refactoring", "Architecture"],
		icon: <BotIcon />,
	},
];
