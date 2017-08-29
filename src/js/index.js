const app = {
	onloadFunction() {
		app.panelListener();
	},

	panelListener() {
		const panels = document.querySelectorAll(`.panel`);

		panels.forEach((item)=> item.addEventListener(`click`, app.toggleOpen));
		panels.forEach((item)=> item.addEventListener(`transitionend`, app.toggleActive));
	},

	siblings(elem) {
		return [...elem.parentElement.children]
			.filter((item)=> {
				return item.nodeType === 1
				&& item !== elem;
			});
	},

	toggleActive(e) {
		const sibs = app.siblings(this);

		sibs.forEach((item)=> item.classList.remove(`active`));

		e.propertyName.includes(`flex`)
		&& this.classList.add(`active`);
	},

	toggleOpen() {
		const sibs = app.siblings(this);

		sibs.forEach((item)=> item.classList.remove(`open`));
		this.classList.add(`open`);
	},
};

window.onload = app.onloadFunction;
