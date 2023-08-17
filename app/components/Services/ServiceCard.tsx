import Link from 'next/link';
import Image from 'next/image';
import { Services } from '@/app/types/types';
import { ArrowIcon } from '@/app/_assets/icons/icons';

const ServiceCard = ({ service }: { service: Services }) => {
  return (
    <div
      className={`border border-dark rounded-[45px] shadow-[0px_5px_0px_0px_#191A23] p-12 flex bg-${service.bgColor}`}
      key={service.id}
    >
      <div className='flex-1 flex flex-col lg:gap-0 gap-10 justify-between'>
        <div className='inline-flex flex-col'>
          {service.title.map((title: string, i: number) => (
            <h3
              key={i}
              className={`bg-${service.textBgColor} rounded-md w-max p-1`}
            >
              {title}
            </h3>
          ))}
        </div>
        <div className='inline-flex'>
          <Link href={service.url} className='flex items-center gap-4'>
            <ArrowIcon />
            <p
              className={`${
                service.bgColor === 'dark' ? 'text-white' : 'text-black'
              }`}
            >
              Learn more
            </p>
          </Link>
        </div>
      </div>
      <div className='flex-1'>
        <Image
          src={service.image}
          alt={service.title[0]}
          width={210}
          height={200}
          className='mt-20 lg:mt-0'
        />
      </div>
    </div>
  );
};

export default ServiceCard;
