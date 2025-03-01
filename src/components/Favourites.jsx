import React, { useEffect, useState } from "react";

import { getFavourites, removeFavourite } from "../utils/Favourites";
import { CarDetails } from "../utils/CarsDetails";

const Favourites = ({ onclose }) => {
  const [favouriteCars, setFavouriteCars] = useState([]);

  useEffect(() => {
    const savedFavourites = getFavourites(); // Get favorite car IDs
    const filteredCars = CarDetails.filter((car) => savedFavourites[car.id]); // Filter only favorite cars
    setFavouriteCars(filteredCars);
  }, []);
  const handleRemove = (id) =>{
    removeFavourite(id)
    setFavouriteCars(favouriteCars.filter((car)=> car.id !== car.id))
  }
  return (
    <div className="fixed top-[20%] z-10 md:z-auto  md:top-20 left-[52.1%] md:left-[74%] rounded-lg transform -translate-x-1/2 bg-white px-1 md:px-5 py-4 w-full md:w-2/5 shadow-xl transition-all duration-500 ease-in-out animate-slideDown">
      <div className="h-[300px] overflow-y-auto p-3">
        <div>
          <i
            class="bi bi-x-lg font-[400] text-lg float-right cursor-pointer"
            onClick={onclose}
          ></i>
        </div>
        <div>
          <h1 className="text-2xl font-bold font-sans mb-5  ">
            Your Favourite({favouriteCars.length})
          </h1>
          {
            favouriteCars.length > 0 ? (
              favouriteCars.map((car) => (
                <div>
                  <div
                    key={car.id}
                    className="md:p-5 p-5 rounded-lg shadow-lg mb-5 w-auto md:w-auto border"
                  >
                    <div className="flex items-center gap-3 justify-between md:flex-row flex-col">
                      <img
                        src={car.img}
                        alt={car.carName}
                        className="h-20 w-[230px]"
                      />
    
                      <div className="md:block flex md:flex-row flex-col gap-0 md:items-center  md:justify-center md:gap-2">
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold md:text-lg text-sm ">
                            {car.carName}
                          </h3>
                          <p className="text-gray-500 text-lg">{car.category}</p>
                        </div>
                        <h3 className="md:mt-3 font-bold md:text-lg text-sm">
                          ${car.price}/day
                        </h3>
                      </div>
                    </div>
                    <div className="mt-3 flex gap-2 justify-end">
                      <button className="px-4 py-2 rounded-lg text-white  bg-green-500">
                        <span className="md:block hidden">Add to cart</span>
                        <i class="bi bi-cart-plus md:hidden block"></i>
                      </button>
                      <button onClick={handleRemove} className="md:px-4 px-2  py-1 rounded-lg text-white  bg-red-500">
                        <span className="md:block hidden">Remove</span>
                        <i class="bi bi-trash3 md:hidden block"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : <h1 className="text-lg font-bold font-sans text-center">Your Favourite is empty</h1>
          }
        </div>
      </div>
    </div>
  );
};

export default Favourites;
