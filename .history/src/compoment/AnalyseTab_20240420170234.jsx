import { useEffect } from "react"

const AnalyseTab = ({ curBaseInfo }) => {
    useEffect(() => {
        console.log(curBaseInfo)
    }, [curBaseInfo])
    return (
        <>
            <div>111</div>
        </>
    )
}

export default AnalyseTab