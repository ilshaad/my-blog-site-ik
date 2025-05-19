// tite:  Deploy multiple Docker containers using Github Actions and Heroku
// date: 2022 08 01 Monday
// blog5

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

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Badge, Breadcrumb, Col, Container, Row } from "react-bootstrap";

import EmailMe_anchor_svg from "../../components/anchor_svg/EmailMe_anchor_svg";
import Github_anchor_svg from "../../components/anchor_svg/Github_anchor_svg";
import Home_anchor_svg from "../../components/anchor_svg/Home_anchor_svg";
import LinkedIn_anchor_svg from "../../components/anchor_svg/LinkedIn_anchor_svg";
import Portfolio_anchor_svg from "../../components/anchor_svg/Portfolio_anchor_svg";

import forAllBlogsPageStyles from "../../styles/pages/blogsExtras/forAllBlogsPageStyles.module.css";

// blogs data object
import { blogsData } from "../../scripts/blogsData";

// iK blog image
import blog5Image from "../../public/blog5img/blog5.jpg";

// iK code block I used
import {
  DockerComposeFile,
  DockerfileFrontend,
  GithubActionsFile,
} from "../../components/blogPostCodes/Blog5";

type Props = {};

export default function blog5({}: Props) {
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
  const { blog5 } = blogsData;

  return (
    <Container className={`${blogPostPage}`}>
      <Head>
        <title>
          Deploy multiple Docker containers pipeline using Github Actions and
          Heroku | Ilshaad Blog
        </title>
        <meta
          name="description"
          content="Deploy multiple Docker containers using Github Actions and Heroku | Ilshaad Blog"
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
        <Image src={blog5Image} alt="blog 5 image" className={blogImg} />
      </Row>

      {/* iK type your title */}
      {/* blog post title */}
      <Row className={`mx-auto`}>
        <h1 className={`text-primary mt-3 text-center`}>
          Deploy multiple Docker containers using Github Actions and Heroku
        </h1>
      </Row>

      {/* iK estimate reading time */}
      {/* length of time you think it complete read */}
      <Row className={`mx-auto`}>
        <p className={`${minuteRead} text-center`}>8 min read</p>
      </Row>

      {/* iK date your blog post */}
      {/* iK collect your blog date from blogsData object */}
      <Row className={`mb-2 mx-auto`}>
        <time
          dateTime={blog5.dateTime_attribute}
          className={`${blogDate} d-block text-center`}
        >
          {blog5.dateDisplay}
        </time>
      </Row>

      {/* iK put all the programming language you need to know */}
      {/* language know how */}
      <Row className={`mx-auto`}>
        <h5 className={`text-center mb-3`}>Prequisite:</h5>
        <div className={`mt-n2 mb-3 text-center`}>
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
      </Row>

      {/* list expert level knowledge of each prequisite skills required by reader to understand and do within this blog */}
      <Row style={{ fontSize: "0.9rem" }}>
        <Col xs={{ span: 9, offset: 1 }}>
          <ul>
            <li>Should have good knowledge of Docker and Docker-Compose</li>
            <li>Installed Docker within your local device</li>
            <li>Should be registered to Heroku and Github</li>
            <li>Basic understanding of CSR and CI/CD</li>
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
            &#160;&#160;&#160;&#160;&#160;&#160;It is very common to deploy apps
            using CI/CD (Continuous Integration / Continuous Delivery).
            Actually, depending on which cloud application platform provider you
            use, all you will need to do is git push your app and they will
            setup a pipeline and deploy the app online for you. But it starts to
            get a bit complicated when you want to configure the pipeline
            yourself to match your app needs, plus, not to mention, it could get
            expensive real fast too.
          </p>
          <p>
            What if you have a fullstack app which is using client side
            rendering? It would mean that you will need to hook up the frontend
            and backend api together since they are considered as separate apps
            within the repo. Usually, that is not a problem in itself, but it
            gets tricky if you want to implement a pipeline to both the
            applications. To throw in another spanner in the works, let&#39;s
            say we are wrapping the frontend and backend in a Docker container.
            We are going to be doing exactly this, using Heroku as your cloud
            provider.
          </p>

          <p>
            Now it is worth noting that Heroku already provides a container
            deployment service, but it is not ideal when you have a fullstack
            CSR app (containing both frontend and backend), since you will have
            to git push them individually. Plus, having full control of your
            Docker means you control all app version packages from breaking and
            testing.
          </p>
          <p>
            Let&#39;s assume your frontend and backend is setup within your
            repo, we should first create a&#160;
            <span className={codeText}>Dockerfile</span> file for each app,
            which should look something like this:
          </p>
        </Col>

        {/* iK place any code blocks if you have any for blog post */}
        {/* the code block component */}
        <Col xs={12}>
          <DockerfileFrontend />
        </Col>

        <Col xs={12}>
          <p>
            Do not forget to create a&#160;
            <span className={codeText}>Dockerfile</span> file for your backend
            app too. It should look very similar to the frontend&#160;
            <span className={codeText}>Dockerfile</span> file.
          </p>
          <p>
            When both&#160;<span className={codeText}>Dockerfile</span> files
            are working, you can proceed with Docker Compose which infuses both
            containers together.
          </p>
        </Col>

        <Col xs={12}>
          <DockerComposeFile />
        </Col>

        <Col xs={12}>
          <p>
            Use the&#160;<span className={codeText}>docker-compose up</span>
            &#160;command in the terminal to ensure everything is running
            smoothly.
          </p>

          <p>
            Now we can move onto the next step, which is to create the Github
            Actions CI/CD pipeline (be sure you have already been registered
            with Github and Heroku prior). The Github Actions file is quite
            straightforward but you will need a few things beforehand; your
            Heroku email address and your Heroku api key, which can be found in
            your Heroku account settings. Once you get that, go to your Github
            app repo, and you set your environment secrets variables (found in
            your repo settings). Be sure to set&#160;
            <span className={codeText}>HEROKU_EMAIL</span> and&#160;
            <span className={codeText}>HEROKU_API_KEY</span> keys exactly as
            shown because your Github Actions file will search for these two
            secrets in order to give you access to your Heroku account.
          </p>
          <p>
            After you have set your repo secrets, we can now create the Github
            Actions file to deploy your fullstack docker containers.
          </p>
        </Col>

        <Col xs={12}>
          <GithubActionsFile />
        </Col>

        <Col xs={12}>
          <p>
            If all done correctly, everytime you git push your local repo,
            Github Actions will build your Docker images and deploy to Heroku.
          </p>
          <p>
            It does require a bit of configuration on your behalf, but once
            completed, in the long run it will serve you well, saving you more
            time.
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
