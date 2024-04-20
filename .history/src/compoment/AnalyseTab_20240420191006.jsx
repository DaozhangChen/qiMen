import { useState } from "react"
import { useEffect } from "react"
import countTenStem from "../toolFunction/countTenStem"
import { useRef } from "react"
import baseAreaInfo from "../toolFunction/baseAreaInfo"

// eslint-disable-next-line react/prop-types
const AnalyseTab = ({ curMainInfo, curArea }) => {
    const [tenStemAnalyse, setTenStemAnalyse] = useState([])
    const initStatus = useRef(false)
    useEffect(() => {
        if (curArea && !initStatus.current) {
            initStatus.current = true
        }
    }, [curArea])
    useEffect(() => {
        if (initStatus.current) {
            setTenStemAnalyse(countTenStem(curMainInfo, curArea))
        }
    }, [curMainInfo, curArea])

    return (
        <>
            <div>{baseAreaInfo[curArea]}</div>
            <div>{tenStemAnalyse}</div>
        </>
    )
}

export default AnalyseTab