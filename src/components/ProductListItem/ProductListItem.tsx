import utils from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
interface ProductListItemProps {
  product: {
    id: number;
    name: string;
    imgSrc: string;
    onlineStock: number;
    price: number;
    originalPrice: number;
    deliveryType: string;
    brandId: number;
    brand: {
      id: number;
      nameKr: string;
      nameEn: string;
    };
  };
}
function ProductListItem({ product }: ProductListItemProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="relative flex flex-col group"
    >
      <div className="aspect-[3/4] relative mb-4">
        <Image
          src={product.imgSrc}
          alt={product.name}
          fill
          loading="lazy"
          objectPosition="absolute"
          className="object-cover group-hover:scale-105 transition-transform"
        />
      </div>
      <div className="grid gap-y-2">
        <div className="text-sm font-bold">{product.brand.nameEn}</div>
        <h6 className="text-[15px]">{product.name}</h6>
        <div className="text-sm flex flex-col sm:flex-row items-baseline gap-1.5">
          <span className="text-red-500 line-through font-semibold">
            {utils.products.convertPriceToKRW(product.originalPrice)}
          </span>
          <span className="font-bold">
            {utils.products.convertPriceToKRW(product.price)}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ProductListItem;
