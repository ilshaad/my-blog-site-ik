import React, { ReactElement } from "react";
import Footer from "./Footer";

import Header from "./Header";

type Props = { children: ReactElement }; // iK? or JSX.Element

export default function Layout({ children }: Props) {
  return (
    <div id="OuterGrid">
      <header id="OuterGrid-header">
        <Header />
      </header>

      <main id="OuterGrid-main">{children}</main>

      <footer id="OuterGrid-footer">
        <Footer />
      </footer>
    </div>
  );
}
