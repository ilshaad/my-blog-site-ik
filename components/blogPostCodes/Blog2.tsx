// copy boilerplate version if you want to add another blog codes examples within your blog post page

import React from "react";
import styles from "../../styles/components/blogPosts/codesStyle.module.scss";

type Props = {};

export default function Blog1({}: Props) {
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
  } = styles;

  return (
    <pre className={`${preCode} mx-auto`}>
      <code className={`${codeTag} mx-auto`} role="code">
        <div>
          &#47;&#47;{" "}
          <span className={`${comment}`}>
            eg. sqlTimestamp: 2021-06-01T11:08:01.000Z
          </span>
        </div>
        <div>
          <span className={`${keyword}`}>function</span>
          (sqlTimestamp) &#123;
        </div>

        <div className={tab1}>
          <span className={`${keyword}`}>const</span> removeT = sqlTimestamp
          <span className={method}>.replace</span>(
          <span className={value}>&#34;T&#34;</span>,&#160;
          <span className={value}>&#34; &#34;</span>);
        </div>

        <br />

        <div className={tab1}>
          <span className={keyword}>const</span> removeMilliSecondRegEx =
          /\.\w+/g;
        </div>

        <br />

        <div className={tab1}>
          <span className={keyword}>const</span> timestamp = removeT
          <span className={method}>.replace</span>(removeMilliSecondRegEx,&#160;
          <span className={value}>&#34;&#34;</span>);
        </div>

        <br />

        <div className={tab1}>
          <span className={keyword}>return</span> timestamp
        </div>
        <div>&#125;</div>
        <div className={`${comment}`}>
          &#47;&#47; Output: &#34;2021-06-01 11:08:01&#34;
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
