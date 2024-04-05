import "../style/HeaderInfo.css"
import InfoSelect from "./InfoSelect"
// eslint-disable-next-line react/prop-types
const HeaderInfo = ({ setDetailInfo }) => {
    return (
        <>
            <div className="headerWrapper">
                <div>
                    <div>值符星：<span><InfoSelect type="star" setDetailInfo={setDetailInfo} area="header" /></span></div>
                    <div>值使门：<span><InfoSelect type="door" setDetailInfo={setDetailInfo} area="header" /></span></div>
                </div>
                <div>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
                <div>未知</div>
            </div>
        </>
    )
}

export default HeaderInfo