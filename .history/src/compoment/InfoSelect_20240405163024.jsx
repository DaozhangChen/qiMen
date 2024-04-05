import { Select } from "antd";
import setOption from "../toolFunction/setOption"

// eslint-disable-next-line react/prop-types
const InfoSelect = ({ type, setDetailInfo, area }) => {
    const option = setOption(type)


    const setValue = (value) => {
        setDetailInfo(originArr => {
            const newArr = originArr.map((item) => {
                if (item.number === area) {
                    return { number: area, }
                }
            })
        })
    }

    return (
        <>
            <Select style={{ width: 100 }} options={option} onChange={setValue} />
        </>
    )
}

export default InfoSelect