import {useEffect, useState} from "react";

import ChartGallery from "./components/ChartGallery";
import {
  getTop10CountryOffshoreCTL,
  getTop10CountryOffshorePT,
  getTop10CountryPanama,
  getTop10CountryParadise,
  getTop10PeopleOffshoreCTL,
  getTop10PeopleOffshorePT,
  getTop10PeoplePanama,
  getTop10PeopleParadise, searchName
} from "./service/AxiosService";
import styled from "styled-components";
import Header from "./components/Header";

function App() {
  const [top10CountryOffshoreCTL, setTop10CountryOffshoreCTL] = useState([])
  const [top10CountryOffshorePT, setTop10CountryOffshorePT] = useState([])
  const [top10CountryPanama, setTop10CountryPanama] = useState([])
  const [top10CountryParadise, setTop10CountryParadise] = useState([])

  const [top10PeopleOffshoreCTL, setTop10PeopleOffshoreCTL] = useState([])
  const [top10PeopleOffshorePT, setTop10PeopleOffshorePT] = useState([])
  const [top10PeoplePanama, setTop10PeoplePanama] = useState([])
  const [top10PeopleParadise, setTop10PeopleParadise] = useState([])

  const [name, setName] = useState({ name: '' })

  useEffect(() => {
    getTop10CountryOffshoreCTL().then(data => setTop10CountryOffshoreCTL(data))
    getTop10CountryOffshorePT().then(data => setTop10CountryOffshorePT(data))
    getTop10CountryPanama().then(data => setTop10CountryPanama(data))
    getTop10CountryParadise().then(data => setTop10CountryParadise(data))

    getTop10PeopleOffshoreCTL().then(data => setTop10PeopleOffshoreCTL(data))
    getTop10PeopleOffshorePT().then(data => setTop10PeopleOffshorePT(data))
    getTop10PeoplePanama().then(data => setTop10PeoplePanama(data))
    getTop10PeopleParadise().then(data => setTop10PeopleParadise(data))
  }, [])

  const nameHandler = event =>
      setName({
        name: event.target.value,
      })

  const nameSubmitHandler = event => {
    event.preventDefault()
    searchName(name)
        .then(response => console.log(response))
        .finally(() => setName({ name: '' }))
  }

  return <div>
    <Header title={"Dirty Offshore Money Secrets"}/>
    <BoxWrapper onSubmit={nameSubmitHandler}>
      <p>Find the dirty secrets of your friends!</p>
      <input
          type="text"
          value={name.name}
          onChange={nameHandler}/>
      <button>search</button>
    </BoxWrapper>
    <ChartGallery
      paradiseCountries={top10CountryParadise}
      panamaCountries={top10CountryPanama}
      offShoreCountriesCTL={top10CountryOffshoreCTL}
      offShoreCountriesPT={top10CountryOffshorePT}

      paradisePeople={top10PeopleParadise}
      panamaPeople={top10PeoplePanama}
      offShorePeopleCTL={top10PeopleOffshoreCTL}
      offShorePeoplePT={top10PeopleOffshorePT}
  />
  </div>;
}

export default App;

const BoxWrapper = styled.form`
`
