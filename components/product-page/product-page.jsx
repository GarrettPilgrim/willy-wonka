import Image from "next/image";
import styles from "./product-page.module.scss";

export default function ProductPage(props) {
  return (
    <div className={styles.product}>
    <Image 
      src={props.image}
      alt=""
      width={100}
      height={100}
    />
      <h2>{props.title}</h2>
      <h3>{props.price}</h3>
      <div dangerouslySetInnerHTML={props.content}>
      </div>
    </div>
  );
}
