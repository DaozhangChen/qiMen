import "./Suduku.css"
import InfoSelect from "./eightGod"

function Suduku() {
    const regionArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <div className="sudoku-grid">
            {/* 生成九宫格 */}
            {regionArr.map((value) => (
                <div key={`row-${value}`} className="sudoku-row">
                    <li className="suduku-cell">
                        <li className="god">八神：<span><InfoSelect /></span></li>
                        <li className="star">九星</li>
                        <li className="door">八门</li>
                        <li className="upStem">天盘干支</li>
                        <li className="downStem">地盘干支</li>
                    </li>
                </div>
            ))}
        </div>
    )
}
export default Suduku