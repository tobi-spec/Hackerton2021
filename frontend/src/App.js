import {useEffect, useState} from "react";
import {getTop10OffshoreCTL, getTop10OffshorePT, getTop10Panama, getTop10Paradise} from "./service/AxiosService";
import ChartGallery from "./components/ChartGallery";

function App() {
  const [top10OffshoreCTL, setTop10OffshoreCTL] = useState([])
  const [top10OffshorePT, setTop10OffshorePT] = useState([])
  const [top10Panama, setTop10Panama] = useState([])
  const [top10Paradise, setTop10Paradise] = useState([])


  useEffect(() => {
    getTop10OffshoreCTL().then(data => setTop10OffshoreCTL(data))
    getTop10OffshorePT().then(data => setTop10OffshorePT(data))
    getTop10Panama().then(data => setTop10Panama(data))
    getTop10Paradise().then(data => setTop10Paradise(data))
  }, [])

  console.log(top10Paradise)
  console.log(top10Panama)
  console.log(top10OffshoreCTL)
  console.log(top10OffshorePT)

  return <ChartGallery
      paradiseValues={top10Paradise}
      panamaValues={top10Panama}
      offShoreValuesCTL={top10OffshoreCTL}
      offShoreValuesPT={top10OffshorePT}
  />;
}

export default App;
