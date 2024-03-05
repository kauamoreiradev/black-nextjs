import Link from "next/link";
import { Nav, Navbar } from "reactstrap";

const Header = () => {
  return (
    <Navbar container="md" color="dark" dark>
      <Link href="/" passHref={true} legacyBehavior={true}>
        <a className="navbar-brand">Kauã Moreira Iphones</a>
      </Link>
      <Nav className="flex-row" navbar>
        <Link href="/products" passHref={true} legacyBehavior={true}>
          <a className="nav-link me-2">Produtos</a>
        </Link>
        <Link href="/cart" passHref={true} legacyBehavior={true}>
          <a className="nav-link">Carrinhos</a>
        </Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
