import React from "react";
import { useState } from "react";
import { CarDetails } from "../utils/CarsDetails";
const RecommendedCar = () => {
  const [addedtoFavourite, setAddedToFavourite] = useState({});
  const toggleFavourite = (id) => {
    setAddedToFavourite((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <h1 className="text-center text-3xl font-bold pb-10">
        No Cars Found Cars you may like
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
        {CarDetails.sort(() => Math.random() - 0.5)
          .slice(0, 3)
          .map((car) => (
            <div
              className="p-5 bg-white rounded-lg cursor-pointer  "
              onClick={() => handleNavigate(car.id)}
              key={car.id}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg">{car.carName}</h3>
                  <p className="font-semibold text-gray-400">{car.category}</p>
                </div>
                <i
                  className={
                    addedtoFavourite[car.id]
                      ? "bi bi-heart-fill"
                      : "bi bi-heart"
                  }
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavourite(car.id);
                  }}
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
          ))}

        {CarDetails.filter((car) => car.category === "SUV")
          .slice(0, 3)
          .map((car) => (
            <div>
              <h1 className="font-bold text-center text-lg"></h1>
              <div
                className="p-5 bg-white rounded-lg cursor-pointer  "
                onClick={() => handleNavigate(car.id)}
                key={car.id}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-lg">{car.carName}</h3>
                    <p className="font-semibold text-gray-400">
                      {car.category}
                    </p>
                  </div>
                  <i
                    className={
                      addedtoFavourite[car.id]
                        ? "bi bi-heart-fill"
                        : "bi bi-heart"
                    }
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavourite(car.id);
                    }}
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
            </div>
          ))}
      </div>
    </div>
  );
};

export default RecommendedCar;
