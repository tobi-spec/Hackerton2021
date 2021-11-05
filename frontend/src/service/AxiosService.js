import axios from "axios";

const top10Offshore = "/top10offshore"
const top10Panama = "/top10panama"
const top10Paradise = "/top10paradise"

export const getTop10CountriesOffShore = () => {
    return axios.get(top10Offshore).then(response => response.data)
}

export const getTop10CountriesPanama = () => {
    return axios.get(top10Panama).then(response => response.data)
}

export const getTop10CountriesParadise = () => {
    return axios.get(top10Paradise).then(response => response.data)
}


