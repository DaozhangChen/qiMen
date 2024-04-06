const changeInfo = (action, type, area, value, fn) => {
    if (area === "header") {
        fn(originObj => {
            if (action === "change") {
                originObj[type] = value
            } else if (action === "clear") {
                originObj[type] = null
            }

            return { ...originObj }
        })
    } else {
        fn(originArr => {
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