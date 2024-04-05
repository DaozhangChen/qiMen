import { Select } from "antd";
import setOption from "../toolFunction/setOption"

// eslint-disable-next-line react/prop-types
const InfoSelect = ({ type, setDetailInfo }) => {
    const option = setOption(type)
    const setValue = (value) => {

    }

    return (
        <>
            <Select style={{ width: 100 }} options={option} onChange={setValue} />
        </>
    )
}

export default InfoSelect