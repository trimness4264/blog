(function () {
	document.documentElement.classList.add("js-enabled");
	try {
		const storage = localStorage.getItem("theme");

		if (storage === "light" || storage === "dark") {
			document.documentElement.setAttribute("data-theme", storage);
		} else {
			document.documentElement.setAttribute("data-theme", "auto");
		}
	} catch (e) {
		document.documentElement.setAttribute("data-theme", "auto");
	}
})();
