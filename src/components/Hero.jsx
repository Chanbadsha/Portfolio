/* eslint-disable react/no-unescaped-entities */
import badshaImg from "@/../public/chanbadsha.jpg";
import { Comment, LogoGithub, Tv } from "@gravity-ui/icons";
import { Button, ButtonGroup } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
const HeroSection = () => {
  return (
    <div className="container h-full gap-4 py-20   flex flex-col items-center justify-center mx-auto">
      <p
        className="capitalize px-4 py-1 rounded-full flex items-center gap-2 border border-emerald-400 
  bg-emerald-900/30 backdrop-blur-md text-emerald-400 
  text-sm font-medium tracking-wide 
  hover:bg-emerald-800/40 transition-all duration-300"
      >
        <span className="h-3 w-3 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.7)]"></span>
        Available for freelance & full-time roles
      </p>
      <div className=" my-2 animate-spin-slow  animate-spin-slow   bg-linear-to-tr from-violet-500 via-cyan-400 to-violet-500  rounded-full  p-2">
        <Image
          className="rounded-full"
          src={badshaImg}
          alt="Chan Badsha Image"
          width={200}
          height={200}
        />
      </div>
      <p className="text-2xl text-gray-500 font-bold">Frontend Developer</p>
      <h1 className="xl:text-5xl font-extrabold">
        Hi, I'm <span className="text-[#62aaf9]">Chan Badsha</span>
      </h1>

      <p className="text-gray-500 text-center">
        I build fast, scalable, and user-focused web applications.
        <br /> Clean code. Thoughtful design. Meaningful impact.
      </p>

      {/* Skills  pills */}
      <div className="gap-4 flex">
        <span className="font-semibold border border-[#3de4fa]  text-[#3de4fa] bg-[rgba(101,228,244,0.3)] px-4 py-1 rounded-2xl">
          React.js
        </span>
        <span className="font-semibold border  text-[#949b9b] bg-[rgba(95,101,102,0.3)] px-4 py-1 rounded-2xl">
          Next.js
        </span>
        <span className="font-semibold border  border-[#83eaa8] text-[#83eaa8] bg-[rgba(131,234,168,0.3)] px-4 py-1 rounded-2xl">
          Node.js
        </span>
        <span className="font-semibold border  text-[#3de4fa] bg-[rgba(101,228,244,0.3)] px-4 py-1 rounded-2xl">
          MongoDB
        </span>
        <span className="font-semibold border border-[#93c5fd]  text-[#93c5fd] bg-[rgba(147,197,253,0.3)] px-4 py-1 rounded-2xl">
          TypeScript
        </span>
      </div>

      {/* States section */}
      <div className="w-250 text-white mt-12  space-y-3">
        <ButtonGroup className="" fullWidth>
          <Button
            variant="outline"
            className="flex hover:bg-transparent text-white flex-col h-20 border-r  border-gray-500 py-12"
          >
            <span className="text-xl font-extrabold">3+</span>
            <span className="text-gray-500">Years exp.</span>
          </Button>
          <Button
            variant="outline"
            className="flex hover:bg-transparent text-white flex-col h-20 border-r  border-gray-500 py-12"
          >
            <span className="text-xl font-extrabold">24</span>
            <span className="text-gray-500">Projects shipped</span>
          </Button>
          <Button
            variant="outline"
            className="flex hover:bg-transparent text-white flex-col h-20 border-gray-500 py-12"
          >
            <span className="text-xl font-extrabold">12</span>
            <span className="text-gray-500">Happy clients</span>
          </Button>
        </ButtonGroup>
      </div>

      <div className="flex gap-4 my-8 ">
        <Button
          className="text-white font-semibold bg-black/50 border text-lg px-12 py-6 
  shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:shadow-[0_0_35px_rgba(255,255,255,0.7)]  
  transition-all duration-300 hover:-translate-y-0.5"
          variant="tertiary"
        >
          <Tv className="w-6 h-6 shrink-0" />
          View Projects
        </Button>

        <Button
          className="text-white font-semibold bg-black/50 border text-lg px-12 py-6 
  shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:shadow-[0_0_35px_rgba(255,255,255,0.7)] 
  transition-all duration-300 hover:-translate-y-0.5"
          variant="tertiary"
        >
          <Comment className="w-6 h-6 shrink-0" />
          Contact Me
        </Button>
      </div>

      <div className="flex gap-6 items-center">
        <div className="flex gap-4 border-r pr-8">
          <button className="border hover:-translate-y-1 rounded-xl text-2xl p-4">
            <FaGithub />
          </button>
          <button className="border hover:-translate-y-1 rounded-xl text-2xl p-4">
            <FaLinkedin />
          </button>
          <button className="border hover:-translate-y-1 rounded-xl text-2xl p-4">
            <FaFacebook />
          </button>
        </div>
        <Link className="flex items-center gap-1" href={"#"}>
          Download CV{" "}
          <span className="text-xl">
            <GoArrowUpRight />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
