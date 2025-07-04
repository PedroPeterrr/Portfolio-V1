"use client"

import '../styles/globals.css';
import Image from 'next/image';
import useContactStore from '@/stores/useContactStore';
import { ArrowDown, ArrowUp, GithubIcon, LinkedInIcon, MailIcon, PhoneIcon, LocationIcon} from '@/assets/assets';
import ExternalLink from './Reusabale/ExternalLink';

export default function ContactInfo() {

  const { isOpen, toggleIsOpen } = useContactStore();
  
  return (
    <section className="contact-content-card">

      <div className='arrow-container' 
        onClick={toggleIsOpen}
      >
        <div className='block md:hidden'>
          <Image src={isOpen ? ArrowUp : ArrowDown} alt="Toggle Arrow Icon"/>
        </div>

        <span className="hidden md:block font-semibold text-sm text-icon">
          {isOpen ? 'Hide Contact' : 'Show Contact'}
        </span>
      </div>

      <div className="flex flex-start gap-5 items-center lg:flex-col lg:gap-7">     
        <ExternalLink href="/image/Cabantog_Peter_James.jpg"
          className=' bg-avatar w-20 h-20 rounded-[20px] lg:w-[135px] lg:h-[135px]'
        />

        <div className='lg:flex lg:flex-col lg:items-center lg:gap-4'>
          <h1 className='name'>Peter James M. Cabantog</h1>
          <p className='title'>Front-end Developer</p>
        </div>
      </div> 

       <div className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
          <div className='separator'></div>

            <ul className='contact-info-list'>

              <li className='contact-info-item'>
                <div className="icon-border">
                  <Image src={MailIcon} alt="Mail Icon" className='icons' />
                </div>

                <div className='contact-info-text'>
                  <span className="font-semibold text-[var(--color-border)]">Phone:</span>
                  <p>
                    <a 
                      href="https://www.viber.com/en/" 
                      target='_blank'
                      rel="noopener noreferrer"
                    >
                      +63 917 123 4567
                    </a>
                  </p>
                </div>
              </li>


              <li className='contact-info-item'>
                <div className="icon-border">
                  <Image src={PhoneIcon} alt="Phone Icon" className='icons' />
                </div>

                <div className="contact-info-text">
                  <span className="font-semibold text-[var(--color-border)]">Email:</span>
                  <p>
                    <a 
                      href="mailto:cabantog.peterjames@gmail.com"
                      target='_blank'
                      rel="noopener noreferrer"
                    >
                      cabantog.peterjames@gmail.com
                    </a>
                  </p>
                </div>
              </li>

              <li className='contact-info-item'>
                <div className="icon-border">
                  <Image src={LocationIcon} alt="Location Icon" className='icons' />
                </div>

               <div className="contact-info-text">
                  <span className="font-semibold text-[var(--color-border)]">Location:</span>
                  <p>
                    <a 
                      href="https://www.google.com/maps/place/Bulacan,+Philippines"
                      target='_blank'
                      rel="noopener noreferrer"
                    >
                      Bulacan, Philippines
                    </a>
                  </p>
                </div>
              </li>

            </ul>

          <div className='separator'></div>

          <ul className='contact-info-icons'>
            <ExternalLink href="https://www.linkedin.com/in/peter-james-cabantog">
              <Image src={LinkedInIcon} alt="LinkedIn Icon" className='linkedin-icon'/>
            </ExternalLink>
            <ExternalLink href="https://github.com/PedroPeterrr">
              <Image src={GithubIcon} alt="Github Icon" className='icons' />
            </ExternalLink>
          </ul>
        </div>
    </section>
  )
}