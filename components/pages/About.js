import '../../styles/globals.css';

import SkillLink from '../Reusabale/SkillLink';

export default function About(){
    return(
    <section className='about-me-section'>
        <header>
            <h2 className='title-header'>
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

            <h3 className="text-xl font-bold lg:text-[30px] ">
                Skills
            </h3>

            <div className="skills-icons-container">
                <SkillLink type="react" />
                <SkillLink type="next" />
                <SkillLink type="js" />
                <SkillLink type="mongodb" />
                <SkillLink type="swagger" />
                <SkillLink type="tailwind" />
                <SkillLink type="postman" />
                <SkillLink type="node" />
           </div>
        </div>
    </section>
    )
}