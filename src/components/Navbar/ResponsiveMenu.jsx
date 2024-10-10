import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

const ResponsiveMenu = ({ isOpen }) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20 lg:hidden"
        >
          <div className="text-xl font-semibold uppercase bg-primary text-black py-10 m-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-10">
              <li>
                <Link
                  to="Hero"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={500}
                >
                  {" "}
                  Home{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="Why-Choose-Us"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={500}
                >
                  {" "}
                  About{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="Schedule"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={500}
                >
                  {" "}
                  Schedule{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="Teachers"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={500}
                >
                  {" "}
                  Teachers{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="Contact"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={500}
                >
                  {" "}
                  Contact{" "}
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
