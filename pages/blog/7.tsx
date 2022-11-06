// COPY VERSION OF ADDING ANOTHER BLOG POST
//    - REMEMBER IF YOU WANT TO ADD CODES WITHIN THE PAGE, USE THE ./component/blogPostCodes/COPY.tsx TO MAKE A NEW ONE

// tite:  Capitalise the first character of a word
// date: iK check blogsData.ts file
// blog7

// IK TODO LIST FOR NEW BLOGS
// -note route / title / date on /Route-n-features.txt file in your dropbox folder
// -enter the title & date of blog within the ./scripts/blogsData.ts (blogsData object literal)
// -add a quick link in the index.tsx page so you can go to the page easily
//  - we will update it properly later
// -write the material as you would
// -check spelling grammer
// -estimate reading time
// -enter the prequisite knowledge level list base on your material
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
import Link from "next/link";
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
import blog7Image from "../../public/blog7img/blog7.jpg";

// iK code block I used
import Blog7 from "../../components/blogPostCodes/Blog7";

type Props = {};

export default function blog7({}: Props) {
  const {
    blogPostPage,
    svgLinks,
    blogDate,
    minuteRead,
    codeText,
    homeBreadcrumb,
  } = forAllBlogsPageStyles;

  // ensure you are collecting the correct blog number
  const { blog7 } = blogsData;

  return (
    <Container className={`${blogPostPage}`}>
      <Head>
        <title>Capitalise the first character of a word | Ilshaad Blog</title>
        <meta
          name="description"
          content="Capitalise the first character of a word | Ilshaad Blog"
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
        <Breadcrumb.Item className={homeBreadcrumb}>
          <Link href="/">Home</Link>
        </Breadcrumb.Item>

        <Breadcrumb.Item active>blog</Breadcrumb.Item>
      </Breadcrumb>

      {/* iK insert your image */}
      <Row className="mt-3 ms-2 me-2 ms-xl-5 me-xl-5">
        <Image src={blog7Image} alt="blog 7 image" />
      </Row>

      {/* iK type your title */}
      {/* blog post title */}
      <Row className={`mx-auto`}>
        <h1 className={`text-primary mt-3 text-center`}>
          Capitalise the first character of a word
        </h1>
      </Row>

      {/* iK estimate reading time */}
      {/* length of time you think it complete read */}
      <Row className={`mx-auto`}>
        <p className={`${minuteRead} text-center`}>1 min read</p>
      </Row>

      {/* iK date your blog post */}
      {/* iK collect your blog date from blogsData object */}
      <Row className={`mb-2 mx-auto`}>
        <time
          dateTime={blog7.dateTime_attribute}
          className={`${blogDate} d-block text-center`}
        >
          {blog7.dateDisplay}
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
            Typescript
          </Badge>
        </div>
      </Row>

      {/* list expert level knowledge of each prequisite skills required by reader to understand and do within this blog */}
      <Row style={{ fontSize: "0.9rem" }}>
        <Col xs={{ span: 9, offset: 1 }}>
          <ul>
            <li>Basic understand of JavaScript and functions</li>
            <li>At least some basic understanding of typescript types</li>
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
            &#160;&#160;&#160;&#160;&#160;&#160;There are some occasions when we
            will need to capitalise on the first character of a word. Mostly,
            capitalising names is the most commonly used. But regardless of what
            your reason is, here is a simple re-usable function that will do
            just that.
          </p>
        </Col>

        {/* iK place any code blocks if you have any for blog post */}
        {/* the code block component */}
        <Col xs={12}>
          <Blog7 />
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
