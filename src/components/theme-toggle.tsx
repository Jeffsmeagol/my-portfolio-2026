import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "#/components/ui/button";

type Theme = "light" | "dark";
export function ThemeToggle() {
	const [theme, setTheme] = useState<Theme>("dark");
	useEffect(() => {
		setTheme(
			document.documentElement.classList.contains("dark") ? "dark" : "light",
		);
	}, []);
	function toggleTheme() {
		const nextTheme = theme === "dark" ? "light" : "dark";
		const apply = () => {
			document.documentElement.classList.toggle("dark", nextTheme === "dark");
			document.documentElement.style.colorScheme = nextTheme;
			setTheme(nextTheme);
			try {
				localStorage.setItem("theme", nextTheme);
			} catch {
				/* Storage can be blocked in private contexts. */
			}
		};
		if (
			!window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
			document.startViewTransition
		) {
			document.startViewTransition(apply);
		} else apply();
	}
	return (
		<Button
			aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
			className="relative size-10 shrink-0 rounded-full"
			onClick={toggleTheme}
			type="button"
			variant="outline"
			size="icon"
		>
			<Sun aria-hidden="true" className="absolute size-4 dark:hidden" />
			<Moon aria-hidden="true" className="hidden size-4 dark:block" />
		</Button>
	);
}
