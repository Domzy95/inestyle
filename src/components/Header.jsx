import React from "react";
import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";
import { useState } from "react";
import E from "../assets/E.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { link: "Domov", path: "hero" },
    { link: "O nas", path: "whychoose" },
    { link: "Izdelki Kemon", path: "kemon" },
    { link: "Storitve", path: "services" },
    { link: "Galerija", path: "gallery" },
    { link: "Zadovoljne stranke", path: "stranke" },
    { link: "Kontakt", path: "contact" },
  ];

  return (
    <>
      <nav className="flex justify-between items-center gap-4 bg-[#d3d3d3] custom:px-10 px-4 py-8 sticky top-0 z-30 border-[8px] border-[#c4b568]">
        <div id="logo">
          <h1 className="flex items-center text-black font-bold md:text-5xl xs:text-4xl text-5xl">
            IN
            <img
              src={E}
              className="xs:size-12 mb-1 md:size-16 mt-2"
              alt="E logo"
            />
            STYL
            <img
              src={E}
              className="xs:size-12 mb-1 md:size-16 mt-2"
              alt="E logo"
            />
          </h1>
        </div>
        <ul className="custom:flex justify-center items-center gap-6 hidden">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-[#c4b568] hover:text-black"
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
            >
              {link}
            </Link>
          ))}
        </ul>
        {/* Hamburger menu */}
        <div
          className="flex justify-center items-center custom:hidden"
          onClick={toggleMenu}
        >
          <div>
            {isMenuOpen ? (
              <FaXmark className="text-white text-3xl" />
            ) : (
              <FaBars className="text-white text-3xl" />
            )}
          </div>
        </div>
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } w-full h-fit bg-slate-800 p-4 absolute top-[80px] left-0`}
        >
          <ul className="md:flex flex flex-col justify-center items-center gap-2 w-full">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-[#c4b568] hover:text-black w-full text-center"
                to={path}
                spy={true}
                offset={-100}
                smooth={true}
                onClick={closeMenu}
              >
                {link}
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
