import { SectionTitle } from '../shared/shared';

import Slider from 'react-slick';
import { testimonialsData } from '@/app/constants/constants';
import { TestimonialsTypes } from '@/app/types/types';

const Testimonials = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    arrows: false,
    centerPadding: '60px',
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
    appendDots: (dots: any) => <ul>{dots}</ul>,
    customPaging: () => (
      <div className='ft-slick__dots--custom'>
        <div className='loading' />
      </div>
    ),
  };

  return (
    <section id='testimonials' className='py-24' data-aos='fade-right'>
      <SectionTitle
        title='Testimonials'
        description='Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services'
      />
      <div className='mt-20 py-20 bg-dark rounded-[45px]'>
        <Slider {...settings} className='pb-20'>
          {testimonialsData.map((testimonial: TestimonialsTypes) => (
            <div key={testimonial.id}>
              <div className='border border-green py-12 px-14 rounded-[45px] text-white'>
                <p>{testimonial.text}</p>
              </div>
              <div className='lg:pl-20 pl-4 lg:pr-0 pr-4 pt-10'>
                <h4 className='text-green'>{testimonial.name}</h4>
                <p className='text-white'>{testimonial.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
