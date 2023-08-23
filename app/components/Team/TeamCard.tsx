import Image from 'next/image';
import Link from 'next/link';
import { TeamTypes } from '@/app/types/types';
import { LinkedinIcon } from '@/app/_assets/icons/icons';

const TeamCard = ({ mate }: { mate: TeamTypes }) => {
  return (
    <div
      data-aos='fade-right'
      className='bg-white p-10 flex flex-col divide-y rounded-[45px] border border-dark shadow-[0px_5px_0px_0px_#191A23]'
    >
      <div className='pb-7 flex justify-between gap-3'>
        <Image src={mate.avatar} width={100} height={100} alt={mate.name} />
        <div className='self-end'>
          <h4>{mate.name}</h4>
          {mate.title}
        </div>
        <div>
          <a target='_blank' href={mate.linkedin}>
            <LinkedinIcon />
          </a>
        </div>
      </div>
      <div className='pt-7'>
        <p>{mate.experience}</p>
      </div>
    </div>
  );
};

export default TeamCard;
