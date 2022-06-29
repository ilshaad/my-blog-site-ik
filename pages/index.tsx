// this home page is really just the main tag for the / home page
// contains all the blog post list so user can scroll & choose to read any article they want

import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Badge, Container, Row } from "react-bootstrap";
import styles from "../styles/pages/index.module.scss";

const Home: NextPage = () => {
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

      <h4>Latest posts:</h4>

      {/* blog post collection list */}
      <Container fluid as="ul">
        {/* /blog/1 */}
        <Row as="li" className="bg-light">
          <h5>Create timestamp in SQL format</h5>

          {/* list of prequisite skills for the blog */}
          <Badge bg="primary" text="secondary" className="me-1">
            Javascript
          </Badge>
          <Badge bg="primary" text="secondary">
            Regular Expression
          </Badge>

          <p className={styles.index_page_blogPostSample}>
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
        </Row>

        {/* /blog/1 */}
        <Row as="li" className="bg-light">
          <h5>Create timestamp in SQL format</h5>

          {/* list of prequisite skills for the blog */}
          <Badge bg="primary" text="secondary" className="me-1">
            Javascript
          </Badge>
          <Badge bg="primary" text="secondary">
            Regular Expression
          </Badge>

          <p className={styles.index_page_blogPostSample}>
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

          <p className={styles.index_page_blogPostSample}>
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
