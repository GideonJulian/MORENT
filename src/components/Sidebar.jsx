import React, { useState } from "react";

const Sidebar = ({ IsOpen, onClose }) => {
  const [checkedState, setCheckedState] = useState({
    sports: false,
    suv: false,
    mpv: false,
    sedan: false, // Fix typo from 'sodan' to 'sedan'
    coupe: false,
    hatchback: false,
  });

  const types = [
    { label: "Sports", key: "sports", count: 10 },
    { label: "SUV", key: "suv", count: 12 },
    { label: "MPV", key: "mpv", count: 16 },
    { label: "Sedan", key: "sedan", count: 20 },
    { label: "Coupe", key: "coupe", count: 14 },
    { label: "Hatchback", key: "hatchback", count: 14 },
  ];
  const capacity = [
    { label: "2", key: "2", count: 10 },
    { label: "4", key: "4", count: 12 },
    { label: "6", key: "5", count: 16 },

    { label: "8", key: "8", count: 14 },
  ];

  const handleCheckBoxChange = (type) => {
    setCheckedState((prevState) => ({
      ...prevState,
      [type]: !prevState[type],
    }));
  };

  return (
    <div
      className={`fixed z-10 h-screen transition-all duration-300 shadow-md ${
        IsOpen ? "w-[280px] p-4" : "w-0 p-0"
      }  md:w-[280px]  md:p-4  bg-white border-red-500 mt-[5%]`}
    >
      <div className="md:hidden cursor-pointer">
        <i class="bi bi-x-lg font-[400] text-lg float-right" onClick={onClose} ></i>
      </div>
      <div className="mt-5 py-4 mb-10 overflow-y-auto h-[calc(100%-5rem)]">
        <div className="type">
          <p className="text-lg text-gray-500 font-sans">Type</p>
          {types.map((item) => (
            <div className="flex items-center mt-5" key={item.key}>
              <input
                type="checkbox"
                name="type"
                className="mr-2 text-lg"
                checked={checkedState[item.key]}
                onChange={() => handleCheckBoxChange(item.key)}
              />
              <label className="font-semibold font-sans">
                {item.label}{" "}
                <span className="font-normal text-gray-500">
                  ({item.count})
                </span>
              </label>
            </div>
          ))}
        </div>
        <div className="type mt-10 mb-5">
          <p className="text-lg text-gray-500 font-sans">Capacity</p>
          {capacity.map((item) => (
            <div className="flex items-center mt-5" key={item.key}>
              <input
                type="checkbox"
                name="type"
                className="mr-2 text-lg"
                checked={checkedState[item.key]}
                onChange={() => handleCheckBoxChange(item.key)}
              />
              <label className="font-semibold font-sans">
                {item.label}{" "}
                <span className="font-normal text-gray-500">
                  ({item.count})
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
