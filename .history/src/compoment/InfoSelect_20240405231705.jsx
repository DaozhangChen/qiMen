import { Select } from "antd";
import setOption from "../toolFunction/setOption"

// eslint-disable-next-line react/prop-types
const InfoSelect = ({ type, setDetailInfo, area }) => {
    const option = setOption(type)
    console.log(1)

    const setValue = (value) => {
        //设置全局value
        if (area === "header") {
            setDetailInfo(originObj => {
                originObj[type] = value
                return { ...originObj }
            })
        } else {
            setDetailInfo(originArr => {
                const newArr = originArr.map((item) => {
                    if (item.number === area) {
                        item[type] = value
                        return item
                    } else {
                        return item
                    }
                })
                return newArr
            })
        }
    }

    return (
        <>
            <Select style={{ width: 100 }} options={option} onChange={setValue} />
        </>
    )
}

export default InfoSelect