import React from 'react';

const Sidebar = () => {
  return (
    <div className="absolute top-0 left-0 bottom-0 bg-white z-[100] transform -translate-x-full md:translate-x-0 transition-transform md:static md:flex-none md:w-[240px]">
      <div className="relative h-full">
        <div className="h-full overflow-auto pt-3 pb-5 shadow-lg flex flex-col">test</div>
      </div>
    </div>
  );
};

export default Sidebar;
