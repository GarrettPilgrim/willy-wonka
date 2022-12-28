import Image from "next/image";
import styles from "./product-page.module.scss";

export default function ProductPage(props) {
  return (
    <div className={styles.product}>
      <div className={styles.imageContainer}>
        <Image src={props.image} alt="" width={910} height={512} />
      </div>
      <h1>{props.title}</h1>
      <h2>${props.price}</h2>
      <div dangerouslySetInnerHTML={props.content}></div>
    </div>
  );
}
