import "./styles.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Link from "./components/Link";
import Logo from "./components/Logo";
import Avatar from "./components/Avatar";





export default function App() {
  return (
    <>
      <Header>
        <Logo/>
        <Navigation>
          <Link href="#Home" name="Home"/>
          <Link href="#About"name="About"/>
          <Link href="#Impressum"name="Impressum"/>
        </Navigation>
        <Avatar/>
      </Header>
      <main>content goes here…</main>
    </>
  );
}
