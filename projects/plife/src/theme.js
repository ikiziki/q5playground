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
				species: {
					A: [255, 107, 107],
					B: [255, 184, 77],
					C: [255, 239, 92],
					D: [104, 221, 125],
					E: [91, 192, 235],
					F: [155, 126, 255],
					G: [246, 126, 206]
				}
			};
		} else {
			this.colors = {
				bg: [235, 235, 235],
				fg: [35, 35, 35],
				species: {
					A: [191, 39, 39],
					B: [194, 109, 10],
					C: [159, 143, 0],
					D: [24, 128, 53],
					E: [18, 112, 153],
					F: [83, 54, 176],
					G: [166, 44, 126]
				}
			};
		}
	}
}