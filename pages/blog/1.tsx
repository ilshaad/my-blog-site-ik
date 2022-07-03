// blog post page

import React from "react";
import Image from "next/image";
import Head from "next/head";
import { Badge, Col, Container, Row } from "react-bootstrap";

import Home_anchor_svg from "../../components/anchor_svg/Home_anchor_svg";
import Github_anchor_svg from "../../components/anchor_svg/Github_anchor_svg";
import Portfolio_anchor_svg from "../../components/anchor_svg/Portfolio_anchor_svg";
import LinkedIn_anchor_svg from "../../components/anchor_svg/LinkedIn_anchor_svg";
import EmailMe_anchor_svg from "../../components/anchor_svg/EmailMe_anchor_svg";
import forAllBlogsPageStyles from "../../styles/pages/blogsExtras/forAllBlogsPageStyles.module.scss";

// iK blog image
import blog1Image from "../../public/blog1img/timestampInSqlFormat.jpg";

// iK code block I used
import Blog1 from "../../components/blogPostCodes/Blog1";

type Props = {};

export default function blog1({}: Props) {
  const { svgLinks, blogDate, minuteRead } = forAllBlogsPageStyles;

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

      {/* Do not touch */}
      {/* blog post image if any */}
      {/* svg get in touch links (linkedin / portfolio / email / github) */}
      <Container className={`${svgLinks} text-primary mt-2`}>
        <span className={`ms-2 me-2`}>
          <Home_anchor_svg />
        </span>
        <span className={`ms-2 me-2 text-dark fw-bolder`}>|</span>
        <span className={`ms-2 me-2`}>
          <Github_anchor_svg />
        </span>
        <span className={`ms-2 me-2`}>
          <LinkedIn_anchor_svg />
        </span>
        <span className={`ms-2 me-2`}>
          <Portfolio_anchor_svg />
        </span>
        <span className={`ms-2 me-2`}>
          <EmailMe_anchor_svg />
        </span>
      </Container>

      {/* iK insert your image */}
      <Row className="mt-3 ms-2 me-2">
        <Image src={blog1Image} alt="blog 1 image" />
      </Row>

      {/* iK type your title */}
      {/* blog post title */}
      <Row>
        <h1 className={`text-primary mt-3`}>Create timestamp in SQL format</h1>
      </Row>

      {/* iK estimate reading time */}
      {/* length of time you think it complete read */}
      <Row>
        <p className={`${minuteRead}`}>4 min read</p>
      </Row>

      {/* iK date your blog post */}
      <Row className={`mb-2`}>
        <time
          dateTime="2022-06-25"
          className={`${blogDate} d-block text-start text-muted`}
        >
          2022 June 25th Friday
        </time>
      </Row>

      {/* iK put all the programming language you need to know */}
      {/* language know how */}
      <Row>
        <h5>Prequisite:</h5>
        <div className={`mt-n2 mb-3`}>
          <Badge bg="primary" text="secondary" className={`w-auto mt-1 me-1`}>
            Javascript
          </Badge>
          <Badge bg="primary" text="secondary" className={`w-auto mt-1 me-1`}>
            Regular Expression
          </Badge>
        </div>
      </Row>

      {/* Do not touch */}
      <Row className={`text-primary w-75 mx-auto overflow-hidden mt-2`}>
        <hr />
      </Row>

      {/* iK Write your blog here */}
      {/* blog post main & codes example */}
      <Row>
        <Col>
          {/* iK Leave 10 empty space at the start of the paragraph */}
          <p>
            &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;Sometimes
            the client side has to produce the date of the user interaction
            before sending it to the server api. And sometimes they have to
            format the date and time before sending it to the server api. And
            sometimes they have to specifically format the date and time in SQL
            date field before sending it to the server api. That&#39;s what we
            will be looking at.
          </p>

          {/* iK put heading as h5 if need be */}
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

        {/* iK place any code blocks if you have any for blog post */}
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
