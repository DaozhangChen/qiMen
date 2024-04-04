import "./Sudoku.css"
import InfoSelect from "./InfoSelect"

function Sudoku() {
    const regionArr = [
        { number: 4, area: "震" },
        { number: 9, area: "震" },
        { number: 2, area: "震" },
        { number: 3, area: "震" },
        { number: 5, area: "震" },
        { number: 7, area: "震" },
        { number: 8, area: "震" },
        { number: 1, area: "震" },
        { number: 6, area: "震" }
    ]

    return (
        <div className="sudoku-grid">
            {/* 生成九宫格 */}
            {regionArr.map((value) => (
                <div key={`row-${value.number}`} className="sudoku-row">
                    <li className="sudoku-cell">
                        {value.number}
                        <li className="god">八神：<span><InfoSelect type="god" /></span></li>
                        <li className="star">九星：<span><InfoSelect type="star" /></span></li>
                        <li className="door">八门：<span><InfoSelect type="door" /></span></li>
                        <li className="upStem">天盘干支：<span><InfoSelect type="stem" /></span></li>
                        <li className="downStem">地盘干支：<span><InfoSelect type="stem" /></span></li>
                    </li>
                </div>
            ))}
        </div>
    )
}
export default Sudoku