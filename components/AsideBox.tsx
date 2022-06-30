// aside component containing 2 box, first the links, second a brief about blog description

import React from "react";
import EmailMe_anchor_svg from "./anchor_svg/EmailMe_anchor_svg";
import Github_anchor_svg from "./anchor_svg/Github_anchor_svg";
import Home_anchor_svg from "./anchor_svg/Home_anchor_svg";
import LinkedIn_svg from "./anchor_svg/LinkedIn_anchor_svg";
import Portfolio_anchor_svg from "./anchor_svg/Portfolio_anchor_svg";

type Props = {};

export default function AsideBox({}: Props) {
  return (
    <div data-testid="AsideBox_component">
      {/* svg links */}
      <div className="border border-3 border-primary">
        <h5>Get in touch</h5>
        <Home_anchor_svg />

        <Github_anchor_svg />

        <LinkedIn_svg />

        <Portfolio_anchor_svg />

        <EmailMe_anchor_svg />
      </div>

      {/* blog description box */}
      <div className="border border-3 border-primary">
        <h5>About</h5>
        <p>
          Welcome! My name is Ilshaad, at your humble service. I been in web
          development for quite a while now. And whilst I will always consider
          myself a student of the game, I also think it is important to give
          back to the community. So I want to share my littles stumbles I have
          come across so you do not have to suffer the same frustration as I
          did.
        </p>
      </div>
    </div>
  );
}
