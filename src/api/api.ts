import axios from "axios";
import { BACKEND_URL, REQUEST_TIMEOUT } from "./const";


export const createAPI = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
    headers: {
      "Access-Control-Allow-Origin": '*',
      "Accept": 'application/json',
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    },
  });

  return api;
};
