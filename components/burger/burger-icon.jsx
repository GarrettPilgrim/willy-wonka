import styles from "./burger.module.scss";

export default function BurgerIcon() {
  return (
    <svg
      className={styles.burgerIcon}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  );
}
