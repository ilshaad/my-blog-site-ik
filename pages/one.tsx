import React from "react";
import Link from "next/link";
import IKmdtest from "../components/IKmdtest.mdx";

type Props = {};

export default function one({}: Props) {
  return (
    <div>
      <Link href="/two">
        <a>to /two route</a>
      </Link>

      <h1>page one</h1>
      <IKmdtest />
    </div>
  );
}
