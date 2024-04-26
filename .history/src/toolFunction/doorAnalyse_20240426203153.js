import baseDoorAnalyseInfo from "./baseDoorAnalyseInfo"
import baseDoorAndStemAnalyseInfo from "./baseDoorAndStemAnalyseInfo"

function doorAnalyse(curInfo, curArea, doorInfo = baseDoorAnalyseInfo, doorAndStemInfo = baseDoorAndStemAnalyseInfo) {
    const result = []
    const targetInfo = curInfo.find(item => item.number === +curArea)
    if (targetInfo.door && targetInfo.baseDoor) {
        //门门克应
        const targetAnalyse = doorInfo.find(item => item.upDoor === targetInfo.door && item.downDoor === targetInfo.baseDoor)
        if (targetAnalyse) {
            result.push(`【${targetAnalyse.upDoor}+${targetAnalyse.downDoor}】：${targetAnalyse.content}`)
        }
    }
    if (targetInfo.door && targetInfo.baseDoor) {
        //门干克应
        const targetAnalyse = doorInfo.find(item => item.upDoor === targetInfo.door && item.downDoor === targetInfo.baseDoor)
        if (targetAnalyse) {
            result.push(`【${targetAnalyse.upDoor}+${targetAnalyse.downDoor}】：${targetAnalyse.content}`)
        }
    }
}

export default doorAnalyse