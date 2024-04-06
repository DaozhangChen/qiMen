const changeInfo = (type, area, value, fn) => {
    if (area === "header") {
        fn(originObj => {
            originObj[type] = value
            return { ...originObj }
        })
    } else {
        fn(originArr => {
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
export default changeInfo