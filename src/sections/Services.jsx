import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Services = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <section
      id="services"
      className="w-full md:px-20 px-10 md:py-20 py-10 flex flex-col justify-center items-center gap-24"
    >
      <h1 data-aos="zoom-in" className="text-6xl font-bold text-black">
        Cenik in storitve
      </h1>
      <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-20 w-[85%] ">
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex justify-between items-center gap-6 border-b-2 border-[#c4b568] pb-10"
        >
          <h1 className="text-3xl text-gray-900 font-bold">
            Žensko striženje dolgih las
          </h1>
          <h1 className="text-4xl font-bold text-[#c4b568]">28€</h1>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex justify-between items-center gap-6 border-b-2 border-[#c4b568] pb-10"
        >
          <h1 className="text-3xl text-gray-900 font-bold">Moško striženje</h1>
          <h1 className="text-4xl font-bold text-[#c4b568]">12€</h1>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex justify-between items-center gap-6 border-b-2 border-[#c4b568] pb-10"
        >
          <h1 className="text-3xl text-gray-900 font-bold">
            Feniranje dolgih las
          </h1>
          <h1 className="text-4xl font-bold text-[#c4b568]">15€</h1>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex justify-between items-center gap-6 border-b-2 border-[#c4b568] pb-10"
        >
          <h1 className="text-3xl text-gray-900 font-bold">Barvanje ženske</h1>
          <h1 className="text-4xl font-bold text-[#c4b568]">30€</h1>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex justify-between items-center gap-6 border-b-2 border-[#c4b568] pb-10"
        >
          <h1 className="text-3xl text-gray-900 font-bold">Barvanje moški</h1>
          <h1 className="text-4xl font-bold text-[#c4b568]">25€</h1>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex justify-between items-center gap-6 border-b-2 border-[#c4b568] pb-10"
        >
          <h1 className="text-3xl text-gray-900 font-bold">Kodranje</h1>
          <h1 className="text-4xl font-bold text-[#c4b568]">15€</h1>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex justify-between items-center gap-6 border-b-2 border-[#c4b568] pb-10"
        >
          <h1 className="text-3xl text-gray-900 font-bold">
            Keratinska nega las
          </h1>
          <h1 className="text-4xl font-bold text-[#c4b568]">100€</h1>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex justify-between items-center gap-6 border-b-2 border-[#c4b568] pb-10"
        >
          <h1 className="text-3xl text-gray-900 font-bold">
            Intenzivna nega las in lasišča
          </h1>
          <h1 className="text-4xl font-bold text-[#c4b568]">15€</h1>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex justify-between items-center gap-6 border-b-2 border-[#c4b568] pb-10"
        >
          <h1 className="text-3xl text-gray-900 font-bold">Ličenje osnovno </h1>
          <h1 className="text-4xl font-bold text-[#c4b568]">25€</h1>
        </div>
      </div>
      {/* Cenik opombe */}
      <div
        data-aos="zoom-in"
        data-aos-delay="200"
        className=" flex flex-col items-center text-center border-b-2 border-[#c4b568] pb-10 w-[70%]"
      >
        <li>
          Cenik je informativne narave. Na njem niso navedene vse storitve,
          temveč le osnovne frizerske.
        </li>
        <li>
          Pri frizerskih storitvah so navedene cene storitev povprečne
          zahtevnosti.
        </li>
        <li>Cenik je veljaven od 1.1. 2025 dalje.</li>
        <li>Cene so v evrih (€) in vključujejo davek na dodano vrednost.</li>
        <li>
          Zahtevnejše storitve, kot tudi storitve izven cenika, se izvršijo in
          zaračunajo po predhodnem dogovoru s stranko.
        </li>
      </div>
    </section>
  );
};

export default Services;
