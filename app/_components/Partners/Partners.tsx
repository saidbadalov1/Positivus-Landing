import { partners } from '@/app/constants/constants';
import Image from 'next/image';

const Partners = () => {
  return (
    <section
      data-aos='fade-right'
      id='partners'
      className='flex justify-between items-center'
    >
      {partners.map((partner) => (
        <div key={partner.id}>
          <Image
            className='grayscale-[100%]'
            src={partner.url}
            alt={partner.title}
            width={120}
            height={50}
          />
        </div>
      ))}
    </section>
  );
};

export default Partners;
