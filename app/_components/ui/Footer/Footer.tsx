'use client';

import { navbarLinks } from '@/app/constants/constants';
import { NavbarTypes } from '@/app/types/types';
import LogoIcon from '@/app/_assets/icons/Logo';
import { Link } from 'react-scroll';
import { Button, Input } from '../../shared/shared';

const Footer = () => {
  return (
    <footer
      className='bg-dark p-12 rounded-t-[45px]'
      data-aos='fade-up'
      data-aos-duration='5000'
    >
      <div className='footer__header flex justify-between items-center'>
        <div>
          <LogoIcon white />
        </div>
        <nav className='flex gap-4'>
          {navbarLinks.map((link: NavbarTypes, i: number) => (
            <Link
              key={i}
              to={link.url}
              smooth
              spy
              activeClass='active-s'
              duration={300}
              className='cursor-pointer border-b text-white border-open transition-all'
            >
              <p>{link.name}</p>
            </Link>
          ))}
        </nav>
      </div>
      <div className='footer__body mt-12 flex gap-10'>
        <div className='flex-1 flex flex-col gap-5'>
          <div>
            <h4 className='bg-green inline-flex p-1 rounded-lg'>Contact us:</h4>
          </div>
          <div className='flex flex-col gap-4 text-white'>
            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <p>Address: 1234 Main St Moonstone City, Stardust State 12345</p>
          </div>
        </div>
        <div className='flex-1'>
          <form className='bg-[#292A32] rounded-xl w-full h-full flex items-center px-10 gap-4'>
            <div className='flex-1'>
              <Input name='' type='text' placeholder='Email' />
            </div>

            <Button classNames='bg-green flex-1'>
              <h4 className='font-normal'>Subscribe</h4>
            </Button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
