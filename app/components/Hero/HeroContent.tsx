import { Button } from '../shared/shared';

const HeroContent = () => {
  return (
    <div className='flex flex-col gap-9'>
      <h1>Navigating the digital landscape for success</h1>
      <h4>
        Our digital marketing agency helps businesses grow and succeed online
        through a range of services including SEO, PPC, social media marketing,
        and content creation.
      </h4>
      <Button classNames='text-white bg-dark'>
        <h4>Book a consultation</h4>
      </Button>
    </div>
  );
};

export default HeroContent;
