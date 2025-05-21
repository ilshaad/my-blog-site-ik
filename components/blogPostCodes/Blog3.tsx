// copy boilerplate version if you want to add another blog codes examples within your blog post page
// iKBIM ensure you put empty space &#160; for the longest code block so it will add a nice padding to the end

import React from "react";
import styles from "../../styles/components/blogPosts/codesStyle.module.css";

type Props = {};

export default function Blog3({}: Props) {
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

  return (
    <pre className={`${preCode} mx-auto`}>
      <code className={`${codeTag} mx-auto`} role="code">
        <div>
          <span className={keyword}>import</span> React, &#123; ChangeEvent,
          FormEvent, useState &#125;&#160;<span className={keyword}>from</span>
          &#160;&#34;react&#34;;
        </div>
        <br />
        <div>
          <span className={keyword}>export default function</span> FormControl()
          &#123;
        </div>
        <div className={`${tab1} ${comment}`}>
          &#47;&#47; For the change event
        </div>
        <div className={tab1}>
          <span className={keyword}>const</span> &#91;changeValue,
          setChangeValue&#93; =&#160;<span className={method}>useState</span>
          &#60;string&#62;(
          <span className={value}>&#34;initial value&#34;</span>);
        </div>
        <br />
        <div className={`${tab1} ${comment}`}>
          &#47;&#47; For the submit event
        </div>
        <div className={tab1}>
          <span className={keyword}>const</span> &#91;submitValue,
          setSubmitValue&#93; =&#160;<span className={method}>useState</span>
          &#60;string&#62;(
          <span className={value}>&#34;&#34;</span>);
        </div>
        <br />
        <div className={`${tab1} ${comment}`}>
          &#47;&#47; When user submit form
        </div>
        <div className={tab1}>
          <span className={keyword}>const</span> submittedForm = (event:&#160;
          <span className={keyword}>FormEvent</span>&#60;HTMLFormElement&#62;)
          =&#62; &#123;
        </div>
        <div className={tab2}>
          <span className={comment}>&#47;&#47; Prevent page reloading</span>
          <div>
            event<span className={method}>.preventDefault</span>()
          </div>
          <div>
            <span className={comment}>
              &#47;&#47; Collects the textarea element
            </span>
          </div>
          <div>
            <span className={keyword}>const</span> textarea = event
            <span className={method}>.currentTarget.children</span>[0]&#160;
            <span className={keyword}>as</span> HTMLTextAreaElement;&#160;
          </div>
          <span className={comment}>&#47;&#47; Set the final value</span>
          <div>
            setSubmitValue(textarea<span className={method}>.value</span>);
          </div>
        </div>
        <div className={tab1}>&#125;;</div>
        <br />
        <div className={tab1}>
          <div>
            <span className={comment}>
              &#47;&#47;When user types within the textarea
            </span>
          </div>
          <div>
            <span className={keyword}>const</span> changeTextarea =
            (event:&#160;<span className={keyword}>ChangeEvent</span>) =&#62;
            &#123;
          </div>
        </div>
        <div className={tab2}>
          <div className={comment}>
            &#47;&#47; Collects the textarea element
          </div>
          <div>
            <span className={keyword}>const</span> textarea = event
            <span className={method}>.currentTarget</span>&#160;
            <span className={keyword}>as</span> HTMLTextAreaElement;
          </div>
          <span className={comment}>
            &#47;&#47; Update the textarea element value with the user inputs
          </span>
          <div>
            setChangeValue(textarea<span className={method}>.value</span>);
          </div>
        </div>

        <div className={tab1}>&#125;;</div>
        <br />

        <div className={tab1}>
          <div>
            <span className={keyword}>return</span> (
          </div>
        </div>
        <div className={tab2}>
          <div>&#60;div&#62;</div>
        </div>
        <div className={tab3}>
          <div>
            &#60;form&#160;<span className={keyword}>onSubmit</span>
            =&#123;submittedForm&#125;&#62;
          </div>
        </div>

        <div className={tab4}>
          <div>&#60;textarea</div>
        </div>

        <div className={tab5}>
          <div>
            <span className={keyword}>name</span>=
            <span className={value}>&#34;textareaName&#34;</span>
          </div>
          <div>
            <span className={keyword}>value</span>=&#123;changeValue&#125;
          </div>
          <div>
            <span className={keyword}>onChange</span>=&#123;changeTextarea&#125;
          </div>
        </div>

        <div className={tab4}>/&#62;</div>

        <div className={tab4}>
          &#60;button&#160;<span className={keyword}>type</span>=
          <span className={value}>&#34;submit&#34;</span>
          &#62;Submit&#60;/button&#62;
        </div>

        <div className={tab3}>
          <div>&#60;/form&#62;</div>
          <br />

          <div>&#60;div&#62;&#123;submitValue&#125;&#60;/div&#62;</div>
        </div>

        <div className={tab2}>&#60;/div&#62;</div>

        <div className={tab1}>);</div>
        <div>&#125;;</div>
        {/* END OF */}
        <br />
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
