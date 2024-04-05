import HeaderInfo from './compoment/HeaderLabel'
import Sudoku from './compoment/Sudoku'

function App() {
  const regionArr = [
    { number: 4, area: "巽" },
    { number: 9, area: "离" },
    { number: 2, area: "坤" },
    { number: 3, area: "震" },
    { number: 5, area: "中" },
    { number: 7, area: "兑" },
    { number: 8, area: "艮" },
    { number: 1, area: "坎" },
    { number: 6, area: "乾" }
  ]
  const [detailInfo, setDetailInfo] = useState(regionArr)

  return (
    <>
      <HeaderInfo detailInfo={detailInfo} setDetailInfo={setDetailInfo} />
      <Sudoku detailInfo={detailInfo} setDetailInfo={setDetailInfo} />
    </>
  )
}

export default App
