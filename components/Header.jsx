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
import img_resume from "../public/Resume_ss.png";
import img_coverLetter from "../public/CoverLetter_ss.png";

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
                title="Resume Builder"
                href="/resume"
                src={img_resume.src}
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Cover Letter Builder"
                href="/coverletter"
                src={img_coverLetter.src}
                description="Production ready Tailwind css components for your next project"
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
