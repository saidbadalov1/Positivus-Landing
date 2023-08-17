import { teamData } from '@/app/constants/constants';
import { TeamTypes } from '@/app/types/types';
import { SectionTitle } from '../shared/shared';
import TeamCard from './TeamCard';

const Team = () => {
  return (
    <section id='team' className='py-24' data-aos='fade-right'>
      <SectionTitle
        title='Team'
        description='Meet the skilled and experienced team behind our successful digital marketing strategies'
      />
      <div className='mt-20 grid lg:grid-cols-3 gap-10'>
        {teamData.map((mate: TeamTypes) => (
          <TeamCard key={mate.id} mate={mate} />
        ))}
      </div>
    </section>
  );
};

export default Team;
