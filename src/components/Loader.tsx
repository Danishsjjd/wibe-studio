import { motion, Variants } from "framer-motion"
import { Dispatch, SetStateAction } from "react"

type Props = {
  setIsScrollbarVisible: Dispatch<SetStateAction<boolean>>
  isScrollbarVisible: boolean
}

const pathVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
}

const textVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: -5,

    transition: {
      duration: 2,
      ease: "easeInOut",
      delay: 0.5,
    },
  },
}

const loaderVariants: Variants = {
  hidden: {
    y: 0,
    opacity: 1,
  },
  visible: {
    y: "100%",
    opacity: 0,
    transition: {
      ease: "easeInOut",
      delay: 2.5,
      duration: 1,
    },
  },
}

const Loader = ({ isScrollbarVisible, setIsScrollbarVisible }: Props) => {
  return (
    <motion.div
      className={`${
        !isScrollbarVisible && "hide-root-scrollbar"
      } fixed inset-0 z-[9999] grid place-items-center bg-black`}
      initial="hidden"
      animate="visible"
      variants={loaderVariants}
      onAnimationComplete={() => {
        setIsScrollbarVisible(true)
      }}
    >
      <div className="flex scale-150 flex-col items-center">
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
              variants={pathVariants}
            />
          </g>
        </svg>

        <motion.span
          className="font-kaushan text-xl text-text"
          variants={textVariants}
        >
          Wibe Studio
        </motion.span>
      </div>
    </motion.div>
  )
}

export default Loader
