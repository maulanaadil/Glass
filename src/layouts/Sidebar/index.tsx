import React from 'react';
import { Activity, Briefcase, Grid, LogOut, Settings } from 'react-feather';
import { NavLink } from 'react-router-dom';
import GlassLogo from '../../assets/icons/GlassLogo';

const MenuItem = [
  {
    name: 'Overview',
    icon: <Grid />,
    link: '/',
  },
  {
    name: 'Analytics',
    icon: <Activity />,
    link: '/analytics',
  },
  {
    name: 'Work',
    icon: <Briefcase />,
    link: '/work',
  },
];

const Sidebar = () => {
  return (
    <div className="absolute h-full top-0 left-0 bottom-0 bg-black bg-opacity-25 backdrop-blur-xl z-[100] transform -translate-x-full md:translate-x-0 transition-transform md:static md:flex-none md:w-[240px]">
      <div className="relative h-full">
        <div className="h-full overflow-auto pt-3 pb-5 shadow-lg flex flex-col">
          <div className="px-3 flex justify-center my-4 gap-2">
            <GlassLogo />
            <p className="font-bold text-lg text-white">Dashboard</p>
          </div>
          <div className="h-full flex flex-col px-4 py-4 justify-between">
            <div className="flex flex-col gap-5">
              {MenuItem.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.link}
                  className={({ isActive }) =>
                    `flex gap-4 py-3 px-5 ${
                      isActive ? 'text-[#2563EB] bg-white' : 'text-white hover:bg-white hover:text-[#2563EB]'
                    }  rounded-2xl cursor-pointer`
                  }
                >
                  {item.icon}
                  <p className="font-semibold text-lg">{item.name}</p>
                </NavLink>
              ))}
            </div>

            <div className="flex flex-col gap-5">
              <NavLink
                to="/settings"
                className="flex gap-4 py-3 px-5 rounded-2xl text-white hover:bg-white hover:text-[#2563EB] cursor-pointer"
              >
                <Settings />
                <p className="font-semibold text-lg">Settings</p>
              </NavLink>

              <NavLink
                to="/auth/signin"
                className="flex gap-4 py-3 px-5 text-white rounded-2xl hover:bg-red-500 hover:text-white cursor-pointer"
              >
                <LogOut />
                <p className="font-semibold text-lg">Log Out</p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
