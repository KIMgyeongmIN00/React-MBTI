import axios from "axios";

const authUrl = import.meta.env.VITE_AUTH_URL;
const jsonUrl = import.meta.env.VITE_JSON_URL;

export const json = axios.create({ // JSON서버 기본 URL axios instance 설정
  baseURL: jsonUrl
})

export const auth = axios.create({ // JWS서버 기본 URL axios instance 설정
  baseURL: authUrl
})