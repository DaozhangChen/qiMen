import "./Suduku.css"

function Suduku() {
    const regionArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <div className="sudoku-grid">
            {/* 生成九宫格 */}
            {regionArr.map((value) => (
                <div key={`row-${value}`} className="sudoku-row">
                    <li className="suduku-cell">
                        {value}
                    </li>
                </div>
            ))}
        </div>
    )
}
export default Suduku