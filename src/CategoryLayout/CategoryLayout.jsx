import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
const CategoryLayout = () => {
  return (
    <div>
      <header className="fixed top-0 w-full p-6 bg-white flex justify-between item-center">
        <div className="flex gap-20 flex-col md:flex-row">
          <div>
            <h3 className="font-bold text-2xl text-primary-500"> MORENT</h3>
          </div>
          <div className="relative ml-3 hidden md:block">
            <i class="bi bi-search  absolute top-2 left-4"></i>
            <input
              type="text"
              className="pl-10 h-10 px-4 py-2 rounded-full w-[200px] md:w-[450px] border "
              placeholder="Search something here "
            />
            <i class="bi bi-sliders absolute top-2 right-5"></i>
          </div>
        </div>
        <div className="flex items-center gap-3 ">
          <div className="hidden items-center justify-center border rounded-full h-10 w-10  md:flex">
            <i className="bi bi-heart-fill text-gray-400"></i>
          </div>
          <div className="hidden items-center justify-center border rounded-full h-10 w-10  md:flex">
            <i class="bi bi-bell-fill text-gray-400"></i>
          </div>
          <div className=" items-center justify-center border rounded-full h-10 w-10 hidden md:flex">
            <i class="bi bi-gear-fill text-gray-400"></i>
          </div>
          <div className="flex items-center justify-center border rounded-full h-10 w-10">
            <i class="bi bi-person-fill text-gray-400"></i>
          </div>
        </div>
      </header>
      <div className="flex">
        <Sidebar />
        <div className="p-4 ml-[19rem] mt-20 w-full">
          <Outlet />
      
        </div>
      </div>
    </div>
  );
};

export default CategoryLayout;
