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
            const anthodUpStem = null
            const anthodDownStem = null
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

            return newArr
        })
    }
}
export default changeInfo