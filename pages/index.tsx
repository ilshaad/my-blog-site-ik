// this home page is really just the main tag for the / home page
//  - but does not contain the <AsideBox/> component within it. That is control by grid css
// contains all the blog post list so user can scroll & choose to read any article they want

import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Badge, Container, Row } from "react-bootstrap";
import EmailMe_anchor_svg from "../components/anchor_svg/EmailMe_anchor_svg";
import Github_anchor_svg from "../components/anchor_svg/Github_anchor_svg";
import Home_anchor_svg from "../components/anchor_svg/Home_anchor_svg";
import LinkedIn_anchor_svg from "../components/anchor_svg/LinkedIn_anchor_svg";
import Portfolio_anchor_svg from "../components/anchor_svg/Portfolio_anchor_svg";
import styles from "../styles/pages/index.module.scss";

const Home: NextPage = () => {
  const {
    blogPostTitle,
    index_page_blogPostSample,
    indexPage_readMoreLink,
    blogDate,
    svgLinks,
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

      {/* svg get in touch links (linkedin / portfolio / email / github) */}
      <Container className={`${svgLinks} text-primary`}>
        <Home_anchor_svg />
        <span className={`text-dark fw-bolder`}>|</span>
        <Github_anchor_svg />
        <LinkedIn_anchor_svg />
        <Portfolio_anchor_svg />
        <EmailMe_anchor_svg />
      </Container>

      <h4 className={`text-decoration-underline mt-2 mb-2`}>Latest posts:</h4>

      {/* blog post collection list */}
      <Container fluid as="ul">
        {/* /blog/1 */}
        <Row as="li" className="bg-light border border-2 mb-4">
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
        <Row as="li" className="bg-light border border-2 mb-4">
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
        <Row as="li" className="bg-light border border-2 mb-4">
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
        <Row as="li" className="bg-light border border-2 mb-4">
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
        <Row as="li" className="bg-light border border-2 mb-4">
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
        <Row as="li" className="bg-light border border-2 mb-4">
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
      </Container>
    </Container>
  );
};

export default Home;
