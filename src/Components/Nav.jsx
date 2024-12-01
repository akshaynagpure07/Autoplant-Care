import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { BiSolidLeaf } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { RiContactsBook3Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { FcAbout } from "react-icons/fc";
import IconButton from "./IconButton";


const Nav = () => {
  // State to handle the mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="Navbar h-16 flex justify-between items-center bg-transparent px-4 md:px-8 fixed top-0 left-0 right-0 z-50">
      {/* Left Side - Logo */}
      <div className="nav-l flex items-center">
        <div className="leaf text-black bg-none ml-1">
          <NavLink to="/">
            <IconButton icon={BiSolidLeaf} aria-label="Leaf Icon" />
          </NavLink>
        </div>
        <div className="title text-black text-xl text-center ml-2 lg:text-3xl lg:font-semibold">
          AutoPlantCare
        </div>
      </div>

      {/* Hamburger Menu Button */}
      <div className="nav-r md:hidden">
        <button
          onClick={toggleMenu}
          className="text-black text-3xl focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <AiOutlineClose /> : <TiThMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute  right-2 bg-white text-black pr-8 pt-4 top-16 pb-2 shadow-md rounded-md md:hidden transition-transform transform flex flex-col items-center`}
      >
        <ul className="flex flex-col space-y-4 space-x-8 items-center">
          <li>
            <NavLink
              to="/"
              className="text-lg font-semibold hover:text-green-600 flex flex-row gap-2 items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <IconButton icon={ImHome} aria-label="Home Icon" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutusPage"
              className="text-lg font-semibold hover:text-green-600 flex flex-row gap-2 items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <IconButton icon={FcAbout} aria-label="About Icon" />
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contactUsPage"
              className="text-lg font-semibold hover:text-green-600 flex flex-row gap-2 items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <IconButton icon={RiContactsBook3Fill} aria-label="Contact Icon" />
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profilePage"
              className="text-lg font-semibold hover:text-green-600 flex flex-row gap-2 items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <IconButton icon={CgProfile} aria-label="Profile Icon" />
              Profile
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 text-black">
        <NavLink to="/" className="text-lg font-semibold hover:text-green-600">
          Home
        </NavLink>
        <NavLink
          to="/aboutusPage"
          className="text-lg font-semibold hover:text-green-600"
        >
          About Us
        </NavLink>
        <NavLink
          to="/contactUsPage"
          className="text-lg font-semibold hover:text-green-600"
        >
          Contact Us
        </NavLink>
        <NavLink
          to="/profilePage"
          className="text-lg font-semibold hover:text-green-600"
        >
          Profile
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
