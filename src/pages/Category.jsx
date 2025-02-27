import React from "react";
import Sidebar from "../components/Sidebar";
import mark from "../assets/images/mark.png";
import { CarDetails } from "../utils/CarsDetails";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import RecommendedCar from "../components/RecommendedCar";

const Category = () => {
  const { searchQuery } = useOutletContext();
  const [addedtoFavourite, setAddedToFavourite] = useState({});
  const toggleFavourite = (id) => {
    setAddedToFavourite((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const filteredCars = CarDetails.filter(
    (car) =>
      car.carName.toLowerCase().includes(searchQuery) ||
      car.category.toLocaleLowerCase().includes(searchQuery)
  );

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
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
          ))
        ) : (
          <div className="col-span-3 flex justify-center w-full">
            <RecommendedCar />
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
