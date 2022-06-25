import React from "react";
import EmailMe_anchor_svg from "./anchor_svg/EmailMe_anchor_svg";
import Github_anchor_svg from "./anchor_svg/github_anchor_svg";
import LinkedIn_svg from "./anchor_svg/LinkedIn_anchor_svg";
import Portfolio_anchor_svg from "./anchor_svg/Portfolio_anchor_svg";

type Props = {};

export default function AsideBox({}: Props) {
  return (
    <div>
      {/* svg links */}
      <div className="border border-3 border-primary">
        <h5>Get in touch</h5>
        <Github_anchor_svg />

        <LinkedIn_svg />

        <Portfolio_anchor_svg />

        <EmailMe_anchor_svg />
      </div>

      {/* blog description box */}
      <div className="border border-3 border-primary">
        <h5>About</h5>
        <p>
          Hello and welcome! My name is Ilshaad, at your humble service. I been
          in web development for quite a while now and learn from many web
          developers online. Whilst I will always consider myself a student of
          the game, I also think it is important to give back to the wonderful
          community. This is the purpose of this blog, share what I have picked
          up for the years and possible help you on specific areas that you may
          come across. Are you coding bro!
        </p>
      </div>
    </div>
  );
}
