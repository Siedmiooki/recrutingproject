import axios from "axios";

const api = axios.create({
    baseURL: "https://randomuser.me/api",
})

type GetUserResponse = {
    results: any[]
}

export const getUsers = () => api.get("/?results=20").then(response => response.data as GetUserResponse)