// header with 3 main containers / image & title / get in touch svg links / random quote api

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Col, Container, Nav, Navbar, Offcanvas, Row } from "react-bootstrap";

import styles from "../styles/components/Header.module.scss";

import rsImage from "../public/mstile-150x150.png";
import Github_anchor_svg from "./anchor_svg/Github_anchor_svg";
import LinkedIn_svg from "./anchor_svg/LinkedIn_anchor_svg";
import Portfolio_anchor_svg from "./anchor_svg/Portfolio_anchor_svg";
import EmailMe_anchor_svg from "./anchor_svg/EmailMe_anchor_svg";

type Props = {};

export default function Header({}: Props) {
  const [quote, setQuote] = useState(
    "I am the greatest. I said that even before I knew I was. jjj jj j jjjj jjjj jj jjj jjjjj jj jjjjj jjj jjj jjjjj jj jj j jjj j jjjjj jjjjj j it seems like I can add a lot more"
  );
  const [author, setAuthor] = useState("Muhammad Ali");

  // fetch the random quote
  // quote cannot be longer than 174 characters otherwise it will overflow outside the header component
  useEffect(() => {
    axios
      .get("https://api.quotable.io/random")
      .then((res) => {
        const { data } = res;

        // if quote is greater than 139 than use the default quote
        if (data.length >= 175) {
          return;
        }

        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  return (
    <Container fluid className="p-0 h-100 overflow-hidden">
      <Row className="bg-primary h-50">
        <Navbar className="h-100 w-100 pt-0 pb-0">
          <Navbar.Brand>
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
        </Navbar>

        {/* svg get in touch links (linkedin / portfolio / email / github) */}
      </Row>

      <Row className={`bg-info h-50 mx-auto ${styles.quoteAuthorContainer}`}>
        <Col className={`${styles.quote}`}>{quote}</Col>
        <Col className={styles.author}>{author}</Col>
      </Row>
    </Container>
  );
}
