import "../style/Sudoku.css"
import InfoSelect from "./InfoSelect"

// eslint-disable-next-line react/prop-types
function Sudoku({ detailInfo, setDetailInfo }) {



    return (
        <div className="sudoku-grid">
            {/* 生成九宫格 */}
            {/* eslint-disable-next-line react/prop-types */}
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
    )
}
export default Sudoku