import { Product } from "@/types/Product.type";
import { coreClient } from "../index.api";

export async function getProducts() {
  const url = `/products`;
  const response = await coreClient.get(url);
  const data = await response.data.result;

  return data as Product[];
}

export async function getProduct(id: string) {
  const url = `/products/${id}`;
  const response = await coreClient.get(url);
  const data = await response.data.result;

  return data as Product;
}

const productsAPI = { getProducts, getProduct };

export default productsAPI;
