// ThemeEngine
// Detects the current system color scheme
// chris geese @ 2026

class ThemeEngine {

	constructor() {
		this.mediaQuery = window.matchMedia(
			"(prefers-color-scheme: dark)"
		);

		this.update();

		// Listen for system theme changes
		this.mediaQuery.addEventListener(
			"change",
			() => this.update()
		);
	}

	// Detect the current system appearance
	getSystemStyle() {
		return this.mediaQuery.matches ?
			"dark" :
			"light";
	}

	// Update theme values
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
