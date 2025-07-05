import Image from 'next/image'
import { Pmes } from '@/assets/assets';
import '../../styles/globals.css';

export default function Project(){
    return(
        <section>
            <header>
                <h2 className='title-header'>
                    Projects
                </h2>
            </header>

            <ul className='project-list'>
                <li className='project-list-item'>
                    <div className="project-image-container">
                        <Image
                            src={Pmes}
                            alt="PMES Project"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <h3 className='project-title'>
                        Performance Monitoring and Evaluation System (PMES)
                    </h3>
                </li>
            </ul>
        </section>
    )
}