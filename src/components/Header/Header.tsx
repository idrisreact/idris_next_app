import React, { FC } from "react";
import Link from "next/link";

const Header: FC = () => {
  return (
    <>
      <header className="flex justify-between px-3 py-2 borbot border-b border-1 border-gray mb-3">
        <h1 className="font-bold">Idris dev</h1>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
