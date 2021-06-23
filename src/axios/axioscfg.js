import axios from "axios";
import {BASE_URL} from "../url";

export const axioscfg = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        'Authorization': localStorage.getItem('sessionToken') ? 'Bearer ' + localStorage.getItem('sessionToken') : 'Bearer ',
        'Content-Type': 'application/json',
    }
});