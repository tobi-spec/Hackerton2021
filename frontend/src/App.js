import {useEffect, useState} from "react";
import {getTop10Countries} from "./service/AxiosService";
import ChartGallery from "./components/ChartGallery";

function App() {
  const [top10, setTop10] = useState([])

  useEffect(() => {
    getTop10Countries().then(data => setTop10(data))
  }, [])

  console.log(top10)

  return <ChartGallery chartValue={top10}/>;
}

export default App;
