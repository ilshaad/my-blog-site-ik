import React from "react";
import styles from "../../styles/components/blogPostCodes/codesStyle.module.scss";

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
      <code className={`${codeTag} mx-auto`}>
        <div>
          <span className={`${keyword}`}>function</span>&#160;
          createTimestampInSqlFormat () &#123;
        </div>
        <div className={`${tab1}`}>
          <span className={`${keyword}`}>const</span> date =&#160;
          <span className={`${keyword}`}>new</span>&#160;
          <span className={`${method}`}>Date</span>();
        </div>

        <div className={`${tab1}`}>
          <span className={`${keyword}`}>let</span> year =&#160;
          <span className={`${method}`}>date.getFullYear</span>();
        </div>
        <div className={`${tab1}`}>
          <span className={`${keyword}`}>let</span> month =&#160;
          <span className={`${method}`}>date.getMonth</span>() +&#160;
          <span className={`${value}`}>1</span>
        </div>
        <div className={`${tab1}`}>
          <span className={`${keyword}`}>let</span> day =&#160;
          <span className={`${method}`}>date.getDate</span>();
        </div>
        <div className={`${tab1}`}>
          <span className={`${keyword}`}>let</span> hour =&#160;
          <span className={`${method}`}>date.getHours</span>();
        </div>
        <div className={`${tab1}`}>
          <span className={`${keyword}`}>let</span> minute =&#160;
          <span className={`${method}`}>date.getMinutes</span>();
        </div>
        <div className={`${tab1}`}>
          <span className={`${keyword}`}>let</span> second =&#160;
          <span className={`${method}`}>date.getSeconds</span>();
        </div>

        <br />

        <div className={`${tab1}`}>
          <span className={`${keyword}`}>const</span> timestampArray = [year,
          month, day, hour, minute, seconds];
        </div>

        <br />

        <div className={`${tab1}`}>
          <span className={`${keyword}`}>let</span> timestampString = &#34;&#34;
        </div>

        <br />

        <div className={`${tab1}`}>
          <span className={`${keyword}`}>for</span> (
          <span className={`${keyword}`}>let</span> dateNumber&#160;
          <span className={`${keyword}`}>of</span>&#160; timestampArray) &#123;
        </div>
        <div className={`${comment} ${tab2}`}>
          &#47;&#47; if number is less than 10 than add a 0 in front of it
        </div>
        <div className={`${tab2}`}>
          <span className={`${keyword}`}>if</span> (dateNumber &#62;=&#160;
          <span className={`${value}`}>10</span>) &#123;
        </div>
        <div className={`${tab3}`}>timestampString += dateNumber;</div>
        <div className={`${tab2}`}>
          &#125; <span className={`${keyword}`}>else</span> &#123;
        </div>
        <div className={`${tab3}`}>
          timestamString += `<span className={`${value}`}>0</span>
          $&#123;dateNumber&#125;`;
        </div>
        <div className={`${tab2}`}>&#125;</div>
        <div className={`${tab1}`}>&#125;</div>

        <br />

        <div className={`${tab1}`}>
          <span className={`${keyword}`}>const/</span> timestampRegEx =
          /(\d&#123;4&#125;)(\d&#123;2&#125;)(\d&#123;2&#125;)(\d&#123;2&#125;)(\d&#123;2&#125;)(\d&#123;2&#125;)/g;
        </div>

        <br />

        <div className={`${comment} ${tab1}`}>
          &#47;&#47; create the sql timestamp format.You could change the format
          here if need be
        </div>
        <div className={`${tab1}`}>
          <span className={`${keyword}`}>const/</span> timestamp =
          timestampString<span className={`${method}`}>.replace</span>(
        </div>
        <div className={`${tab2}`}>timestampRegEx,</div>
        <div className={`${tab2}`}>
          <span className={`${value}`}>&#34;$1-$2-$3 $4:$5:$6&#34;</span>
        </div>
        <div className={`${tab1}`}>);</div>

        <br />

        <div className={`${tab1}`}>
          <span className={`${keyword}`}>return</span> timestamp;
        </div>
        <div>&#125;</div>
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
