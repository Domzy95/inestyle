import React from "react";
import salon from "../assets/images/salon.jpeg";
import { FaAngleDoubleRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const WhyChoose = () => {
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
      {/*DELOVNI ČAS*/}
      <section
        id="whychoose"
        className="text-2xl  h-[700px]  w-full md:px-20 px-10 md:py-20 py-10 flex flex-col md:flex-row justify-center items-center gap-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${salon})` }}
      >
        <div
          data-aos="slide-up"
          data-aos-delay="200"
          className=" ml-16 md:w-[70%] w-full flex flex-col justify-top items-top  gap-6 h-fit"
        >
          <h1 className=" 4mt-2 mb-10 font-bold text-5xl text-white">
            Zakaj izbrati naš frizerski salon?
          </h1>

          <div
            id="icon-list"
            className="flex flex-col justify-start items-start gap-4"
          >
            <div
              id="icon-box"
              className="flex justify-start items-center gap-3"
            >
              <FaAngleDoubleRight className="text-white size-6" />
              <h1 className="text-2xl  text-white font-semibold">
                Vedno prijetno vzdušje
              </h1>
            </div>
            <div
              id="icon-box"
              className="flex justify-start items-center gap-3"
            >
              <FaAngleDoubleRight className="text-white size-6" />
              <h1 className="text-2xl text-white font-semibold">
                Delamo samo s kvalitetnimi produkti za nego las
              </h1>
            </div>
            <div
              id="icon-box"
              className="flex justify-start items-center gap-3"
            >
              <FaAngleDoubleRight className="text-white size-6" />
              <h1 className="text-2xl text-white font-semibold">
                Cenimo čas in denar naših strank
              </h1>
            </div>
            <div
              id="icon-box"
              className="flex justify-start items-center gap-3"
            >
              <FaAngleDoubleRight className="text-white size-6" />
              <h1 className="text-2xl text-white font-semibold">
                Vse površine in orodje pred in po uporabi očistimo, razkužimo
              </h1>
            </div>
            <div
              id="icon-box"
              className="flex justify-start items-center gap-3"
            >
              <FaAngleDoubleRight className="text-white size-6" />
              <h1 className="text-2xl text-white font-semibold">
                Vedno prijetno vzdušje!
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChoose;
