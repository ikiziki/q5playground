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
			this.bg = [35, 35, 35];
			this.fg = [235, 235, 235];
		} else {
			this.bg = [235, 235, 235];
			this.fg = [35, 35, 35];
		}
	}
}
