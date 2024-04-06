const changeAnotherStem = (arr) => {
    const targetArr = arr.find(item => item.star === "天芮星")
    const fiveArea = arr.find(item => item.area === "5")
    if (targetArr && fiveArea) {
        console.log(fiveArea)
        targetArr.anotherUpStem = fiveArea.upStem
        targetArr.anotherDownStem = fiveArea.downStem
    }

}

export default changeAnotherStem