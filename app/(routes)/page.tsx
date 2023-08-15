'use client';

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
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 2500,
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
