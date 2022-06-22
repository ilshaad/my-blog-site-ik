import React from "react";
import Link from "next/link";

type Props = {};

export default function one({}: Props) {
  return (
    <div>
      <Link href="/two">
        <a>to /two route</a>
      </Link>

      <h1>page one</h1>
    </div>
  );
}
