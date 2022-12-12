import React, { useState } from 'react';
import { X } from 'react-feather';
import { NavLink } from 'react-router-dom';
import Card from '../../components/Card';
import OptionMenu from '../../components/OptionMenu';
import Header from '../../layouts/Header';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="py-4 px-8 flex flex-col gap-5">
        <div className="relative w-full flex flex-col gap-2">
          <div className="absolute bg-black bg-opacity-20 backdrop-blur-2xl rounded-3xl w-full h-full"></div>
          <p className="text-white font-bold text-base mx-4 my-4 z-10">Monitoring Target Pad Tahun 2022</p>
          <div className="grid grid-cols-6 gap-4 mx-4 mb-4 z-10">
            <Card badgeText="Target Pad" result="100%" number={43000000} className="col-span-6 md:col-span-2" />
            <Card
              badgeText="Total Berkas: 2245 Pemohon"
              badgeColor="bg-[#2563EB]"
              result="69%"
              number={43000000}
              className="col-span-6 md:col-span-2"
            />
            <Card
              badgeText="Daviasi"
              badgeColor="bg-[#EB2525]"
              result="67%"
              number={43000000}
              className="col-span-6 md:col-span-2"
            />
          </div>
        </div>

        <div className="relative w-full flex flex-col gap-2">
          <div className="absolute bg-black bg-opacity-20 backdrop-blur-2xl rounded-3xl w-full h-full"></div>
          <p className="text-white font-bold text-base mx-4 my-4 z-10">
            Berkas Aktual Terverifikasi dan Belum Terverifikasi Tahun 2022
          </p>
          <div className="grid grid-cols-6 gap-4 mx-4 mb-4 z-10">
            <Card badgeText="Target Pad" result="56%" number={43000000} className="col-span-6 md:col-span-2" />
            <Card
              badgeText="Total Berkas: 2245 Pemohon"
              result="22%"
              number={43000000}
              className="col-span-6 md:col-span-2"
            />
          </div>
        </div>

        <div className="relative w-full flex flex-col gap-2">
          <div className="absolute bg-black bg-opacity-20 backdrop-blur-2xl rounded-3xl w-full h-full"></div>
          <p className="text-white font-bold text-base mx-4 my-4 z-10">Monitoring 2022</p>
          <div className="grid grid-cols-6 grid-rows-1 gap-4 mx-4 mb-4 z-10">
            <Card
              badgeText="Total Pemohon"
              badgeColor="transparent"
              result="876"
              bgCardColor="bg-linear-green"
              footer
              className="col-span-3 md:col-span-1"
              label="Pemohon"
            />
            <Card
              badgeText="Di Cek"
              badgeColor="transparent"
              result="122"
              bgCardColor="bg-linear-red"
              footer
              className="col-span-3 md:col-span-1"
              label="Pemohon"
            />
            <Card
              badgeText="Belum Di Cek"
              badgeColor="transparent"
              result="111"
              bgCardColor="bg-linear-blue"
              footer
              className="col-span-3 md:col-span-1"
              label="Pemohon"
            />
          </div>
        </div>
      </div>
      {isOpen && <OptionMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
};

export default Home;
