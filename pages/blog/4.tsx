// COPY VERSION OF ADDING ANOTHER BLOG POST
//    - REMEMBER IF YOU WANT TO ADD CODES WITHIN THE PAGE, USE THE ./component/blogPostCodes/COPY.tsx TO MAKE A NEW ONE

// tite:  Create an Axios instance
// date: 2022 07 17 Sunday
// blog4

// IK TODO LIST FOR NEW BLOGS
// -note route / title / date on /Route-n-features.txt file in your dropbox folder
// -enter the title & date of blog within the ./scripts/blogsData.ts (blogsData object literal)
// -add a quick link in the index.tsx page so you can go to the page easily
//  - we will update it properly later
// -write the material as you would
// -check spelling grammer
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
import blog4Image from "../../public/blog4img/Axios Instance.jpg";

// iK code block I used
import {
  InstanceCreateCode,
  FetchInstanceCode,
} from "../../components/blogPostCodes/Blog4";
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
  const { blog4 } = blogsData;

  return (
    <Container className={`${blogPostPage}`}>
      <Head>
        <title>Create an Axios instance | Ilshaad Blog</title>
        <meta
          name="description"
          content="Create an Axios instance | Ilshaad Blog"
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
        <link rel="manifest" href="/manifest.json" />
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
        <Image src={blog4Image} alt="blog 4 image" />
      </Row>

      {/* iK type your title */}
      {/* blog post title */}
      <Row className={`mx-auto`}>
        <h1 className={`text-primary mt-3 text-center`}>
          Create an Axios instance
        </h1>
      </Row>

      {/* iK estimate reading time */}
      {/* length of time you think it complete read */}
      <Row className={`mx-auto`}>
        <p className={`${minuteRead} text-center`}>7 min read</p>
      </Row>

      {/* iK date your blog post */}
      {/* iK collect your blog date from blogsData object */}
      <Row className={`mb-2 mx-auto`}>
        <time
          dateTime={blog4.dateTime_attribute}
          className={`${blogDate} d-block text-center`}
        >
          {blog4.dateDisplay}
        </time>
      </Row>

      {/* iK put all the programming language you need to know */}
      {/* language know how */}
      <Row className={`mx-auto`}>
        <h5 className={`text-center mb-3`}>Prequisite:</h5>
        <div className={`mt-n2 mb-3 text-center`}>
          <Badge bg="primary" text="secondary" className={`w-auto mt-1 me-1`}>
            Javascript
          </Badge>
          <Badge bg="primary" text="secondary" className={`w-auto mt-1 me-1`}>
            Axios
          </Badge>
          <Badge bg="primary" text="secondary" className={`w-auto mt-1 me-1`}>
            REST API
          </Badge>
        </div>
      </Row>

      {/* list expert level knowledge of each prequisite skills required by reader to understand and do within this blog */}
      <Row style={{ fontSize: "0.9rem" }}>
        <Col xs={{ span: 9, offset: 1 }}>
          <ul>
            <li>Should have good knowledge of Javascript and REST API</li>
            <li>At least know the basics of Axios</li>
          </ul>
        </Col>
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
            &#160;&#160;&#160;&#160;&#160;&#160;If you are into programming,
            then you will likely have heard of DRY (don&#39; repeat yourself).
            Basically, writing the same code repeatedly can be quite tedious.
            And it becomes more tedious when trying to remember the url to make
            your Axios fetch a request every time. Would it not be great to just
            type in the url once, and code any methods you require out of it.
            Plus, you configure to any specific pathnames and query string.
            That&#39;s where the&#160;
            <span className={codeText}>create()</span>&#160;method comes in.
          </p>

          <p>
            Axios provides a number of methods you can use, but&#160;
            <span className={codeText}>create()</span> is one of the most useful
            ones. It creates an instance Promise object of the url API.And you
            can use that instance Promise however many times you like and
            whichever methods you need.
          </p>

          <p>
            Usually it is best to create a separate file just for the instance
            alone, and then we can import the instance to any file.
          </p>
        </Col>

        {/* iK place any code blocks if you have any for blog post */}
        {/* the code block component */}
        <Col xs={12}>
          <InstanceCreateCode />
        </Col>

        <Col xs={12}>
          <p>
            Creating an instance is simple enough, you only need the url API and
            optionally set a timeout. Once done, we can now use it freely and
            however many times we want, without having to memorise the url
            again. The instance is a Promise object, so when we use it, we get
            the Resolved or Rejected response. Let&#39;s check out the example
            below:
          </p>
        </Col>

        <Col xs={12}>
          <FetchInstanceCode />
        </Col>

        <Col xs={12}>
          <p>
            As you can see, the instance is easy to use, just like a normal
            fetch request promise object. And it is matched with its flexibility
            because, as mentioned before, you can use any methods you want (eg.
            POST, PUT, DELETE, etc) the same way as GET, you can configure the
            headers, insert a body, etc...
          </p>
          <p>
            So if you have begun a project, knowing you are going to use the
            same url API over and over, Axios instance is definitely the way to
            go.
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
