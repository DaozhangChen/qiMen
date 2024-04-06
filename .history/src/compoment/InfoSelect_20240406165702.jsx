import { Select } from "antd";
import setOption from "../toolFunction/setOption"
import changeInfo from "../toolFunction/changeInfo";

// eslint-disable-next-line react/prop-types
const InfoSelect = ({ type, setDetailInfo, area }) => {
    const option = setOption(type)

    const setValue = (value) => {
        changeInfo("change", type, area, value, setDetailInfo)

    }

    const clearValue = () => {
        //设置全局value
        changeInfo("change", type, area, "", setDetailInfo)
    }

    return (
        <>
            <Select style={{ width: 100 }} options={option} onChange={setValue} showSearch allowClear="true" onClear={clearValue} />
        </>
    )
}

export default InfoSelect