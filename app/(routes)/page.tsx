'use client';

import { useEffect } from 'react';
import {
  CaseStudies,
  Contact,
  Hero,
  OurWorkingProcess,
  Partners,
  Services,
  Team,
  Testimonials,
} from '../_components/components';

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <Hero />
      <Partners />
      <Services />
      <CaseStudies />
      <OurWorkingProcess />
      <Team />
      <Testimonials />
      <Contact />
    </>
  );
}
