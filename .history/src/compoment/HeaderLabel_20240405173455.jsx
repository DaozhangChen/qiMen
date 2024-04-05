import "../style/HeaderInfo.css"
import InfoSelect from "./InfoSelect"
const HeaderInfo = () => {
    return (
        <>
            <div className="headerWrapper">
                <div>
                    <div>值符星：<span><InfoSelect type="star" /></span></div>
                    <div>值使门：<span><InfoSelect type="door" /></span></div>
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