// tite:  Parse SQL timestamp
// date: 2022 07 04 Monday
// blog1

// IK TODO LIST FOR NEW BLOGS
// -note route / title / date on /Route-n-features.txt file in your dropbox folder
// -enter the title & date of blog within the ./scripts/blogsData.ts (blogsData object literal)
// -write the material as you would
// -estimate reading time
// -find or create image for blog post
//   -save image within dropbox blog-site folder
//   -save image within /public folder in you app
// -seo
// -test
//   - ./__tests__/pages/blog/2.test.tsx	(for actual page)
//   - ./__tests__/components/blogPostCodes/Blog2.tsx	(for possible code blocks you may use within the blog page)
// -update / page blog list

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

// blogs data object
import { blogsData } from "../../scripts/blogsData";

// iK blog image
import blog2Image from "../../public/blog2img/Parse SQL timestamp.jpg";

// iK code block I used
import Blog2 from "../../components/blogPostCodes/Blog2";

type Props = {};

// parse timestamp - remove sql T & microseconds for clean date & time
/** parse sql timestamp
 * just return date & time format string from a typical sql timestamp format
 * sql timestampe would look like this "2021-06-01T11:08:01.000Z"
 *  - we want it to look like this "2021-06-01 11:08:01"
 */
//  export default (timestampP: string) => {
//   // let timestampP = "2021-06-01T11:08:01.000Z";

//   const removeT = timestampP.replace("T", " ");

//   const removeMicroSecondsRegEx = /\.\w+/g;

//   const timestamp = removeT.replace(removeMicroSecondsRegEx, "");

//   return timestamp;
// };

export default function blog2({}: Props) {
  const { blogPostPage, svgLinks, blogDate, minuteRead, codeText } =
    forAllBlogsPageStyles;

  // ensure you are collecting the correct blog number
  const { blog2 } = blogsData;

  return (
    <Container className={`${blogPostPage}`}>
      <Head>
        <title>Parse SQL timestamp | Ilshaad Blog</title>
        <meta name="description" content="Parse SQL timestamp | Ilshaad Blog" />

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

      {/* iK insert your image */}
      <Row className="mt-3 ms-2 me-2 ms-xl-5 me-xl-5">
        <Image src={blog2Image} alt="blog 1 image" />
      </Row>

      {/* iK type your title */}
      {/* blog post title */}
      <Row className={`mx-auto`}>
        <h1 className={`text-primary mt-3 text-center`}>Parse SQL timestamp</h1>
      </Row>

      {/* iK estimate reading time */}
      {/* length of time you think it complete read */}
      <Row className={`mx-auto`}>
        <p className={`${minuteRead} text-center`}>3 min read</p>
      </Row>

      {/* iK date your blog post */}
      {/* iK collect your blog date from blogsData object */}
      <Row className={`mb-2 mx-auto`}>
        <time
          dateTime={blog2.dateTime_attribute}
          className={`${blogDate} d-block text-center`}
        >
          {blog2.dateDisplay}
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
            SQL
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
        <Col xs={12}>
          {/* iK Leave 10 empty space at the start of the paragraph */}
          {/* &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; */}
          {/* iK for <code> tags, use codeText eg. &#160;<code className={`${codeText}`}>iKcode</code> */}
          {/* use <h5> for headings if neded */}
          <p>
            &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; If you
            regularly collect api data from the server, you might sometimes
            notice something peculiar when gathering the date data. The date
            value could appear as&#160;
            <code className={`${codeText}`}>2021-06-01T11:08:01.000Z</code>. The
            &#160;<code className={`${codeText}`}>T</code> and &#160;
            <code className={`${codeText}`}>Z</code> are something you normally
            do not want appearing if you require the date value to be displayed
            within the web UI. Plus, the milli seconds does not look great to
            the average person unless it&#39;s for something very specific. The
            ideal output date and time would be &#160;
            <code className={`${codeText}`}>2021-06-01 11:08:01</code>.
          </p>

          <p>
            In order to get the desirable date output, we need to do a bit of
            conversion. One way is to use a regular expression to replace&#160;
            <code className={`${codeText}`}>T</code> with an empty space and
            then cut off everything after seconds. Funny enough, I am going to
            show you how.
          </p>

          <h5>Solution:</h5>
        </Col>

        {/* iK place any code blocks if you have any for blog post */}
        {/* the code block component */}
        <Col xs={12}>
          <Blog2 />
        </Col>

        <Col xs={12}>
          <p>
            That&#39;s about it. A short function which could save you some
            hassle when parsing SQL date format.
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
