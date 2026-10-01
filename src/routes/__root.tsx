import { TanStackDevtools } from "@tanstack/react-devtools";
import type { QueryClient } from "@tanstack/react-query";
import {
	createRootRouteWithContext,
	HeadContent,
	Link,
	Outlet,
	Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { SiteShell } from "#/components/site-shell";
import TanStackQueryDevtools from "../integrations/tanstack-query/devtools";
import appCss from "../styles.css?url";

interface MyRouterContext {
	queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
	head: () => ({
		meta: [
			{ property: "og:type", content: "website" },
			{ property: "og:site_name", content: "Ifeoluwa Adebowale" },
			{
				property: "og:title",
				content: "Ifeoluwa Adebowale | Senior Full-Stack Software Engineer",
			},
			{
				property: "og:description",
				content:
					"Product engineering, multi-tenant platforms, and production reliability. Explore my work and experience.",
			},
			{ name: "twitter:card", content: "summary" },
			{ name: "theme-color", content: "#101416" },
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Ifeoluwa Adebowale | Senior Full-Stack Software Engineer",
			},
			{
				name: "description",
				content:
					"Portfolio of Ifeoluwa Adebowale, a senior full-stack software engineer building multi-tenant products, analytics dashboards, internal tools, cloud systems, mobile apps, and AI integrations.",
			},
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg",
			},
			{
				rel: "manifest",
				href: "/manifest.json",
			},
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),
	notFoundComponent: () => (
		<section className="mx-auto max-w-3xl px-6 py-24">
			<p className="text-primary">404</p>
			<h1 className="mt-3 text-4xl font-bold">This page isn’t here.</h1>
			<p className="mt-4 text-muted-foreground">
				You can still explore my work or get in touch.
			</p>
			<Link className="mt-6 inline-block link-underline" to="/">
				Back to the portfolio
			</Link>
		</section>
	),
	component: RootComponent,
	shellComponent: RootDocument,
});

function RootComponent() {
	return (
		<SiteShell>
			<Outlet />
		</SiteShell>
	);
}

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<script src="/theme-init.js" />
				<HeadContent />
			</head>
			<body>
				{children}
				{import.meta.env.DEV && (
					<TanStackDevtools
						config={{
							position: "bottom-right",
						}}
						plugins={[
							{
								name: "Tanstack Router",
								render: <TanStackRouterDevtoolsPanel />,
							},
							TanStackQueryDevtools,
						]}
					/>
				)}
				<Scripts />
			</body>
		</html>
	);
}
