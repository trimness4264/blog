export function initThemeToggle() {
	const THEMES = ["auto", "light", "dark"];
	const btn = document.getElementById("theme-button");

	if (!btn) return;

	function getCurrentTheme() {
		return document.documentElement.getAttribute("data-theme") || "auto";
	}

	function applyTheme(theme) {
		document.documentElement.setAttribute("data-theme", theme);
		try {
			if (theme === "auto") {
				// Just remove it for easy abstraction.
				localStorage.removeItem("theme");
			} else {
				localStorage.setItem("theme", theme);
			}
		} catch (e) {}
	}

	btn.addEventListener("click", function () {
		const current = getCurrentTheme();
		const nextIndex = (THEMES.indexOf(current) + 1) % THEMES.length;
		applyTheme(THEMES[nextIndex]);
	});
}
