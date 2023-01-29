import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"

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

const Collections = () => {
  const section = useRef<null | HTMLDivElement>(null)
  const container = useRef<null | HTMLDivElement>(null)
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const tween = gsap.to(container.current, {
      xPercent: -300,
      scrollTrigger: {
        trigger: section.current,
        start: "top top",
        end: () => `+=${container.current?.offsetWidth}`,
        // markers: true,
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
      className="hidden min-h-[100vh] bg-white md:block"
      ref={section}
      id="Shope"
    >
      <div className="flex">
        <div className="relative grid min-h-[100vh] w-1/3 min-w-[200px] place-items-center bg-body p-2 text-text md:p-6">
          <h2 className="text-shadow absolute top-4 font-kaushan text-4xl md:text-6xl">
            New Collections
          </h2>
          <p className="mt-16 text-base md:text-xl">
            The brand new collection is currently being developed in USA. We
            create our products using best quality material, including the use
            of some of the pure fabrics to make our products. All products are
            made using the best materials, from the finest cotton to the finest
            fabrics.
            <br />
            <br />
            We have lots of different clothing options like shoes, jackets and
            dresses. Not only clothes but we also provide unique Jewellery as
            well. It is great for us to carry our new clothes all around the
            country and look different.
          </p>
        </div>
        <div className="relative min-h-[100vh] w-[67%] overflow-hidden bg-grey">
          <div
            className="flex h-full items-center justify-start gap-10 px-10"
            ref={container}
          >
            {images.map((imgSrc) => (
              <motion.img
                src={imgSrc}
                alt="scrollTrigger images"
                key={imgSrc}
                width="400px"
                height={"600px"}
                className="object-cover"
                initial={{ filter: "grayscale(100%)" }}
                whileInView={{
                  filter: "grayscale(0%)",
                  transition: { duration: 1.5 },
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Collections
