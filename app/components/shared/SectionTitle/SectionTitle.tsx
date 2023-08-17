import { SectionTitleTypes } from '@/app/types/types';

const SectionTitle = ({ title, description }: SectionTitleTypes) => {
  return (
    <div className='inline-flex lg:flex-row flex-col items-center lg:gap-10 gap-6 lg:text-left text-center'>
      <h2>
        <mark className='px-2 bg-green rounded-lg'>{title}</mark>
      </h2>

      <p className='max-w-xl'>{description}</p>
    </div>
  );
};

export default SectionTitle;
