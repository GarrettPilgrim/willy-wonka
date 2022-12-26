import Image from "next/image";
import Link from "next/link";
import styles from "./product-card.module.scss";

export default function ProductCard({ image, alt, title, price, id }) {
  return (
    <Link href={`products/${id}`} class={styles.product}>
      <Image src={image} alt={alt} height={250} width={600} />
      <div class="product-text">
        <h2>{title}</h2>
        <span>${price}</span>
      </div>
    </Link>
  );
}

// href={`products/${id}`}
