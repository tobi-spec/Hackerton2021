import {useEffect, useState} from "react";
import {getTop10Countries} from "./service/AxiosService";

function App() {
  const [top10, setTop10] = useState([])

  useEffect(() => {
    getTop10Countries().then(data => setTop10(data))
  }, [])

  console.log(top10)

  return (<div>hello</div>);
}

export default App;
