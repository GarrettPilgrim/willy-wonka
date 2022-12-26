import Layout from "../components/layout";
import ProductGrid from "../components/product-grid/product-grid";
import { getSortedProducts } from "../lib/products";

export async function getStaticProps() {
  const allProducts = getSortedProducts();
  return {
    props: {
      allProducts,
    },
  };
}

export default function Products({ allProducts }) {
  return (
    <Layout>
      <ProductGrid props={allProducts} />
    </Layout>
  );
}
