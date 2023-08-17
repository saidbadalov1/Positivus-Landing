import Image from 'next/image';
import illustrations from '../../../public/images/illustration.png';

const HeroImage = () => {
  return (
    <Image
      src={illustrations}
      alt='illustrations'
      className='max-h-[calc(100vh-100px)] '
    />
  );
};

export default HeroImage;
