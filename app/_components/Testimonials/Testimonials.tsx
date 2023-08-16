import { SectionTitle } from '../shared/shared';

import Slider from 'react-slick';

const Testimonials = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    centerPadding: '60px',
    dots: true,
    appendDots: (dots: any) => <ul>{dots}</ul>,
    customPaging: (i: number) => (
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
          <div>
            <div className='border border-green py-12 px-14 rounded-[45px] text-white'>
              <p>
                &quot;We have been working with Positivus for the past year and
                have seen a significant increase in website traffic and leads as
                a result of their efforts. The team is professional, responsive,
                and truly cares about the success of our business. We highly
                recommend Positivus to any company looking to grow their online
                presence.&quot;
              </p>
            </div>
            <div className='pl-20 pt-10'>
              <h4 className='text-green'>John Smith</h4>
              <p className='text-white'>Marketing Director at XYZ Corp</p>
            </div>
            <div></div>
          </div>
          <div>
            <div className='border border-green py-12 px-14 rounded-[45px] text-white'>
              <p>
                &quot;We have been working with Positivus for the past year and
                have seen a significant increase in website traffic and leads as
                a result of their efforts. The team is professional, responsive,
                and truly cares about the success of our business. We highly
                recommend Positivus to any company looking to grow their online
                presence.&quot;
              </p>
            </div>
          </div>
          <div>
            <div className='border border-green py-12 px-14 rounded-[45px] text-white'>
              <p>
                &quot;We have been working with Positivus for the past year and
                have seen a significant increase in website traffic and leads as
                a result of their efforts. The team is professional, responsive,
                and truly cares about the success of our business. We highly
                recommend Positivus to any company looking to grow their online
                presence.&quot;
              </p>
            </div>
          </div>
          <div>
            <div className='border border-green py-12 px-14 rounded-[45px] text-white'>
              <p>
                &quot;We have been working with Positivus for the past year and
                have seen a significant increase in website traffic and leads as
                a result of their efforts. The team is professional, responsive,
                and truly cares about the success of our business. We highly
                recommend Positivus to any company looking to grow their online
                presence.&quot;
              </p>
            </div>
          </div>
          <div>
            <div className='border border-green py-12 px-14 rounded-[45px] text-white'>
              <p>
                &quot;We have been working with Positivus for the past year and
                have seen a significant increase in website traffic and leads as
                a result of their efforts. The team is professional, responsive,
                and truly cares about the success of our business. We highly
                recommend Positivus to any company looking to grow their online
                presence.&quot;
              </p>
            </div>
          </div>
          <div>
            <div className='border border-green py-12 px-14 rounded-[45px] text-white'>
              <p>
                &quot;We have been working with Positivus for the past year and
                have seen a significant increase in website traffic and leads as
                a result of their efforts. The team is professional, responsive,
                and truly cares about the success of our business. We highly
                recommend Positivus to any company looking to grow their online
                presence.&quot;
              </p>
            </div>
            <div>
              <h4 className='text-green'>John Smith</h4>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
