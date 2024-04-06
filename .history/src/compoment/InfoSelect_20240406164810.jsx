import { Select } from "antd";
import setOption from "../toolFunction/setOption"
import changeInfo from "../toolFunction/changeInfo";

// eslint-disable-next-line react/prop-types
const InfoSelect = ({ type, setDetailInfo, area }) => {
    const option = setOption(type)

    const setValue = (value) => {
        changeInfo("clear", area,)
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

    const clearValue = () => {
        //设置全局value
        if (area === "header") {
            setDetailInfo(originObj => {
                originObj[type] = null
                return { ...originObj }
            })
        } else {
            setDetailInfo(originArr => {
                const newArr = originArr.map((item) => {
                    if (item.number === area) {
                        item[type] = null
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
            <Select style={{ width: 100 }} options={option} onChange={setValue} showSearch allowClear="true" onClear={clearValue} />
        </>
    )
}

export default InfoSelect