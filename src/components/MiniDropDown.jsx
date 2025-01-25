import React from "react";
import { useEffect, useRef } from "react";
const MiniDropDown = ({
  isDropdownOpen,
  data,
  type,
  setOption1,
  
  setIsDropdownOpen,
}) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsDropdownOpen]);

  return (
    <div>
      <div className="relative">
        <div
          ref={dropdownRef}
          className={`bg-white rounded-lg absolute border-dark ${type === 'time' ? 'h-32 overflow-auto' : ''} border-2 top-full md:top-1 left-1 md:left-10 z-10 p-1 bg-dark shadow-xl transition-all duration-500 ease ${
            isDropdownOpen
              ? "visible translate-y-[5px] opacity-100"
              : "invisible translate-y-0 opacity-0"
          }`}
        >
          <ul>
            {data.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  if (type === "location") {
                    setOption1(item.name);
                  } else if (type === "date") {
                    setOption1(item.date);
                  } else if(type === "time") { 
                    setOption1(item.time);
                   }


                  isDropdownOpen(false);
                }}
              >
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
                  ) : type === "date" ? (
                    <>
                      <i className="bi bi-calendar-event"></i>
                      {item.date}
                    </>
                  ) : (
                    <>
                      <i className="bi bi-clock"></i>
                      {item.time }
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
