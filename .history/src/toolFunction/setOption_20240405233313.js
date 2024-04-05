import allStem from "./getAllSexagenaryBranches"
function setupOption(arr) {
    const option = arr.map((value) => {
        const obj = {}
        obj.label = value
        obj.value = value
        return obj
    })
    return option
}

const setOption = (type) => {
    const godArr = ["值符", "腾蛇", "太阴", "六合", "白虎", "玄武", "九地", "九天"]
    const starArr = ["天蓬星", "天任星", "天冲星", "天辅星", "天英星", "天芮星", "天柱星", "天心星", "天禽星"]
    const doorArr = ["休门", "生门", "伤门", "杜门", "景门", "死门", "惊门", "开门"]
    const stemArr = ["戊", "己", "庚", "辛", "壬", "癸", "丁", "丙", "乙"]
    const resultMap = {
        "god": setupOption(godArr),
        "star": setupOption(starArr),
        "door": setupOption(doorArr),
        "upStem": setupOption(stemArr),
        "downStem": setupOption(stemArr),
        "headerStar": setupOption(starArr),
        "headerDoor": setupOption(doorArr),
        "headerYearStem": setupOption(allStem),
        "headerMonthStem": setupOption(allStem),
        "headerDayStem": setupOption(allStem),
        "headerTimeStem": setupOption(allStem)

    }
    return resultMap[type]
}

export default setOption