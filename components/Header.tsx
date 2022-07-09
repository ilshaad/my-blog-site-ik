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
// import EmailMe_anchor_svg from "./anchor_svg/EmailMe_anchor_svg";
// import Github_anchor_svg from "./anchor_svg/Github_anchor_svg";
// import LinkedIn_anchor_svg from "./anchor_svg/LinkedIn_anchor_svg";
// import Portfolio_anchor_svg from "./anchor_svg/Portfolio_anchor_svg";
// import Home_anchor_svg from "./anchor_svg/Home_anchor_svg";

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
    quoteDiv,
    imageNHeadingContainer,
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

        // if true than return the default quote & not the random quote
        // acceptable character range between 80-130 in total, but I could change that depending how risky I would like to go
        //  - 40-130
        // we need to remove 2 characters so we can include quotes
        if (data.length >= 133) {
          // if (true) {
          setQuote("I am the greatest. I said that even before I knew I was.");
          // setQuote(
          //   "I am the greatest. I said that even before I knew I was. jjj jj j jjjj jjjj jd j 5 jj j jj jjjjj jjj jjj jjj jj jj j jjj j j j i"
          // );
          // 'Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort.'

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
          {/* <Placeholder as="p" animation="wave">
            <Placeholder xs={12} />
          </Placeholder> */}
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
      <Row className={`${imageNHeadingContainer}`}>
        <Col xs={12} md={10} lg={9} xl={8} className={`p-0 mx-auto h-100`}>
          <Navbar className="h-100 w-100 pt-0 pb-0 mx-auto">
            <Navbar.Brand className="h-100 w-100">
              <Link href="/" className="w-100 h-100">
                <div className={`d-flex w-100`}>
                  <Image
                    src={rsImage}
                    alt="rechadsalma log"
                    width={"100%"}
                    height={"100%"}
                    className={`${rsLogo}`}
                  />
                  <h1 className={`${brandHeading} text-primary`}>
                    Ilshaad Blog
                  </h1>
                </div>
              </Link>
            </Navbar.Brand>
          </Navbar>
        </Col>
      </Row>

      <Row className={`mx-auto ${quoteAuthorContainer}`}>
        {/* quote container */}
        <Col xs={12} sm={12} className={`${quoteContainer}`}>
          <div className={`${quoteDiv} align-middle`}>
            &#34;{quoteBox()}&#34;
          </div>
        </Col>

        {/*  auther container */}
        <Col xs={12} sm={12} className={authorContainer}>
          {authorBox()}
        </Col>
      </Row>
    </Container>
  );
}
