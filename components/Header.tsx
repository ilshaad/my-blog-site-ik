import Link from "next/link";
import { useEffect, useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
// import Test from "bootstrap-icons/icons/linkedin.svg";

type Props = {};

export default function Header({}: Props) {
  const [closeCanvas, setCloseCanvas] = useState<boolean>(false);

  // useEffect(() => console.log(Test));

  return (
    <Navbar
      bg="info"
      expand="sm"
      expanded={closeCanvas}
      onToggle={() => setCloseCanvas(!closeCanvas)}
      className="h-100 pt-0 pb-0"
    >
      {/* {[false, "sm", "md", "lg", "xl", "xxl"].map((expand) => ( */}
      <Container>
        <Navbar.Brand>
          <Link href="/">Ilshaad Blog</Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" />

        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-sm`}
          aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              id={`offcanvasNavbarLabel-expand-sm`}
              className="ms-5"
            >
              {/* <Link href="/">Ilshaad Blog</Link> */}
              Ilshaad Blog
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link onClick={() => setCloseCanvas(!closeCanvas)}>
                <Link href="/">Home</Link>
              </Nav.Link>

              <Nav.Link
                onClick={() => setCloseCanvas(!closeCanvas)}
                href="https://www.linkedin.com/in/rob-c-a7aa08199/"
                target="_blank"
              >
                {/* LinkedIn */}
                {/* <i className="bi bi-linkedin"></i> */}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>

                {/* <Test /> */}
              </Nav.Link>

              <Nav.Link onClick={() => setCloseCanvas(!closeCanvas)}>
                <Link href="blog/one">(IK REMOVE AFTERWARDS)/blog/one</Link>
              </Nav.Link>

              <Nav.Link href="/">Link</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

// return (
//   <div className="bg-info h-100">
//     <span className="m-5">
//       <Link href="/blog/one" className="m-5">
//         /blog/one
//       </Link>
//     </span>

//     <span className="m-5">
//       <Link href="/blog/two">/blog/two</Link>
//     </span>

//     <span className="m-5">
//       <Link href="/errorpage" className="m-5">
//         Error page
//       </Link>
//     </span>
//   </div>
// );
