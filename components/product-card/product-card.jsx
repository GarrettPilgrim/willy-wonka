import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div class="product">
      <Image src={product.image} alt={product.alt} height={250} width={600} />
      <div class="product-text">
        <h2>{product.name}</h2>
        <span>${product.price}</span>
      </div>
    </div>
  );
}
