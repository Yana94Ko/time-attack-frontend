"use client";
import BrandList from "@/components/BrandList";
import { useSearchParams } from "next/navigation";
import ProductsWrapper from "../../_components/ProductsWrapper";

function BrandWrapper() {
  const params = useSearchParams();
  const brandId = Number(params.get("brandId"));
  return (
    <>
      <BrandList brandId={brandId} />
      <ProductsWrapper brandId={brandId} />
    </>
  );
}

export default BrandWrapper;
