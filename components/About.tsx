import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../images/profile.jpg";
import Image from "next/image";
import AppleIcon from '@mui/icons-material/Apple';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

type Props = {};

function About({}: Props) {
  const ImageWithMotion = motion(Image);
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        About
      </h3>
      <ImageWithMotion
        src={aboutImg}
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
        }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-80 md:h-100 xl:w-[400px] xl:h-[500px]"
        alt="example image"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">Here is a <span className="underline decoration-[#F7AB0A]/50">little</span>{" "} background</h4>
        <p className="text-base">
          I&apos;m Nidhin,<AppleIcon className="text-red-800 h-6 w-6 mb-1"/>here&apos;s little bit about me...i&apos;ve always been interested in Web Development,And i&apos;ve neccessary skills required for the role.i&apos;ve been coding for over 1.5 years now.As a Full Stack Developer i&apos;ve worked with real projcts like Ecommerce.I have a good understanding of HTML, CSS, Java Script, React JS, Next JS, TypeScript, Tailwind CSS, Bootstrap, Python, Django...<AutoAwesomeIcon className="text-yellow-300 h-6 w-6 mb-1"/>
        </p>
      </div>
    </div>
  );
}

export default About;
