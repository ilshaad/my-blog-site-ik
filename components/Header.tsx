// header with 3 main containers / image & title / get in touch svg links / random quote api
// get in touch svg links will display none when >576px @media
// placed a placeholder for the quote & author box until fetching request is compoleted & updated the state

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Col, Container, Navbar, Placeholder, Row } from "react-bootstrap";

import styles from "../styles/components/Header.module.scss";

import rsImage from "../public/mstile-150x150.png";
import EmailMe_anchor_svg from "./anchor_svg/EmailMe_anchor_svg";
import Github_anchor_svg from "./anchor_svg/Github_anchor_svg";
import LinkedIn_anchor_svg from "./anchor_svg/LinkedIn_anchor_svg";
import Portfolio_anchor_svg from "./anchor_svg/Portfolio_anchor_svg";

type Props = {};

export default function Header({}: Props) {
  const {
    svgLinks,
    brandHeading,
    quoteAuthorContainer,
    quoteContainer,
    authorContainer,
    rsLogo,
    Header_component,
  } = styles;

  // const [quote, setQuote] = useState(
  //   "I am the greatest. I said that even before I knew I was. jjj jj j jjjj jjjj jj jjj jjjjj jj jjjjj jjj jjj jjjjj jj jj j jjj j jjjjj jjjjj j it seems like I can add a lot more"
  // );
  // const [author, setAuthor] = useState("Muhammad Ali");
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  // fetch the random quote
  // quote cannot be longer than 174 characters otherwise it will overflow outside the header component
  useEffect(() => {
    axios
      .get("https://api.quotable.io/random")
      .then((res) => {
        const { data } = res;

        // if quote is greater than 139 than use the default quote
        if (data.length >= 175) {
          setQuote("I am the greatest. I said that even before I knew I was.");
          setAuthor("Muhammad Ali");
          return;
        }

        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((error) => {
        setQuote("I am the greatest. I said that even before I knew I was.");
        setAuthor("Muhammad Ali");

        console.warn(error);
      });
  }, []);

  // if quotebox is still fetching or loading return placeholder otherwise the random quote
  const quoteBox = () => {
    // if quote api still fetching
    if (quote === "") {
      return (
        <>
          <Placeholder as="p" animation="glow">
            <Placeholder xs={12} />
          </Placeholder>
          <Placeholder as="p" animation="wave">
            <Placeholder xs={12} />
          </Placeholder>
        </>
      );
    }
    // if quote successfully fetched
    else {
      return quote;
    }
  };

  // if author box is still fetching or loading return placeholder otherwise the author
  const authorBox = () => {
    // if author api still fetching
    if (author === "") {
      return (
        <Placeholder as="p" animation="glow">
          <Placeholder xs={12} />
        </Placeholder>
      );
    }
    // if author successfully fetched
    else {
      return author;
    }
  };

  return (
    <Container
      fluid
      className={`p-0 h-100 overflow-hidden w-100 mx-auto ${Header_component}`}
    >
      {/* image & heading */}
      <Row className="bg-primary h-50">
        <Col xs={12} className={`p-0 mx-auto`}>
          <Navbar className="h-100 w-100 pt-0 pb-0 mx-auto">
            <Navbar.Brand>
              <Link href="/">
                <div className="d-flex">
                  <Image
                    src={rsImage}
                    alt="rechadsalma log"
                    width={"150%"}
                    height={"150%"}
                    className={`${rsLogo}`}
                  />
                  <h1 className={`${brandHeading}`}>Ilshaad Blog</h1>
                </div>
              </Link>
            </Navbar.Brand>
          </Navbar>
        </Col>

        {/* svg get in touch links (linkedin / portfolio / email / github) */}
        <Col col={12} className={`${svgLinks}`}>
          <Github_anchor_svg />
          <LinkedIn_anchor_svg />
          <Portfolio_anchor_svg />
          <EmailMe_anchor_svg />
        </Col>
      </Row>

      <Row className={`bg-info h-50 mx-auto ${quoteAuthorContainer}`}>
        {/* quote container */}
        <Col className={`${quoteContainer}`}>{quoteBox()}</Col>

        {/*  auther container */}
        <Col className={authorContainer}>{authorBox()}</Col>
      </Row>
    </Container>
  );
}
