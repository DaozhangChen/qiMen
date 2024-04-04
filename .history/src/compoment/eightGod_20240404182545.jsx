import { Select } from "antd";

const EightGod = () => {
    const godArr = ["值符", "腾蛇", "太阴", "六合", "白虎", "玄武", "九地", "九天"]
    const option = godArr.map((value) => {
        const obj = {}
        obj.value = value
        obj.label = value
        return obj
    })
    return (
        <>
            <Select style={{ width: 120 }} options={option} />
        </>
    )
}

export default EightGod