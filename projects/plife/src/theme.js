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
				fg: [235, 235, 235],
				species: [
					[255, 107, 107],
					[255, 184, 77],
					[255, 239, 92],
					[104, 221, 125],
					[91, 192, 235],
					[155, 126, 255],
					[246, 126, 206]
				]
			};
		} else {
			this.colors = {
				bg: [235, 235, 235],
				fg: [35, 35, 35],
				species: [
					[191, 39, 39],
					[194, 109, 10],
					[159, 143, 0],
					[24, 128, 53],
					[18, 112, 153],
					[83, 54, 176],
					[166, 44, 126]
				]
			};
		}
	}
}