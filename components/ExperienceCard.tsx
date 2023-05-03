import React from "react";
import { motion } from "framer-motion";
import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
import react from "../images/reactjs.png"
import python from "../images/python.png"
import typescript from "../images/typescript.png"
import Image from 'next/image';
import nextjs from "../images/nextjs.png";
import code from '../images/code.png';

type Props = {};

function ExperienceCard({}: Props) {
  const ImageWithMotion = motion(Image);
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <ImageWithMotion
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        src={code}
        className="w-32 h-32 mt-10 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        alt=""
      />
      <div className="px-0 md:px-10 pl-20 w-full">
        <h4 className="text-2xl xl:text-4xl flex font-light">BOOTCAMP Training</h4>
        <p className="font-bold text-2xl xl:text-4xl mt-1">CROSSROADS</p>
        <div className="flex space-x-2 my-2">
          <Image 
          className=" rounded-full object-contain"
          src={html}
          height={30}
          width={30}
          alt=""
          />
          <Image 
          className=" rounded-full object-contain"
          src={css}
          height={30}
          width={30}
          alt=""
          />
          <Image 
          className=" rounded-full object-contain"
          src={javascript}
          height={30}
          width={30}
          alt=""
          />
          <Image 
          className=" rounded-full object-contain"
          src={react}
          height={35}
          width={35}
          alt=""
          />
          <Image 
          className="mb-2 mr-2 rounded-full object-cover"
          src={typescript}
          height={35}
          width={35}
          alt=""
          />
          <Image 
          className=" rounded-full object-contain"
          src={nextjs}
          height={35}
          width={35}
          alt=""
          />
          <Image 
          className=" rounded-full object-contain"
          src={python}
          height={30}
          width={30}
          alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-300">28-3-2022...- 17-10-2022...</p>
        <ul className="list-disc space-y-4 ml-2 text-sm xl:text-lg md:text-lg">
            <li>From here i had learned both Frontend and Backend.</li>
            <li>The technologies HTML,CSS,JavaScript,ReactJs,NextJs,Typescript,Django etc...</li>
            <li>I&apos;ve done Fully responsive Ecommerce web site, Frontend react and backend Django.</li>
            <li>Included advance technologies.</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
