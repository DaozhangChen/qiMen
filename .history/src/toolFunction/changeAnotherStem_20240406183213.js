const changeAnotherStem = (arr) => {
    const targetArr = arr.find(item => item.star === "天芮星")
    const fiveArea = arr.find(item => item.area === "中")
    const hastAnother = arr.find(item => item.anotherDownStem || item.anotherUpStem)
    console.log(targetArr)
    console.log(fiveArea)
    console.log(hastAnother)
    if (targetArr && fiveArea) {
        targetArr.anotherUpStem = fiveArea.upStem
        targetArr.anotherDownStem = fiveArea.downStem
    } else if (!fiveArea) {
        targetArr.anotherUpStem = null
        targetArr.anotherDownStem = null
    }

}

export default changeAnotherStem