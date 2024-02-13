import API from "@/api/index.api";
import AddCartButton from "@/components/AddCartButton";
import Page from "@/components/Page";
import utils from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

async function ProductPage(props: { params: { productId: string } }) {
  const productId = props.params.productId;
  const product = await API.productsAPI.getProduct(productId);
  return (
    <Page fullWidth={false} title={""}>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
        <div className="relative aspect-[3/4]">
          <Image
            src={product.imgSrc}
            alt={product.name}
            fill
            loading="lazy"
            objectPosition="absolute"
            className="object-cover"
          />
        </div>
        <div className="py-8 flex flex-col">
          <Link href={`/brands?brandId=${product.brand.id}`}>
            <h2 className=" text-[15px] border-b pb-2.5 mb-2.5  font-bold">
              {product.brand.nameKr} / {product.brand.nameEn}
            </h2>
          </Link>
          <h2 className="text-lg">{product.name}</h2>
          <div className="grid grid-cols-2 my-12 gap-y-5 text-[15px]">
            <span>정가</span>
            <span className="text-red-500 line-through font-semibold">
              {utils.products.convertPriceToKRW(product.originalPrice)}
            </span>
            <span className="font-bold">판매가</span>
            <span>
              {utils.products.convertPriceToKRW(product.originalPrice)}
            </span>
            <span>배송</span>
            <span>{product.deliveryType}</span>
            <span>잔여재고</span>
            <span>{product.onlineStock}</span>
          </div>
          <AddCartButton />
        </div>
      </section>
    </Page>
  );
}

export default ProductPage;
