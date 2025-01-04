import React, { useEffect } from "react";
import logo from "../assets/images/logo.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import womenhair from "../assets/images/womenhair.png";
import menshair from "../assets/images/menshair.png";
import trimmer from "../assets/images/trimmer.png";
import { FaRegClock } from "react-icons/fa6";
import { MdOutlineInvertColors } from "react-icons/md";
import E from "../assets/E.svg";
const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <>
      {/*LOGO TER PODATKI O SALONU  */}
      <section
        id="hero"
        className="sm:flex-col w-full  px-10 flex flex-col justify-center items-center gap-20 md:flex-row"
      >
        <div
          id="content-box"
          className="flex flex-col justify-center items-start gap-10 "
        >
          <h1
            data-aos="zoom-in"
            className="xs:text-5xl text-6xl  mt-20 xs:mx-2 text-black font-bold"
          >
            FRIZERSKO LEPOTNI SALON<br></br>
          </h1>
          <h1 className="ml-2  flex xs:text-5xl items-center text-black font-bold md:text-6xl">
            IN
            <img
              src={E}
              className="xs:size-14 mb-0.5 md:size-16  mt-2"
              alt="E logo"
            />
            STYL
            <img
              src={E}
              className="xs:size-14 mb-0.5 md:size-16 mt-2"
              alt="E logo"
            />
          </h1>
          <div
            data-aos="slide-up"
            id="icon-list"
            className="flex flex-col justify-center items-start gap-6"
          >
            <div
              id="icon-box"
              className="flex md:mt-6 justify-center items-center gap-3"
            >
              <FaLocationDot className="text-black size-6" />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://maps.app.goo.gl/B5Zpv1fBqUoR5WPj7"
                className="hover:underline text-xl text-gray-800 font-semibold"
              >
                Grajski trg 5, 8360 Žužemberk, Slovenia
              </a>
            </div>

            <div
              id="icon-box"
              className="flex justify-center items-center gap-3"
            >
              <MdOutlinePhoneAndroid className="text-black size-6" />
              <h1 className="text-xl text-gray-800 font-semibold">
                040 832 225
              </h1>
            </div>
            <div
              id="icon-box"
              className="flex justify-center items-center gap-3"
            >
              <MdEmail className="text-black size-6" />
              <h1 className="text-xl text-gray-800 font-semibold">
                studioinestyle@gmail.com
              </h1>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in" id="image-box" className="md:w-[50%] w-full">
          <img
            src={logo}
            alt="logo"
            className=" xs:h-[600px]  py-10  lg:mx-20  rounded-xl w-full   md:w-[600px] md:h-[700px] 
               lg:w-[700px] lg:h-[700px] 
               xl:w-[700px] xl:h-[700px] "
          />
        </div>
      </section>
      {/*IKONE postavitev */}
      <section className="grid grid-cols-1 md:grid-cols-4 justify-center items-start w-full md:px-[120] px-10 py-10 gap-10">
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex flex-col justify-center items-center gap-4"
        >
          <img
            src={womenhair}
            alt=""
            className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <h1 className="text-2xl text-black font-semibold">
            Žensko striženje
          </h1>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="  flex flex-col justify-center items-center gap-4"
        >
          <img
            src={menshair}
            alt=""
            className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <h1 className="text-2xl text-black font-semibold">Moško striženje</h1>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex flex-col justify-center items-center gap-4"
        >
          <img
            src={trimmer}
            alt=""
            className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <h1 className="text-2xl text-black font-semibold">Urejanje brade</h1>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex flex-col justify-center items-center gap-4"
        >
          <MdOutlineInvertColors className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer" />
          <h1 className="text-2xl text-black font-semibold">Barvanje</h1>
        </div>
      </section>
      <div
        data-aos="zoom-in"
        className="flex my-20 flex-row justify-center items-center gap-4 py-4 rounded-xl w-full text-center"
      >
        <FaRegClock className="text-black xs:ml-10 text-6xl shrink-0" />
        <h1 className=" xs:ml-2 font-bold text-4xl text-black mx-6">
          DELOVNI ČAS PO DOGOVORU
        </h1>
      </div>
    </>
  );
};

export default Hero;
