import {useEffect, useState} from "react";
import {
  getTop10Countries,
  getTop10CountriesOffShore,
  getTop10CountriesPanama,
  getTop10CountriesParadise
} from "./service/AxiosService";
import ChartGallery from "./components/ChartGallery";

function App() {
  const [top10OffShore, setTop10OffShore] = useState([])
  const [top10Panama, setTop10Panama] = useState([])
  const [top10Paradise, setTop10Paradise] = useState([])

  useEffect(() => {
    getTop10CountriesOffShore().then(data => setTop10OffShore(data))
    getTop10CountriesPanama().then(data => setTop10Panama(data))
    getTop10CountriesParadise().then(data => setTop10Paradise(data))
  }, [])

  console.log(top10OffShore)
  console.log(top10Panama)
  console.log(top10Paradise)

  return <ChartGallery
      ValuesOffShore={top10OffShore}
      ValuesPanama={top10Panama}
      ValuesParadise={top10Paradise}
  />;
}

export default App;
