import "../style/HeaderInfo.css"
import InfoSelect from "./InfoSelect"
import { DatePicker } from 'antd';
// eslint-disable-next-line react/prop-types
const HeaderInfo = ({ setHeaderInfo }) => {
    return (
        <>
            <div className="headerWrapper">
                <div>
                    <div>值符星：<span><InfoSelect type="headerStar" setDetailInfo={setHeaderInfo} area="header" /></span></div>
                    <div>值使门：<span><InfoSelect type="headerDoor" setDetailInfo={setHeaderInfo} area="header" /></span></div>
                </div>
                <div>
                    <div>选择时间：<span><DatePicker /></span></div>
                    <div>2</div>
                    <div>3</div>
                </div>
                <div>未知</div>
            </div>
        </>
    )
}

export default HeaderInfo