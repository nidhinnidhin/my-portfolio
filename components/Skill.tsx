import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import react from "../images/reactjs.png";
import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
import nextjs from "../images/nextjs.png";
import typescript from "../images/typescript.png";
import python from "../images/python.png";
import psql from "../images/psql.png";
import git from "../images/git.png";
import postman from "../images/postman.png";
import bootstrap from "../images/bootstrap.png";
import tailwind from "../images/tailwind.png";
import material from "../images/material.png";
import websocket from "../images/websocket.png";
import djangoo from "../images/djangoo.png";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  const ImageWithMotion = motion(Image);
  return (
    <div className="grid grid-cols-3 xl:grid-cols-4 md:grid-cols-4 xl:gap-5 md:gap-3 gap-5">
      <div className="group relative flex cursor-pointer">
        <ImageWithMotion
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          src={html}
          alt=""
          className="rounded-full object-cover w-20 h-20 xl:w-24 xl:h-24 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-24 xl:h-24 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-black opacity-100">90%</p>
          </div>
        </div>
      </div>
      <div className="group relative flex cursor-pointer">
        <ImageWithMotion
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          src={css}
          alt=""
          className="rounded-full object-cover w-20 h-20 xl:w-24 xl:h-24 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-24 xl:h-24 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-black opacity-100">85%</p>
          </div>
        </div>
      </div>
      <div className="group relative flex cursor-pointer">
        <ImageWithMotion
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          src={javascript}
          alt=""
          className="rounded-full object-cover w-20 h-20 xl:w-24 xl:h-24 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-24 xl:h-24 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-black opacity-100">85%</p>
          </div>
        </div>
      </div>
      <div className="group relative flex cursor-pointer">
        <ImageWithMotion
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          src={react}
          alt=""
          className="rounded-full object-cover w-20 h-20 xl:w-24 xl:h-24 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-24 xl:h-24 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-black opacity-100">85%</p>
          </div>
        </div>
      </div>
      <div className="group relative flex cursor-pointer">
        <ImageWithMotion
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          src={typescript}
          alt=""
          className="rounded-full mt-[-15px] object-cover w-20 h-20 xl:w-24 xl:h-24 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-24 xl:h-24 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-black opacity-100">85%</p>
          </div>
        </div>
      </div>
      <div className="group relative flex cursor-pointer">
        <ImageWithMotion
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          src={nextjs}
          alt=""
          className="rounded-full object-cover w-24 h-20 xl:w-20 xl:h-24 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-24 xl:h-24 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-black opacity-100">90%</p>
          </div>
        </div>
      </div>
      <div className="group relative flex cursor-pointer">
        <ImageWithMotion
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          src={python}
          alt=""
          className="rounded-full object-cover w-20 h-20 xl:w-24 xl:h-24 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-24 xl:h-24 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-black opacity-100">85%</p>
          </div>
        </div>
      </div>
      <div className="group relative flex cursor-pointer">
        <ImageWithMotion
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          src={djangoo}
          alt=""
          className="rounded-full object-cover w-20 h-20 xl:w-24 xl:h-24 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-24 xl:h-24 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-black opacity-100">85%</p>
          </div>
        </div>
      </div>
      <div className="group relative flex cursor-pointer">
        <ImageWithMotion
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          src={websocket}
          alt=""
          className="rounded-full object-cover w-20 h-20 xl:w-24 xl:h-24 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-24 xl:h-24 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-black opacity-100">80%</p>
          </div>
        </div>
      </div>
      <div className="group relative flex cursor-pointer">
        <ImageWithMotion
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          src={psql}
          alt=""
          className="rounded-full object-cover w-20 h-20 xl:w-24 xl:h-24 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-24 xl:h-24 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-black opacity-100">80%</p>
          </div>
        </div>
      </div>
      <div className="group relative flex cursor-pointer">
        <ImageWithMotion
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          src={git}
          alt=""
          className="rounded-full object-cover w-20 h-20 xl:w-24 xl:h-24 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-24 xl:h-24 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-black opacity-100">90%</p>
          </div>
        </div>
      </div>
      <div className="group relative flex cursor-pointer">
        <ImageWithMotion
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          src={postman}
          alt=""
          className="rounded-full object-cover w-20 h-20 xl:w-24 xl:h-24 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-24 xl:h-24 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-black opacity-100">85%</p>
          </div>
        </div>
      </div>
      <div className="group relative flex cursor-pointer">
        <ImageWithMotion
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          src={tailwind}
          alt=""
          className="rounded-full object-cover w-20 h-20 xl:w-24 xl:h-24 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-24 xl:h-24 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-black opacity-100">80%</p>
          </div>
        </div>
      </div>
      <div className="group relative flex cursor-pointer">
        <ImageWithMotion
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          src={bootstrap}
          alt=""
          className="rounded-full object-cover w-20 h-20 xl:w-24 xl:h-24 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-24 xl:h-24 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-black opacity-100">80%</p>
          </div>
        </div>
      </div>
      <div className="group relative flex cursor-pointer">
        <ImageWithMotion
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          src={material}
          alt=""
          className="rounded-full object-cover w-20 h-20 xl:w-24 xl:h-24 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-24 xl:h-24 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-black opacity-100">80%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
