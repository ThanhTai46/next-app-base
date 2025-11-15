// @ts-nocheck
/* eslint-disable  */
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "/src/statics/images/logo-xiaomi.svg";

import { DownOutlined } from "@ant-design/icons";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && open) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [open]);

  // Đóng menu khi click vào 1 link
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <header className="relative w-full mx-auto">
      {open && (
        <div className="fixed inset-0 z-50 bg-[#1F2023] flex flex-col">
          <div className="flex items-center justify-between px-6 py-6 bg-xiaomi-neutral border-b border-xiaomi-border-primary">
            <button onClick={() => setOpen(false)} className="flex items-center justify-center p-2 text-white text-2xl" aria-label="Close menu">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Image alt="Xiaomi Logo" src={Logo} className="h-8 w-auto" />
            <div className="flex items-center gap-3">
              <button className="flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-xiaomi-primary-normal">
                <span className="text-xiaomi-text-invert-accent text-base font-black italic uppercase leading-6">SIGN UP</span>
              </button>
              <button className="flex items-center justify-center gap-2 px-6 py-2 rounded-full border border-xiaomi-border-primary">
                <span className="text-xiaomi-text-accent text-base font-black italic uppercase leading-6">LOG IN</span>
              </button>
            </div>
          </div>

          <nav className="flex flex-col items-center gap-8 mt-10">
            <Link
              href="#top" // FIX: Đổi href
              onClick={handleLinkClick} // FIX: Thêm onClick
              className="w-11/12 max-w-xl text-center py-4 rounded-full bg-xiaomi-neutral-subdued text-xiaomi-text-accent
               text-lg font-medium uppercase tracking-wide"
            >
              HOME
            </Link>

            <Link href="#products" onClick={handleLinkClick} className="text-white text-lg font-medium uppercase tracking-wide">
              PRODUCT
            </Link>

            <Link href="#contact" onClick={handleLinkClick} className="text-white text-lg font-medium uppercase tracking-wide">
              CONTACT
            </Link>

            <Link href="#price" onClick={handleLinkClick} className="text-white text-lg font-medium uppercase tracking-wide">
              PRICE
            </Link>
          </nav>
        </div>
      )}
      <div className="hidden md:flex items-center justify-between px-6 md:px-20 lg:px-[236px] py-5 bg-transparent">
        <div className="flex items-center gap-4 md:gap-10">
          <Image alt="Xiaomi Logo" src={Logo} className="h-8 w-auto" />

          <nav className="hidden md:flex items-center justify-center gap-3 mr-3">
            <Link
              href="#top"
              className="flex items-center justify-center h-8 md:h-10 px-3 md:px-5 rounded-full bg-xiaomi-neutral-subdued text-xiaomi-text-primary 
              text-sm font-normal uppercase leading-5"
            >
              HOME
            </Link>
            <Link
              href="#products"
              className="flex items-center justify-center h-8 md:h-10 px-3 md:px-5 rounded-full text-xiaomi-text-accent 
              text-sm font-normal uppercase leading-5 hover:bg-xiaomi-neutral-subdued"
            >
              PRODUCT
            </Link>
            <Link
              href="#contact"
              className="flex items-center justify-center h-8 md:h-10 px-3 md:px-5 rounded-full text-xiaomi-text-accent text-sm 
              font-normal uppercase leading-5 hover:bg-xiaomi-neutral-subdued"
            >
              CONTACT
            </Link>
            {/* FIX: Sửa lỗi typo </Video> thành </Link> */}
            <Link
              href="#price"
              className="flex items-center justify-center h-8 md:h-10 px-3 md:px-5 rounded-full text-xiaomi-text-accent text-sm font-normal uppercase leading-5 hover:bg-xiaomi-neutral-subdued"
            >
              PRICE
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <button className="font-bold flex items-center justify-center gap-2 px-4 md:px-8 py-2 rounded-full bg-xiaomi-primary-normal">
              <span className="text-xiaomi-text-invert-accent text-center text-sm md:text-base font-black italic uppercase leading-6">SIGN UP</span>
            </button>
            <button className="font-bold flex items-center justify-center gap-2 px-4 md:px-8 py-2 rounded-full border border-xiaomi-border-primary">
              <span className="text-xiaomi-text-accent text-center text-sm md:text-base font-black italic uppercase leading-6">LOG IN</span>
            </button>
          </div>

          <div className="hidden md:flex items-center h-10 gap-0.5">
            <span className="text-xiaomi-text-subdued text-sm font-medium uppercase leading-5">eng</span>
            <DownOutlined rev={"true"} className="text-xiaomi-text-subdued text-xs" />
          </div>
        </div>
      </div>
      {!open && (
        <div className="flex md:hidden items-center justify-between px-6 py-5">
          <button
            onClick={() => setOpen(true)}
            className="flex items-center justify-center p-2 rounded-md text-xiaomi-text-normal"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <Image alt="Xiaomi Logo" src={Logo} className="h-8 w-auto" />
        </div>
      )}
    </header>
  );
}
