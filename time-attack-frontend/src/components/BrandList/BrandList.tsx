"use client";

import API from "@/api/index.api";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

function BrandList({ brandId }: { brandId: number }) {
  const { data: brands } = useQuery({
    queryKey: ["brands", { isList: true, type: "default" }],
    queryFn: API.brandsAPI.getBrands,
  });

  return (
    <nav className="mx-auto max-w-screen-lg mb-16">
      <ul className="gap-x-4 text-sm grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-y-5 justify-items-center">
        <li className="text-black font-bold w-100 col-span-6">
          <Link href={`/brands`}>ALL</Link>
        </li>
        {brands?.map((brand) => (
          <li key={brand.id}>
            <Link
              data-is-selected={brand.id === brandId}
              className="data-[is-selected=true]:font-bold data-[is-selected=true]:text-black text-gray-600"
              href={`/brands?brandId=${brand.id}`}
            >
              {brand.nameKr}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default BrandList;
