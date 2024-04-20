import { useEffect } from "react"

// eslint-disable-next-line react/prop-types
const AnalyseTab = ({ curMainInfo }) => {
    useEffect(() => {
        console.log(curMainInfo)
    }, [curMainInfo])
    return (
        <>
            <div>111</div>
        </>
    )
}

export default AnalyseTab