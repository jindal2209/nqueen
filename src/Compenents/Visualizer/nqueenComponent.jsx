import { useEffect, useState } from "react"
import { Nqueen } from "../Algorithm/nqueen";
import { changeDelay } from "../Utils/utils";
import './nqueenComponent.css'

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
			<div className='navbar'>
				<ul>
					<li><a className='heading' href="#home">N-Queens Visualiser</a></li>
				</ul>
			</div>
			<div style={{ marginTop: '30px' }}>
				<div>
					<label>
						Grid Size: {gridSize} X {gridSize}
						<input id='rangeSlider' type='range' min='4' max='8' value={gridSize} onChange={(e) => (setGridd(e))} />
					</label>
					<br />
					<label>
						Delay:
					<input type='range' min='5' max='100' onChange={(e) => { changeDelay(e.target.value) }} />
					</label>
					<div><button className='btn' id='nqueen' onClick={Nqueen}>N-QUEEN</button></div>

				</div>
				<br />
				<div className='box'>
					<table className='board'>
						<tbody>
							{
								grid === null ? null :
									grid.map((row, ridx) => (
										<tr key={ridx}>
											{
												row.map((c, cid) => (
													<td
														key={cid}
														style={{
															width: 400 / gridSize,
															height: 400 / gridSize,
															fontSize: 200 / gridSize,
														}}
														className={c} >
													</td>
												))
											}
										</tr>
									))
							}
						</tbody>
					</table>
				</div>
			</div>
		</div >
	)
}