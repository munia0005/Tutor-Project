import React from "react";
import { MdComputer, MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import ResponsiveMenu from "./ResponsiveMenu";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="container flex justify-between items-center py-6">
          {/* logo section */}
          <div className="text-2xl flex items-center gap-2 font-bold">
            <MdComputer className="text-3xl text-secondary" />
            <p>E-Tutor</p>
          </div>

          {/* menu section */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6">
              <li
                className="inline-block text-gray-600 text-sm xl:text-base py-1 
                px-2 xl:px-3 hover:text-secondary cursor-pointer transition-all duration-300 font-semibold"
              >
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
              <li
                className="inline-block text-gray-600 text-sm xl:text-base py-1 
                px-2 xl:px-3 hover:text-secondary cursor-pointer transition-all duration-300 font-semibold"
              >
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
              <li
                className="inline-block text-gray-600 text-sm xl:text-base py-1 
                px-2 xl:px-3 hover:text-secondary cursor-pointer transition-all duration-300 font-semibold"
              >
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
              <li
                className="inline-block text-gray-600 text-sm xl:text-base py-1 
                px-2 xl:px-3 hover:text-secondary cursor-pointer transition-all duration-300 font-semibold"
              >
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
              <li
                className="inline-block text-gray-600 text-sm xl:text-base py-1 
                px-2 xl:px-3 hover:text-secondary cursor-pointer transition-all duration-300 font-semibold"
              >
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

          {/* Menu section */}
          <div className="hidden lg:block space-x-6">
            {/* CTA button section */}
            <button className="font-semibold">Sign in</button>
            <button className="text-white bg-secondary font-semibold rounded-full px-6 py-2">
              Register
            </button>
          </div>

          {/* mobile hamburger menu section */}
          <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </motion.div>
      {/* mobile sidebar section */}
      <ResponsiveMenu isOpen={isOpen} />
    </>
  );
};

export default Navbar;
