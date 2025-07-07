import '../../styles/globals.css';

import SkillLink from '../Reusabale/SkillLink';

export default function About(){
    return(
    <section>
        <header>
            <h2 className='title-header'>
            About Me
            </h2>
        </header>

        <div className='about-me-content'>
            <p>
Front-end developer with a background in HTML5, CSS3, Tailwind, and Javascript. Having just graduated, I have achieved hands-on experience through my internship, with contributions made towards refactoring a web app, best practices on React components, as well as experience in handling RESTful APIs.</p>
            <p>
I am committed to writing clean, accessible, and maintainable code. Through my internship, I have developed a strong collaborative skill and an eagerness to expand my technical and personal skills.</p>
        </div>

        <div className='skills-section'>

            <h3 className="text-xl font-bold lg:text-[30px] ">
                Skills
            </h3>

            <div className="skills-icons-container">
                <SkillLink type="react" />
                <SkillLink type="js" />
                <SkillLink type="mongodb" />
                <SkillLink type="swagger" />
                <SkillLink type="postman" />
                <SkillLink type="node" />
                <SkillLink type="tailwind" />
                <SkillLink type="next" />
           </div>
        </div>
    </section>
    )
}