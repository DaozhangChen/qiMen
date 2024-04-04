import "./Suduku.css"

function Suduku() {
    return (
        <div className="sudoku-grid">
            {/* 生成九宫格 */}
            {[...Array(9)].map((_, row) => (
                <div key={`row-${row}`} className="sudoku-row">
                    {row}
                </div>
            ))}
        </div>
    )
}
export default Suduku