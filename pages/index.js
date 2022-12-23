import Head from "next/head";
import Cover from "../components/cover";
import Layout from "../components/layout";
import ProductGrid from "../components/product-grid";
import Text from "../components/text";

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Willy Wonka Chocolates</title>
      </Head>
      <Cover />
      <ProductGrid />
      <Text />
    </Layout>
  );
}
