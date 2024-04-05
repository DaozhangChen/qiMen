import { Select } from "antd";
import setOption from "../toolFunction/setOption"

// eslint-disable-next-line react/prop-types
const InfoSelect = ({ type, onChange }) => {
    const option = setOption(type)

    return (
        <>
            <Select style={{ width: 100 }} options={option} onChange={onChange} />
        </>
    )
}

export default InfoSelect