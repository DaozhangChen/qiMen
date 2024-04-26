import { useState } from "react"
import { useEffect } from "react"
import countTenStem from "../toolFunction/countTenStem"
import { useRef } from "react"
import baseAreaInfo from "../toolFunction/baseAreaInfo"
import doorAnalyse from "../toolFunction/doorAnalyse"

// eslint-disable-next-line react/prop-types
const AnalyseTab = ({ curMainInfo, curArea }) => {
    const [tenStemAnalyse, setTenStemAnalyse] = useState([])
    const [doorAnalyse, setDoorAnalyse] = useState([])
    const initStatus = useRef(false)
    useEffect(() => {
        if (curArea && !initStatus.current) {
            initStatus.current = true
        }
    }, [curArea])
    useEffect(() => {
        if (initStatus.current) {
            setTenStemAnalyse(countTenStem(curMainInfo, curArea))
            setDoorAnalyse(doorAnalyse(curMainInfo, curArea))
        }
    }, [curMainInfo, curArea, doorAnalyse])

    return (
        <>
            <div>{baseAreaInfo[curArea]}</div>
            <div>{tenStemAnalyse}</div>
            <div>{doorAnalyse}</div>
        </>
    )
}

export default AnalyseTab