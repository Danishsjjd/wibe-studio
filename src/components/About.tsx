import img1 from "../assets/Images/1.webp"
import img2 from "../assets/Images/2.webp"
import img3 from "../assets/Images/3.webp"
const About = () => {
  return (
    <section id="About" className="overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl gap-3 py-3 px-6 md:flex md:min-h-[100vh] md:px-0">
        <div className="relative z-10 flex-1">
          <h2 className="text-shadow  font-kaushan text-4xl md:text-9xl">
            About Us
          </h2>
          <div
            className="relative z-10 mx-auto mt-3 max-w-xl rounded-md bg-white/40 p-4 pr-7 text-base backdrop-blur-sm md:h-[80vh] md:max-w-none md:p-0 md:text-xl md:backdrop-blur-0"
            id="about-fixed-target"
          >
            <p className="md:pl-3">
              We're fashion studio based in california. We create unique designs
              that will blow your mind. We also design unique jewellary pieces.
              Fashion is an ART that can not be grasped by everyone.
              <br />
              <br />
              We are very dedicated to making our products. We offer unique and
              creative products to a wide range of people. We have a variety of
              styles, but for most people, all of the options are in the box. We
              specialize in making things that make you happy.
              <br />
              <br />
              We strive to build on our vision. As a fashion label, we do our
              best to create amazing experiences for all people. We are always
              looking to make something that is easy for everyone.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 mx-3 flex-1  overflow-visible md:relative md:mx-0">
          <img
            src={img1}
            alt="first image"
            className="h-full max-h-[100vh] w-full object-cover"
          />
          <img
            src={img2}
            alt="second image"
            className="absolute top-[20%] right-0 h-96 w-60 object-cover md:-right-16"
          />
          <img
            src={img3}
            alt="third image"
            className="absolute top-[40%] left-0 h-80 w-52 object-cover md:-left-40"
          />
        </div>
      </div>
    </section>
  )
}

export default About
