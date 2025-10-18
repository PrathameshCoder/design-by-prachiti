'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-center w-full px-6 relative mt-8">
      {/* Left: Logo — fixed size, not flexing */}
      <div className="absolute left-6 flex items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Design by Prachiti logo"
            width={200}
            height={200}
            className="h-45 w-auto"
          />
        </Link>
      </div>

      {/* Hamburger Icon for small screens */}
      <button
        className="md:hidden absolute right-6 z-30"
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
      >
        <svg
          className="w-8 h-8 text-gray-800 mt-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Center: Links — perfectly centered on md+ screens */}
      <ul className="hidden md:flex gap-12 items-center font-[300]">
        <li><Link href="/">HOME</Link></li>
        <li><Link href="/about">ABOUT</Link></li>
        <li><Link href="/blog">BLOGS</Link></li>
        <li><Link href="/contact">CONTACT</Link></li>
      </ul>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full bg-red-100 z-40 transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden`}
        style={{ boxShadow: menuOpen ? "0 4px 24px rgba(0,0,0,0.08)" : "none" }}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <Link href="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
            <Image
              src="/logo.png"
              alt="Design by Prachiti logo"
              width={160}
              height={160}
              className="h-32 w-auto"
            />
          </Link>
          <button
            className="text-3xl text-gray-800"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>
        <ul className="flex flex-col gap-8 items-center py-8 font-[300] text-lg">
          <li>
            <Link href="/" onClick={() => setMenuOpen(false)}>HOME</Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link>
          </li>
          <li>
            <Link href="/blog" onClick={() => setMenuOpen(false)}>BLOGS</Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}