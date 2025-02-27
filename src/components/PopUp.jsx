import React from "react";

const PopUp = () => {
  return (
    <div className="w-full flex justify-center">
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-10 bg-white px-10 py-4 rounded-lg shadow-lg text-lg font-semibold flex items-center gap-2 transition-all whitespace-nowrap min-w-max duration-500 ease-in-out animate-slideDown">
      <i className="bi bi-check-circle-fill text-green-500"></i>
      Added to favourite
    </div>
  </div>
  
  );
};

export default PopUp;
