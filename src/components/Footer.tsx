import Link from "next/link";
import { Navbar } from "reactstrap";

const Footer = () => {
  return (
    <Navbar container="md" color="dark" dark>
      <Link href="/" passHref={true} legacyBehavior={true}>
        <a  className="navbar-brand text-center" style={{ fontSize: '14px', lineHeight: '2' }}>
          &copy; Kauã Moreira
        </a>
      </Link>
    </Navbar>
  );
};

export default Footer;