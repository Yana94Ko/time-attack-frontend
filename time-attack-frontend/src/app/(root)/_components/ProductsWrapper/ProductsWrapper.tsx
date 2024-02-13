"use client";
import API from "@/api/index.api";
import ProductList from "@/components/ProductList";
import { useQuery } from "@tanstack/react-query";

function ProductsWrapper() {
  const { data: products } = useQuery({
    queryKey: ["products", { isList: true, type: "default" }],
    queryFn: API.productsAPI.getProducts,
  });
  return <ProductList products={products || []} />;
}

export default ProductsWrapper;
