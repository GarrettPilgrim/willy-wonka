import Head from "next/head";
import Link from "next/link";
import Cover from "../components/cover/cover";
import Layout from "../components/layout";
import ProductGrid from "../components/product-grid/product-grid";
import SideBySide from "../components/side-by-side/side-by-side";
import Text from "../components/text/text";
import { getSortedProducts } from "../lib/products";

export async function getStaticProps() {
  const allProducts = getSortedProducts();
  return {
    props: {
      allProducts,
    },
  };
}

export default function HomePage({ allProducts }) {
  return (
    <Layout>
      <Head>
        <title>Willy Wonka Chocolates</title>
      </Head>
      <Cover />
      <ProductGrid props={allProducts} />
      <SideBySide />
      <Text />
    </Layout>
  );
}
