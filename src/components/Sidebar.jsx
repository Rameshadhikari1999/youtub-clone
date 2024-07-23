import React, { useState } from "react";
import { NavItem, navItems, youList, exploreList } from "../assets/SidebarContent/index.jsx";
import { MdNavigateNext } from "react-icons/md";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <div>
      <nav className="w-full px-2">
        <ul className="flex flex-col gap-1 justify-center shadow-sm px-5 py-2 shadow-gray-300">
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              icon={item.icon}
              title={item.title}
              active={item.id === activeIndex}
              onClick={() => setActiveIndex(item.id)}
            />
          ))}
        </ul>
        <div className="text-gray-800 text-lg font-bold px-5 py-3 hover:bg-gray-200 mt-2 rounded-lg flex items-center gap-1">
          You <MdNavigateNext />
        </div>
        <ul className="flex flex-col gap-1 justify-center shadow-sm px-5 py-2 shadow-gray-300">
          {youList.map((item, index) => (
            <NavItem
              key={index}
              icon={item.icon}
              title={item.title}
              active={item.id === activeIndex}
              onClick={() => setActiveIndex(item.id)}
            />
          ))}
        </ul>
        <div className="text-gray-800 text-lg font-bold px-5 py-3 hover:bg-gray-200 mt-2 rounded-lg flex items-center gap-1">
          Explore
        </div>
        <ul className="flex flex-col gap-1 justify-center shadow-sm px-5 py-2 shadow-gray-300">
          {exploreList.map((item, index) => (
            <NavItem
              key={index}
              icon={item.icon}
              title={item.title}
              active={item.id === activeIndex}
              onClick={() => setActiveIndex(item.id)}
            />
          ))}
        </ul>
        <div className="text-gray-800 text-lg font-bold px-5 py-3 hover:bg-gray-200 mt-2 rounded-lg flex items-center gap-1">
          More From YouTube
        </div>
        <ul className="flex flex-col gap-1 justify-center shadow-sm px-5 py-2 shadow-gray-300">
          {youList.map((item, index) => (
            <NavItem
              key={index}
              icon={item.icon}
              title={item.title}
              active={item.id === activeIndex}
              onClick={() => setActiveIndex(item.id)}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
