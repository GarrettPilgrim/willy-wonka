import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import Links from "../links/links";
import BurgerIcon from "./burger-icon";
import styles from "./burger.module.scss";

let jsstyles = {
  bmBurgerButton: {
    position: "fixed",
    top: "33px",
    right: "20px",
    width: "36px",
    height: "36px",
  },
  bmMenuWrap: {
    top: "0px",
    width: "100%",
    background: "#371414",
  },
  bmCrossButton: {
    width: "36px",
    height: "36px",
    position: "fixed",
    top: "33px",
    right: "20px",
  },
  bmCross: {
    background: "#f2b96e",
  },
};

export default function BurgerMenu() {
  return (
    <Menu
      customBurgerIcon={<BurgerIcon />}
      right
      className={styles.burgerMenu}
      styles={jsstyles}
    >
      <ul>
        <Links />
      </ul>
    </Menu>
  );
}
