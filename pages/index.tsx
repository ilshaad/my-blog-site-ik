// this home page is really just the main tag for the / home page
//  - but does not contain the <AsideBox/> component within it. That is control by grid css
// contains all the blog post list so user can scroll & choose to read any article they want

import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Badge, Container, Row } from "react-bootstrap";
import styles from "../styles/pages/index.module.scss";

const Home: NextPage = () => {
  const {
    blogPostTitle,
    index_page_blogPostSample,
    indexPage_readMoreLink,
    blogDate,
  } = styles;

  return (
    <Container>
      <Head>
        <title>Ilshaad Blog</title>
        <meta
          name="description"
          content="Ilshaad blog site for web developers"
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

      <h4 className={`text-decoration-underline mb-2`}>Latest posts:</h4>

      {/* blog post collection list */}
      <Container fluid as="ul">
        {/* /blog/1 */}
        <Row as="li" className="bg-light border mb-3">
          <h5 className={`${blogPostTitle} mt-1 mb-0`}>
            Create timestamp in SQL format
          </h5>

          {/* list of prequisite skills for the blog */}
          <div>
            <Badge bg="primary" text="secondary" className={`w-auto mt-1 me-1`}>
              Javascript
            </Badge>
            <Badge bg="primary" text="secondary" className={`w-auto mt-1 me-1`}>
              Regular Expression
            </Badge>
            <Badge bg="primary" text="secondary" className={`w-auto mt-1 me-1`}>
              js
            </Badge>
            <Badge bg="primary" text="secondary" className={`w-auto mt-1 me-1`}>
              js
            </Badge>
          </div>

          {/* must contain at least 187 characters */}
          <p className={`${index_page_blogPostSample} mt-1`}>
            Sometimes the client side has to produce the date of the user
            interaction before sending it to the server api. And sometimes they
            have to format the date and time before sending it to the
          </p>

          <span className={`mt-n4`}>...</span>

          <Link href="/blog/1" className={`${indexPage_readMoreLink}`}>
            Read more &rarr;
          </Link>

          <time
            dateTime="2022-06-25"
            className={`${blogDate} d-block text-end text-muted`}
          >
            2022 June 25th Friday
          </time>
        </Row>

        {/* /blog/1 */}
        <Row as="li" className="bg-light border mb-3">
          <h5 className={`${blogPostTitle} mt-1 mb-0`}>
            Create timestamp in SQL format
          </h5>

          {/* list of prequisite skills for the blog */}
          <div>
            <Badge bg="primary" text="secondary" className={`w-auto mt-1 me-1`}>
              Javascript
            </Badge>
            <Badge bg="primary" text="secondary" className={`w-auto mt-1 me-1`}>
              Regular Expression
            </Badge>
            <Badge bg="primary" text="secondary" className={`w-auto mt-1 me-1`}>
              js
            </Badge>
            <Badge bg="primary" text="secondary" className={`w-auto mt-1 me-1`}>
              js
            </Badge>
          </div>

          {/* must contain at least 187 characters */}
          <p className={`${index_page_blogPostSample} mt-1`}>
            Sometimes the client side has to produce the date of the user
            interaction before sending it to the server api. And sometimes they
            have to format the date and time before sending it to the
          </p>

          <span className={`mt-n4`}>...</span>

          <Link href="/blog/1" className={`${indexPage_readMoreLink}`}>
            Read more &rarr;
          </Link>

          <time
            dateTime="2022-06-25"
            className={`${blogDate} d-block text-end text-muted`}
          >
            2022 June 25th Friday
          </time>
        </Row>

        {/* /blog/iKnumber BOILERPLATE WHEN YOU ADDING MORE POST */}
        {/* <Row as="li" className="bg-light">
          <h5>Create timestamp in SQL format</h5>

          <Badge bg="primary" text="secondary" className="me-1">
            Javascript
          </Badge>
          <Badge bg="primary" text="secondary">
            Regular Expression
          </Badge>

          <p className={index_page_blogPostSample}>
            Sometimes the client side has to produce the date of the user
            interaction before sending it to the server api. And sometimes they
            have to format the date and time before sending it to the server
            api. And sometimes have to specifically format the date and time in
          </p>

          <span>...&#160;&#160;</span>

          <Link href="/blog/1">Read more&rarr;</Link>

          <time dateTime="2022-06-25" className="d-block">
            2022 June 25th Friday
          </time>
        </Row> */}
      </Container>
    </Container>
  );
};

export default Home;
