import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

import rsImage from "../public/mstile-150x150.png";

type Props = {};

export default function Header({}: Props) {
  const [closeCanvas, setCloseCanvas] = useState<boolean>(false);

  return (
    <Navbar bg="info" className="h-100 w-100 pt-0 pb-0">
      {/* {[false, "sm", "md", "lg", "xl", "xxl"].map((expand) => ( */}
      <Container fluid className="d-flex justify-content-center">
        <Navbar.Brand as="h1">
          <Link href="/">
            <div className="d-flex">
              <Image
                src={rsImage}
                alt="rechadsalma log"
                width={"70%"}
                height={"70%"}
              />
              <h1>Ilshaad Blog</h1>
            </div>
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
