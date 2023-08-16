import { useState } from 'react';
import { ProcessCardState } from '@/app/types/types';

const ProcessCard = (props: ProcessCardState) => {
  const { id, title, description } = props;
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`w-full px-12 py-10 flex flex-col transition-all cursor-pointer border border-dark rounded-[45px] shadow-[0px_5px_0px_0px_#191A23] ${
        open ? 'bg-green divide-y divide-dark' : 'bg-open'
      }`}
      onClick={() => setOpen((prev) => !prev)}
    >
      <div
        className={`${open ? 'pb-7' : ''} flex justify-between items-center`}
      >
        <div className='flex gap-6 items-center'>
          <h1>0{id}</h1>
          <h2>{title}</h2>
        </div>
        <button className='w-14 h-14 flex items-center justify-center bg-open rounded-full border border-dark'>
          <div
            className={`${
              open ? 'opacity-0' : 'opacity-100'
            } h-1 w-4 bg-black transition-opacity duration-300`}
          ></div>
          <div
            className={`${
              open ? 'rotate-0' : 'rotate-90'
            } h-1 w-4 bg-black  absolute transition-transform duration-500`}
          ></div>
        </button>
      </div>
      <div
        className={`${
          open ? 'pt-7 h-auto opacity-100' : '!h-0 opacity-0'
        } transition-all overflow-hidden duration-100`}
      >
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProcessCard;
