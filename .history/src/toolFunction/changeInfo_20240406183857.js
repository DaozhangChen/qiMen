import changeAnotherStem from "./changeAnotherStem"
const changeInfo = (action, type, area, value, func) => {
    if (area === "header") {
        func(originObj => {
            if (action === "change") {
                originObj[type] = value
            } else if (action === "clear") {
                originObj[type] = null
            }

            return { ...originObj }
        })
    } else {
        func(originArr => {
            const newArr = originArr.map((item) => {
                if (item.number === area) {
                    if (action === "change") {
                        item[type] = value

                    } else if (action === "clear") {
                        item[type] = null
                    }
                    return item
                } else {
                    return item
                }
            })
            const finalItems = changeAnotherStem(newArr)
            return finalItems
        })
    }
}
export default changeInfo