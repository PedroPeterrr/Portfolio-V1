import '../../styles/globals.css';
import { DocumentIcon } from '@/assets/assets.js';

export default function Resume(){
    return(
        <section className='resume-section'> 
            <header>
                <h2 className='title-header'>
                    Resume
                </h2>
            </header>

                <div className='resume-details-container'>
                    <h3 className='resume-title'>Education</h3>
                    <h4 className='text-[17px] font-bold md:text-[18px]'>Bulacan State University</h4>
                    <p className='text-[14px] md:text-[15px]'>Bachelor of Industrial Technology major in Computer Technology</p>
                    <span className='text-[14px] text-icon font-bold md:text-[15px]'>2021 - 2025</span>
                </div>

                <div className='resume-details-container'>
                    <h3 className='resume-title'>Experience</h3>
                    <h4 className='text-[15px] font-bold md:text-[16px]'>INTERN | Planning and Development Office</h4>
                    <p className='text-[15px] md:text-[16px]'>Bulacan State University</p>
                    <span>
                        <p className='text-[15px] text-icon font-bold md:text-[16px]'>January - May 2025 • 4months</p>
                        <p className='text-[15px] md:text-[16px]'>Malolos, Bulacan - Philippines</p>
                        <ul className='experience-list'>
                            <li> 
                                Migrated and refactored legacy code to a new repository using modern React, enhancing performance and maintainability. 
                            </li>

                            <li>
                                Developed reusable React components to optimize redundant code and improve application efficiency.
                            </li>

                            <li>
                               Integrated frontend with backend RESTful APIs, managing data and error handling.
                            </li>

                            <li>
                               Participated in daily meetings to track task updates and address new assignments.
                            </li>

                            <li>
                                Collaborated with fellow developers to successfully complete shared tasks.
                            </li>
                        </ul>
                    </span>
                </div>
                
                <div className='resume-button-container'>
                    <a 
                        href="/Cabantog_Peter_James-Resume.pdf"
                        download="Peter_James_Cabantog_Resume.pdf"
                        className='resume-download-button'
                    >
                        <DocumentIcon stroke="var(--color-icon)"/>
                        <span>Download CV</span>
                    </a>
                </div>
        </section>
    )
}