import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Button } from "#/components/ui/button";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
	if (typeof window === "undefined") {
		return "dark";
	}

	const storedTheme = window.localStorage.getItem("theme");
	if (storedTheme === "light" || storedTheme === "dark") {
		return storedTheme;
	}

	return window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
}

function applyTheme(theme: Theme) {
	document.documentElement.classList.toggle("dark", theme === "dark");
	document.documentElement.style.colorScheme = theme;
	window.localStorage.setItem("theme", theme);
}

export function ThemeToggle() {
	const [theme, setTheme] = useState<Theme>("dark");

	useEffect(() => {
		const initialTheme = getInitialTheme();
		setTheme(initialTheme);
		applyTheme(initialTheme);
	}, []);

	function toggleTheme() {
		const nextTheme = theme === "dark" ? "light" : "dark";
		const transition = document.startViewTransition?.(() => {
			applyTheme(nextTheme);
			setTheme(nextTheme);
		});

		if (!transition) {
			applyTheme(nextTheme);
			setTheme(nextTheme);
		}
	}

	return (
		<Button
			aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
			className="rounded-full border-white/20 bg-background/60 backdrop-blur-xl hover:bg-muted/80"
			onClick={toggleTheme}
			size="icon-sm"
			type="button"
			variant="outline"
		>
			<SunIcon className="scale-100 transition-transform dark:scale-0" />
			<MoonIcon className="absolute scale-0 transition-transform dark:scale-100" />
		</Button>
	);
}
