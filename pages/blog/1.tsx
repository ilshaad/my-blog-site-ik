// blog post page

import React from "react";
import Image from "next/image";
import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";

import Blog1 from "../../components/blogPostCodes/Blog1";
import blog1Image from "../../public/blog1img/timestamp in sql format - my-blog-site repo.jpg";

type Props = {};

export default function blog1({}: Props) {
  return (
    <Container className="w-100">
      <Head>
        <title>Create timestamp in SQL format | Ilshaad Blog</title>
        <meta
          name="description"
          content="Create timestamp in SQL format | Ilshaad Blog"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="apple-mobile-web-app-title" content="Ilshaad blog" />
        <meta name="application-name" content="Ilshaad blog" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      {/* blog post image if any */}
      <Row>
        <Image src={blog1Image} alt="blog 1 image" />
      </Row>

      {/* blog post title */}
      <Row>
        <h1>Create timestamp in SQL format</h1>
      </Row>

      {/* length of time you think it complete read */}
      <Row>
        <p>4 min read</p>
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
            Sometimes the client side has to produce the date of the user
            interaction before sending it to the server api. And sometimes they
            have to format the date and time before sending it to the server
            api. And sometimes they have to specifically format the date and
            time in SQL date field before sending it to the server api.
            That&#39;s what we will be looking at.
          </p>

          <h5>What is a timestamp?</h5>
          <p>
            A timestamp is to store the current date and time for future
            references
          </p>

          <h5>What is SQL format?</h5>
          <p>
            SQL stands for Structured Query Language. It lets you access and
            manipulate databases. But there is one database field we are
            particularly interested in, the&#160;<code>created_on</code> field.
            The&#160;<code>created_on</code> field is where dates and time are
            stored within the database (there are other fields that can store
            date and times too).
          </p>
          <p>
            In order to store timestamp within&#160;<code>created_on</code>, you
            will first need to transform it to the required structure. Depending
            on the SQL server, you might have to format the timestamp yourself
            before sending to the server if the server is not setup for that.
            The most common SQL format is&#160;<code>yyyy-mm-dd hh:mm:ss</code>.
            But that can be a little tricky do.
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

// /  &#47;
// !  &#33;
// (  &#40;
// )  &#41;
// ,  &#44;
// :  &#58;
// ;  &#59;
// ?  &#63;
// [  &#91;
// ]  &#93;
// \  &#92;
// _  &#95;
// {  &#123;
// }  &#125;
// |  &#124;
//    &#160;  (empty space)
// -  &#8208;
// "  &#34;
// '  &#39;
// `  &#96;
// +  &#43;
// -  &#8722;
// =  &#61;
// <  &#60;
// >  &#62;
// %  &#37;
// *  &#8727;
