import axios from "axios"

const API_KEY = 'https://65d858a0c96fbb24c1bb4db4.mockapi.io'
export const axiosService = axios.create({
    baseURL:API_KEY,
    headers:{
        "Content-Type":"application/json"
    }
})

