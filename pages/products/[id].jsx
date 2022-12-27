import Layout from "../../components/layout";
import ProductPage from "../../components/product-page/product-page";
import { getAllProductIds, getProductData } from "../../lib/products";

export async function getStaticProps({ params }) {
  const productData = await getProductData(params.id);
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
      <ProductPage
        id={productData.id}
        title={productData.title}
        date={productData.date}
        image={productData.image}
        price={productData.price}
        content={{ __html: productData.contentHtml }}
      ></ProductPage>
    </Layout>
  );
}
