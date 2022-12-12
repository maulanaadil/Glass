import React from 'react';
import ChartBar from '../../components/Charts/Bar';
import ChartPie from '../../components/Charts/Pie';
import Header from '../../layouts/Header';
import dataBar from '../../assets/data/charts/bar';
import dataPie from '../../assets/data/charts/pie';

const Analytics = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="py-4 px-8 flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-5">
          <div className="relative w-full flex flex-col gap-2 h-96">
            <div className="absolute bg-black bg-opacity-20 backdrop-blur-2xl rounded-3xl w-full h-full"></div>
            <p className="text-white font-bold text-base mx-4 mt-4 z-10">Pemohon Berdasarkan Tahun</p>
            <ChartBar data={dataBar} />
          </div>
          <div className="relative w-full flex flex-col gap-2 h-96">
            <div className="absolute bg-black bg-opacity-20 backdrop-blur-2xl rounded-3xl w-full h-full"></div>
            <p className="text-white font-bold text-base mx-4 mt-4 z-10">Pemohon Berdasarkan Status</p>
            <ChartPie data={dataPie} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
