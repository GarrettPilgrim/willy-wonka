import ProductCard from "../product-card/product-card";
import styles from "./product-grid.module.scss"

const products = {
  wonkaBar: {
    name: "Wonka Chocolate Bars",
    price: 100,
    image: "/images/wonka-bar-stack.jpg",
    alt: "Two stacked Wonka Chocolate Bars",
  },
  hotChocolate: {
    name: "Wonka Hot Chocolate",
    price: 100,
    image: "/images/hot-chocolate.jpg",
    alt: "Steaming delicious hot chocolate with marshmallows",
  },
  coldChocolate: {
    name: "Wonka Cold Chocolate",
    price: 100,
    image: "/images/ice-cream.jpg",
    alt: "Wonka chocolate ice cream cone",
  },
  cookies: {
    name: "Wonka Chocolate Chip Cookies",
    price: 100,
    image: "/images/cookies.jpg",
    alt: "Wonka chocolate chip cookies",
  },
};

export default function ProductGrid() {
  return (
    <>
      <h2>Products</h2>
      <section class={styles.productgrid} id="products">
        <ProductCard product={products.wonkaBar} />
        <ProductCard product={products.hotChocolate} />
        <ProductCard product={products.coldChocolate} />
        <ProductCard product={products.cookies} />
      </section>
    </>
  );
}
