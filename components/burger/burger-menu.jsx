import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import Links from "../links/links";
import BurgerIcon from "./burger-icon";
import styles from "./burger.module.scss";

const jsstyles = {
  bmMenu: {
    background: "#5e2919",
    position: "fixed",
    width: "100%",
    padding: "1rem",
  },
  bmItem: {
    color: "white",
  },
};

export default function BurgerMenu() {
  return (
    <Menu
      customBurgerIcon={<BurgerIcon />}
      right
      noOverlay
      styles={jsstyles}
      className={styles.BurgerMenu}
    >
      <Links />
    </Menu>
  );
}
