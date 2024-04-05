import "../style/Sudoku.css"
import HeaderInfo from "./HeaderLabel"
import InfoSelect from "./InfoSelect"
import { useState } from "react"

function Sudoku() {
    const regionArr = [
        { number: 4, area: "巽" },
        { number: 9, area: "离" },
        { number: 2, area: "坤" },
        { number: 3, area: "震" },
        { number: 5, area: "中" },
        { number: 7, area: "兑" },
        { number: 8, area: "艮" },
        { number: 1, area: "坎" },
        { number: 6, area: "乾" }
    ]
    const headerInfo = { ""}
    const [detailInfo, setDetailInfo] = useState(regionArr)


    return (
        <>
            <HeaderInfo setDetailInfo />
            <div className="sudoku-grid">
                {/* 生成九宫格 */}
                {detailInfo.map((value) => (
                    <div key={value.number} className="sudoku-row" data-key={value.number}>
                        <ul>
                            <li className="sudoku-cell">
                                <ul>
                                    <li className="god">八神：<span><InfoSelect type="god" setDetailInfo={setDetailInfo} area={value.number} /></span></li>
                                    <li className="star">九星：<span><InfoSelect type="star" setDetailInfo={setDetailInfo} area={value.number} /></span></li>
                                    <li className="door">八门：<span><InfoSelect type="door" setDetailInfo={setDetailInfo} area={value.number} /></span></li>
                                    <li className="upStem">天盘干支：<span><InfoSelect type="upStem" setDetailInfo={setDetailInfo} area={value.number} /></span></li>
                                    <li className="downStem">地盘干支：<span><InfoSelect type="downStem" setDetailInfo={setDetailInfo} area={value.number} /></span></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Sudoku