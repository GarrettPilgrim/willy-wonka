import Image from "next/image";
import styles from "./cover.module.scss"

export default function Cover() {
  return (
    <div className={styles.container}>
      <header>
        <Image
          src="/images/wonka-bar-transparent.png"
          alt="opened chocolate bar"
          width={368}
          height={514}
        />
        <div>
          <h1>A World of Pure Imagination</h1>
          <p>Wonka's chocolates prove dreams do come true.</p>
        </div>
      </header>
    </div>
  );
}
