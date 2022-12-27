import logo from "../assets/Svgs/star_white_48dp.svg";
import { motion } from "framer-motion";

const liClass =
  "hover:scale-125 text-2xl px-2 font-medium transition grid place-items-center";

const Footer = () => {
  return (
    <section className="min-w-screen min-h-screen bg-body text-white">
      <div className="mx-auto  flex min-h-screen max-w-5xl flex-col items-center justify-center space-y-12">
        <img src={logo} alt="logo" className="h-auto w-[10vw]" />
        <p className="text-6xl">Wibe Studio</p>
        <ul className="mx-4 flex w-full flex-wrap items-center justify-between border-t-2 border-b-2 border-t-white border-b-white p-4 font-sirin">
          <li className={liClass}>
            <button>Home</button>
          </li>
          <li className={liClass}>
            <button>About</button>
          </li>
          <li className={liClass}>
            <button>Shope</button>
          </li>
          <li className={liClass}>
            <button>Home</button>
          </li>
          <li className={liClass}>
            <button>New Arrival</button>
          </li>
        </ul>
        <p>
          © 2023. All Rights Reserved. Made with ♥ by{" "}
          <a href="https://danishsjjd.netlify.app/" target={"_blank"}>
            Danish
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
