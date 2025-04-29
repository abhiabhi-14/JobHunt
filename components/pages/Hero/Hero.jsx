"use client";
import React, { use, useEffect, useRef } from "react";
import FadeInSplit from "../../Block";
import ContactMe from "../../ContactMe";
import Image from "next/image";
import image1 from "../../../public/Hero.png";
import image2 from "../../../public/Resume_ss.png";
import image3 from "../../../public/CoverLetter_ss.png";
import image4 from "../../../public/Jobs_ss.png";
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
        Want to get a Job?{" "}
      </h2>
      <div className="text-2xl md:text-4xl lg:text-7xl font-bold text-center">
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">Try JobHunt</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">Try JobHunt</span>
          </div>
        </div>
      </div>

      <div className="my-[7vh] text-center text-xl flex justify-center items-center ">
        <p className="w-1/2">
          {" "}
          JobHunt simplifies your job search with AI-driven resume parsing,
          cover letter generation, and smart job matching.
        </p>
      </div>

      <div className="mx-auto flex justify-center items-center gap-5 mb-10">
        <button className="w-[10vw] p-[3px] relative ">
          <div className="w-full absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2 w-full bg-zinc-900 rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            <a href="https://portfolio-2-ashy-xi.vercel.app/">Portfolio</a>
          </div>
        </button>
        <button className="w-[10vw] p-[3px] relative ">
          <div className="w-full absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2 w-full bg-zinc-900 rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            <a href="https://portfolio-2-ashy-xi.vercel.app/">Artive</a>
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
            src={image2}
            alt="Left"
            className="w-full h-full rounded-lg text-center"
          />
        }
        right={
          <p className="text-xl text-center">
            Our Resume Parser is a smart tool on our website that helps job
            seekers and recruiters alike. It scans resumes to extract key
            details like skills, education, and experience, ensuring they are
            ATS-friendly. The parser checks formatting and keyword relevance,
            providing instant feedback to improve visibility in applicant
            tracking systems. With this tool, users can optimize their resumes
            for better job matches.
          </p>
        }
        reverse={true}
      />
      <FadeInSplit
        left={
          <Image
            src={image3}
            alt="Left"
            className="w-full h-full rounded-lg text-center"
          />
        }
        right={
          <p className="text-xl text-center">
            Our Cover Letter Analyzer is a helpful tool on our website designed
            to guide job seekers in crafting impactful, ATS-friendly cover
            letters. It reviews structure, tone, and keyword relevance based on
            the target job description. The tool provides instant feedback on
            areas to improve, such as clarity, personalization, and formatting.
            This ensures the cover letter aligns with industry standards and
            increases the chances of catching a recruiter’s attention.
          </p>
        }
      />
      <FadeInSplit
        left={
          <Image
            src={image4}
            alt="Left"
            className="w-full h-full rounded-lg text-center"
          />
        }
        right={
          <p className="text-xl text-center">
            Our Jobs section offers over 200 job opportunities across various
            fields, including tech, marketing, design, finance, and more.
            Whether you're looking for full-time, part-time, contract, or remote
            roles, we have options to suit every career stage and lifestyle.
            With listings from top companies worldwide, you'll find the perfect
            match for your skills and ambitions. Start exploring today and take
            the next step toward your ideal job with JobHunt!
          </p>
        }
        reverse={true}
      />
      <ContactMe />
    </div>
  );
}

export default Hero;
