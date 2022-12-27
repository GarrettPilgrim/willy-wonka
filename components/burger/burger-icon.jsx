import styles from "./burger.module.scss"

export default function BurgerIcon() {
  return (
    <div className={styles.burgerIcon}>
      <svg
        className=""
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </div>
  );
}
