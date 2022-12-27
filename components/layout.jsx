import Nav from "./nav/nav";
import utilStyles from "../styles/utils.module.scss"

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <div>{children}</div>
    </>
  );
}
