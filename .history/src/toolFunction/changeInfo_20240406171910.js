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
            if (area === 5) {
                newArr.find()
            }
            return newArr
        })
    }
}
export default changeInfo