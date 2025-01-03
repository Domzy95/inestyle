import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import tjasa from "../assets/images/tjasa.jpg";
import testimonial2 from "../assets/images/testimonial2.jpg";
import testimonial3 from "../assets/images/testimonial3.jpg";

const clients = [
  {
    image: tjasa,
    name: "Tjaša S.",
    review:
      "Frizerski salon z dušo in srcem, tja ne prideš samo po novo frizuro ampak tudi na sprostitev. Za dobrodošlico dobiš lep nasmeh in kavo potem pa čudovito razvajanje z tvojimi lasmi. Salon je na čudoviti lokaciji. Cene pa so tudi prijazne vsaki denarnici. Priporočam obisk!",
  },
  {
    image: testimonial2,
    name: "Valerija S.",
    review:
      "Vrhunski salon z pridihom srčnosti. Zelo lepo urejen, v stilu. Ines je prijazna, strokovna, nasmejana, komunikativna in pozitivna oseba, ki ti polepša dan. Frizerka z velikim srcem in dušo. Pramenčke naredila tanke z lepimi odtenki...vedno se potrudi maksimalno. Pri njej se počutiš domače in sprejeto, postreže te s prelepo kavico z ljubeznijo. Super si Ines....veliko uspeha še naprej ti želim!",
  },
  {
    image: testimonial3,
    name: "Maruša Š.",
    review:
      "Najboljša izkušnja do zdaj! Poleg čudovite nove pričeske sem dobila tudi odlične nasvete za nego las doma. Zelo cenim njihovo pozornost do detajlov in toplino, s katero sprejmejo vsako stranko. Definitivno se vračam!",
  },
];

const Testimonial = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <section
      id="stranke"
      className="md:pt-[500px] w-full md:px-20 px-10 py-10 flex flex-col justify-center items-center gap-6 bg-[#c4b568]"
    >
      <h1
        data-aos="zoom-in"
        data-aos-delay="200"
        className="text-6xl mb-6 font-bold text-white text-center"
      >
        Zadovoljne stranke
      </h1>

      <div
        id="clients"
        className="md:w-[80%] grid grid-cols-1 xl:grid-cols-3 gap-6 items-stretch"
      >
        {clients.map((client, index) => (
          <div
            key={index}
            data-aos="slide-up"
            data-aos-delay="200"
            className="w-full bg-white p-10 md:p-8 xl:p-10 flex flex-col justify-between items-center gap-4 rounded-3xl"
          >
            <div
              id="top"
              className="flex justify-between items-center gap-4 w-full"
            >
              <div className="flex justify-center items-center gap-2 relative">
                <BiSolidQuoteAltLeft className="text-[#c4b568] size-20 absolute left-0 opacity-20" />
                <h1 className="text-xl lg:text-2xl text-black font-bold">
                  {client.name}
                </h1>
              </div>
              <img
                src={client.image}
                alt="client"
                className="aspect-square rounded-full border-8 border-[#c4b568] w-[80px] h-[80px] lg:w-[120px] lg:h-[120px] object-cover transform hover:scale-110 transition duration-300 cursor-pointer"
              />
            </div>
            <div id="bottom" className="w-full">
              <p className="text-center text-md md:text-lg lg:text-lg xl:text-lg text-gray-600 font-medium">
                {client.review}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
