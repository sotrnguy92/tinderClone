import axios from "axios";

const instance = axios.create({
    baseURL: "https://tinder-clone092.herokuapp.com"
})

export default instance;