import React from "react";
import {
  FaBlog,
  FaCreditCard,
  FaEnvelope,
  FaFacebook,
  FaHome,
  FaInfo,
  FaInstagram,
  FaLocationArrow,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";

const footerLinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
    icon: <FaHome />,
  },
  {
    id: 1,
    title: "About",
    link: "/",
    icon: <FaInfo />,
  },
  {
    id: 1,
    title: "Contact",
    link: "/",
    icon: <FaPhone />,
  },
  {
    id: 1,
    title: "Blog",
    link: "/",
    icon: <FaBlog />,
  },
];

const Kaki = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-dark rounded-t-3xl">
        <div className="container">
          <div className="grid md:grid-cols-3 py-4">
            {/* C profile */}
            <div className="py-8 px-4">
              <h1
                className="sm:text-3xl text-xl font-bold sm:text-left text-justify 
                    mb-3 flex items-center gap-3"
              >
                MetaverseJosh
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident accusamus est ratione alias dicta voluptatem delectus
                porro dolorum numquam eligendi.
              </p>
              <br />
              {/* Contact */}
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Jl. Raya Kedawung</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone />
                  <p>081234567890</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope />
                  <p>metaversejosh@gmail.com</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 mt-6">
                <a href="">
                  <FaFacebook className="text-xl hover:text-primary duration-300" />
                </a>
                <a href="">
                  <FaInstagram className="text-xl hover:text-primary duration-300" />
                </a>
                <a href="">
                  <FaYoutube className="text-xl hover:text-primary duration-300" />
                </a>
              </div>
            </div>

            {/* Footer links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold mb-3">Quick Links</h1>
                  <ul className="space-y-3">
                    {footerLinks.map((link) => (
                      <li
                        key={link.id}
                        className="hover:translate-x-1
                        duration-300"
                      >
                        <div className="flex items-center gap-3 hover:text-primary">
                            {link.icon}
                            <a
                                href={link.link}
                                className="cursor-pointer hover:text-primary"
                            >
                                {link.title}
                            </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold mb-3">Quick Links</h1>
                  <ul className="space-y-3">
                    {footerLinks.map((link) => (
                      <li
                        key={link.id}
                        className="hover:translate-x-1
                        duration-300"
                      >
                        <div className="flex items-center gap-3 hover:text-primary">
                            {link.icon}
                            <a
                                href={link.link}
                                className="cursor-pointer hover:text-primary"
                            >
                                {link.title}
                            </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold mb-3">Quick Links</h1>
                  <ul className="space-y-3">
                    {footerLinks.map((link) => (
                      <li
                        key={link.id}
                        className="hover:translate-x-1
                        duration-300"
                      >
                        <div className="flex items-center gap-3 hover:text-primary">
                            {link.icon}
                            <a
                                href={link.link}
                                className="cursor-pointer hover:text-primary"
                            >
                                {link.title}
                            </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Payement */}
              <div>
                <div className="py-8 px-4">
                    <h1 className="text-xl font-bold mb-3">Payement</h1>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3">
                        <FaCreditCard className="text-xl hover:text-primary duration-300 w-10 h-10"/>
                        <FaCreditCard className="text-xl hover:text-primary duration-300 w-10 h-10"/>
                        <FaCreditCard className="text-xl hover:text-primary duration-300 w-10 h-10"/>
                        <FaCreditCard className="text-xl hover:text-primary duration-300 w-10 h-10"/>
                    </div>
                </div>
              </div>
            </div>
          </div>
        <div className="text-center border-t-2 border-gray-200 py-4">
            <p>Copyright © 2024 MetaverseJosh. All rights reserved.</p>
        </div>
        </div>
      </div>
    </>
  );
};

export default Kaki;
