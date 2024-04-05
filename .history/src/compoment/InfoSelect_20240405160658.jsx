import { Select } from "antd";
import setOption from "../toolFunction/setOption"

// eslint-disable-next-line react/prop-types
const InfoSelect = ({ type, setDetailInfo }) => {
    const option = setOption(type)
    function findDataKey(element) {
        if (!element) return null; // 如果元素不存在，则返回 null

        const dataKey = element.getAttribute('data-key');
        if (dataKey) {
            return dataKey; // 如果当前元素有 data-key 属性，则返回其值
        } else {
            // 否则，递归查询父级元素
            return findDataKey(element.parentElement);
        }
    }
    const setValue = (value) => {

    }

    return (
        <>
            <Select style={{ width: 100 }} options={option} onChange={setValue} />
        </>
    )
}

export default InfoSelect