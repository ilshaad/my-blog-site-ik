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

export default function Blog1({}: Props) {
  return (
    <pre className={`${preCode} mx-auto`}>
      <code className={`${codeTag} mx-auto`} role="code">
        <div className={comment}>&#47;&#47; Most useful HTML entities</div>
        <div>&#38;#47; = &#47; (Forward slash)</div>
        <div>&#38;#33; = &#33; (Exclamation mark)</div>
        <div>&#38;#40; = &#40; (Open parenthesis)</div>
        <div>&#38;#41; = &#41; (Close parenthesis)</div>
        <div>&#38;#44; = &#44; (Comman)</div>
        <div>&#38;#58; = &#58; (Colon)</div>
        <div>&#38;#59; = &#59; (Semi-colon)</div>
        <div>&#38;#63; = &#63; (Question mark)</div>
        <div>&#38;#91; = &#91; (Open bracket)</div>
        <div>&#38;#93; = &#93; (Close bracket)</div>
        <div>&#38;#92; = &#92; (Back slash)</div>
        <div>&#38;#95; = &#95; (underscore)</div>
        <div>&#38;#123; = &#123; (Open curly brace)</div>
        <div>&#38;#125; = &#125; (Close curly brace)</div>
        <div>&#38;#124; = &#124; (Pipe)</div>
        <div>&#38;#160; = &#160; (Empty space)</div>
        <div>&#38;#8208; = &#8208; (Hyphen)</div>
        <div>&#38;#34; = &#34; (Double quote)</div>
        <div>&#38;#39; = &#39; (Single quote)</div>
        <div>&#38;#96; = &#96; (Grave accent)</div>
        <div>&#38;#43; = &#43; (Plus)</div>
        <div>&#38;#8722; = &#8722; (Minus)</div>
        <div>&#38;#61; = &#61; (Equal)</div>
        <div>&#38;#60; = &#60; (Less than)</div>
        <div>&#38;#62; = &#62; (Greater than)</div>
        <div>&#38;#37; = &#37; (Percentage)</div>
        <div>&#38;#8727; = &#8727; (Asterisk)</div>
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
