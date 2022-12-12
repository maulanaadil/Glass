import React from 'react';
import { ArrowRightCircle, Target } from 'react-feather';

const Card = ({
  className,
  bgCardColor = 'bg-[#525252]',
  badgeColor = 'bg-[#3E3E3E]',
  badgeText,
  result,
  biggerResult,
  label,
  number = 0,
  footer,
  isFooterRight,
}: {
  className?: string;
  bgCardColor?: string;
  badgeColor?: string;
  label?: string;
  badgeText: string;
  result: string;
  biggerResult?: boolean;
  number?: number;
  footer?: boolean;
  isFooterRight?: boolean;
}) => {
  const rupiah = (number: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(number);
  };

  return (
    <div
      className={`w-full relative flex ${
        isFooterRight ? 'flex-row' : 'flex-col'
      } justify-between overflow-clip ${className}`}
    >
      <div className={`${bgCardColor} bg-opacity-20  backdrop-blur-xl w-full h-full absolute rounded-2xl`}></div>
      <div className="my-4 mx-4 z-10 w-full">
        <div className={`rounded-full ${badgeColor} opacity-100 px-5 py-2 inline-flex items-center  gap-2`}>
          <Target size={16} color="white" />
          <p className="text-white text-sm">{badgeText}</p>
        </div>
        <div className="flex flex-col items-center justify-center mt-3 gap-5">
          <p className={`text-white font-bold ${biggerResult ? 'text-5xl' : 'text-2xl'}`}>{result}</p>
          {label ? (
            <p className="text-white text-sm">{label}</p>
          ) : (
            <div className="text-[#D6D6D6] text-base">{rupiah(number)}</div>
          )}
        </div>
      </div>
      {footer && (
        <div
          className={`flex items-center justify-center cursor-pointer text-white ${
            isFooterRight ? 'rounded-r-2xl px-2' : ' rounded-b-2xl py-2'
          } bg-black bg-opacity-20 backdrop-blur-xl`}
        >
          <ArrowRightCircle />
        </div>
      )}
    </div>
  );
};

export default Card;
