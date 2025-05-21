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

export function InstanceCreateCode({}: Props) {
  return (
    <pre className={`${preCode} mx-auto`}>
      <code className={`${codeTag} mx-auto`} role="code">
        <div className={comment}>
          &#47;&#47; ./apiInstance/jsonPlaceholder.js file
        </div>

        <div>
          <span className={keyword}>import</span> axios&#160;
          <span className={keyword}>from</span> &#34;axios&#34;;
        </div>
        <br />

        <div>
          <span className={keyword}>export default function</span>
          &#160;jsonP_instance() &#123;
        </div>

        <div className={tab1}>
          <div>
            <span className={keyword}>const</span> baseUrl =&#160;
            <span className={value}>
              &#34;https://jsonplaceholder.typicode.com/users&#34;&#160;
            </span>
          </div>

          <div>
            <span className={keyword}>const</span> instance = axios
            <span className={method}>.create</span>(&#123;
          </div>
        </div>

        <div className={tab2}>
          <div>baseURL: baseUrl,</div>

          <div>
            timeout:&#160;<span className={value}>4000</span>
          </div>
        </div>

        <div className={tab1}>
          <div>&#125;);</div>

          <div>
            <span className={keyword}>return</span> instance;
          </div>
        </div>

        <div>&#125;;</div>
      </code>
    </pre>
  );
}

export const FetchInstanceCode = () => {
  return (
    <pre className={`${preCode} mx-auto`}>
      <code className={`${codeTag} mx-auto`} role="code">
        <div>
          <span className={keyword}>import</span> jsonP_instance&#160;
          <span className={keyword}>from</span>
          &#160;&#34;./apiInstance/jsonPlaceholder.js&#34;;
        </div>
        <br />

        <div className={tab1}>
          <div className={comment}>
            &#47;&#47; GET all users from Json Placeholder api
          </div>
          <div className={comment}>
            &#47;&#47; Same as GET
            &#34;https://jsonplaceholder.typicode.com/users&#34;
          </div>
          <div>jsonP_instance()</div>
        </div>

        <div className={tab2}>
          <div>
            <span className={method}>.get</span>(
            <span className={value}>&#34;/&#34;</span>)
          </div>

          <div>
            <span className={method}>.then</span>(response =&#62; console
            <span className={method}>.log</span>(response.data)
          </div>

          <div>
            <span className={method}>.catch</span>(error =&#62; console
            <span className={method}>.error</span>(error.data);
          </div>
        </div>
        <br />

        <div className={tab1}>
          <div className={comment}>
            &#47;&#47; GET one user from Json Placeholder api
          </div>
          <div className={comment}>
            &#47;&#47; Same as GET
            &#34;https://jsonplaceholder.typicode.com/users/1&#34;&#160;
          </div>
          <div>jsonP_instance()</div>
        </div>

        <div className={tab2}>
          <div>
            <span className={method}>.get</span>(
            <span className={value}>&#34;/1&#34;</span>)
          </div>

          <div>
            <span className={method}>.then</span>(response =&#62; console
            <span className={method}>.log</span>(response.data)
          </div>

          <div>
            <span className={method}>.catch</span>(error =&#62; console
            <span className={method}>.error</span>(error.data);
          </div>
        </div>
      </code>
    </pre>
  );
};

// https://jsonplaceholder.typicode.com/users
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
