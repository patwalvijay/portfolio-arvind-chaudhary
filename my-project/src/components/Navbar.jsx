import React, { useState } from "react";
import Button from "./Button";
import { HiMenuAlt1, HiCurrencyYen } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "TREATMENTS", link: "/treatments" },
    { name: "ABOUT", link: "/about" },

    { name: "BLOG'S", link: "/blog" },
    { name: "CONTACT", link: "/contact" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <>
      <div className="shadow-md w-full fixed top-0 left-0 z-20">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
          <Link to="/">
            <div
              className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
            >
              <span className="text-3xl text-indigo-600 mr-1 pt-2">
                {/* <HiCurrencyYen name="logo-ionic"></HiCurrencyYen> */}
                <img
                  className="w-32 h-14"
                  src="https://www.ayurmax.com/wp-content/uploads/2020/09/cropped-ayurmax-1-1.png"
                  alt=""
                />
              </span>
            </div>
          </Link>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <HiMenuAlt1 name={open ? "close" : "menu"}></HiMenuAlt1>
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                <a
                  href={link.link}
                  className="text-gray-800 hover:text-gray-400 duration-100"
                >
                  {link.name}
                </a>
              </li>
            ))}
            {/* <Button>Get Started</Button> */}
            <Button>Book an Appointment</Button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
