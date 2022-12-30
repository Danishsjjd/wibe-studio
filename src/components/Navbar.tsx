import { motion, useMotionValue } from "framer-motion"
import { useState } from "react"

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)
  const y = useMotionValue(0)
  const liClass =
    "hover:scale-125 py-8 text-lg font-medium transition grid place-items-center"

  const navigateTo = (section: string) => {}
  return (
    <motion.div
      className={`absolute top-0 z-50 w-screen transition-transform ${
        isActive ? "translate-y-0" : "-translate-y-[100%]"
      }`}
    >
      <motion.div
        className="flex  w-full items-center  justify-center bg-body  text-text"
        drag="y"
        dragConstraints={{
          top: 0,
          bottom: 0,
        }}
        dragElastic={0.099}
        onDragEnd={() => {
          if (y.get() > 8) {
            setIsActive(true)
          }
        }}
        style={{ y }}
      >
        <ul className="relative mx-auto flex h-full w-full max-w-4xl flex-col justify-between md:flex-row">
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
            <a href="#Home">Home</a>
          </li>
          <li className={liClass}>
            <a href="#About">About</a>
          </li>
          <li className={liClass}>
            <a href="#Shope">Shope</a>
          </li>
          <li className={liClass}>
            <a href="#Arrival">New Arrival</a>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  )
}

export default Navbar
