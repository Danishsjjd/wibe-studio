import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { motion } from "framer-motion"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import img1 from "../assets/Images/1.webp"
import img2 from "../assets/Images/2.webp"
import img3 from "../assets/Images/3.webp"
import img4 from "../assets/Images/4.webp"
import img5 from "../assets/Images/5.webp"
import img6 from "../assets/Images/6.webp"
import img7 from "../assets/Images/7.webp"
import img8 from "../assets/Images/8.webp"
import img9 from "../assets/Images/9.webp"

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9]

const Arrivals = () => {
  gsap.registerPlugin(ScrollTrigger)

  const container = useRef<HTMLDivElement | null>(null)
  const section = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const tween = gsap.to(container.current, {
      yPercent: -90,
      scrollTrigger: {
        trigger: section.current,
        start: "top top",
        end: () => `+=${container.current?.offsetHeight}`,
        pin: section.current,
        scrub: 1,
      },
    })

    return () => {
      tween.revert()
    }
  }, [])

  return (
    <section
      className="relative mx-auto h-screen w-screen max-w-7xl pt-8"
      ref={section}
      id="Arrival"
    >
      <div className="relative grid md:grid-cols-3">
        <p className="text-shadow font-kaushan text-4xl md:text-7xl lg:text-8xl">
          New Arrivals
        </p>
        <div className="mx-auto h-[90vh] w-10/12 overflow-hidden rounded-lg border-4 border-black p-4 md:w-auto">
          <div ref={container}>
            {images.map((imgSrc) => (
              <motion.img
                src={imgSrc}
                alt="scrollTrigger images"
                key={imgSrc}
                height={"600px"}
                className="w-full object-cover py-6"
                initial={{ filter: "grayscale(100%)" }}
                whileInView={{
                  filter: "grayscale(0%)",
                  transition: { duration: 1.5 },
                }}
              />
            ))}
          </div>
        </div>
        <div className="ml-auto hidden max-w-xs self-center pl-4 pr-8 text-xl md:block">
          <p>
            There is new collection available for cool clothes in all sizes.
            This collection is a great way to find a new look for you. It offers
            a variety of cool apparel styles to fit your taste, while you can
            also find some cool clothes that you can wear everyday.
          </p>
          <br />
          <p>
            The first line of clothing you will see on this collection is for
            men. The collection also includes three new styles for women.
          </p>
          <br />
          <p>Give it a try and experience a new look.</p>
        </div>
      </div>
    </section>
  )
}

export default Arrivals
