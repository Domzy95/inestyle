import React from "react";
import kemon from "../assets/images/kemon.jpg";
import { FaAngleDoubleRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Kemon = () => {
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
      {/* Zakaj izbrati? */}
      <section
        id="kemon"
        className="w-full px-10 py-10 flex flex-col lg:flex-row bg-white justify-center items-center gap-10"
      >
        {/* Image Section */}
        <div
          data-aos="slide-up"
          data-aos-delay="200"
          className="w-full lg:w-1/2 flex justify-center items-center"
        >
          <img
            src={kemon}
            alt="Salon"
            className=" xs:w-full xs:h-auto  w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div
          data-aos="slide-up"
          data-aos-delay="400"
          className="w-full lg:w-1/2 flex flex-col justify-center items-start lg:pl-10 gap-6"
        >
          <h1 className="mb-10 font-bold text-left md:text-5xl xs:text-4xl text-black">
            Uporabljamo vrhunske izdelke Kemon
          </h1>

          <div
            id="icon-list"
            className="flex flex-col justify-start items-start gap-4"
          >
            <div className="flex justify-start items-center gap-3">
              <FaAngleDoubleRight
                className="text-black"
                style={{ fontSize: "34px" }}
              />
              <h1 className="xs:text-2xl md:text-3xl  text-black font-semibold">
                Izdelki so izdelani z uporabo visokokakovostnih in naravnih
                sestavin.
              </h1>
            </div>
            <div className="flex justify-start items-center gap-3">
              <FaAngleDoubleRight
                className="text-black"
                style={{ fontSize: "34px" }}
              />
              <h1 className="xs:text-2xl md:text-3xl text-black font-semibold">
                Izdelki so pakirani v okolju prijazne materiale.
              </h1>
            </div>
            <div className="flex justify-start items-center gap-3">
              <FaAngleDoubleRight
                className="text-black"
                style={{ fontSize: "34px" }}
              />
              <h1 className="xs:text-2xl md:text-3xl text-black font-semibold">
                Uporabljajo napredne tehnološke rešitve pri razvoju svojih
                izdelkov.
              </h1>
            </div>
            <div className="flex justify-start items-center gap-3">
              <FaAngleDoubleRight
                className="text-black"
                style={{ fontSize: "34px" }}
              />
              <h1 className="xs:text-2xl md:text-3xl text-black font-semibold">
                Oblikovani so tako, da zadovoljijo potrebe različnih tipov las.
              </h1>
            </div>
            <div className="flex justify-start items-center gap-3">
              <FaAngleDoubleRight
                className="text-black"
                style={{ fontSize: "34px" }}
              />
              <h1 className="xs:text-2xl md:text-3xl text-black font-semibold">
                Priljubljena izbira med frizerji po vsem svetu.
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Kemon;
