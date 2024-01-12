import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function RootLayout() {
  return (
    <div className="flex flex-col lg:flex-row h-[100vh] relative">
      <Navbar />
      <main className="w-full">
        <Outlet />
      </main>
      <div className="fixed w-full h-full bg-pearl-white z-[-1]"></div>
    </div>
  );
}

export default RootLayout;
