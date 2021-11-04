import axios from "axios";

const top10 = "/country"

export const getTop10Countries = () => {
    return axios.get(top10).then(response => response.data)

}

