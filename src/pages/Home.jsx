import React from "react";
import car1 from "../assets/images/car1.png";
import car2 from "../assets/images/car2.png";
import mark from "../assets/images/mark.png";
const Home = () => {
  return (
    <div className="w-full">
      <header className="w-full p-6 bg-white flex justify-between item-center">
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
      <div className="main-content p-6">
        <div className="hero flex gap-2">
          <div className="card-1 rounded-xl h-80 md:h-64 w-full sm:w-3/4 md:w-1/2 relative">
            <div>
              <h3 className="text-white font-bold text-xl sm:text-2xl w-48 sm:w-52 mt-5 ml-5">
                The Best Platform for Car Rental
              </h3>
              <p className="text-white w-48 sm:w-52 mt-2 ml-5">
                Ease of doing a car rental safely and reliably. Of course at a
                low price.
              </p>
              <button className="bg-primary-500 text-white rounded-md px-4 py-2 mt-5 ml-5">
                Rental car
              </button>
            </div>
            <img
              src={car1}
              alt=""
              className="absolute top-60 md:top-40  left-10 md:left-40 w-60 sm:w-72"
            />
          </div>

          <div className="bg-primary-500 h-64 w-full md:w-1/2 relative hidden md:block">
            <div>
              <h3 className="text-white font-bold text-2xl w-52 mt-5 ml-5">
                Easy way to rent a car at a low price
              </h3>
              <p className="text-white w-52 mt-2 ml-5">
                Providing cheap car rental services and safe and comfortable
                facilities.
              </p>
              <button className="bg-sky-500 text-white rounded-md  px-4 py-2 mt-5 ml-5">
                Rental car
              </button>
              <img src={car2} alt="" className="absolute top-40 left-48 w-72" />
            </div>{" "}
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-7 md:gap-10 mt-10 relative">
          <div className="p-6 rounded-lg bg-white w-full md:w-2/3">
            <div className="flex items-center gap-2 font-bold">
              <img src={mark} alt="" />
              Pick up
            </div>
            <div className="flex gap-5 ">
              <div className="py-3">
                <div className="font-bold ">Location</div>
                <div className="flex items-center gap-2 cursor-pointer text-gray-400 font-semibold px  -4">
                  <p className="hidden md:block">select yout city</p>
                  <p className="block md:hidden font-mono md:font-normal">
                    Lagos
                  </p>
                  <i class="bi bi-chevron-compact-down"></i>
                </div>
              </div>
              <div className="w-[2px] bg-gray-200 h-16"></div>
              <div className="py-3">
                <div className="font-bold ">Date </div>
                <div className="flex items-center gap-2 cursor-pointer text-gray-400 font-semibold px  -4">
                  <p className="hidden md:block">select yout city</p>
                  <p className="block md:hidden">Lagos</p>
                  <i class="bi bi-chevron-compact-down"></i>
                </div>
              </div>
              <div className="w-[2px] bg-gray-200 h-16"></div>
              <div className="py-3">
                <div className="font-bold ">Time </div>
                <div className="flex items-center gap-2 cursor-pointer text-gray-400 font-semibold px  -4">
                  <p className="hidden md:block">select yout city</p>
                  <p className="block md:hidden">Lagos</p>
                  <i class="bi bi-chevron-compact-down"></i>
                </div>
              </div>
            </div>
          </div>
          <button className=" absolute top-32 md:top-0 md:relative bg-primary-500 h-14 shadow-primary-500 shadow-lg md:shadow-md  w-24 rounded-lg">
            <i class="bi bi-arrow-down-up text-white "></i>
          </button>
          <div className="p-6 rounded-lg bg-white w-full md:w-2/3">
            <div className="flex items-center gap-2 font-bold">
              <img src={mark} alt="" />
              Drop off 
            </div>
            <div className="flex gap-5">
              <div className="py-3">
                <div className="font-bold ">Location</div>
                <div className="flex items-center gap-2 cursor-pointer text-gray-400 font-semibold px  -4">
                  <p className="hidden md:block">select yout city</p>
                  <p className="block md:hidden font-mono md:font-normal">
                    Lagos
                  </p>
                  <i class="bi bi-chevron-compact-down"></i>
                </div>
              </div>
              <div className="w-[2px] bg-gray-200 h-16"></div>
              <div className="py-3">
                <div className="font-bold ">Date </div>
                <div className="flex items-center gap-2 cursor-pointer text-gray-400 font-semibold px  -4">
                  <p className="hidden md:block">select yout city</p>
                  <p className="block md:hidden">Lagos</p>
                  <i class="bi bi-chevron-compact-down"></i>
                </div>
              </div>
              <div className="w-[2px] bg-gray-200 h-16"></div>
              <div className="py-3">
                <div className="font-bold ">Time </div>
                <div className="flex items-center gap-2 cursor-pointer text-gray-400 font-semibold px  -4">
                  <p className="hidden md:block">select yout city</p>
                  <p className="block md:hidden">Lagos</p>
                  <i class="bi bi-chevron-compact-down"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
