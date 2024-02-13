import { coreClient } from "../index.api";

export async function getProducts() {
  const response = await coreClient.get("/products");
  const data = await response.data.result;

  return data;
}

const productsAPI = { getProducts };

export default productsAPI;
