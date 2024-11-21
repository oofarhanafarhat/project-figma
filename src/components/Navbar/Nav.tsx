"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative">
      {/* Navbar */}
      <div className="flex  items-center justify-between px-4 py-2 bg-white shadow-md lg:max-w-full">
        {/* Logo */}
        <Image
          src="/Group 11.png"
          width={70}
          height={44}
          alt="logo"
          className="text-gray-900 font-semibold"
        />

        {/* Hamburger Icon for Mobile */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <div className="w-6 h-1 bg-gray-800 mb-1"></div>
          <div className="w-6 h-1 bg-gray-800 mb-1"></div>
          <div className="w-6 h-1 bg-gray-800"></div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex lg:flex-row lg:space-x-10">
          <Link href="/" className="hover:scale-105 hover:bg-slate-100 transition">
            <li>MAIN</li>
          </Link>
          <Link href="/photo" className="hover:scale-105 hover:bg-gray-100 transition">
            <li>GALLERY</li>
          </Link>
          <Link href="/work" className="hover:scale-105 hover:bg-gray-100 transition">
            <li>PROJECTS</li>
          </Link>
          <Link href="/card" className="hover:scale-105 hover:bg-gray-100 transition">
            <li>CERTIFICATION</li>
          </Link>
          <Link href="/rabta" className="hover:scale-105 hover:bg-gray-100 transition">
            <li>CONTACTS</li>
          </Link>
        </ul>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-2/3 bg-gray-600 text-gray-200 shadow-lg transform transition-transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <button
          className="absolute top-4 right-4 text-gray-900"
          onClick={() => setIsSidebarOpen(false)}
        >
          Close
        </button>
        <ul className="flex flex-col mt-10 space-y-4 p-4">
          <Link href="/" onClick={() => setIsSidebarOpen(false)}>
            <li className="hover:bg-gray-100 p-2">MAIN</li>
          </Link>
          <Link href="/photo" onClick={() => setIsSidebarOpen(false)}>
            <li className="hover:bg-gray-100 p-2">GALLERY</li>
          </Link>
          <Link href="/work" onClick={() => setIsSidebarOpen(false)}>
            <li className="hover:bg-gray-100 p-2">PROJECTS</li>
          </Link>
          <Link href="/card" onClick={() => setIsSidebarOpen(false)}>
            <li className="hover:bg-gray-100 p-2">CERTIFICATION</li>
          </Link>
          <Link href="/rabta" onClick={() => setIsSidebarOpen(false)}>
            <li className="hover:bg-gray-100 p-2">CONTACTS</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;