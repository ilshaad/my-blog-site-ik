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

export function ReactHOC({}: Props) {
  return (
    <pre className={`${preCode} mx-auto`}>
      <code className={`${codeTag} mx-auto`} role="code">
        <div className={comment}>&#47;&#47; HOC function</div>

        <div>
          <span className={keyword}>export default function</span>
          &#160;Hoc(Component) &#123;&#160;
        </div>

        <div className={tab1}>
          <span className={keyword}>function</span> ReactComponent()
          &#123;&#160;
        </div>

        <div className={tab2}>
          <span className={keyword}>return</span> &#60;Component &#47;&#62;
        </div>

        <div className={tab1}>
          <div>&#125;;</div>
          <br />

          <div>
            <span className={keyword}>return</span> ReactComponent;
          </div>
        </div>

        <div>&#125;;</div>
      </code>
    </pre>
  );
}

export function ReactComponent({}: Props) {
  return (
    <pre className={`${preCode} mx-auto`}>
      <code className={`${codeTag} mx-auto`} role="code">
        <div className={comment}>&#47;&#47; Normal react component</div>

        <div>
          <span className={keyword}>import</span> React&#160;
          <span className={keyword}>from</span> &#34;react&#34;;
        </div>
        <br />

        <div>
          <span className={keyword}>const </span>Component = (arg) =&#62;
          &#123;&#160;
        </div>

        <div className={tab1}>
          <span className={keyword}>return</span> (
        </div>

        <div className={tab2}>
          &#60;div&#62;&#123;arg&#125;&#60;&#47;div&#62;
        </div>

        <div className={tab1}>);</div>

        <div>&#125;;</div>
        <br />

        <div>
          <span className={keyword}>export default </span>Component;
        </div>
      </code>
    </pre>
  );
}

export function UseHOC({}: Props) {
  return (
    <pre className={`${preCode} mx-auto`}>
      <code className={`${codeTag} mx-auto`} role="code">
        <div className={comment}>
          &#47;&#47; How to use the HOC function we created
        </div>

        <div>
          <span className={keyword}>const </span>HOC = Hoc(() =&#62;
          &#60;Component arg=&#123;hello world&#125; &#47;&#62;);&#160;
        </div>
        <br />

        <div className={comment}>
          &#47;&#47; You can now use HOC as JSX component
        </div>
        <div>&#60;HOC &#47;&#62;</div>
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
