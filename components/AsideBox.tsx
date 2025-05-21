// aside component containing 2 box, first the links, second a brief about blog description

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import EmailMe_anchor_svg from "./anchor_svg/EmailMe_anchor_svg";
import Github_anchor_svg from "./anchor_svg/Github_anchor_svg";
// import Home_anchor_svg from "./anchor_svg/Home_anchor_svg";
import LinkedIn_anchor_svg from "./anchor_svg/LinkedIn_anchor_svg";
import Portfolio_anchor_svg from "./anchor_svg/Portfolio_anchor_svg";
import styles from "../styles/components/AsideBox.module.css";

type Props = {};

export default function AsideBox({}: Props) {
  const { AsideBox_component, aboutBox } = styles;

  return (
    <div data-testid="AsideBox_component" className={`${AsideBox_component}`}>
      {/* svg links */}
      <div className="bg-light border border-3 border-primary mx-auto">
        <Container fluid={true} className={`text-primary mx-auto`}>
          <h6
            className={`w-100 text-center mt-2 text-decoration-underline text-dark`}
          >
            Get in touch
          </h6>

          <Row
            className={`justify-content-center mx-auto text-center mt-n1 mb-2`}
          >
            <Col xs={6} md={3}>
              <Github_anchor_svg />
            </Col>

            <Col xs={6} md={3}>
              <LinkedIn_anchor_svg />
            </Col>

            <Col xs={6} md={3}>
              <Portfolio_anchor_svg />
            </Col>

            <Col xs={6} md={3}>
              <EmailMe_anchor_svg />
            </Col>
          </Row>

          {/* <Row
            className={`mx-auto text-center justify-content-center mt-2 mb-2`}
          >
            <Home_anchor_svg />
          </Row> */}
        </Container>
      </div>

      {/* blog description box */}
      <div className="border border-3 border-primary mx-auto mt-1 bg-light">
        <h6 className={`text-center mt-2 mb-1 text-decoration-underline`}>
          About
        </h6>
        {/* <p className={`${aboutBox} mb-2`}>
          My name is Ilshaad, and I have been in web development for quite a
          while now. Whilst I will always consider myself a student, I also
          think it is important to give back to the community. So, this blog is
          to share some of my knowledge / how to / solutions that I have come
          across. Feel free to contact me if there is something I can help with.
        </p> */}

        <p className={`${aboutBox} mb-2`}>
          My name is Ilshaad. I am a Web developer. And I believe in giving back
          to the community, so I share what I know and hopefully it will help
          you.
        </p>
        <p className={aboutBox}>Eat, Sleep, Code, Repeat!</p>
      </div>
    </div>
  );
}
