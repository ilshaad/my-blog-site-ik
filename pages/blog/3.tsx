// COPY VERSION OF ADDING ANOTHER BLOG POST
//    - REMEMBER IF YOU WANT TO ADD CODES WITHIN THE PAGE, USE THE ./component/blogPostCodes/COPY.tsx TO MAKE A NEW ONE

// tite:  How to create a controlled form component with React-Typescript
// date: 2022 07 08 Friday
// blog3

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
import blog3Image from "../../public/blog3img/How to create a form controlled component with React-Typescript - my-blog-site repo.jpg";

// iK code block I used
import Blog3 from "../../components/blogPostCodes/Blog3";
import Link from "next/link";

type Props = {};

export default function blog1({}: Props) {
  const {
    blogPostPage,
    svgLinks,
    blogImg,
    blogDate,
    minuteRead,
    codeText,
    homeBreadcrumb,
  } = forAllBlogsPageStyles;

  // ensure you are collecting the correct blog number
  const { blog3 } = blogsData;

  return (
    <Container className={`${blogPostPage}`}>
      <Head>
        <title>
          How to create a controlled form component with React-Typescript |
          Ilshaad Blog
        </title>
        <meta
          name="description"
          content="How to create a controlled form component with React-Typescript | Ilshaad Blog"
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
        <Breadcrumb.Item linkAs={"div"} className={homeBreadcrumb}>
          <Link href="/">Home</Link>
        </Breadcrumb.Item>

        <Breadcrumb.Item active>blog</Breadcrumb.Item>
      </Breadcrumb>

      {/* iK insert your image */}
      <Row className="mt-3 ms-2 me-2 ms-xl-5 me-xl-5">
        <Image src={blog3Image} alt="blog 3 image" className={blogImg} />
      </Row>

      {/* iK type your title */}
      {/* blog post title */}
      <Row className={`mx-auto`}>
        <h1 className={`text-primary mt-3 text-center`}>
          How to create a controlled form component with React-Typescript
        </h1>
      </Row>

      {/* iK estimate reading time */}
      {/* length of time you think it complete read */}
      <Row className={`mx-auto`}>
        <p className={`${minuteRead} text-center`}>6 min read</p>
      </Row>

      {/* iK date your blog post */}
      {/* iK collect your blog date from blogsData object */}
      <Row className={`mb-2 mx-auto`}>
        <time
          dateTime={blog3.dateTime_attribute}
          className={`${blogDate} d-block text-center`}
        >
          {blog3.dateDisplay}
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
          <Badge bg="primary" text="secondary" className={`w-auto mt-1 me-1`}>
            React
          </Badge>
        </div>
      </Row>

      {/* list expert level knowledge of each prequisite skills required by reader to understand and do within this blog */}
      <Row style={{ fontSize: "0.9rem" }}>
        <Col xs={{ span: 9, offset: 1 }}>
          <ul>
            <li>
              Should have good knowledge of Javascript, Typescript and React
            </li>
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
            &#160;&#160;&#160;&#160;&#160;&#160;It is always tricky when
            creating forms, especially when it is a large form. You have to
            configure your inputs you want the user to insert but also be able
            to collect the form values and complete the desired task, such as
            pass the data to the API server.
          </p>

          <p>
            In React, it is strongly recommended to use controlled form
            components. Controlled forms in simple terms is watching and
            controlling every in&#39;s and out&#39;s value within the form. Say
            the user has a simple text box to type in, as they type in character
            by character, controlled forms takes each one and updates the state
            simultaneously. However, it does require a bit of a setup. But this
            is made a bit more complicated by the inclusion of Typescript.
          </p>

          <p>
            With React-Typescript you are, more often than not, expected to
            include types and DOM casting, which can be quite daunting and
            confusing at first (it certainly did for me). But with a bit of know
            how, it will soon become second nature. For example, collecting
            input elements within the form when submitted requires using
            the&#160;
            <code className={codeText}>event</code> object. But the&#160;
            <code className={codeText}>event</code> object needs to be typed
            first, otherwise warnings on your terminal will crop up. So,
            for&#160;<code className={codeText}>submit event</code> we will need
            to give it a type of&#160;
            <code className={codeText}>FormEvent&#60;HTMLFormElement&#62;</code>
            . The&#160;<code className={codeText}>FormEvent</code> is imported
            from the React library. But that&#39;s just one type of&#160;
            <span className={codeText}>event</span>, there are others.
          </p>

          <p>
            Besides from&#160;<span className={codeText}>event</span> object, we
            also need to collect the elements, setup the state, reassign the
            state when user inputs values, etc...
          </p>

          <p>
            Lets just have a look at a simple controlled form component example
            with an&#160;
            <span className={codeText}>&#60;textarea&#62;</span> element to see
            how it is done in full.
          </p>
        </Col>

        {/* iK place any code blocks if you have any for blog post */}
        {/* the code block component */}
        <Col xs={12}>
          <Blog3 />
        </Col>

        <Col xs={12}>
          <p>
            The most significant thing you will notice is how we set the
            textarea element value but also change the value using the&#160;
            <span className={codeText}>change event</span> handler. By doing
            this, we record everything the user inserts within the textarea
            element but also assign the value of the textarea at the same time.
            This is the main gist of controlled form component.
          </p>
          <p>
            We only care about the&#160;
            <span className={codeText}>submitValue</span> state value, which
            will be the final data value. Once you have got the submitted value,
            you can go ahead and complete the form task.
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
