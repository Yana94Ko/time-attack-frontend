import Page from "@/components/Page";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <Page title="Trending" fullWidth>
      <ProductList />
    </Page>
  );
}
