import { useState } from "react"
import { useEffect } from "react"
import countTenStem from "../toolFunction/countTenStem"

// eslint-disable-next-line react/prop-types
const AnalyseTab = ({ curMainInfo, curArea }) => {
    const [tenStemAnalyse, setTenStemAnalyse] = useState([])
    useEffect(() => {
        setTenStemAnalyse(countTenStem(curMainInfo, curArea))
    }, [curMainInfo, curArea])

    return (
        <>
            <div>111</div>
            <div>{tenStemAnalyse}</div>
        </>
    )
}

export default AnalyseTab