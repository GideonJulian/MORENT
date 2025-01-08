import React from "react";

const MiniDropDown = ({ isDropdownOpen, data, type, setOption2 }) => {
  return (
    <div>
      <div className="relative">
        <div
          className={`bg-white rounded-lg absolute border-dark border-2 top-full md:top-1 left-1 md:left-10 z-10 p-1 bg-dark shadow-xl transition-all duration-500 ease ${
            isDropdownOpen
              ? "visible translate-y-[5px] opacity-100"
              : "invisible translate-y-0 opacity-0"
          }`}
        >
          <ul>
            {data.map((item, index) => (
              <li key={index} onClick={() => {
                setOption2(item.name)
                isDropdownOpen(false)
            
              }}>
                <li
                  href="#"
                  className="font-sans hover:text-gray-400 hover:bg-gray-200 no-underline px-5 py-2.5 flex items-center justify-start gap-4 border-none bg-transparent cursor-pointer w-full text-center text-sm font-semibold m-0 whitespace-nowrap rounded-[6px]"
                >
                  {/* Conditionally render an icon or other content */}
                  {type === "location" ? (
                    <>
                      <i className="bi bi-geo-alt-fill"></i>
                      {item.name}
                    </>
                  ) : (
                    <>
                      <i className="bi bi-calendar-event"></i>
                      {item.date}
                    </>
                  )}
                </li>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MiniDropDown;
