import { motion, Variants } from "framer-motion";

const pathVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 2,
      delay: 3,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: -5,

    transition: {
      default: {
        duration: 2,
        delay: 4,
        ease: "easeInOut",
      },
    },
  },
};

const Logo = () => {
  return (
    <div className="flex items-end">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        height="48px"
        viewBox="0 0 24 24"
        width="48px"
        fill="none"
        className="h-auto w-16 [stroke-linejoin:round] [stroke-linecap:round]"
      >
        <g>
          <motion.path
            d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
            className={"stroke-text"}
            initial="hidden"
            animate="visible"
            variants={pathVariants}
          />
        </g>
      </svg>

      <motion.span
        className="font-kaushan text-xl text-text"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        Wibe Studio
      </motion.span>
    </div>
  );
};

export default Logo;
