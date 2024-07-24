import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import DarkMode from "./DarkMode";

const navBar = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    title: "Services",
    link: "/services",
  },
  {
    id: 4,
    title: "Contact",
    link: "/",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toogleMenu = () => setShowMenu(!showMenu);
  return (
    <div className="text-black dark:text-white relative z-[9999]">
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="h-16" />
            <p className="text-3xl duration-300">
              VR <span className="font-bold">AJOSH</span>
            </p>
          </div>
          {/* Menu Section */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-4">
              {navBar.map((item) => (
                <li key={item.id} className="py-4">
                  <a
                    href={item.link}
                    className="text-xl font-semibold hover:text-primary py-2
                    hover:border-secondary hover:border-b-2 transition-colors duration-300"
                  >
                    {item.title}
                  </a>
                </li>
              ))}

              {/* DARK MODE FEATURE */}
              <DarkMode />
            </ul>
          </nav>

          {/* Mobile Side Bar */}
          <div className="md:hidden ">
            <div className="flex items-center gap-5">
              <DarkMode />
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toogleMenu}
                  className="cursor-pointer"
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toogleMenu}
                  className="cursor-pointer"
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
