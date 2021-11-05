import axios from "axios";

const top10Offshore = "/country?source=offshore"
const top10Panama = "/country?source=panama"
const top10Paradise = "/country?source=paradise"

export const getTop10Offshore = () => {
    return axios.get(top10Offshore).then(response => response.data)
}

export const getTop10Bahamas = () => {
    return axios.get(top10Paradise).then(response => response.data)
}

export const getTop10Panama = () => {
    return axios.get(top10Panama).then(response => response.data)
}



