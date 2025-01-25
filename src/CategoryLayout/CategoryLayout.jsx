import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
const CategoryLayout = () => {
  return (
    <div>
      <header className="w-full p-6 bg-white flex justify-between item-center fixed z-10">
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
      {/* <footer>
        <div className="w-full  bg-white ">
          <div className="container flex flex-col md:flex-row md:mb-8 mb-0  px-10 py-10 justify-between  mx-auto">
            <div>
              <div>
                <h3 className="font-bold text-2xl text-primary-500"> MORENT</h3>
              </div>
              <p className="w-[300px] md:text-black text-secondary-500 font-sans">
                Our vision is to provide convenience and help increase your
                sales business.{" "}
              </p>
            </div>
            <div className="flex gap-16 md:mt-0 mt-10">
              <div>
                <h3 className="text-lg font-bold font-sans">Community</h3>
                <ul className="flex flex-col md:gap-7 gap-4  md:mt-10 mt-5">
                  <li>
                    <Link className="md:text-black text-secondary-500 font-sans">
                      Events{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className="md:text-black text-secondary-500 font-sans">
                      Blog{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className="md:text-black text-secondary-500 font-sans">
                      Podcast{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className="md:text-black text-secondary-500 font-sans">
                      Invite a friend{" "}
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold font-sans">About</h3>
                <ul className="flex flex-col md:gap-7 gap-4 md:mt-10 mt-5">
                  <li>
                    <Link className="md:text-black text-secondary-500 font-sans">
                      How it works{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className="md:text-black text-secondary-500 font-sans">
                      Featured{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className="md:text-black text-secondary-500 font-sans">
                      Partnership{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className="md:text-black text-secondary-500 font-sans">
                      Bussiness Relation{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bottom pt-5 md:border-t-2 border-t-0 p-10 ">
            <div className="flex justify-normal md:justify-between flex-col-reverse md:flex-row md:items-center items-baseline">
              <div className="">
                <h3 className="font-bold font-sans">
                  ©2022 MORENT. All rights reserved
                </h3>
              </div>
              <div className="flex gap-10 md:justify-between md:mb-0 mb-10">
                <h3 className="font-bold font-sans">Privacy & Policy</h3>
                <h3 className="font-bold font-sans">Terms & Condition</h3>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default CategoryLayout;
