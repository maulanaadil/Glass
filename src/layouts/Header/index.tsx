import React from 'react';
import { Menu } from 'react-feather';

const Header = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const isMobileScreen = window.innerWidth < 768;
  return (
    <div className="bg-black bg-opacity-20 backdrop-blur-xl items-center w-full h-20 flex justify-end px-6">
      {isMobileScreen && <Menu color="white" width={24} height={24} onClick={() => setIsOpen(!isOpen)} />}
    </div>
  );
};

export default Header;
