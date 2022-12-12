import React from 'react';
import Sidebar from '../Sidebar';
import Video from '../../assets/videos/video.mp4';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="relative overflow-auto h-screen w-full flex-1 flex">
        <Sidebar />
        <video className="w-full h-full absolute top-0 left-0 object-fill" autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
        <div className="h-full flex-1 flex flex-col">{children}</div>
      </div>
    </>
  );
};

export default Layout;
