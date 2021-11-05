import axios from "axios";

const top10OffshoreCTL = "/data?source=offshore&service_provider=Commonwealth Trust Limited"
const top10OffshorePT = "/data?source=offshore&service_provider=Portcullis Trustnet"
const top10Panama = "/data?source=panama"
const top10Paradise = "/data?source=paradise"

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



