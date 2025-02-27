import React from "react";
import car1 from "../assets/images/car1.png";
import car2 from "../assets/images/car2.png";
import mark from "../assets/images/mark.png";
import { CarDetails } from "../utils/CarsDetails";
import { useState } from "react";
import MiniDropDown from "../components/MiniDropDown";

const Home = () => {
  const [addedtoFavourite, setAddedToFavourite] = useState(false);
  const handleAddToFavourite = (index) => {
    setAddedToFavourite(!addedtoFavourite);
  };
  const [option, setOption] = useState("Select city ");
  const [option2, setOption2] = useState("Select date ");
  const [option3, setOption3] = useState("Select time ");
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isDateDropdownOpen, setIsDateDropdownOpen] = useState(false);
  const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false);
  const [homeSearchQuery, setHomeSearchQuery] = useState("");
  const toggleLocationDropdown = () => {
    setIsLocationDropdownOpen((prev) => !prev);

    if (isDateDropdownOpen) setIsDateDropdownOpen(false);
  };

  const toggleDateDropdown = () => {
    setIsDateDropdownOpen((prev) => !prev);

    if (isLocationDropdownOpen) setIsLocationDropdownOpen(false);
  };
  const toggleTimeDropdown = () => {
    setIsTimeDropdownOpen((prev) => !prev);

    if (isLocationDropdownOpen) setIsLocationDropdownOpen(false);
  };
  const locations = [
    {
      name: "Lagos",
    },
    {
      name: "Imo",
    },
    {
      name: "Abuja",
    },
  ];
  const dates = [
    { date: "2025-01-01" },
    { date: "2025-01-02" },
    { date: "2025-01-03" },
  ];
  const timeData = [
    { time: "09:00 AM", value: "09:00" },
    { time: "10:00 AM", value: "10:00" },
    { time: "11:00 AM", value: "11:00" },
    { time: "12:00 PM", value: "12:00" },
    { time: "01:00 PM", value: "13:00" },
    { time: "02:00 PM", value: "14:00" },
    { time: "03:00 PM", value: "15:00" },
    { time: "04:00 PM", value: "16:00" },
    { time: "05:00 PM", value: "17:00" },
  ];
  const filteredCars = CarDetails.filter(
    (item) =>
      item.carName.toLowerCase().includes(homeSearchQuery) ||
      item.category.toLowerCase().includes(homeSearchQuery)
  );
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
              value={homeSearchQuery}
              onChange={(e) => setHomeSearchQuery(e.target.value.toLowerCase())}
              className="pl-10 h-10 px-4 py-2 rounded-efull w-[200px] md:w-[450px] border "
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
                <div
                  onClick={toggleDateDropdown}
                  className="flex items-center  gap-1 md:gap-2 cursor-pointer text-gray-400 font-semibold px  -4"
                >
                  <p className="hidden md:block"></p>
                  <p className="block md:hidden font-mono md:font-normal text-sm md:text-lg">
                    {option}
                  </p>
                  <i class="bi bi-chevron-compact-down"></i>
                </div>
                <div>
                  <MiniDropDown
                    isDropdownOpen={isDateDropdownOpen}
                    data={locations}
                    type="location"
                    setOption1={setOption}
                    setIsDropdownOpen={setIsDateDropdownOpen}
                  />
                </div>
              </div>
              <div className="w-[2px] bg-gray-200 h-16"></div>
              <div className="py-3">
                <div className="font-bold ">Date </div>
                <div
                  onClick={toggleLocationDropdown}
                  className="flex items-center  gap-1 md:gap-2 cursor-pointer text-gray-400 font-semibold px  -4"
                >
                  <p className="hidden md:block">{option2}</p>
                  <p className="block md:hidden text-sm md:text-lg">
                    {option2}
                  </p>
                  <i class="bi bi-chevron-compact-down"></i>
                </div>
                <MiniDropDown
                  isDropdownOpen={isLocationDropdownOpen}
                  data={dates}
                  type="date"
                  setOption1={setOption2}
                  setIsDropdownOpen={setIsLocationDropdownOpen}
                />
              </div>
              <div className="w-[2px] bg-gray-200 h-16"></div>
              <div className="py-3">
                <div className="font-bold ">Time </div>
                <div
                  onClick={toggleTimeDropdown}
                  className="flex items-center gap-1 md:gap-2 cursor-pointer text-gray-400 font-semibold px  -4"
                >
                  <p className="hidden md:block text-sm md:text-normal">
                    {option3}
                  </p>
                  <p className="block md:hidden text-sm md:text-lg">
                    {" "}
                    {option3}{" "}
                  </p>
                  <i class="bi bi-chevron-compact-down"></i>
                </div>
                <MiniDropDown
                  isDropdownOpen={isTimeDropdownOpen}
                  data={timeData}
                  type="time"
                  setOption1={setOption3}
                  setIsDropdownOpen={setIsTimeDropdownOpen}
                />
              </div>
            </div>
          </div>
          <button className=" absolute top-32 md:top-0 md:relative bg-primary-500 h-14 shadow-primary-500 shadow-lg md:shadow-md  w-24 rounded-lg">
            <i class="bi bi-arrow-down-up text-white "></i>
          </button>
          <div className="p-6 rounded-lg bg-white w-full md:w-2/3">
            <div className="flex items-center gap-2 font-bold">
              <img src={mark} alt="" />
              Pick up
            </div>
            <div className="flex gap-5 ">
              <div className="py-3">
                <div className="font-bold ">Location</div>
                <div className="flex items-center  gap-1 md:gap-2 cursor-pointer text-gray-400 font-semibold px  -4">
                  <p className="hidden md:block">select yout city</p>
                  <p className="block md:hidden font-mono md:font-normal text-sm md:text-lg">
                    Lagos
                  </p>
                  <i class="bi bi-chevron-compact-down"></i>
                </div>
              </div>
              <div className="w-[2px] bg-gray-200 h-16"></div>
              <div className="py-3">
                <div className="font-bold ">Date </div>
                <div className="flex items-center  gap-1 md:gap-2 cursor-pointer text-gray-400 font-semibold px  -4">
                  <p className="hidden md:block">select yout city</p>
                  <p className="block md:hidden text-sm md:text-lg">Lagos</p>
                  <i class="bi bi-chevron-compact-down"></i>
                </div>
              </div>
              <div className="w-[2px] bg-gray-200 h-16"></div>
              <div className="py-3">
                <div className="font-bold ">Time </div>
                <div className="flex items-center gap-1 md:gap-2 cursor-pointer text-gray-400 font-semibold px  -4">
                  <p className="hidden md:block text-sm md:text-lg">
                    select yout city
                  </p>
                  <p className="block md:hidden text-sm md:text-lg">Lagos</p>
                  <i class="bi bi-chevron-compact-down"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ppopular car */}
        <div>
          <h3 className="text-gray-400 font-semibold p-4">Popular Cars</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {filteredCars.length > 0 ? (
              filteredCars.map((car) => (
                <div className="p-5 bg-white rounded-lg cursor-pointer  ">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-lg">{car.carName}</h3>
                      <p className="font-semibold text-gray-400">
                        {car.category}
                      </p>
                    </div>
                    <i
                      className={`bi bi-heart cursor-pointer ${
                        addedtoFavourite
                          ? "bi bi-heart-fill cursor-pointer text-red-600"
                          : "bi bi-heart cursor-pointer"
                      }`}
                      onClick={handleAddToFavourite}
                    ></i>
                  </div>
                  <div className="mt-10 ">
                    <img src={car.img} alt="" className=" h-20 m-auto" />
                  </div>
                  <div className="flex items-center justify-center gap-2 text-lg mt-7">
                    <div className="text-gray-400 flex items-center gap-2">
                      <i class="bi bi-fuel-pump-diesel-fill"></i>
                      <span>70L</span>
                    </div>
                    <div className="text-gray-400 flex items-center gap-2">
                      <i class="bi bi-car-front-fill"></i>

                      <span>Manual</span>
                    </div>
                    <div className="text-gray-400 flex items-center gap-2">
                      <i class="bi bi-people-fill"></i>
                      <span>{car.people} people </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-5">
                    <div>
                      <h3 className="font-bold text-lg">
                        ${car.price}/
                        <span className="font-normal text-gray-400"> day</span>
                      </h3>
                    </div>
                    <button className="px-4 py-2 hover:opacity-75 transition-opacity bg-primary-500 text-white rounded-lg ">
                      Rent Now
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <h1 className="text-2xl font-bold">Car Not found</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
