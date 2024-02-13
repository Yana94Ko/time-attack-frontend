import { Brand } from "@/types/Brand.type";
import { coreClient } from "../index.api";

export async function getBrands() {
  const url = "/brands";
  const response = await coreClient.get(url);
  const data = await response.data.result;
  return data as Brand[];
}

const brandsAPI = {
  getBrands,
};
export default brandsAPI;
