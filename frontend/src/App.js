import {useEffect, useState} from "react";
import {getTop10OffshoreCTL, getTop10OffshorePT, getTop10Panama, getTop10Paradise} from "./service/AxiosService";
import ChartGallery from "./components/ChartGallery";

function App() {
  const [top10OffshoreCTL, setTop10OffshoreCTL] = useState([])
  const [top10OffshorePT, setTop10OffshorePT] = useState([])
  const [top10Panama, setTop10Panama] = useState([])
  const [top10Paradise, setTop10Paradise] = useState([])

  const [countries, setCountries] = useState([])

  useEffect(() => fetch('https://unpkg.com/world-atlas/countries-50m.json')
      .then(response => setCountries(response.json()))
      .then(data => {
    const countries = ChartGeo.topojson.feature(data, data.objects.countries).features;, [])

  console.log(countries)

  useEffect(() => {
    getTop10OffshoreCTL().then(data => setTop10OffshoreCTL(data))
    getTop10OffshorePT().then(data => setTop10OffshorePT(data))
    getTop10Panama().then(data => setTop10Panama(data))
    getTop10Paradise().then(data => setTop10Paradise(data))
  }, [])

  return <ChartGallery
      paradiseValues={top10Paradise}
      panamaValues={top10Panama}
      offShoreValuesCTL={top10OffshoreCTL}
      offShoreValuesPT={top10OffshorePT}
  />;
}

export default App;
