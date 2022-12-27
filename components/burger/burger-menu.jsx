import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import Links from "../links/links";
import BurgerIcon from "./burger-icon";
import styles from "./burger.module.scss";

const jsstyles = {
  bmBurgerButton: {
    width: "36px",
    height: "36px",
  },
};

export default function BurgerMenu() {
  return (
    <Menu
      customBurgerIcon={<BurgerIcon />}
      right
      noOverlay
      className={styles.burgerMenu}
      styles={jsstyles}
    >
      <ul>
        <Links />
      </ul>
    </Menu>
  );
}
