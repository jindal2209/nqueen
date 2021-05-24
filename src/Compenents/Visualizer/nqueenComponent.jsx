import { useEffect, useState } from "react"
import { Nqueen, changeDelay } from "../Algorithm/nqueen";

export default function NQueen() {

	var [gridSize, setGridSize] = useState(4);
	var [grid, setGrid] = useState([]);

	function renderGrid(val) {
		var arr = []
		for (var i = 0; i < val; i++) {
			var tr = []
			for (var j = 0; j < val; j++) {
				if ((i % 2) === (j % 2)) {
					tr.push('white element-block')
				} else {
					tr.push('black element-block')
				}
			}
			arr.push(tr)
		}
		setGrid(arr);
		var ele = document.querySelectorAll('.element-block')
		for (i = 0; i < ele.length; i++) {
			ele[i].innerHTML = '';
		}
	}
	useEffect(() => {
		renderGrid(4);
	}, [])

	function setGridd(e) {
		setGridSize(e.target.value)
		renderGrid(e.target.value)
	}

	return (
		<div>
			<div>
				<label>
					<input type='range' min='4' max='8' value={gridSize} onChange={(e) => (setGridd(e))} />
					{gridSize}
				</label>
				<br />
				<label>
					<input type='range' min='5' max='100' onChange={(e) => { changeDelay(e.target.value) }} />
				</label>
				<div><button className='btn' onClick={Nqueen}>N-QUEEN</button></div>
			</div>
			<div>
				<table className='box'>
					<tbody>
						{
							grid === null ? null :
								grid.map((row, ridx) => (
									<tr key={ridx}>
										{
											row.map((c, cid) => (<td key={cid} className={c}></td>))
										}
									</tr>
								))
						}

					</tbody>
				</table>
			</div>
		</div>
	)
}