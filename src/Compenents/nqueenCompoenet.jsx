import { useEffect, useState } from "react";
import { Nqueen } from "./nqueen";
async function MakeDelay(milisec) {
	return new Promise(resolve => {
		setTimeout(() => { resolve('') }, milisec);
	})
}

function NQueen() {
	var [grid, setGrid] = useState([]);

	function resetGrid(gridSize) {
		var grid = []
		for (var i = 0; i < gridSize; i++) {
			var arr = [];
			for (var j = 0; j < gridSize; j++) {
				if ((i % 2) === (j % 2)) {
					arr.push({ 'e': 0, 'val': '' });
				}
				else {
					arr.push({ 'e': 1, 'val': '' });
				}
			}
			grid.push(arr);
		}
		setGrid(grid);
	}

	useEffect(() => {
		resetGrid(4);
	}, [])

	function solve() {
		Nqueen();
	}

	function handleChange(val) {
		resetGrid(val);
	}

	return (
		<div>
			<div>
				<input id='rangeSlider' type='range' min='4' val={grid.length} max='9' onChange={(e) => handleChange(e.target.value)} />
				<div><button className='btn' onClick={solve}>Solve</button></div>
			</div>
			<div>
				<div className='box'>
					{grid === null ? null :
						grid.map(
							(row, rid) => (
								<div className='grid-row' key={rid}>
									{
										row.map(
											(ele, idx) => (
												<span className={ele.e === 1 ? 'black block' : 'white block'} key={idx}>{ele.val === 1 ? <>&#9813;</> : ''}</span>
											)
										)
									}
								</div>
							))
					}
				</div>
			</div>
		</div>
	)
}

export default NQueen;
// &#9816; for horse   &#9813; for queen