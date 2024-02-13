"use client";
import API from "@/api/index.api";
import { Product } from "@/types/Product.type";
import { useQuery } from "@tanstack/react-query";
import ProductListItem from "../ProductListItem";

function ProductList() {
  const returnValueOfUseQuery = useQuery({
    queryKey: ["products", { isList: true, type: "default" }],
    queryFn: API.productsAPI.getProducts,
  });
  const { data: products, isLoading } = returnValueOfUseQuery;
  return (
    <>
      {isLoading ? (
        "로딩중"
      ) : (
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-8 gap-y-12">
          {products?.map((product: Product) => (
            <li key={product.id}>
              <ProductListItem
                key={product.id}
                product={product}
              ></ProductListItem>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ProductList;
