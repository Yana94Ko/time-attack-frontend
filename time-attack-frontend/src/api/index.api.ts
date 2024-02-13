import axios from "axios";
import authAPI from "./auth.api/auth.api";
import productsAPI from "./product.api/product.api";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const coreClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
const API = { productsAPI, authAPI };

export default API;
