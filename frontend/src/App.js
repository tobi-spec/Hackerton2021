import {useEffect, useState} from "react";
import {getTop10Bahamas, getTop10Offshore, getTop10Panama} from "./service/AxiosService";
import ChartGallery from "./components/ChartGallery";

function App() {
  const [top10Offshore, setTop10Offshore] = useState([])
  const [top10Panama, setTop10Panama] = useState([])
  const [top10Paradise, setTop10Paradise] = useState([])


  useEffect(() => {
    getTop10Bahamas().then(data => setTop10Paradise(data))
    getTop10Panama().then(data => setTop10Panama(data))
    getTop10Offshore().then(data => setTop10Offshore(data))
  }, [])

  console.log(top10Paradise)
  console.log(top10Panama)
  console.log(top10Offshore)

  return <ChartGallery
      paradiseValues={top10Paradise}
      panamaValues={top10Panama}
      offShoreValues={top10Offshore}
  />;
}

export default App;
