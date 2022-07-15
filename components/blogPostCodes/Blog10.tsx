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

export default function Blog10({}: Props) {
  return (
    <pre className={`${preCode} mx-auto`}>
      <code className={`${codeTag} mx-auto`} role="code">
        <div className={comment}>&#47;&#47; Define the object type</div>

        <div>
          <span className={keyword}>interface </span>object &#123;
        </div>

        <div className={tab1}>
          <div>
            name:&#160;<span className={value}>string | null</span>;
          </div>
          <div>
            age:&#160;<span className={value}>number | null</span>;
          </div>
        </div>

        <div>&#125;;</div>
        <br />

        <div className={comment}>
          &#47;&#47; Define the dictionary object type&#160;
        </div>

        <div>
          <span className={keyword}>interface </span>dictionary &#123;
        </div>

        <div className={tab1}>
          <div>
            [idNumber:&#160;<span className={value}>number</span>]: object;
          </div>
        </div>

        <div>&#125;;</div>
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
