// IK THIS IS A BOILERPLATE VERSION FOR WHEN YOU WANT TO INCLUDE NEW POST ALONG THE WAY

import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import dummyImage from "../../public/android-chrome-384x384.png";

type Props = {};

export default function one({}: Props) {
  return (
    <Container className="bg-light">
      {/* blog post image if any */}
      <Row>
        <Image src={dummyImage} alt="dummy image" className="rounded-circle" />
      </Row>

      {/* blog post title */}
      <Row>
        <h1>blog post title</h1>
      </Row>

      {/* language know how */}
      <Row>
        <h5>Prequisite</h5>
        <p>Javascript | Regular Expression</p>
      </Row>

      {/* blog post main & codes example */}
      <Row>
        <Col>
          <p>
            I am descriptin Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industrys standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </Col>

        <Col>
          <pre>
            <div>&lt; Open and close tags / &gt; // for dummy code</div>

            <code>You can use other tags for styling</code>
          </pre>
        </Col>
      </Row>
    </Container>
  );
}
