class ThemeEngine {
	constructor() {
		this.mediaQuery = window.matchMedia(
			"(prefers-color-scheme: dark)"
		);
		this.update();
		this.mediaQuery.addEventListener(
			"change",
			() => this.update()
		);
	}
	getSystemStyle() {
		return this.mediaQuery.matches ?
			"dark" :
			"light";
	}
	update() {
		this.style = this.getSystemStyle();
		if (this.style === "dark") {
			this.colors = {
				bg: [35, 35, 35],
				fg: [235, 235, 235]
			};
		} else {
			this.colors = {
				bg: [235, 235, 235],
				fg: [35, 35, 35]
			};
		}
	}
}