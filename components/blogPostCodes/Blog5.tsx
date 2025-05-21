// copy boilerplate version if you want to add another blog codes examples within your blog post page
// iKBIM ensure you put empty space &#160; for the longest code block so it will add a nice padding to the end

import React from "react";
import styles from "../../styles/components/blogPosts/codesStyle.module.css";

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
          <span className={keyword}>FROM</span>&#160;
          <span className={value}>node:18.5.0-alpine3.16</span>
        </div>
        <br />

        <div className={comment}>
          # Create directory your app will be build in within the Alpine
          container
        </div>
        <div>
          <span className={keyword}>WORKDIR</span>&#160;
          <span className={value}>/frontend</span>
        </div>
        <br />

        <div className={comment}>
          # copy both your package.json and package-lock-json file within the
          /frontend directory&#160;
        </div>
        <div>
          <span className={keyword}>COPY</span>&#160;
          <span className={value}>./package.json .</span>
        </div>
        <div>
          <span className={keyword}>COPY</span>&#160;
          <span className={value}>./package.lock.json .</span>
        </div>
        <br />

        <div className={comment}># Install packages</div>
        <div>
          <span className={keyword}>RUN</span>&#160;
          <span className={value}>npm ci</span>
        </div>
        <br />

        <div className={comment}>
          # After install, copy all files within ./frontend directory
        </div>
        <div>
          <span className={keyword}>COPY</span>&#160;
          <span className={value}>. .</span>
        </div>
        <br />

        <div className={comment}># Build your app</div>
        <div>
          <span className={keyword}>RUN</span>&#160;
          <span className={value}>npm run build</span>
        </div>
        <br />

        <div className={comment}># Expose frontend app port number</div>
        <div>
          <span className={keyword}>EXPOSE</span>&#160;
          <span className={value}>3000</span>
        </div>
        <br />

        <div className={comment}>Run your frontend server</div>
        <div>
          <span className={keyword}>CMD</span>&#160;
          <span className={value}>npm run server</span>
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
          <span className={keyword}>version</span>:
          <span className={value}>&#160;&#34;3.8&#34;</span>
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
            <span className={keyword}>context</span>:&#160;
            <span className={value}>./frontend</span>
          </div>

          <div>
            <span className={keyword}>dockerfile</span>:&#160;
            <span className={value}>Dockerfile&#160;</span>
          </div>
        </div>

        <div className={tab2}>
          <span className={keyword}>ports</span>:
        </div>

        <div className={tab3}>
          -&#160;<span className={value}>&#34;3000:3000&#34;</span>
        </div>
        <br />

        <div className={tab1}>
          <span className={keyword}>backendApp</span>:
        </div>

        <div className={tab2}>
          <span className={keyword}>build</span>:
        </div>

        <div className={tab3}>
          <div>
            <span className={keyword}>context</span>:&#160;
            <span className={value}>./backend</span>
          </div>

          <div>
            <span className={keyword}>dockerfile</span>:&#160;
            <span className={value}>Dockerfile</span>
          </div>
        </div>

        <div className={tab2}>
          <span className={keyword}>ports</span>:
        </div>

        <div className={tab3}>
          -&#160;<span className={value}>&#34;4000:4000&#34;</span>
        </div>
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
          <span className={keyword}>name</span>:&#160;
          <span className={value}>Fullstack CSR app</span>
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

        <div className={tab3}>
          -&#160;<span className={value}>master</span>
        </div>
        <br />

        <div>
          <span className={keyword}>jobs</span>:
        </div>

        <div className={tab1}>
          <span className={keyword}>build</span>:
        </div>

        <div className={tab2}>
          <div>
            <span className={keyword}>runs-on</span>:&#160;
            <span className={value}>ubuntu-latest</span>
          </div>

          <div>
            <span className={keyword}>steps</span>:
          </div>
        </div>

        <div className={tab3}>
          <div className={comment}># Looks at your repositoty</div>

          <div>
            -&#160;<span className={keyword}>uses</span>:&#160;
            <span className={value}>actions/checkout@v2</span>
          </div>

          <div className={comment}>
            # Create and deploy your multiple containers
          </div>
          <div>
            -&#160;<span className={keyword}>name</span>:&#160;
            <span className={value}>
              Deploy multiple Docker images to Heroku apps
            </span>
          </div>
        </div>

        <div className={tab4}>
          <div>
            <span className={keyword}>uses</span>:&#160;
            <span className={value}>
              snithyanantham/docker-compose-mulitple-apps-heroku-deploy@v1.0
            </span>
          </div>

          <div>
            <span className={keyword}>id</span>:&#160;
            <span className={value}>heroku</span>
          </div>

          <div>
            <span className={keyword}>with</span>:
          </div>
        </div>

        <div className={tab5}>
          <div className={comment}># Your Heroku email address</div>
          <div>
            <span className={keyword}>email</span>:&#160;
            <span className={value}>
              $&#123;&#123; secrets.HEROKU_EMAIL &#125;&#125;
            </span>
          </div>

          <div className={comment}># Your Heroku api key</div>
          <div>
            <span className={keyword}>api_key</span>:&#160;
            <span className={value}>
              $&#123;&#123; secrets.HEROKU_API_KEY &#125;&#125;
            </span>
          </div>

          <div className={comment}># path to your docker-compose file</div>
          <div>
            <span className={keyword}>docker_compose_file</span>:&#160;
            <span className={value}>&#34;./docker-compose.yml&#34;</span>
          </div>

          <div className={comment}>
            # Set Docker images name, Heroku app name and Heroku app type
          </div>
          <div>
            <span className={keyword}>heroku_apps</span>:&#160;
            <span className={value}>
              &#39;[&#123;&#34;imagename&#34;:&#34;fullstack_frontendApp&#34;,
              &#34;appname&#34;:&#34;frontend&#34;,
              &#34;apptype&#34;;&#34;web&#34;&#125;,
              &#123;&#34;imagename&#34;fullstack_backendApp&#34;,
              &#34;appname&#34;:&#34;backend&#34;,
              &#34;apptype&#34;:&#34;web&#34;&#125;]&#39;&#160;
            </span>
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
