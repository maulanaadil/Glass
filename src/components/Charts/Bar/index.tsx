import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const ChartBar = ({ data }: { data: { year: string; value: number }[] }) => {
  return (
    <ResponsiveBar
      margin={{ top: 60, right: 80, bottom: 60, left: 80 }}
      data={data}
      padding={0.5}
      indexBy="year"
      keys={['value']}
      labelTextColor="inherit:darker(1.4)"
      enableGridX={true}
      colors="#6C63F0"
      theme={{
        axis: {
          ticks: {
            line: {
              stroke: 'white',
            },
            text: {
              fill: 'black',
            },
          },
        },
        grid: {
          line: {
            stroke: 'white',
            strokeWidth: 2,
            strokeDasharray: '4 4',
          },
        },
      }}
    />
  );
};

export default ChartBar;
