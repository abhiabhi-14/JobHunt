"use client";
import React, { use, useEffect, useRef } from "react";
import FadeInSplit from "../../Block";
import ContactMe from "../../ContactMe";
import Image from "next/image";
import image1 from "../../../public/lpsc_campus.jpeg";
import "./Hero.css";

function Hero() {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 125;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="w-[99vw] overflow-hidden box-border">
      <div className="h-[200px] w-full"></div>
      <h2 className="text-2xl md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        What&apos;s cooler than Beams?{" "}
      </h2>
      <div className="text-2xl md:text-4xl lg:text-7xl font-bold text-center">
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">Exploding beams.</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">Exploding beams.</span>
          </div>
        </div>
      </div>

      <div className="my-[7vh] text-center text-xl flex justify-center items-center ">
        <p className="w-1/2">
          {" "}
          Struggling with the current job market? DevQuest provides powerful
          AI-driven resume analysis, interview prep, and cover letter
          generation.
        </p>
      </div>

      <div className="mx-auto flex justify-center items-center gap-5 mb-10">
        <button className="w-[10vw] p-[3px] relative ">
          <div className="w-full absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2 w-full bg-zinc-900 rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            <a href="../public/Resume/Abhishek_Pant_Resume.pdf" download>
              Sumbit
            </a>
          </div>
        </button>
        <button className="w-[10vw] p-[3px] relative ">
          <div className="w-full absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2 w-full bg-zinc-900 rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            <a href="../public/Resume/Abhishek_Pant_Resume.pdf" download>
              Sumbit
            </a>
          </div>
        </button>
      </div>

      <div className="hero-image-wrapper mt-5 md:mt-0">
        <div className="hero-image" ref={imageRef}>
          <Image
            src={image1}
            width={1180}
            height={720}
            alt="Banner Jobhunt"
            className="rounded-lg shadow-2xl border mx-auto"
          />
        </div>
      </div>

      <div className="h-[200px] w-full"></div>

      <FadeInSplit
        left={
          <Image
            src={image1}
            alt="Left"
            className="w-full h-full rounded-lg text-center"
          />
        }
        right={
          <p className="text-xl text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            dolorem quis recusandae explicabo error, cumque facere nam odio,
            nisi ipsam magni nostrum culpa alias aut aspernatur quos, mollitia
            molestiae delectus?
          </p>
        }
      />
      <FadeInSplit
        left={
          <Image
            src={image1}
            alt="Left"
            className="w-full h-full rounded-lg text-center"
          />
        }
        right={
          <p className="text-xl text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            dolorem quis recusandae explicabo error, cumque facere nam odio,
            nisi ipsam magni nostrum culpa alias aut aspernatur quos, mollitia
            molestiae delectus?
          </p>
        }
        reverse={true}
      />
      <FadeInSplit
        left={
          <Image
            src={image1}
            alt="Left"
            className="w-full h-full rounded-lg text-center"
          />
        }
        right={
          <p className="text-xl text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            dolorem quis recusandae explicabo error, cumque facere nam odio,
            nisi ipsam magni nostrum culpa alias aut aspernatur quos, mollitia
            molestiae delectus?
          </p>
        }
      />
      <ContactMe />
    </div>
  );
}

export default Hero;
