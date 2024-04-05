function getAllSexagenaryBranches() {
    const allUpStem = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"]
    const allDownStem = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"]
    const finalItems = []
    let curDownIndex = 0
    for (let i = 0; i < allUpStem.length; i++) {
        for (let n = curDownIndex; n < 12; n++) {
            const item = allUpStem[i] + allDownStem[n]
            finalItems.push(item)
            if (curDownIndex === 11) {
                curDownIndex = 0
            }
        }
    }
    return finalItems
}

export default getAllSexagenaryBranches