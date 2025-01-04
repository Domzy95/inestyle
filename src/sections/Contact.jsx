import React, { useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ines from "../assets/images/ines2.jpg";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_tt0l6hu", "template_uyuybwg", form.current, {
        publicKey: "Kfh3YsPePqH-8Pd2S",
      })
      .then(
        () => {
          e.target.reset(); // Reset form
          setMessageSent(true); // Show success message
          setTimeout(() => {
            setFadeOut(true); // Start fade out after 3 seconds
          }, 3000); // Start fade-out effect after 3 seconds
          setTimeout(() => setMessageSent(false), 5000); // Hide message after 5 seconds
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

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
      id="contact"
      className="w-full h-auto grid md:grid-cols-2 lg:grid-cols-2"
    >
      <div className="flex items-stretch">
        <img
          data-aos="zoom-in"
          id="image-box"
          src={ines}
          alt="Image"
          className="object-cover size-full"
        />
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        id="contact-form"
        className="bg-gray-900 p-8 lg:p-16 flex flex-col justify-center items-center gap-12"
      >
        <h1
          data-aos="zoom-in"
          data-aos-delay="200"
          className="text-white text-4xl lg:text-6xl font-bold text-center"
        >
          Kontaktirajte nas!
        </h1>
        <div
          data-aos="zoom-out"
          data-aos-delay="400"
          id="form"
          className="w-full flex flex-col justify-center items-center gap-4"
        >
          <input
            type="text"
            required
            name="from_name"
            placeholder="Ime in priimek"
            className="w-full p-3 text-black font-semibold"
          />
          <input
            type="email"
            required
            name="user_email"
            placeholder="Email"
            className="w-full p-3 text-black font-semibold"
          />
          <input
            type="number"
            required
            placeholder="Telefonska številka"
            className="w-full p-3 text-black font-semibold"
          />
          <textarea
            name="message"
            required
            cols="30"
            rows="5"
            type="text"
            placeholder="Tukaj napišite vaše sporočilo..."
            className="w-full  p-3 text-black font-semibold"
          />
          <input
            type="submit"
            value={"Pošlji sporočilo"}
            className="rounded-full xs:w-[60%] bg-[#c4b568] hover:bg-[#c4b568] cursor-pointer w-full font-semibold text-lg text-black p-3"
          />
        </div>
        {messageSent && (
          <p
            className={`text-[#c4b568] font-semibold text-lg text-center transition-all duration-1000 ${
              fadeOut ? "opacity-0" : "opacity-100"
            }`}
            style={{
              transition: "opacity 2s ease-out", // Fade-out effect
            }}
          >
            Hvala za poslano sporočilo! Odgovorili bomo v najkrajšem možnem
            času.
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
