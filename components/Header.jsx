"use client";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import React, { useState, useEffect } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
  MenuItem2,
} from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

export function Header() {
  return <Navbar></Navbar>;
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const wrapperWidth = isAtTop ? "100%" : "80%";

  return (
    <header
      className={`z-50 fixed left-0 right-0 transition-all duration-500 ease-in-out ${
        isAtTop ? "top-0" : "top-4"
      } flex justify-center`}
    >
      <div
        className={`transition-all duration-500 ease-in-out px-4
          rounded-full shadow-lg bg-gray-900/90 backdrop-blur border border-violet-500`}
        style={{
          width: wrapperWidth,
        }}
      >
        <Menu setActive={setActive}>
          <MenuItem2 text="Home" href="/"></MenuItem2>
          <MenuItem2 text="Jobs" href="/jobs"></MenuItem2>
          <MenuItem setActive={setActive} active={active} item="Products">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Algochurn"
                href="https://algochurn.com"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Tailwind Master Kit"
                href="https://tailwindmasterkit.com"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Moonbeam"
                href="https://gomoonbeam.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Rogue"
                href="https://userogue.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </MenuItem>
          <MenuItem2 text="Blogs" href="/blogs"></MenuItem2>

          <SignedOut>
            <MenuItem setActive={setActive} active={active} item="Login">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink>
                  <SignInButton />
                </HoveredLink>
                <HoveredLink>
                  <SignUpButton />
                </HoveredLink>
              </div>
            </MenuItem>
          </SignedOut>

          <SignedIn>
            <MenuItem
              setActive={setActive}
              active={active}
              item={<UserButton />}
            ></MenuItem>
          </SignedIn>
        </Menu>
      </div>
    </header>
  );
}
