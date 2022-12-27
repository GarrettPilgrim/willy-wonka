import Image from "next/image";
import Link from "next/link";
import Links from "../links/links";
import BurgerMenu from "../burger/burger-menu";
import styles from "./nav.module.scss";

export default function Nav() {
  return (
    <div className={styles.container}>
      <nav className={styles.desktopMenu}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/willy-wonka-logo.svg"
            width={67.7333}
            height={40.6333}
            alt="Willy Wonka Chocolates Logo"
          />
        </Link>
        <ul>
          <Links />
        </ul>
        <div className={styles.mobileMenu}>
          <BurgerMenu />
        </div>
      </nav>
    </div>
  );
}
