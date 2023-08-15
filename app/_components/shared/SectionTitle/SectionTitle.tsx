import { SectionTitleTypes } from '@/app/types/types';

const SectionTitle = ({ title, description }: SectionTitleTypes) => {
  return (
    <div className='inline-flex items-center gap-10'>
      <h2 className='px-2 bg-green rounded-lg'>{title}</h2>
      <p className='max-w-xl'>{description}</p>
    </div>
  );
};

export default SectionTitle;
