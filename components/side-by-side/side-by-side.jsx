import Image from "next/image";
import styles from "./side-by-side.module.scss";

export default function SideBySide() {
  return (
    <div className={styles.container} id="founder">
      <div className={styles.image}>
        <Image
          src="/images/willy-wonka.svg"
          alt="silhouette of Willy Wonka"
          height={693.67}
          width={551.86}
        />
      </div>
      <div className={styles.text}>
        <h2>Founder</h2>
        <p>
          The founder of the Wonka's Chocolate Factory and maker of many
          chocolates remains a mystery. We know his name is Willy Wonka but he
          is reclusive and rarely makes appearances.
        </p>
      </div>
    </div>
  );
}
