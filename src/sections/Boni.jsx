import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import darilnibon from "../assets/images/darilnibon.jpg";

const Kemon = () => {
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
      {/* Zakaj izbrati? */}
      <section
        id="boni"
        data-aos="slide-up"
        data-aos-delay="400"
        className="w-full py-10 flex flex-col lg:flex-row bg-white justify-center items-center gap-10"
      >
        {/* Text Section */}
        <div className="w-full  px-10 lg:w-1/2 flex flex-col justify-center items-start lg:pl-10 gap-6">
          <h1 className="mb-5 font-bold text-left md:text-5xl xs:text-4xl text-black">
            Darilni bon
          </h1>

          <div
            id="boni-tekst"
            className="flex flex-col justify-start items-start gap-4"
          >
            <h1 className="xs:text-2xl md:text-3xl  text-black font-semibold">
              Obdarite sebe ali svoje najdražje z darilnim bonom za striženje
              ali britje. Kupite jih lahko v našem salonu!
            </h1>
          </div>
        </div>

        {/* Image Section */}
        <div
          data-aos="slide-up"
          data-aos-delay="200"
          className="w-full lg:w-1/2 flex justify-center items-center"
        >
          <img
            src={darilnibon}
            alt="Salon"
            className=" xs:w-full px-10 xs:h-auto  w-full h-auto object-cover rounded-lg"
          />
        </div>
      </section>
    </>
  );
};

export default Kemon;
