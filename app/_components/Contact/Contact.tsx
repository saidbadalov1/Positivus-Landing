import Image from 'next/image';
import {
  Button,
  Input,
  LargeCard,
  SectionTitle,
  Textarea,
} from '../shared/shared';

import illustration from '../../../public/images/contact-illustration.png';

const Contact = () => {
  return (
    <section id='contact' className='py-24' data-aos='fade-right'>
      <SectionTitle
        title='Contact'
        description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
      />
      <div className='mt-20'>
        <LargeCard classNames='bg-open overflow-hidden'>
          <div className='flex'>
            <form id='contact-form' className='flex-1 flex flex-col gap-8'>
              <Input name='Name' placeholder='Name' type='text' />
              <Input name='Email' placeholder='Email' type='email' />
              <Textarea name='Message' placeholder='Message' />
              <Button classNames='bg-dark text-white w-full'>
                <h4>Send Message</h4>
              </Button>
            </form>
            <div className='flex-1 relative'>
              <Image
                src={illustration}
                alt='illustration'
                className='absolute right-[-320px] top-0 bottom-0'
              />
            </div>
          </div>
        </LargeCard>
      </div>
    </section>
  );
};

export default Contact;
