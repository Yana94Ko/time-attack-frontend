import axios from "axios";
import products from "./product.api";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const coreClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
const API = { products };

export default API;
