const changeAnotherStem = (arr) => {
    const targetArr = arr.find(item => item.star === "天芮星")
    const fiveArea = arr.find(item => item.area === "中")
    return arr.map(item => {
        if (item.star !== "天芮星") {
            item.anotherUpStem = null
            item.anotherDownStem = null
            return item
        } else {
            if (fiveArea) {
                item.anotherUpStem = fiveArea.upStem
                item.anotherDownStem = fiveArea.downStem
            }
            return item
        }
    })

}

export default changeAnotherStem