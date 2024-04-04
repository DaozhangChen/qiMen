import "./Suduku.css"
import InfoSelect from "./InfoSelect"

function Suduku() {
    const regionArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <div className="sudoku-grid">
            {/* 生成九宫格 */}
            {regionArr.map((value) => (
                <div key={`row-${value}`} className="sudoku-row">
                    <li className="suduku-cell">
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
export default Suduku