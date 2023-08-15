import HeroContent from './HeroContent';
import HeroImage from './HeroImage';

const Hero = () => {
  return (
    <section
      data-aos='fade-down'
      id='about-us'
      className='min-h-screen py-24 flex items-center relative'
    >
      <div className='flex items-center'>
        <div className='flex-1'>
          <HeroContent />
        </div>
        <div className='flex-1'>
          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default Hero;
