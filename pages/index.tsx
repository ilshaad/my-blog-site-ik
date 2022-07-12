// this home page is really just the main tag for the / home page
//  - but does not contain the <AsideBox/> component within it. That is control by grid css
// contains all the blog post list so user can scroll & choose to read any article they want

import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Badge, Breadcrumb, Container, Row } from "react-bootstrap";
import EmailMe_anchor_svg from "../components/anchor_svg/EmailMe_anchor_svg";
import Github_anchor_svg from "../components/anchor_svg/Github_anchor_svg";
import Home_anchor_svg from "../components/anchor_svg/Home_anchor_svg";
import LinkedIn_anchor_svg from "../components/anchor_svg/LinkedIn_anchor_svg";
import Portfolio_anchor_svg from "../components/anchor_svg/Portfolio_anchor_svg";
import { blogsData } from "../scripts/blogsData";
import styles from "../styles/pages/index.module.scss";

const Home: NextPage = () => {
  const {
    home,
    blogPostTitle,
    index_page_blogPostSample,
    indexPage_readMoreLink,
    blogDate,
    svgLinks,
    codeText,
  } = styles;

  return (
    <Container className={home}>
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
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="apple-mobile-web-app-title" content="Ilshaad blog" />
        <meta name="application-name" content="Ilshaad blog" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

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

      {/* breadcrumb for home page */}
      <Breadcrumb
        className={`d-none d-sm-block mt-2 mb-n3 ms-2 me-2 ms-xl-4 me-xl-4`}
      >
        <Breadcrumb.Item active>Home</Breadcrumb.Item>
      </Breadcrumb>

      <h4
        className={`text-decoration-underline mt-2 mb-3 ms-2 me-2 ms-xl-4 me-xl-4`}
      >
        Latest posts:
      </h4>

      {/* blog post collection list */}
      <Container fluid as="ul" data-testid="blog list box">
        {/* /blog/5 */}
        <Row as="li" className="bg-light border border-2 mb-4">
          <Link href="/blog/5">
            <h4 className={`${blogPostTitle} mt-2 mb-1`}>
              Deploy multiple Docker containers using Github Actions and Heroku
            </h4>
          </Link>

          {/* list of prequisite skills for the blog */}
          <div>
            <Badge bg="primary" text="secondary" className={`w-auto mt-1 me-1`}>
              Docker
            </Badge>
            <Badge bg="primary" text="secondary" className={`w-auto mt-1 me-1`}>
              Docker Compose
            </Badge>
            <Badge bg="primary" text="secondary" className={`w-auto mt-1 me-1`}>
              Heroku
            </Badge>
            <Badge bg="primary" text="secondary" className={`w-auto mt-1 me-1`}>
              Github Actions
            </Badge>
            <Badge bg="primary" text="secondary" className={`w-auto mt-1 me-1`}>
              Fullstack - Client Side Rendering
            </Badge>
            <Badge bg="primary" text="secondary" className={`w-auto mt-1 me-1`}>
              CI/CD
            </Badge>
          </div>

          {/* must contain at least 163 characters */}
          <p className={`${index_page_blogPostSample} mt-1`}>
            It is very common to deploy apps using CI/CD (Continuous Integration
            / Continuous Delivery). Actually, depending on which cloud
            application platform provider you use
          </p>

          <span className={`mt-n4`}>...</span>

          <Link href="/blog/5" className={`${indexPage_readMoreLink}`}>
            Read more &rarr;
          </Link>

          <time
            dateTime={blogsData.blog5.dateTime_attribute}
            className={`${blogDate} d-block text-end mb-2`}
          >
            {blogsData.blog5.dateDisplay}
          </time>
        </Row>

        {/* /blog/6 */}
        <Row as="li" className="bg-light border border-2 mb-4">
          <Link href="/blog/6">
            <h4 className={`${blogPostTitle} mt-2 mb-1`}>
              Create an ascending and descending sort function
            </h4>
          </Link>

          {/* list of prequisite skills for the blog */}
          <div>
            <Badge bg="primary" text="secondary" className={`w-auto mt-1 me-1`}>
              Javascript
            </Badge>
            <Badge bg="primary" text="secondary" className={`w-auto mt-1 me-1`}>
              Typescript
            </Badge>
          </div>

          {/* must contain at least 163 characters */}
          <p className={`${index_page_blogPostSample} mt-1`}>
            You will often see on many sites containing some sort of list or
            table, that it is organised in a particular order, could be by title
            order, name order or even
          </p>

          <span className={`mt-n4`}>...</span>

          <Link href="/blog/6" className={`${indexPage_readMoreLink}`}>
            Read more &rarr;
          </Link>

          <time
            dateTime={blogsData.blog6.dateTime_attribute}
            className={`${blogDate} d-block text-end mb-2`}
          >
            {blogsData.blog6.dateDisplay}
          </time>
        </Row>

        {/* /blog/3 */}
        <Row as="li" className="bg-light border border-2 mb-4">
          <Link href="/blog/3">
            <h4 className={`${blogPostTitle} mt-2 mb-1`}>
              How to create a controlled form component with React-Typescript
            </h4>
          </Link>

          {/* list of prequisite skills for the blog */}
          <div>
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

          {/* must contain at least 163 characters */}
          <p className={`${index_page_blogPostSample} mt-1`}>
            It is always tricky when creating forms, especially when it is a
            large form. You have to configure your inputs you want the user to
            insert but also be able to collect
          </p>

          <span className={`mt-n4`}>...</span>

          <Link href="/blog/3" className={`${indexPage_readMoreLink}`}>
            Read more &rarr;
          </Link>

          <time
            dateTime={blogsData.blog3.dateTime_attribute}
            className={`${blogDate} d-block text-end mb-2`}
          >
            {blogsData.blog3.dateDisplay}
          </time>
        </Row>

        {/* /blog/1 */}
        <Row as="li" className="bg-light border border-2 mb-4">
          <Link href="/blog/1">
            <h4 className={`${blogPostTitle} mt-2 mb-1`}>
              Create timestamp in SQL format
            </h4>
          </Link>

          {/* list of prequisite skills for the blog */}
          <div>
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

          {/* must contain at least 163 characters */}
          <p className={`${index_page_blogPostSample} mt-1`}>
            Sometimes the client side has to produce the date of the user
            interaction before sending it to the server api. And sometimes they
            have to format the date and time
          </p>

          <span className={`mt-n4`}>...</span>

          <Link href="/blog/1" className={`${indexPage_readMoreLink}`}>
            Read more &rarr;
          </Link>

          <time
            dateTime={blogsData.blog1.dateTime_attribute}
            className={`${blogDate} d-block text-end mb-2`}
          >
            {blogsData.blog1.dateDisplay}
          </time>
        </Row>

        {/* /blog/4 */}
        <Row as="li" className="bg-light border border-2 mb-4">
          <Link href="/blog/4">
            <h4 className={`${blogPostTitle} mt-2 mb-1`}>
              Create an Axios instance
            </h4>
          </Link>

          {/* list of prequisite skills for the blog */}
          <div>
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

          {/* must contain at least 163 characters */}
          <p className={`${index_page_blogPostSample} mt-1`}>
            If you are into programming, then you will likely have heard of DRY
            (don&#39; repeat yourself). Basically, writing the same code
            repeatedly can be quite tedious. And it
          </p>

          <span className={`mt-n4`}>...</span>

          <Link href="/blog/4" className={`${indexPage_readMoreLink}`}>
            Read more &rarr;
          </Link>

          <time
            dateTime={blogsData.blog4.dateTime_attribute}
            className={`${blogDate} d-block text-end mb-2`}
          >
            {blogsData.blog4.dateDisplay}
          </time>
        </Row>

        {/* /blog/8 */}
        <Row as="li" className="bg-light border border-2 mb-4">
          <Link href="/blog/8">
            <h4 className={`${blogPostTitle} mt-2 mb-1`}>
              Most common HTML entities you will use
            </h4>
          </Link>

          {/* list of prequisite skills for the blog */}
          <div>
            <Badge bg="primary" text="secondary" className={`w-auto mt-1 me-1`}>
              HTML
            </Badge>
          </div>

          {/* must contain at least 163 characters */}
          <p className={`${index_page_blogPostSample} mt-1`}>
            When writing in HTML, you have to follow the conventional tag
            structure and its keyword characters, and the same goes along with
            some other framework languages too,
          </p>

          <span className={`mt-n4`}>...</span>

          <Link href="/blog/8" className={`${indexPage_readMoreLink}`}>
            Read more &rarr;
          </Link>

          <time
            dateTime={blogsData.blog8.dateTime_attribute}
            className={`${blogDate} d-block text-end mb-2`}
          >
            {blogsData.blog8.dateDisplay}
          </time>
        </Row>

        {/* /blog/7 */}
        <Row as="li" className="bg-light border border-2 mb-4">
          <Link href="/blog/7">
            <h4 className={`${blogPostTitle} mt-2 mb-1`}>
              Capitalise the first character of a word
            </h4>
          </Link>

          {/* list of prequisite skills for the blog */}
          <div>
            <Badge bg="primary" text="secondary" className={`w-auto mt-1 me-1`}>
              Javascript
            </Badge>
            <Badge bg="primary" text="secondary" className={`w-auto mt-1 me-1`}>
              Typescript
            </Badge>
          </div>

          {/* must contain at least 163 characters */}
          <p className={`${index_page_blogPostSample} mt-1`}>
            There are some occasions when we will need to capitalise on the
            first character of a word. Mostly, capitalising names is the most
            commonly used. But regardless of what
          </p>

          <span className={`mt-n4`}>...</span>

          <Link href="/blog/7" className={`${indexPage_readMoreLink}`}>
            Read more &rarr;
          </Link>

          <time
            dateTime={blogsData.blog7.dateTime_attribute}
            className={`${blogDate} d-block text-end mb-2`}
          >
            {blogsData.blog7.dateDisplay}
          </time>
        </Row>

        {/* /blog/2 */}
        <Row as="li" className="bg-light border border-2 mb-4">
          <Link href="/blog/2">
            <h4 className={`${blogPostTitle} mt-2 mb-1`}>
              Parse SQL timestamp
            </h4>
          </Link>

          {/* list of prequisite skills for the blog */}
          <div>
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

          {/* must contain at least 163 characters */}
          <p className={`${index_page_blogPostSample} mt-1`}>
            If you regularly collect api data from the server, you might
            sometimes notice something peculiar when gathering the date data.
            The date value could appear as&#160;
            <code className={`${codeText}`}>2021-06-01T11:08:01.000Z</code>.
          </p>

          <span className={`mt-n4`}>...</span>

          <Link href="/blog/2" className={`${indexPage_readMoreLink}`}>
            Read more &rarr;
          </Link>

          <time
            dateTime={blogsData.blog2.dateTime_attribute}
            className={`${blogDate} d-block text-end mb-2`}
          >
            {blogsData.blog2.dateDisplay}
          </time>
        </Row>
      </Container>
    </Container>
  );
};

export default Home;
