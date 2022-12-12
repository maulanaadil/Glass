import React from 'react';
import Sidebar from '../Sidebar';
import BGCloud from '../../assets/bg-cloud.png';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="relative overflow-auto h-screen w-full flex-1 flex">
        <Sidebar />
        <img src={BGCloud} alt="bg-cloud" className="w-full h-full absolute top-0 left-0 bottom-0 object-fill" />
        <div className="h-full flex-1 flex flex-col">{children}</div>
      </div>
    </>
  );
};

export default Layout;
