import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import project from "../images/project-1.png";
import project2 from "../images/project-2.png";

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
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="w-full absolute top-[20%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12" />
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin">
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
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
            src={project}
            alt=""
            height={100}
            width={100}
          />
          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
              <span className="underline decoration-[#F7AB0A]/50">
                Ecommerce Shoping Cart
              </span>
            </h4>
            <p className="text-lg text-center md:text-left ">
              This project Frontend Functionalities in ReactJS and Backend
              Functionalities in Django.Fully Responsive Site,New User
              Authentication, Reset Password, Listing Products, Add To Cart
              Option, Stripe Payement Gateway, Products Adding to Wishlist, User
              Order Tracking, Category Wise Filtering...
            </p>
          </div>
        </div>
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
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
            src={project2}
            alt=""
            height={100}
            width={100}
          />
          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
              <span className="underline decoration-[#F7AB0A]/50">
                Netflix Clone
              </span>
            </h4>
            <p className="text-lg text-center md:text-left ">
              UI design, Fully responsive pages. Technologies HTML, CSS,
              Javascript... Included some animations etc...
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
