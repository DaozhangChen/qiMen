import "../style/HeaderInfo"
const HeaderInfo = () => {
    return (
        <>
            <div className="headerWrapper">
                <div>
                    <div>值符星：<span><InfoSelect type="star" setDetailInfo={setDetailInfo} area={value.number} /></span></div>
                    <div>值使门：</div>
                </div>
                <div>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
                <div>未知</div>
            </div>
        </>
    )
}

export default HeaderInfo