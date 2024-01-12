import React from "react";

//icons
import logo from "../assets/logo.svg";
import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";
import imageAvatar from "../assets/image-avatar.jpg";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="h-100vh bg-carbon-blue lg:rounded-r-[20px] flex md:flex-row lg:flex-col items-center justify-between">
      <Link
        to="/create"
        className="bg-[#7C5DFA] hover:bg-slate-blue-light animation rounded-r-[20px]"
      >
        <img src={logo} alt="" className="p-[25px] z-[2]" />
      </Link>

      <div className="flex items-center lg:flex-col">
        <label className="swap swap-rotate px-6 md:px-8 lg:px-0 lg:py-5">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" />

          <img
            src={sun}
            className="swap-on fill-current w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          />

          {/* moon icon */}
          <img
            src={moon}
            className="swap-off fill-current w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          />
        </label>
        <button className="px-6 md:px-8 lg:px-0 lg:py-5">
          <img src={imageAvatar} alt="" className="w-8 h-8 rounded-[50%]" />
        </button>
        <div className="drawer-content">
          <label htmlFor="my-drawer"></label>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
