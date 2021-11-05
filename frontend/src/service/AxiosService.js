import axios from "axios";

const top10OffshoreCTL = "/country?source=offshore&service_provider=Commonwealth Trust Limited"
const top10OffshorePT = "/country?source=offshore&service_provider=Portcullis Trustnet"
const top10Panama = "/country?source=panama"
const top10Paradise = "/country?source=paradise"

export const getTop10OffshoreCTL = () => {
    return axios.get(top10OffshoreCTL).then(response => response.data)
}

export const getTop10OffshorePT = () => {
    return axios.get(top10OffshorePT).then(response => response.data)
}

export const getTop10Paradise = () => {
    return axios.get(top10Paradise).then(response => response.data)
}

export const getTop10Panama = () => {
    return axios.get(top10Panama).then(response => response.data)
}



