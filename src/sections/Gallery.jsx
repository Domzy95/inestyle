import React from "react";
import stranka1 from "../assets/images/stranka1.jpg";
import stranka2 from "../assets/images/stranka2.jpg";
import stranka3 from "../assets/images/stranka3.jpg";
import stranka5 from "../assets/images/stranka5.jpg";
import stranka6 from "../assets/images/stranka6.jpg";
import stranka7 from "../assets/images/stranka7.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Gallery = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <>
      <section
        id="gallery"
        className="w-full flex flex-col md:px-20 px-10 h-fit pb-[300px] py-20 justify-center items-center gap-16 bg-gray-900 -mb-[200px] "
      >
        <div className="w-full flex flex-col justify-center items-center">
          <div className="lg:w-[80%] w-full grid md:grid-cols-3 grid-cols-1 justify-center justify-items-center gap-10 md:-mb-[540px]">
            <img
              data-aos="zoom-in"
              data-aos-delay="200"
              src={stranka1}
              alt="stranka1"
              className="rounded-xl w-[400px] h-[350px]"
            />
            <img
              data-aos="zoom-in"
              data-aos-delay="200"
              src={stranka2}
              alt="stranka1"
              className="rounded-xl w-[400px] h-[350px]"
            />
            <img
              data-aos="zoom-in"
              data-aos-delay="200"
              src={stranka3}
              alt="stranka1"
              className="rounded-xl w-[400px] h-[350px]"
            />

            <img
              data-aos="zoom-in"
              data-aos-delay="200"
              src={stranka5}
              alt="stranka1"
              className="rounded-xl w-[400px] h-[350px]"
            />
            <img
              data-aos="zoom-in"
              data-aos-delay="200"
              src={stranka6}
              alt="stranka1"
              className="rounded-xl w-[400px] h-[350px]"
            />
            <img
              data-aos="zoom-in"
              data-aos-delay="200"
              src={stranka7}
              alt="stranka1"
              className="rounded-xl w-[400px] h-[350px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
