import axios from "axios";

const top10CountryOffshoreCTL = "/country?source=offshore&service_provider=Commonwealth Trust Limited"
const top10CountryOffshorePT = "/country?source=offshore&service_provider=Portcullis Trustnet"
const top10CountryPanama = "/country?source=panama"
const top10CountryParadise = "/country?source=paradise"

const top10PeopleOffshoreCTL = "/people?source=offshore&service_provider=Commonwealth Trust Limited"
const top10PeopleOffshorePT = "/people?source=offshore&service_provider=Portcullis Trustnet"
const top10PeoplePanama = "/people?source=panama"
const top10PeopleParadise = "/people?source=paradise"

// requests for off shore countries
export const getTop10CountryOffshoreCTL = () => {
    return axios.get(top10CountryOffshoreCTL).then(response => response.data)
}

export const getTop10CountryOffshorePT = () => {
    return axios.get(top10CountryOffshorePT).then(response => response.data)
}

export const getTop10CountryParadise = () => {
    return axios.get(top10CountryParadise).then(response => response.data)
}

export const getTop10CountryPanama = () => {
    return axios.get(top10CountryPanama).then(response => response.data)
}

// requests for countries of origin
export const getTop10PeopleOffshoreCTL = () => {
    return axios.get(top10PeopleOffshoreCTL).then(response => response.data)
}

export const getTop10PeopleOffshorePT = () => {
    return axios.get(top10PeopleOffshorePT).then(response => response.data)
}

export const getTop10PeopleParadise = () => {
    return axios.get(top10PeopleParadise).then(response => response.data)
}

export const getTop10PeoplePanama = () => {
    return axios.get(top10PeoplePanama).then(response => response.data)
}
