import { motion, useMotionValue } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const y = useMotionValue(0);
  const liClass =
    "hover:scale-125 text-lg font-medium transition grid place-items-center";

  const navigateTo = (section: string) => {
    console.log(section);
  };
  return (
    <motion.div
      className={`absolute top-0 z-50 w-screen transition-transform ${
        isActive ? "translate-y-0" : "-translate-y-20"
      }`}
    >
      <motion.div
        className="flex  h-20 w-full items-center  justify-center bg-body  text-text"
        drag="y"
        dragConstraints={{
          top: 0,
          bottom: 0,
        }}
        dragElastic={0.099}
        onDragEnd={() => {
          if (y.get() > 8) {
            setIsActive(true);
          }
        }}
        style={{ y }}
      >
        <ul className="relative mx-auto flex h-full w-full max-w-4xl justify-between">
          <motion.li
            className="absolute left-1/2 top-[100%] -translate-x-1/2"
            initial={{ top: 0 }}
            animate={{ top: "100%", transition: { delay: 3, duration: 1.5 } }}
          >
            <button
              className="btn-clip mx-auto block h-12 w-60  bg-grey text-lg font-medium text-body"
              onClick={() => setIsActive((pre) => !pre)}
            >
              Menu
            </button>
          </motion.li>
          <li className={liClass}>
            <button onClick={() => navigateTo("Home")}>Home</button>
          </li>
          <li className={liClass}>
            <button onClick={() => navigateTo("About")}>About</button>
          </li>
          <li className={liClass}>
            <button onClick={() => navigateTo("Shope")}>Shope</button>
          </li>
          <li className={liClass}>
            <button onClick={() => navigateTo("hero")}>Home</button>
          </li>
          <li className={liClass}>
            <button onClick={() => navigateTo("NewArrival")}>
              New Arrival
            </button>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
