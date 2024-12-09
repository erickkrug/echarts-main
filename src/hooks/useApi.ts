import axios from "axios";

export function useApi() {
    const api = axios.create({
        baseURL: "https://localhost:44327/api/",
        headers: {
            "Content-Type": "application/json",
        }
    });

    return { api }
}