import React from "react";

const PopUp = () => {
  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-white px-10 py-4 rounded-lg shadow-lg text-lg font-semibold flex items-center gap-2 transition-all duration-500 ease-in-out animate-slideDown">
      <i className="bi bi-check-circle-fill text-green-500"></i>
      Added to favourite
    </div>
  );
};

export default PopUp;
