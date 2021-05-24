import { delay, disableAllButtons, MakeDelay } from "../Utils/utils";

var col = [];
var leftD = [];
var rightD = [];

async function nqueenHelper(grid, i, n) {
	var c = i * n;
	if (i === n) {
		return true;
	}
	var l, j = 0;
	for (l = c; l < c + n; l++, j++) {
		var color = grid[l].style.background
		if ((col[j] === false) && (leftD[i - j + n - 1] === false) && (rightD[j + i] === false)) {
			rightD[j + i] = leftD[i - j + n - 1] = col[j] = true;
			grid[l].style.background = 'green';
			grid[l].innerHTML = '&#9813;';
			await MakeDelay(delay);
			grid[l].style.background = color;
			var ch = await nqueenHelper(grid, i + 1, n)
			if (ch === true) {
				return true;
			}
			await MakeDelay(delay);
			grid[l].style.background = 'red';
			await MakeDelay(delay);
			grid[l].innerHTML = '';
			grid[l].style.background = color;
			rightD[j + i] = leftD[i - j + n - 1] = col[j] = false;
		}
		else {
			await MakeDelay(delay);
			grid[l].style.background = 'red';
			await MakeDelay(delay);
			grid[l].style.background = color;
		}
	}
	return false;
}

export async function Nqueen() {
	disableAllButtons(true)
	document.getElementById("nqueen").className = 'btndisabled';
	var grid = document.querySelectorAll('.element-block')
	var n = grid.length;
	n = Math.sqrt(n);
	col = []
	leftD = []
	rightD = []

	for (var i = 0; i < n; i++) {
		col.push(false);
	}
	for (i = 0; i < 2 * n - 1; i++) {
		leftD.push(false);
		rightD.push(false);
	}
	await nqueenHelper(grid, 0, n);
	document.getElementById("nqueen").className = 'btn';
	disableAllButtons(false)
}