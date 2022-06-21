import React from "react";
import Link from "next/link";

type Props = {};

export default function two({}: Props) {
  return (
    <div>
      <Link href="/one">
        <a>to /one route</a>
      </Link>

      <h1>page two</h1>
    </div>
  );
}
