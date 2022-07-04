// aside component containing 2 box, first the links, second a brief about blog description

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import EmailMe_anchor_svg from "./anchor_svg/EmailMe_anchor_svg";
import Github_anchor_svg from "./anchor_svg/Github_anchor_svg";
import Home_anchor_svg from "./anchor_svg/Home_anchor_svg";
import LinkedIn_anchor_svg from "./anchor_svg/LinkedIn_anchor_svg";
import Portfolio_anchor_svg from "./anchor_svg/Portfolio_anchor_svg";
import styles from "../styles/components/AsideBox.module.scss";

type Props = {};

export default function AsideBox({}: Props) {
  const { aboutBox } = styles;

  return (
    <div data-testid="AsideBox_component">
      {/* svg links */}
      <div className="bg-light border border-3 border-primary mx-auto">
        <Container fluid={true} className={` text-primary mx-auto`}>
          <Row
            className={`mx-auto text-center justify-content-center mt-1 mb-1`}
          >
            <Home_anchor_svg />
          </Row>

          <Row
            className={`justify-content-center mx-auto text-center mt-1 mb-1`}
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
        </Container>
      </div>

      {/* blog description box */}
      <div className="border border-3 border-primary mx-auto mt-1 bg-light">
        <h5 className={`text-center mt-2 mb-1`}>About</h5>
        <p className={`${aboutBox} mb-0`}>
          My name is Ilshaad, and I have been in web development for quite a
          while now. Whilst I will always consider myself a student, I also
          think it is important to give back to the community. So, sharing my
          stumbles I have come across, so you do not have to suffer the same
          frustration as I did.
        </p>
      </div>
    </div>
  );
}