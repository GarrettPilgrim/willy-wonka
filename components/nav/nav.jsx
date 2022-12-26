import Image from "next/image";
import Link from "next/link";
import styles from "./nav.module.scss"

export default function Nav() {
  return (
    <div className={styles.container}>
      <nav>
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/willy-wonka-logo.svg"
            width={67.7333}
            height={40.6333}
            alt="Willy Wonka Chocolates Logo"
          />
        </Link>
        <ul>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <a href="#our-story">Story</a>
          </li>
          <li>
            <a href="#founder">Founder</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
