// COPY VERSION OF ADDING ANOTHER BLOG POST
//    - REMEMBER IF YOU WANT TO ADD CODES WITHIN THE PAGE, USE THE ./component/blogPostCodes/COPY.tsx TO MAKE A NEW ONE

// tite:  Create timestamp in SQL format
// date: 2022 06 25 Friday
// blog1

// IK TODO LIST FOR NEW BLOGS
// -note route / title / date on /Route-n-features.txt file in your dropbox folder
// -enter the title & date of blog within the ./scripts/blogsData.ts (blogsData object literal)
// -add a quick link in the index.tsx page so you can go to the page easily
//  - we will update it properly later
// -write the material as you would
// -estimate reading time
// -find or create image for blog post
//   -save image within dropbox blog-site folder
//   -save image within /public folder in you app
// -seo
// -test
//   - ./__tests__/pages/blog/1.test.tsx	(for actual page)
//   - ./__tests__/components/blogPostCodes/Blog1.test.tsx	(for possible code blocks you may use within the blog page)
// -update / page blog list

import React from "react";
import Image from "next/image";
import Head from "next/head";
import { Badge, Breadcrumb, Col, Container, Row } from "react-bootstrap";

import Home_anchor_svg from "../../components/anchor_svg/Home_anchor_svg";
import Github_anchor_svg from "../../components/anchor_svg/Github_anchor_svg";
import Portfolio_anchor_svg from "../../components/anchor_svg/Portfolio_anchor_svg";
import LinkedIn_anchor_svg from "../../components/anchor_svg/LinkedIn_anchor_svg";
import EmailMe_anchor_svg from "../../components/anchor_svg/EmailMe_anchor_svg";

import forAllBlogsPageStyles from "../../styles/pages/blogsExtras/forAllBlogsPageStyles.module.scss";

// blogs data object
import { blogsData } from "../../scripts/blogsData";

// iK blog image
import blog1Image from "../../public/blog1img/timestampInSqlFormat.jpg";

// iK code block I used
import Blog1 from "../../components/blogPostCodes/Blog1";
import Link from "next/link";

type Props = {};

export default function blog1({}: Props) {
  const {
    blogPostPage,
    svgLinks,
    blogDate,
    minuteRead,
    codeText,
    homeBreadcrumb,
  } = forAllBlogsPageStyles;

  // ensure you are collecting the correct blog number
  const { blog1 } = blogsData;

  return (
    <Container className={`${blogPostPage}`}>
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

      {/* iK Do not touch */}
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

      {/* iK do not touch */}
      {/* breadcrumb for blog pages */}
      <Breadcrumb
        className={`d-none d-sm-block mt-2 mb-n2 ms-2 me-2 ms-xl-5 me-xl-5`}
      >
        <Link href="/" passHref>
          <Breadcrumb.Item className={homeBreadcrumb}>Home</Breadcrumb.Item>
        </Link>

        <Breadcrumb.Item active>blog</Breadcrumb.Item>
      </Breadcrumb>

      {/* iK insert your image */}
      <Row className="mt-3 ms-2 me-2 ms-xl-5 me-xl-5">
        <Image src={blog1Image} alt="blog 1 image" />
      </Row>

      {/* iK type your title */}
      {/* blog post title */}
      <Row className={`mx-auto`}>
        <h1 className={`text-primary mt-3 text-center`}>
          Create timestamp in SQL format
        </h1>
      </Row>

      {/* iK estimate reading time */}
      {/* length of time you think it complete read */}
      <Row className={`mx-auto`}>
        <p className={`${minuteRead} text-center`}>4 min read</p>
      </Row>

      {/* iK date your blog post */}
      {/* iK collect your blog date from blogsData object */}
      <Row className={`mb-2 mx-auto`}>
        <time
          dateTime={blog1.dateTime_attribute}
          className={`${blogDate} d-block text-center`}
        >
          {blog1.dateDisplay}
        </time>
      </Row>

      {/* iK put all the programming language you need to know */}
      {/* language know how */}
      <Row className={`mx-auto`}>
        <h5 className={`text-center`}>Prequisite:</h5>
        <div className={`mt-n2 mb-3 text-center`}>
          <Badge bg="primary" text="secondary" className={`w-auto mt-1 me-1`}>
            Javascript
          </Badge>
          <Badge bg="primary" text="secondary" className={`w-auto mt-1 me-1`}>
            Regular Expression
          </Badge>
          <Badge bg="primary" text="secondary" className={`w-auto mt-1 me-1`}>
            SQL
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
        <Col xs={12}>
          {/* iK Leave 6 empty space at the start of the paragraph */}
          {/* &#160;&#160;&#160;&#160;&#160;&#160; */}
          {/* iK for inline <code> tags, use codeText eg. &#160;<code className={`${codeText}`}>iKcode</code> */}
          {/* use <h5> for headings if neded */}
          <p>
            &#160;&#160;&#160;&#160;&#160;&#160;Sometimes the client side has to
            produce the date of the user interaction before sending it to the
            server api. And sometimes they have to format the date and time
            before sending it to the server api. And sometimes they have to
            specifically format the date and time in SQL date field before
            sending it to the server api. That&#39;s what we will be looking at.
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
            particularly interested in, the&#160;
            <code className={`${codeText}`}>created_on</code> field. The&#160;
            <code className={`${codeText}`}>created_on</code> field is where
            dates and time are stored within the database (there are other
            fields that can store date and times too).
          </p>
          <p>
            In order to store timestamp within&#160;
            <code className={`${codeText}`}>created_on</code>, you will first
            need to transform it to the required structure. Depending on the SQL
            server, you might have to format the timestamp yourself before
            sending to the server if the server is not setup for that. The most
            common SQL format is&#160;
            <code className={`${codeText}`}>yyyy-mm-dd hh:mm:ss</code>. But that
            can be a little tricky do.
          </p>

          <h5>Solution:</h5>
        </Col>

        {/* iK place any code blocks if you have any for blog post */}
        {/* the code block component */}
        <Col xs={12}>
          <Blog1 />
        </Col>

        <Col xs={12}>
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
