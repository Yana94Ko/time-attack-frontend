import axios from "axios";
import authAPI from "./auth.api/auth.api";
import brandsAPI from "./brand.api/brand.api";
import productsAPI from "./product.api/product.api";
const BASE_URL =
  "https://port-0-express-server-17xco2nlsidlckv.sel5.cloudtype.app";

export const coreClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
const API = { productsAPI, authAPI, brandsAPI };

export default API;
