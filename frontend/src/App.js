import {useEffect, useState} from "react";
import {getTop10Countries} from "./service/AxiosService";

function App() {
  const [top10, setTop10] = useState()

  useEffect(() => {
    getTop10Countries()
  })

  return (<div>Hello World</div>);
}

export default App;
