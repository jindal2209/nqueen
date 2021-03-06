export function disableAllButtons(val) {
	document.getElementById('rangeSlider').disabled = val;
	var btns = document.querySelectorAll(".btn")
	for (var i = 0; i < btns.length; i++) {
		btns[i].disabled = val;
	}
}

export async function MakeDelay(milisec) {
	return new Promise(resolve => {
		setTimeout(() => { resolve('') }, milisec);
	})
}

export var delay = 10;

export function changeDelay(val) {
	delay = val;
}