"use client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const Links = (
    <>
      <li className="hover:text-white">
        <Link href={"/"}>Home</Link>
      </li>
      <li className="hover:text-white">
        <Link href={"/"}>Home</Link>
      </li>
      <li className="hover:text-white">
        <Link href={"/"}>Home</Link>
      </li>
      <li className="hover:text-white">
        <Link href={"/"}>Home</Link>
      </li>
      <li className="hover:text-white">
        <Link href={"/"}>Home</Link>
      </li>
      <li className="hover:text-white">
        <Link href={"/"}>Home</Link>
      </li>
    </>
  );

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-gray-700 bg-transparent ">
      <header className="mx-auto flex h-16 container items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div className="sm:flex hidden items-center gap-3">
            {/* <Logo /> */}
            <p className="font-bold text-3xl text-[#74a2f9] xl:text-4xl">
              &lt;<span className="px-1">Badsha</span>/&gt;
            </p>
          </div>
        </div>
        <ul className="hidden items-center gap-4 md:flex text-gray-500">
          {Links}
        </ul>
        {/* Right Btn */}
        <button className="font-semibold border px-4 py-2 rounded-full text-[14px] lg:text-base text-[#9c83eb] border-0.5 border-[#9c83eb]  ">
          Open To Work
        </button>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex items-center gap-2 p-4 text-gray-500">{Links}</ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
