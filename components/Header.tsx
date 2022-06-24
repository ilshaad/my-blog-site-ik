import Link from "next/link";
import { useEffect, useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
// import Test from "bootstrap-icons/icons/linkedin.svg";

type Props = {};

export default function Header({}: Props) {
  const [closeCanvas, setCloseCanvas] = useState<boolean>(false);

  return (
    <Navbar bg="info" className="h-100 w-100 pt-0 pb-0">
      {/* {[false, "sm", "md", "lg", "xl", "xxl"].map((expand) => ( */}
      <Container fluid className="d-flex justify-content-center">
        <Navbar.Brand as="h1">
          <Link href="/">Ilshaad Blog</Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
