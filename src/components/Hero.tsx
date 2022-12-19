import { motion, Variants } from "framer-motion";

import heroVideo from "../assets/Walking Girl.mp4";
import Logo from "./Logo";

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: {
      delayChildren: 5, // 2
      staggerChildren: 0.3,
    },
  },
};
const item = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const Hero = () => {
  return (
    <section className="h-screen w-screen" id="Home">
      <div className="absolute inset-0 -z-10 bg-body/40" />
      <video
        src={heroVideo}
        // autoPlay
        loop
        controls={false}
        className="absolute inset-0 -z-20 h-screen w-full object-cover"
        muted
      ></video>
      <div className="mx-auto h-full w-full max-w-7xl py-4">
        <Logo />
        <motion.div
          className="flex h-full w-full flex-col items-center justify-center text-text"
          variants={container}
          initial={"hidden"}
          animate="show"
        >
          <div className="text-shadow flex font-kaushan [&>*]:text-[10rem]">
            <motion.h2
              variants={item}
              data-scroll
              data-scroll-delay="0.13"
              data-scroll-speed="4"
            >
              W
            </motion.h2>
            <motion.h2
              variants={item}
              data-scroll
              data-scroll-delay="0.09"
              data-scroll-speed="4"
            >
              i
            </motion.h2>
            <motion.h2
              variants={item}
              data-scroll
              data-scroll-delay="0.06"
              data-scroll-speed="4"
            >
              b
            </motion.h2>
            <motion.h2
              variants={item}
              data-scroll
              data-scroll-delay="0.04"
              data-scroll-speed="4"
            >
              e
            </motion.h2>
          </div>
          <motion.h2
            variants={item}
            data-scroll
            data-scroll-delay="0.04"
            data-scroll-speed="2"
          >
            Inspire. Create. Belive
          </motion.h2>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
