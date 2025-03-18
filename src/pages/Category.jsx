import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { CarDetails } from "../utils/CarsDetails";
import { useOutletContext } from "react-router-dom";
import RecommendedCar from "../components/RecommendedCar";
import { getFavourites, toggleFavourite, removeFavourite } from "../utils/Favourites";
import PopUp from "../components/PopUp";
import Favourites from "../components/Favourites";

const Category = () => {
  const { searchQuery, favouriteModal, closeFavouriteModal } = useOutletContext();
  const [addedtoFavourite, setAddedToFavourite] = useState({});
  const [displayPopUp, setDisplayPopUp] = useState(false);

  // Load favourites from localStorage on component mount
  useEffect(() => {
    setAddedToFavourite(getFavourites());
  }, []);

  const handleAddToFavourite = (id) => {
    let updatedFavourites;
    
    if (addedtoFavourite[id]) {
      updatedFavourites = removeFavourite(id);
    } else {
      updatedFavourites = toggleFavourite(id);
      setDisplayPopUp(true);
      setTimeout(() => {
        setDisplayPopUp(false);
      }, 3000); // 3 seconds
    }

    setAddedToFavourite(updatedFavourites);
  };

  const filteredCars = CarDetails.filter(
    (car) =>
      car.carName.toLowerCase().includes(searchQuery) ||
      car.category.toLowerCase().includes(searchQuery)
  );
  const closeFavModal = () => {
    closeFavouriteModal(false);
  };
  const handleRandom = () => {
    console.log('random')
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <div
              className="p-5 bg-white rounded-lg cursor-pointer"
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
                      ? "bi bi-heart-fill cursor-pointer"
                      : "bi bi-heart"
                  }
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToFavourite(car.id);
                  }}
                ></i>
              </div>
              <div className="mt-10">
                <img src={car.img} alt="" className="h-20 m-auto" />
              </div>
              <div className="flex items-center justify-center gap-2 text-lg mt-7">
                <div className="text-gray-400 flex items-center gap-2">
                  <i className="bi bi-fuel-pump-diesel-fill"></i>
                  <span>70L</span>
                </div>
                <div className="text-gray-400 flex items-center gap-2">
                  <i className="bi bi-car-front-fill"></i>
                  <span>Manual</span>
                </div>
                <div className="text-gray-400 flex items-center gap-2">
                  <i className="bi bi-people-fill"></i>
                  <span>{car.people} people</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-5">
                <div>
                  <h3 className="font-bold text-lg">
                    ${car.price}/
                    <span className="font-normal text-gray-400"> day</span>
                  </h3>
                </div>
                <button className="px-4 py-2 hover:opacity-75 transition-opacity bg-primary-500 text-white rounded-lg">
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
      {favouriteModal && <Favourites onclose={closeFavModal}  />}
      {displayPopUp && <PopUp />}
    </div>
  );
};

export default Category;
