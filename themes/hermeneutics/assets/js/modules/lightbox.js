export default class Lightbox {
	constructor() {
		this.init();
	}

	init() {
		const dialog = document.createElement("dialog");
		dialog.id = "lightbox";
		dialog.innerHTML = `
      <img src="" alt="">
      <form method="dialog">
        <button class="lightbox_close" aria-label="Close">×</button>
      </form>
    `;
		document.body.appendChild(dialog);

		this.dialog = dialog;
		this.imgDisplay = dialog.querySelector("img");

		dialog.addEventListener("click", (e) => {
			if (e.target === dialog) dialog.close();
		});

		dialog.addEventListener("close", () => {
			document.body.style.overflow = "";
			this.imgDisplay.src = "";
		});

		this.bindLinks();
	}

	bindLinks() {
		document.addEventListener("click", (e) => {
			const link = e.target.closest(".article-content a.lightbox-link");
			if (!link) return;

			e.preventDefault();
			this.open(link);
		});
	}

	open(link) {
		const fullImgUrl = link.href;
		const innerImg = link.querySelector("img");

		this.imgDisplay.src = fullImgUrl;
		this.imgDisplay.alt = innerImg ? innerImg.alt : "";

		document.body.style.overflow = "hidden";
		this.dialog.showModal();
	}
}
