import "./Sudoku.css"
import InfoSelect from "./InfoSelect"
import { useState } from "react"

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
    const [detailInfo, setDetailInfo] = useState(regionArr)

    const getHtmlInfo = (event) => {
        const clickedElement = event.currentTarget;

        // 查找点击的元素在 regionArr 中对应的对象
        const number = regionArr.find(item => item.number.toString() === clickedElement.getAttribute('data-key'));

        // 打印对应的 number 值

    }

    return (
        <div className="sudoku-grid">
            {/* 生成九宫格 */}
            {detailInfo.map((value) => (
                <div key={value.number} className="sudoku-row" onClick={getHtmlInfo} data-key={value.number}>
                    <ul>
                        <li className="sudoku-cell">
                            <ul>
                                <li className="god">八神：<span><InfoSelect type="god" setDetailInfo={setDetailInfo} area={value.number} /></span></li>
                                <li className="star">九星：<span><InfoSelect type="star" setDetailInfo={setDetailInfo} area={value.number} /></span></li>
                                <li className="door">八门：<span><InfoSelect type="door" setDetailInfo={setDetailInfo} area={value.number} /></span></li>
                                <li className="upStem">天盘干支：<span><InfoSelect type="stem" setDetailInfo={setDetailInfo} area={value.number} /></span></li>
                                <li className="downStem">地盘干支：<span><InfoSelect type="stem" setDetailInfo={setDetailInfo} area={value.number} /></span></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    )
}
export default Sudoku