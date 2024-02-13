import { ComponentProps } from "react";
import ProductListItem from "../ProductListItem";
interface ProductListProps {
  products: Array<ComponentProps<typeof ProductListItem>["product"]>;
}
function ProductList({ products }: ProductListProps) {
  return (
    <>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-8 gap-y-12">
        {products.map((product) => (
          <li key={product.id}>
            <ProductListItem
              key={product.id}
              product={product}
            ></ProductListItem>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductList;
