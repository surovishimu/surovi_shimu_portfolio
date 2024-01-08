import project1 from '../../public/image/medscanhub.png'
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
const Projects = () => {
    return (
        <div id='projects' className=' '>
            <h1 className='text-4xl font-bold mb-12 text-center mt-12'>Recent Works</h1>
            <div className='bg-purple-50 w-5/6 mx-auto rounded-lg shadow-lg'>
                <div className='flex md:flex-row flex-col justify-around items-center gap-10 p-10 '>
                    <div className="image-container flex-1">
                        <h1>Hover to View</h1>
                        <img
                            src={project1}
                            alt="Your Image"
                            className="scroll-image "
                        />
                    </div>
                    <div className='flex-1'>
                        <h1 className='text-xl font-bold mb-4'>
                            MedScan Hub (Diagnostic Center Management System)🏥
                        </h1>
                        <p>
                            MedScan Hub website provides user-friendly interfaces for both users and administrators. Enjoy convenient Stripe online payment and a hassle-free test search system for a smooth and efficient experience.
                        </p>
                        <div>
                            <h1 className='text-xl font-bold mb-2 mt-3'>Technologies</h1>
                            <ul className='flex flex-wrap gap-x-5 gap-y-2 '>
                                <li className='bg-white shadow-lg rounded-md p-2'>React</li>
                                <li className='bg-white shadow-lg rounded-md p-2'>HTML</li>
                                <li className='bg-white shadow-lg rounded-md p-2'>CSS</li>
                                <li className='bg-white shadow-lg rounded-md p-2'>Node.js</li>
                                <li className='bg-white shadow-lg rounded-md p-2'>Express.js</li>
                                <li className='bg-white shadow-lg rounded-md p-2'>MongoDB</li>
                                <li className='bg-white shadow-lg rounded-md p-2'>Stripe</li>
                                <li className='bg-white shadow-lg rounded-md p-2'>Firebase</li>
                            </ul>
                        </div>

                        <div className='flex justify-center mt-5 gap-10'>
                            <div className=''>
                                <a href="https://github.com/surovishimu/MedScan-Hub-Diagnostic-Center" className="inline-flex items-center hover:text-purple-800 text-xl" target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="mr-2" />
                                    Code
                                </a>

                            </div>
                            <div>
                                <a href="https://medscan-diagnostic-center.web.app/" className="inline-flex items-center hover:text-purple-800 text-xl" target="_blank" rel="noopener noreferrer">
                                    <FaExternalLinkAlt className="mr-2" />
                                    Live Demo
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;