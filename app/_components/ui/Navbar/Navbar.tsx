'use client';

import { Link } from 'react-scroll';

import { navbarLinks } from '@/app/constants/constants';
import { NavbarTypes } from '@/app/types/types';
import { LogoIcon } from '@/app/_assets/icons/icons';
import { Button } from '../../shared/shared';

const Navbar = () => {
  return (
    <header className='bg-white fixed top-0 left-0 right-0 z-50'>
      <div className='py-4 flex justify-between items-center container'>
        <Link to={'about-us'}>
          <LogoIcon white={false} />
        </Link>
        <nav className='flex gap-10 items-center'>
          {navbarLinks.map((nav: NavbarTypes, i: number) => (
            <Link
              key={i}
              to={nav.url}
              smooth
              spy
              activeClass='active'
              duration={300}
              className='cursor-pointer border-b-2 border-white transition-all'
            >
              <h4>{nav.name}</h4>
            </Link>
          ))}
          <Button classNames='bg-transparent'>
            <h4>Request a quote</h4>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
