import { initThemeToggle } from "./modules/theme";
import Lightbox from "./modules/lightbox";

const main = () => {
	initThemeToggle();
	new Lightbox();
};

document.addEventListener("DOMContentLoaded", main);
