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

export function MockDataArrayOfObjects({}: Props) {
  return (
    <pre className={`${preCode} mx-auto`}>
      <code className={`${codeTag} mx-auto`} role="code">
        <div>[</div>

        <div className={tab1}>&#123;</div>
        <div className={tab2}>
          <div>
            id:&#160;<span className={value}>1</span>,
          </div>
          <div>
            name:&#160;<span className={value}>&#34;Richard&#34;</span>
          </div>
        </div>
        <div className={tab1}>&#125;,</div>

        <div className={tab1}>&#123;</div>
        <div className={tab2}>
          <div>
            id:&#160;<span className={value}>2</span>,
          </div>
          <div>
            name:&#160;<span className={value}>&#34;Salma&#34;</span>
          </div>
        </div>
        <div className={tab1}>&#125;,</div>

        <div className={tab1}>&#123;</div>
        <div className={tab2}>
          <div>
            id:&#160;<span className={value}>3</span>,
          </div>
          <div>
            name:&#160;<span className={value}>&#34;Kratos&#34;</span>
          </div>
        </div>
        <div className={tab1}>&#125;,</div>

        <div className={tab1}>&#123;</div>
        <div className={tab2}>
          <div>
            id:&#160;<span className={value}>4</span>,
          </div>
          <div>
            name:&#160;<span className={value}>&#34;Darwin&#34;</span>
          </div>
        </div>
        <div className={tab1}>&#125;,</div>

        <div>]</div>
      </code>
    </pre>
  );
}

export function AscendingFunction() {
  return (
    <pre className={`${preCode} mx-auto`}>
      <code className={`${codeTag} mx-auto`} role="code">
        <div className={comment}>
          &#47;&#47; Ascending order function (a b c)
        </div>

        <div>
          <span className={keyword}>type</span> Props = &#123;
        </div>

        <div className={tab1}>[allOtherProperties: string]: any;</div>
        <div>&#125;;</div>
        <br />

        <div>
          <span className={keyword}>function</span> ascendingOrder(
        </div>

        <div className={tab1}>
          <div>arrayOfObjects: Array&#60;Props&#62;,</div>
          <div>targetedProperty: string</div>
        </div>

        <div>) &#123;</div>

        <div className={tab1}>
          <div>
            <span className={keyword}>const</span> newArray =
            [...arrayOfObjects];
          </div>
          <br />

          <div>
            newArray<span className={method}>.sort</span>((a: Props, b: Props)
            =&#62; &#123;
          </div>
        </div>

        <div className={tab2}>
          <div>
            a[targetedProperty]<span className={method}>.toLowerCase</span>
            ()&#160;&#60; b[targetedProperty]
            <span className={method}>.toLowerCase</span>()&#160;
          </div>
        </div>

        <div className={tab3}>
          <div>
            <span className={keyword}>?</span> -1
          </div>

          <div>
            <span className={keyword}>:</span> 1;
          </div>
        </div>

        <div className={tab1}>
          <div>&#125;);</div>
          <br />

          <div>
            <span className={keyword}>return</span> newArray
          </div>
        </div>

        <div>&#125;;</div>
        <br />

        <div className={comment}>
          <div>&#47;&#8727;&#8727; Expected output:</div>

          <div>[</div>

          <div className={tab1}>
            <div>&#123;id: 4, name: &#34;Darwin&#34;&#125;,</div>

            <div>&#123;id: 3, name: &#34;Kratos&#34;&#125;, </div>

            <div>&#123;id: 1, name: &#34;Rechad&#34;&#125;,</div>

            <div>&#123;id: 2, name: &#34;Salma&#34;&#125;</div>
          </div>

          <div>]</div>
          <div>&#8727;&#47;</div>
        </div>
      </code>
    </pre>
  );
}

export function DescendingFunction() {
  return (
    <pre className={`${preCode} mx-auto`}>
      <code className={`${codeTag} mx-auto`} role="code">
        <div className={comment}>
          &#47;&#47; Descending order function (c b a)
        </div>

        <div>
          <span className={keyword}>type</span> Props = &#123;
        </div>

        <div className={tab1}>[allOtherProperties: string]: any;</div>
        <div>&#125;;</div>
        <br />

        <div>
          <span className={keyword}>function</span> ascendingOrder(
        </div>

        <div className={tab1}>
          <div>arrayOfObjects: Array&#60;Props&#62;,</div>
          <div>targetedProperty: string</div>
        </div>

        <div>) &#123;</div>

        <div className={tab1}>
          <div>
            <span className={keyword}>const</span> newArray =
            [...arrayOfObjects];
          </div>
          <br />

          <div>
            newArray<span className={method}>.sort</span>((a: Props, b: Props)
            =&#62; &#123;
          </div>
        </div>

        <div className={tab2}>
          <div>
            a[targetedProperty]<span className={method}>.toLowerCase</span>
            ()&#160;&#62; b[targetedProperty]
            <span className={method}>.toLowerCase</span>()&#160;
          </div>
        </div>

        <div className={tab3}>
          <div>
            <span className={keyword}>?</span> -1
          </div>

          <div>
            <span className={keyword}>:</span> 1;
          </div>
        </div>

        <div className={tab1}>
          <div>&#125;);</div>
          <br />

          <div>
            <span className={keyword}>return</span> newArray
          </div>
        </div>

        <div>&#125;;</div>
        <br />

        <div className={comment}>
          <div>&#47;&#8727;&#8727; Expected output:</div>

          <div>[</div>

          <div className={tab1}>
            <div>&#123;id: 2, name: &#34;Salma&#34;&#125;</div>

            <div>&#123;id: 1, name: &#34;Rechad&#34;&#125;,</div>

            <div>&#123;id: 3, name: &#34;Kratos&#34;&#125;, </div>

            <div>&#123;id: 4, name: &#34;Darwin&#34;&#125;,</div>
          </div>

          <div>]</div>
          <div>&#8727;&#47;</div>
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
