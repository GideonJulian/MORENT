import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import Footer from "../components/Footer";
const CategoryLayout = () => {
  const [isopen, setIsOpen] = useState(false);
  const openSidebar = () => {
    setIsOpen(true);
    console.log('clicked ')
  };
const CloseSidebar  = () => {
  setIsOpen(false);
 }
  return (
    <div>
      <header className="w-full p-6 bg-white  fixed z-10 top-0">
        <div className="flex justify-between items-center  md:hidden ">
          <i
            className="bi bi-list text-4xl block md:hidden cursor-pointer"
            onClick={openSidebar}
          ></i>
          ;
          <div className="flex items-center justify-center border rounded-full h-10 w-10">
            <i class="bi bi-person-fill text-gray-400"></i>
          </div>
        </div>
        <div className="container flex justify-between items-center ml-2">
          <div className="flex gap-10 flex-col md:flex-row">
            <div className="mt-5 md:mt-0">
              <h3 className="font-bold text-2xl text-primary-500"> MORENT</h3>
            </div>
            <div className="block md:hidden relative">
              <i class="bi bi-search absolute top-3 left-5"></i>

              <div className="flex items-center justify-between">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search something here"
                  className="px-4 py-3  rounded-md border w-full pl-10 pr-10"
                />
                <div className="px-2 py-1 ml-5 border rounded-md text-center">
                <i class="bi bi-sliders text-3xl "></i>
                </div>
              </div>
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
            <div className=" items-center justify-center border hidden md:flex rounded-full h-10 w-10">
              <i class="bi bi-person-fill text-gray-400"></i>
            </div>
          </div>
        </div>
      </header>
      <div className="flex">
        <Sidebar IsOpen={isopen} onClose={CloseSidebar}/>
        <div className="p-4 ml-1 md:ml-[19rem] mt-60 md:mt-20 w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CategoryLayout;
