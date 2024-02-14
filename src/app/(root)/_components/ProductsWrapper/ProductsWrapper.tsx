"use client";
import API from "@/api/index.api";
import ProductList from "@/components/ProductList";
import { useQuery } from "@tanstack/react-query";

function ProductsWrapper({ brandId }: { brandId?: number }) {
  const { data: products } = useQuery({
    queryKey: ["products", { isList: true, type: "default" }],
    queryFn: API.productsAPI.getProducts,
  });

  return (
    <>
      {!brandId ? (
        <ProductList products={products || []} />
      ) : (
        <ProductList
          products={
            products?.filter((products) => products.brand.id === brandId) || []
          }
        />
      )}
    </>
  );
}

export default ProductsWrapper;
