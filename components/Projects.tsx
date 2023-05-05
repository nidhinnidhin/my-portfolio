import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import project from "../images/project1.png";
import project2 from "../images/project2.png";
import { ProjectDatas } from "./datas";

type Props = {};

function Projects({}: Props) {
  const ImageWithMotion = motion(Image);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-0 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="w-full absolute top-[20%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12" />
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin">
        {ProjectDatas.map((data) => {
          return (
            <div key={data.id} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
              <ImageWithMotion
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{
                  duration: 1.5,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                src={data.image}
                alt=""
                className="h-30 w-30"
              />
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50">
                    {data.title}
                  </span>
                </h4>
                <p className="text-sm md:text-lg xl:text-lg text-center md:text-left xl:text-lg md:text-lg">
                  {data.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Projects;
