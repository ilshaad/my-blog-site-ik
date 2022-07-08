// copy boilerplate version if you want to add another blog codes examples within your blog post page
// iKBIM ensure you put empty space &#160; for the longest code block so it will add a nice padding to the end

import React from "react";
import styles from "../../styles/components/blogPosts/codesStyle.module.scss";

// all the styles
const {
  preCode,
  codeTag,
  comment,
  keyword,
  method,
  value,
  tab1,
  tab2,
  tab3,
  tab4,
  tab5,
  tab6,
} = styles;

type Props = {};

export function DockerfileFrontend({}: Props) {
  return (
    <pre className={`${preCode} mx-auto`}>
      <code className={`${codeTag} mx-auto`} role="code">
        <div className={comment}>
          <div># ./frontend/Dockerfile file</div>
          <br />
          <div># Create a Node.js and Alpine container</div>
          <div># Use whatever is the latest version from Docker hub</div>
        </div>
        <div>
          <span className={keyword}>FROM</span> node:18.5.0-alpine3.16
        </div>
        <br />

        <div className={comment}>
          # Create directory your app will be build in within the Alpine
          container
        </div>
        <div>
          <span className={keyword}>WORKDIR</span> /frontend
        </div>
        <br />

        <div className={comment}>
          # copy both your package.json and package-lock-json file within the
          /frontend directory&#160;
        </div>
        <div>
          <span className={keyword}>COPY</span> ./package.json .
        </div>
        <div>
          <span className={keyword}>COPY</span> ./package.lock.json .
        </div>
        <br />

        <div className={comment}># Install packages</div>
        <div>
          <span className={keyword}>RUN</span> npm ci
        </div>
        <br />

        <div className={comment}>
          # After install, copy all files within ./frontend directory
        </div>
        <div>
          <span className={keyword}>COPY</span> . .
        </div>
        <br />

        <div className={comment}># Build your app</div>
        <div>
          <span className={keyword}>RUN</span> npm run build
        </div>
        <br />

        <div className={comment}># Expose frontend app port number</div>
        <div>
          <span className={keyword}>EXPOSE</span> 3000
        </div>
        <br />

        <div className={comment}>Run your frontend server</div>
        <div>
          <span className={keyword}>CMD</span> npm run server
        </div>
      </code>
    </pre>
  );
}

export function DockerComposeFile() {
  return (
    <pre className={`${preCode} mx-auto`}>
      <code className={`${codeTag} mx-auto`} role="code">
        <div className={comment}># ./docker-compose.yml file</div>

        <div>
          <span className={keyword}>version</span>:&#160;&#34;3.8&#34;
        </div>

        <div>
          <span className={keyword}>services</span>:
        </div>

        <div className={tab1}>
          <span className={keyword}>frontendApp</span>:
        </div>

        <div className={tab2}>
          <span className={keyword}>build</span>:
        </div>

        <div className={tab3}>
          <div>
            <span className={keyword}>context</span>: ./frontend
          </div>

          <div>
            <span className={keyword}>dockerfile</span>: Dockerfile&#160;
          </div>
        </div>

        <div className={tab2}>
          <span className={keyword}>ports</span>:
        </div>

        <div className={tab3}>-&#160;&#34;3000:3000&#34;</div>
        <br />

        <div className={tab1}>
          <span className={keyword}>backendApp</span>:
        </div>

        <div className={tab2}>
          <span className={keyword}>build</span>:
        </div>

        <div className={tab3}>
          <div>
            <span className={keyword}>context</span>:&#160;./backend
          </div>

          <div>
            <span className={keyword}>dockerfile</span>:&#160;Dockerfile
          </div>
        </div>

        <div className={tab2}>
          <span className={keyword}>ports</span>:
        </div>

        <div className={tab3}>-&#160;&#34;4000:4000&#34;</div>
      </code>
    </pre>
  );
}

export function GithubActionsFile() {
  return (
    <pre className={`${preCode} mx-auto`}>
      <code className={`${codeTag} mx-auto`} role="code">
        <div className={comment}>./.github/workflows/main.yml</div>

        <div>
          <span className={keyword}>name</span>: Fullstack CSR app
        </div>

        <div className={comment}>
          # Setup trigger deployment when you git push in the master branch
        </div>
        <div>
          <span className={keyword}>on</span>:
        </div>

        <div className={tab1}>
          <span className={keyword}>push</span>:
        </div>

        <div className={tab2}>
          <span className={keyword}>branches</span>:
        </div>

        <div className={tab3}>- master</div>
        <br />

        <div>
          <span className={keyword}>jobs</span>:
        </div>

        <div className={tab1}>
          <span className={keyword}>build</span>:
        </div>

        <div className={tab2}>
          <div>
            <span className={keyword}>runs-on</span>: ubuntu-latest
          </div>

          <div>
            <span className={keyword}>steps</span>:
          </div>
        </div>

        <div className={tab3}>
          <div className={comment}># Looks at your repositoty</div>

          <div>
            -&#160;<span className={keyword}>uses</span>: actions/checkout@v2
          </div>

          <div className={comment}>
            # Create and deploy your multiple containers
          </div>
          <div>
            -&#160;<span className={keyword}>name</span>: Deploy multiple Docker
            images to Heroku apps
          </div>
        </div>

        <div className={tab4}>
          <div>
            <span className={keyword}>uses</span>:
            snithyanantham/docker-compose-mulitple-apps-heroku-deploy@v1.0
          </div>

          <div>
            <span className={keyword}>id</span>: heroku
          </div>

          <div>
            <span className={keyword}>with</span>:
          </div>
        </div>

        <div className={tab5}>
          <div>
            <span className={keyword}>email</span>: $
          </div>
        </div>
      </code>
    </pre>
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
