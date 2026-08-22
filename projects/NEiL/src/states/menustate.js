// menu state
// cheis geese @ 2026


class MenuState extends BaseState {
	constructor() {
		super();
	}
	
	enter() {
		console.log("menu loaded")
	}
	
	touchStarted(touches) {
		console.log("touch started")
	}
	
	touchMoved(touches) {
		console.log("touch moved")
	}
	
	touchEnded(touches) {
		console.log("touch ended")
	}
}