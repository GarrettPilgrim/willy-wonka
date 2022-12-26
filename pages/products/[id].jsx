import Layout from "../../components/layout";
import { getAllProductIds, getProductData } from "../../lib/products";

export async function getStaticProps({ params }) {
  const productData = getProductData(params.id);
  return {
    props: {
      productData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllProductIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Product({ productData }) {
  return (
    <Layout>
      {productData.title}
      <br />
      {productData.id}
      <br />
      {productData.date}
    </Layout>
  );
}
