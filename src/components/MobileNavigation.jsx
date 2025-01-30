import React from "react";
import { mobileNavigation } from "../constants/Navigation";
import { NavLink } from "react-router-dom";

function MobileNavigation() {
  return (
    <section className="lg:hidden h-14 bg-black bg-opacity-70 backdrop-blur-2xl fixed bottom-0 z-40 w-full">
      <div className="flex items-center justify-between h-full text-neutral-400">
        {mobileNavigation.map((nav) => {
          return (
            <NavLink
              key={nav.label + "mobilenavigation"}
              to={nav.href}
              className={({ isActive }) =>
                `px-3 flex items-center justify-center h-full flex-col ${
                  isActive && "text-white"
                }`
              }
            >
              <div className="text-3xl">{nav.icon}</div>
              <p>{nav.label}</p>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
}

export default MobileNavigation;
