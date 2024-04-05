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



    const getHtmlInfo = (event) => {
        const clickedElement = event.currentTarget;

        // 查找点击的元素在 regionArr 中对应的对象
        const number = regionArr.find(item => item.number.toString() === clickedElement.getAttribute('data-key'));

        // 打印对应的 number 值
        console.log(number);

    }

    return (
        <div className="sudoku-grid">
            {/* 生成九宫格 */}
            {regionArr.map((value) => (
                <div key={value.number} className="sudoku-row" onClick={getHtmlInfo} data-key={value.number}>
                    <ul>
                        <li className="sudoku-cell">
                            <ul>
                                <li className="god">八神：<span><InfoSelect type="god" /></span></li>
                                <li className="star">九星：<span><InfoSelect type="star" /></span></li>
                                <li className="door">八门：<span><InfoSelect type="door" /></span></li>
                                <li className="upStem">天盘干支：<span><InfoSelect type="stem" /></span></li>
                                <li className="downStem">地盘干支：<span><InfoSelect type="stem" /></span></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    )
}
export default Sudoku