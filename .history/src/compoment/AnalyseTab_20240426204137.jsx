import { useState } from "react"
import { useEffect } from "react"
import countTenStem from "../toolFunction/countTenStem"
import { useRef } from "react"
import baseAreaInfo from "../toolFunction/baseAreaInfo"
import doorAnalyseFunc from "../toolFunction/doorAnalyse"

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
            setDoorAnalyse(doorAnalyseFunc(curMainInfo, curArea))
        }
    }, [curMainInfo, curArea])

    return (
        <>
            <div className="analyseWrapper">
                <div>{baseAreaInfo[curArea]}</div><br />
                <div>{tenStemAnalyse}</div><br />
                {doorAnalyse.map((item, i) => {
                    return (
                        <div key={i}>{item}</div>
                    )
                })
                }
            </div>
        </>
    )
}

export default AnalyseTab