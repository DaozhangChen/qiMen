import "../style/Sudoku.css"
import InfoSelect from "./InfoSelect"
import { useState } from "react"
import HeaderInfo from "./HeaderInfo"
import { useEffect } from "react"
import AnalyseTab from "./AnalyseTab"

function Sudoku() {
    const regionArr = [
        { number: 4, area: "巽", initDownStem1: "巳", initDownStem2: "辰", anotherUpStem: null, anotherDownStem: null, baseAttribute: "木" },
        { number: 9, area: "离", initDownStem1: "午", anotherUpStem: null, anotherDownStem: null, baseAttribute: "火" },
        { number: 2, area: "坤", initDownStem1: "未", initDownStem2: "申", anotherUpStem: null, anotherDownStem: null, baseAttribute: "土" },
        { number: 3, area: "震", initDownStem1: "卯", anotherUpStem: null, anotherDownStem: null, baseAttribute: "木" },
        { number: 5, area: "中", baseAttribute: "土" },
        { number: 7, area: "兑", initDownStem1: "酉", anotherUpStem: null, anotherDownStem: null, baseAttribute: "金" },
        { number: 8, area: "艮", initDownStem1: "丑", initDownStem2: "寅", anotherUpStem: null, anotherDownStem: null, baseAttribute: "土" },
        { number: 1, area: "坎", initDownStem1: "子", anotherUpStem: null, anotherDownStem: null, baseAttribute: "水" },
        { number: 6, area: "乾", initDownStem1: "亥", initDownStem2: "戌", anotherUpStem: null, anotherDownStem: null, baseAttribute: "金" }
    ]
    const baseHeaderInfo = {
        headerStar: null,
        headerDoor: null,
        headerTime: null,
        headerYearStem: null,
        headerMonthStem: null,
        headerDayStem: null,
        headerTimeStem: null,
        headerYearNull: null,
        headerMonthNull: null,
        headerDayNull: null,
        headerTimeNull: null,
        curPattern: null
    }
    const [detailInfo, setDetailInfo] = useState(regionArr)
    const [headerInfoObj, setHeaderInfoObj] = useState(baseHeaderInfo)
    useEffect(() => {
        console.log("11", detailInfo)
        return () => {
            console.log("22", detailInfo)
        }
    }, [detailInfo])


    return (
        <>
            <div>
                <div>
                    <HeaderInfo setHeaderInfo={setHeaderInfoObj} />
                    <div className="sudoku-grid">
                        {/* 生成九宫格 */}
                        {regionArr.map((value) => (
                            <div key={value.number} className="sudoku-row" data-key={value.number}>
                                {
                                    value.number !== 5 ? <div className={"downStem1-" + value.number}>{value.initDownStem1}</div> : null
                                }
                                {
                                    value.number % 2 === 0 ? <div className={"downStem2-" + value.number}>{value.initDownStem2}</div> : null
                                }
                                <div>{value.number}</div>
                                <ul>
                                    <li className="sudoku-cell">
                                        <ul>
                                            {value.number !== 5 ? <li className="god">八神：<span><InfoSelect type="god" setDetailInfo={setDetailInfo} area={value.number} /></span></li> : null}
                                            {value.number !== 5 ? <li className="star">九星：<span><InfoSelect type="star" setDetailInfo={setDetailInfo} area={value.number} /></span></li> : null}
                                            {value.number !== 5 ? <li className="door">八门：<span><InfoSelect type="door" setDetailInfo={setDetailInfo} area={value.number} /></span></li> : null}
                                            <li className="upStem">天盘干支：<span><InfoSelect type="upStem" setDetailInfo={setDetailInfo} area={value.number} /></span></li>
                                            <li className="downStem">地盘干支：<span><InfoSelect type="downStem" setDetailInfo={setDetailInfo} area={value.number} /></span></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <AnalyseTab />
            </div>
        </>
    )
}
export default Sudoku