import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDllM2E0MWEzYzE1NzcyNmU3YWUxNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MTczMTg4NiwiZXhwIjoxNjYxOTkxMDg2fQ.YmkbN6D0fAncLkWnfNjdBzfN9fb5N0LjT8gSg4ecWBA"

export const publicRequest = axios.create({
    baseURL: BASE_URL
})


export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})