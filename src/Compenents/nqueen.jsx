var col = [];
var leftD = [];
var rightD = [];

export function MakeDelay(milisec) {
	return new Promise(resolve => {
		setTimeout(() => { resolve('') }, milisec);
	})
}

async function makeHelp(v) {
	v.innerHTML = '&#9813;';
}

async function make1Help(v) {
	v.innerHTML = '';
}

async function nqueenHelper(grid, i, n) {
	var c = i * n;
	if (i === n) {
		return true;
	}
	var l, j = 0;
	for (l = c; l < c + n; l++, j++) {
		if (col[j] === false) {
			if (leftD[i - j + n - 1] === false) {
				if (rightD[i + j] === false) {
					rightD[j + i] = leftD[i - j + n - 1] = col[j] = true;
					makeHelp(grid[l]);
					// grid[l].classList.add('queen');
					// grid[l].style.background = 'red';
					await MakeDelay(100);
					// var ch = 
					// console.log(ch);
					if (nqueenHelper(grid, i + 1, n) === true) {
						return true;
						// grid[l].innerHTML = 'hdvkhud9813';
						// await MakeDelay(100);
					}
					// grid[l].classList.remove('queen');
					make1Help(grid[l]);
					// grid[l].innerHTML = '';
					rightD[j + i] = leftD[i - j + n - 1] = col[j] = false;
				}
			}
		}
		// if ((col[j] === false) && (leftD[i - j + n - 1] === false) && (rightD[j + i] === false)) {
		// }
	}
	return false;
}

export async function Nqueen() {
	var grid = document.querySelectorAll('.block')
	var n = grid.length;
	n = Math.sqrt(n);

	for (var i = 0; i < n; i++) {
		col.push(false);
	}
	for (i = 0; i < 2 * n - 1; i++) {
		leftD.push(false);
		rightD.push(false);
	}
	nqueenHelper(grid, 0, n);
	return grid;
}