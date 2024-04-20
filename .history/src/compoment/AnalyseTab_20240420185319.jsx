import { useState } from "react"
import { useEffect } from "react"
import countTenStem from "../toolFunction/countTenStem"
import { useRef } from "react"

// eslint-disable-next-line react/prop-types
const AnalyseTab = ({ curMainInfo, curArea }) => {
    const [tenStemAnalyse, setTenStemAnalyse] = useState([])
    const initStatus = useRef(false)
    useEffect(() => {
        if (curArea) {
            initStatus = true
        }
    }, [curArea])
    useEffect(() => {
        if (initStatus.current) {
            setTenStemAnalyse(countTenStem(curMainInfo, curArea))
        }
    }, [curMainInfo, curArea])

    return (
        <>
            <div>111</div>
            <div>{tenStemAnalyse}</div>
        </>
    )
}

export default AnalyseTab