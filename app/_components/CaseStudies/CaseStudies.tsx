import Link from 'next/link';
import { LargeCard, SectionTitle } from '../shared/shared';
import { caseStudiesData } from '@/app/constants/constants';
import { CaseStudiesTypes } from '@/app/types/types';
import { ArrowIcon } from '@/app/_assets/icons/icons';

const CaseStudies = () => {
  return (
    <section id='use-cases' className='py-24' data-aos='fade-right'>
      <SectionTitle
        title='Case Studies'
        description='Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies'
      />
      <div className='mt-20'>
        <LargeCard classNames='bg-dark'>
          <div className='flex justify-between text-white divide-x'>
            {caseStudiesData.map((study: CaseStudiesTypes, i: number) => (
              <div key={i} className={`px-16 flex flex-col gap-5`}>
                <p>{study.text}</p>
                <div>
                  <Link
                    href={study.url}
                    className='inline-flex gap-4 items-center text-green '
                  >
                    <p>Learn more</p>
                    <ArrowIcon />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </LargeCard>
      </div>
    </section>
  );
};

export default CaseStudies;
