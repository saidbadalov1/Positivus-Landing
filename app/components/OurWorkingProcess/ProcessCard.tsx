import { useState } from 'react';
import { ProcessCardState } from '@/app/types/types';

const ProcessCard = (props: ProcessCardState) => {
  const { id, title, description } = props;
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`w-full lg:px-12 px-6 py-10 flex flex-col transition-all cursor-pointer border border-dark rounded-[45px] shadow-[0px_5px_0px_0px_#191A23] ${
        open ? 'bg-green ' : 'bg-open'
      }`}
      onClick={() => setOpen((prev) => !prev)}
    >
      <div
        className={`${
          open ? '' : ''
        } flex justify-between items-center lg:gap-0 gap-2`}
      >
        <div className='flex lg:gap-6 gap-3 items-center'>
          <h1 className='text-3xl lg:text-6xl'>0{id}</h1>
          <h2 className='text-lg lg:text-3xl'>{title}</h2>
        </div>
        <button className='lg:w-14 lg:h-14 py-3.5 px-2.5 flex items-center justify-center bg-open rounded-full border border-dark'>
          <div
            className={`${
              open ? 'opacity-0' : 'opacity-100'
            } lg:h-1 h-0.5 lg:w-4 w-3 bg-black transition-opacity duration-300`}
          ></div>
          <div
            className={`${
              open ? 'rotate-0' : 'rotate-90'
            } lg:h-1 h-0.5 lg:w-4 w-3 bg-black  absolute transition-transform duration-500`}
          ></div>
        </button>
      </div>
      <div
        className={`${
          open ? 'pt-7 h-auto opacity-100' : '!h-0 opacity-0'
        } transition-all overflow-hidden duration-100`}
      >
        <div className='bg-black w-full h-px'></div>
        <p className='mt-7'>{description}</p>
      </div>
    </div>
  );
};

export default ProcessCard;
