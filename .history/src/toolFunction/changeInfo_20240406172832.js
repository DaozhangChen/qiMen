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
                if (area === 5 && item.star === "天芮星" && action === "change") {
                    if (type === "upStem") {
                        item["anotherUpStem"] = value
                    } else if (type === "downStem") {
                        item["anotherDownStem"] = value
                    }
                } else if (area === 5 && item.star === "天芮星" && action === "clear") {
                    if (type === "upStem") {
                        item["anotherUpStem"] = null
                    } else if (type === "downStem") {
                        item["anotherDownStem"] = null
                    }
                }
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