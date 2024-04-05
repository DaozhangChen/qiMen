function getAllSexagenaryBranches() {
    const allUpStem = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"]
    const allDownStem = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"]
    const finalItems = []
    let upIndex = 0
    let downIndex = 0
    for (let i = 0; i < 60; i++) {
        finalItems.push(allUpStem[upIndex] + allDownStem[downIndex])
        upIndex === 9 ? upIndex = 0 : upIndex++
        downIndex === 11 ? downIndex = 0 : downIndex++
    }
    return finalItems
}

export default getAllSexagenaryBranches