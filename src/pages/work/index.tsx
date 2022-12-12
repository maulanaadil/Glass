import React from 'react';
import { Target } from 'react-feather';
import Card from '../../components/Card';
import Header from '../../layouts/Header';

const Work = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="py-4 px-8 flex flex-col gap-5">
        <div className="relative w-full flex flex-col gap-2">
          <div className="absolute bg-black bg-opacity-20 backdrop-blur-2xl rounded-3xl w-full h-full"></div>
          <p className="text-white font-bold text-base mx-4 mt-4 z-10">Monitoring Potensi Usaha 2022</p>
          <div className="inline-flex gap-1 w-fit text-white mx-4 py-2 px-4 items-center bg-black bg-opacity-20 rounded-2xl z-10 backdrop-blur-2xl">
            <Target />
            <p className="text-xs">
              Tanggal Terakhir Update : <span className="font-semibold">05 November 2022</span> Oleh{' '}
              <span className="font-semibold">Administator</span>
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 mx-4 mb-4 z-10">
            <Card
              badgeText="Target Pad"
              badgeColor="bg-[#05ABAB]"
              result="56%"
              number={43000000}
              className="col-span-2"
              footer
              isFooterRight
            />
            <Card
              badgeText="Total Berkas: 2245 Pemohon"
              result="22%"
              number={43000000}
              className="col-span-2"
              badgeColor="bg-[#05ABAB]"
              footer
              isFooterRight
            />
            <Card
              badgeText="Total Berkas: 2245 Pemohon"
              result="22%"
              number={43000000}
              badgeColor="bg-[#05ABAB]"
              className="col-span-2"
              footer
              isFooterRight
            />
          </div>
        </div>

        <div className="relative w-full flex flex-col gap-2">
          <div className="absolute bg-black bg-opacity-20 backdrop-blur-2xl rounded-3xl w-full h-full"></div>
          <p className="text-white font-bold text-base mx-4 mt-4 z-10">Monitoring Potensi Usaha 2022</p>
          <div className="grid grid-cols-6 gap-4 mx-4 mb-4 z-10">
            <Card
              badgeText="Target Pad"
              badgeColor="bg-[#2563EB]"
              result="56%"
              number={43000000}
              className="col-span-2"
              footer
              isFooterRight
            />
            <Card
              badgeText="Total Berkas: 2245 Pemohon"
              result="22%"
              number={43000000}
              className="col-span-2"
              badgeColor="bg-[#2563EB]"
              footer
              isFooterRight
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
