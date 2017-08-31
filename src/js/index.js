const app = {
	onloadFunction() {
		app.panelListener();
	},

	panelListener() {
		const panels = document.querySelectorAll(`.panel`);

		panels.forEach((item)=> item.addEventListener(`click`, app.setOpenActive));
	},

	setOpenActive() {
		const sibs = app.siblings(this);

		sibs.forEach((item)=> item.classList.remove(`open`, `active`));
		this.classList.add(`open`);
		setTimeout(()=> this.classList.add(`active`), 700);
	},

	siblings(elem) {
		return [...elem.parentElement.children]
			.filter((item)=> {
				return item.nodeType === 1
				&& item !== elem;
			});
	},
};

window.onload = app.onloadFunction;
