import Image from "next/image";
import styles from "./product-card.module.scss"

export default function ProductCard({ product }) {
  return (
    <div class={styles.product}>
      <Image src={product.image} alt={product.alt} height={250} width={600} />
      <div class="product-text">
        <h2>{product.name}</h2>
        <span>${product.price}</span>
      </div>
    </div>
  );
}
