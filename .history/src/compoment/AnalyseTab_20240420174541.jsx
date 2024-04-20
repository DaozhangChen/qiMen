import { useState } from "react"
import { useEffect } from "react"

// eslint-disable-next-line react/prop-types
const AnalyseTab = ({ curMainInfo, curArea }) => {
    const [tenStemAnalyse, setTenStemAnalyse] = useState([])
    useEffect(() => {
        console.log(curMainInfo)
    }, [curMainInfo])

    return (
        <>
            <div>111</div>
            <div>{curArea}</div>
        </>
    )
}

export default AnalyseTab