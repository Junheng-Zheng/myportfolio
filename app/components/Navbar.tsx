"use client";
import Link from "next/link";
import React, { useState } from "react";

interface Props {
  className?: string;
}

const Navbar = ({ className }: Props) => {
  const [ishover, sethover] = useState(false);
  const github = ishover ? (
    <Link
      onMouseEnter={() => {
        sethover(true);
      }}
      onMouseLeave={() => {
        sethover(false);
      }}
      className="flex items-center gap-2 bg-white text-black px-5 py-3 rounded-full transition-all duration-200"
      href={""}
    >
      <p>Github</p>
      <i className="animate-git text-[21px] fa-brands fa-github"></i>
    </Link>
  ) : (
    <Link
      onMouseEnter={() => {
        sethover(true);
      }}
      onMouseLeave={() => {
        sethover(false);
      }}
      className="bg-white text-black px-4 py-3 rounded-full transition-all duration-200"
      href={""}
    >
      Github
    </Link>
  );
  return (
    <div className={`${className} fixed z-200 top-0 p-5 w-full`}>
      <div className="w-full flex justify-between items-center">
        <div className="w-full flex justify-start">
          <button className="h-[35px] w-[35px] border rounded-full text-white purple">
            J
          </button>
        </div>
        <div className="w-full flex justify-center">
          {/* bg-[rgba(31,31,31,0.11)] */}
          <div className="w-fit gap-5  p-5 rounded-full items-center hidden sm:flex">
            <button className="purple py-2 px-3 rounded-full">Hello</button>
            <button>About</button>
            <button>Experience</button>
            <button>Projects</button>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <button className="purple py-3 px-5 rounded-full">Lets Chat!</button>
        </div>
        <div className="flex sm:hidden">
          {/* <i className="text-[21px] fa-solid fa-bars"></i> */}
          <i className="text-[25px] fa-brands fa-github"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
