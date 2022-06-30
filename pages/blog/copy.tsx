// COPY VERSION OF ADDING ANOTHER BLOG POST
//    - REMEMBER IF YOU WANT TO ADD CODES WITHIN THE PAGE, USE THE ./component/blogPostCodes/COPY.tsx TO MAKE A NEW ONE

// blog post page

import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import blog1Image from "../../public/blog1img/timestamp in sql format - my-blog-site repo.jpg";
import dummyImage from "../../public/android-chrome-384x384.png";
import Blog1 from "../../components/blogPostCodes/Blog1";

type Props = {};

export default function copy({}: Props) {
  return (
    <Container>
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

          <h5>Solution:</h5>
        </Col>

        {/* the code block component */}
        <Col>
          <Blog1 />
        </Col>

        <Col>
          <p>
            Basically we collect the date as usual but setting it up in SQL
            format will require some help from regular expression.
          </p>
          <p>
            So whenever you need to create a timestamp in SQL format, you can
            use this tried and test function before sending it off to the server
            api.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
