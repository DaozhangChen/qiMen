import { Select } from "antd";
import setOption from "../toolFunction/setOption"

// eslint-disable-next-line react/prop-types
const InfoSelect = ({ type, setDetailInfo }) => {
    const option = setOption(type)

    return (
        <>
            <Select style={{ width: 100 }} options={option} onChange={setDetailInfo} />
        </>
    )
}

export default InfoSelect