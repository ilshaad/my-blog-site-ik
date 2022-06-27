// blog post page

import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import blog1Image from "../../public/blog1_timestamp in sql format - my-blog-site repo.jpg";
import dummyImage from "../../public/android-chrome-384x384.png";
import Blog1 from "../../components/blogPostCodes/Blog1";

type Props = {};

export default function blog1({}: Props) {
  return (
    <Container className="bg-light">
      {/* blog post image if any */}
      <Row>
        <Image src={blog1Image} alt="blog 1 image" />
      </Row>

      {/* blog post title */}
      <Row>
        <h1>Create timestamp in SQL format</h1>
      </Row>

      {/* language know how */}
      <Row>
        <h5>Prequisite</h5>
        <p>Javascript | Regular Expression</p>
      </Row>

      {/* blog post main & codes example */}
      <Row>
        <Col>
          <Blog1 />

          <h5>What is a timestamp?</h5>
          <p>A timestamp is to save the current date and time</p>

          <h5>What is SQL format?</h5>
          <p>
            SQL stands for Structured Query Language. It lets you access and
            manipulate databases. But there is one database field we are
            particularly interested in, the <code>created_on</code> field. The{" "}
            <code>created_on</code> field is where dates and time are stored
            within the database (there are other fields that can store date and
            times too).
          </p>
          <p>
            In order to save timestamp within <code>created_on</code>, you will
            first need to transform it to the required structure. Depending on
            the SQL server, you might have to format the timestamp yourself
            before sending to the server if the server is not setup for that.
            The most common SQL format is <code>yyyy-mm-dd hh:mm:ss</code>. But
            that can be a little tricky do.
          </p>

          <h5>How to create a timestamp</h5>
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
