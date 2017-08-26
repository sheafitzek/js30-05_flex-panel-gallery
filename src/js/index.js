const app = {
	onloadFunction() {
		app.panelListener();
	},

	panelListener() {
		const panels = document.querySelectorAll(`.panel`);

		panels.forEach((item)=> item.addEventListener(`click`, app.toggleOpen));
		panels.forEach((item)=> item.addEventListener(`transitionend`, app.toggleActive));
	},

	toggleActive(e) {
		e.propertyName.includes(`flex`)
		&& this.classList.toggle(`active`);
	},

	toggleOpen() {
		this.classList.toggle(`open`);
	},
};

window.onload = app.onloadFunction;
