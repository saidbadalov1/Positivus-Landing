'use client';

import { Link } from 'react-scroll';

import { navbarLinks } from '@/app/constants/constants';
import { NavbarTypes } from '@/app/types/types';
import { LogoIcon } from '@/app/_assets/icons/icons';
import { Button } from '../../shared/shared';
import { useScrollPosition } from '@/app/hooks/UseScrollPosition';
import { useState } from 'react';

const Navbar = () => {
  const scrollPosition = useScrollPosition();

  const [open, setOpen] = useState(false);

  return (
    <header
      className={`${
        scrollPosition > 0 ? 'bg-white shadow-xl py-0.5' : 'bg-transparent py-0'
      }  fixed top-0 left-0 right-0 z-50 transition-all lg:block ${
        open ? 'bg-white fixed h-screen inset-0' : ''
      }`}
    >
      <div className='py-4 flex justify-between items-center container'>
        <Link to={'about-us'} className='cursor-pointer'>
          <LogoIcon white={false} />
        </Link>
        <nav
          className={`flex gap-10 lg:items-center transition-all ${
            open
              ? 'absolute top-40 opacity-100 flex-col'
              : 'opacity-0 h-0 w-0 overflow-hidden'
          }`}
        >
          {navbarLinks.map((nav: NavbarTypes, i: number) => (
            <Link
              key={i}
              to={nav.url}
              smooth
              spy
              onClick={() => setOpen(false)}
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
        <button
          onClick={() => setOpen((prev) => !prev)}
          className='flex flex-col gap-1.5 w-6 justify-center items-center relative -mt-4 lg:hidden'
        >
          <div
            className={`w-full h-0.5 bg-dark rounded-lg absolute transition-all ${
              open ? 'rotate-45 top-2' : 'rotate-0 top-0'
            }`}
          ></div>
          <div
            className={`w-full h-0.5 bg-dark rounded-lg absolute top-2 transition-all ${
              open ? 'opacity-0 hidden' : 'opacity-100 block'
            }`}
          ></div>
          <div
            className={`w-full h-0.5 bg-dark rounded-lg absolute  transition-all ${
              open ? '-rotate-45 top-2' : 'rotate-0 top-4'
            }`}
          ></div>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
