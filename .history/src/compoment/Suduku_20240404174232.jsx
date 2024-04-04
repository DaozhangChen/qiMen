import "./Suduku.css"

function Suduku() {
    return (
        <div className="sudoku-grid">
            {/* 生成九宫格 */}
            {[...Array(9)].map((_, row) => (
                <div key={`row-${row}`} className="sudoku-row">
                    {[...Array(9)].map((_, col) => (
                        <div key={`cell-${row}-${col}`} className="sudoku-cell">
                            1
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}
export default Suduku