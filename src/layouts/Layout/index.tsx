import React from 'react';
import Sidebar from '../Sidebar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex-1 flex overflow-auto">
        <Sidebar />
        <div className="flex-1 h-full flex-col flex bg-[#f0f0f0] relative z-[90]">{children}</div>
      </div>
    </>
  );
};

export default Layout;
