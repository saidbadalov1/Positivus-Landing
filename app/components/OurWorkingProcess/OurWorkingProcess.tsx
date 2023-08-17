import { processData } from '@/app/constants/constants';
import { SectionTitle } from '../shared/shared';
import ProcessCard from './ProcessCard';

const OurWorkingProcess = () => {
  return (
    <section id='working-process' className='py-24' data-aos='fade-right'>
      <SectionTitle
        title='Our Working Process'
        description='Step-by-Step Guide to Achieving Your Business Goals'
      />
      <div className='mt-20 flex flex-col gap-8'>
        {processData.map((process, i) => (
          <ProcessCard
            key={i}
            id={process.id}
            title={process.title}
            description={process.description}
          />
        ))}
      </div>
    </section>
  );
};

export default OurWorkingProcess;
