import { Product } from "@/types/Product.type";
import { coreClient } from "../index.api";

export async function getProducts() {
  const response = await coreClient.get("/products");
  const data = await response.data.result;

  return data as Product[];
}

const products = { getProducts };

export default products;
