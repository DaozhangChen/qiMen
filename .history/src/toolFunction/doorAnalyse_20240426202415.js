import baseDoorAnalyseInfo from "./baseDoorAnalyseInfo"
import baseDoorAndStemAnalyseInfo from "./baseDoorAndStemAnalyseInfo"

function doorAnalyse(curInfo, curArea, doorInfo = baseDoorAnalyseInfo, doorAndStemInfo = baseDoorAndStemAnalyseInfo) {
    const result = []
    const targetInfo = curInfo.find(item => item.number === +curArea)
    if (targetInfo.door && targetInfo.)
}

export default doorAnalyse