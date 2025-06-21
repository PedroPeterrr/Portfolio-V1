import '../styles/globals.css';
import { ReactIcon } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

export default function MainContent() {
  return (
    <section className="main-content-card">
      <header>
        <h2 className='text-xl font-bold'>
          About Me
        </h2>
      </header>
      <div className='about-me-content'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
      <div className='skills-section'>
        <h3 className="text-xl font-bold">
          Skills
        </h3>
        
        <Image src={ReactIcon} alt="React Icon" className='react-icon' />

      </div>
    </section>
  );
}