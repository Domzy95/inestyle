import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";
import E from "../assets/E.svg";

const Footer = () => {
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
      <section className=" bg-gray-900 md:px-20 px-10 md:py-20 py-10 flex flex-col justify-center items-center gap-6 border-[20px] border-[#c4b568]">
        <h1 className="flex  items-center text-white font-bold xs:text-4xl md:text-5xl">
          IN
          <img
            src={E}
            className="xs:size-12 mb-0.5 md:size-14 mt-2"
            alt="E logo"
          />
          STYL
          <img
            src={E}
            className="xs:size-12 mb-0.5 md:size-14 mt-2"
            alt="E logo"
          />
        </h1>

        <p className="xs:text-md md:text-lg text-center font-semibold text-white">
          Lepota se začne z vami. Mi smo tukaj, da jo poudarimo.
        </p>
        <div id="icons" className="flex justify-center items-center gap-4">
          <a
            href="https://www.facebook.com/profile.php?id=61566910036512"
            target="_blank"
            rel="noopener"
            id="icon-box"
            className="bg-[#c4b568] p-4 rounded-full cursor-pointer hover:bg-black hover:text-white transform hover:scale-110 transition-transform duration-300"
          >
            <FaFacebook className="size-7 fill-white" />
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="https://www.instagram.com/inestyle_studio/?next=%2Fpondsidehk%2Ffeed%2F&locale=%E4%B8%80%E6%AF%94%E4%B8%80Chanel%E9%AB%98%E4%BB%BF%E5%93%AA%E9%87%8C%E6%9C%89%E5%8D%96%E2%94%84%E5%BE%AE%E4%BF%A1198099199%E2%94%84%E5%9C%A3%E7%BD%97%E5%85%B0%E5%8E%9F%E5%8D%95%E5%8C%85%E5%8C%85%E2%96%A0%E5%BE%AE%E4%BF%A1198099199%E2%96%A0YSL%E9%AB%98%E4%BB%BF%E5%8C%85%E2%94%81%E5%BE%AE%E4%BF%A1198099199%E2%94%81"
            id="icon-box"
            className="bg-[#c4b568] p-4 rounded-full cursor-pointer hover:bg-black hover:text-white transform hover:scale-110 transition-transform duration-300"
          >
            <FaInstagram className="size-7 fill-white" />
          </a>
        </div>
      </section>
      <div
        data-aos="slied-right"
        data-aos-delay="200"
        id="icon-box"
        className="bg-[#c4b568] p-4 rounded-full hover:bg-black hover:text-white cursor-pointer fixed lg:bottom-12 bottom-6 right-6 lg:right-6"
      >
        <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="size-8 fill-black" />
        </Link>
      </div>
    </>
  );
};

export default Footer;
