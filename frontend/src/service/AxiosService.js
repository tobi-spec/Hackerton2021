import axios from "axios";

const top10 = "/country"

const getTop10Countries = () => {
    axios.get(top10).then(response => console.log(response))
}