import Image from 'next/image';
import ServiceCard from './ServiceCard';
import { servicesData } from '@/app/constants/constants';
import { Services } from '@/app/types/types';
import { Button, LargeCard, SectionTitle } from '../shared/shared';
import illustration from '../../../public/images/service-illustration.png';

const Services = () => {
  return (
    <section id='services' className='py-24' data-aos='fade-right'>
      <SectionTitle
        title='Services'
        description='At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:'
      />
      <div className='mt-20 grid lg:grid-cols-2 gap-10 '>
        {servicesData.map((service: Services) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      <div className='mt-24'>
        <LargeCard classNames='bg-open relative'>
          <div className='flex'>
            <div className='lg:flex-1 flex flex-col gap-6'>
              <h3>Let’s make things happen</h3>
              <p>
                Contact us today to learn more about how our digital marketing
                services can help your business grow and succeed online.
              </p>
              <Button classNames='bg-dark text-white'>
                <h4>Get your free proposal</h4>
              </Button>
            </div>
            <div className='lg:flex-1 flex justify-end'>
              <Image
                src={illustration}
                alt='illustration'
                className='absolute -top-6 lg:block hidden'
              />
            </div>
          </div>
        </LargeCard>
      </div>
    </section>
  );
};

export default Services;
