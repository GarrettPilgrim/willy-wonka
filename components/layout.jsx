import Nav from "./nav/nav";
import utilStyles from "../styles/utils.module.scss"
import Footer from "./footer/footer";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <div>{children}</div>
      <Footer />
    </>
  );
}
