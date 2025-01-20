/* eslint-disable */
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/AllUi";

const Footer = () => {
  return (
    <footer className="w-full pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">   
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to cook <span className="text-purple">delicious</span> meals
          together?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Order now or reach out with your recipes & we&apos;ll whip up some new cookies!
        </p>
        <a href="mailto:unknowns.cov@gmail.com">
        <MagicButton
            title="Let&apos;s start cooking"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Ehsan Stp
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
export default Footer;