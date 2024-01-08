import myphoto from '../../public/image/139.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
const About = () => {
    return (
        <div id='about' className='-mt-20'>
            <div className="flex lg:flex-row flex-col-reverse justify-around space-y-4 bg-purple-50 p-10 lg:mt-0 mt-24">
                <div className="">
                    <img src={myphoto} alt="" className="mb-10" />
                </div>
                <div className="flex-1">
                    <h1 className='font-salsa text-4xl mb-7 text-center font-semibold text-gray-900 '>About Me</h1>
                    <Tabs>
                        <TabList className="flex lg:flex-nowrap flex-wrap  p-2 rounded-t-md gap-5">
                            <Tab className="w-full font-salsa text-center cursor-pointer py-2 px-4 rounded-md" selectedClassName="active-tab">
                                About Me
                            </Tab>
                            <Tab className="w-full font-salsa text-center cursor-pointer py-2 px-4 rounded-md" selectedClassName="active-tab">
                                Technical Skills
                            </Tab>
                            <Tab className="w-full font-salsa text-center cursor-pointer py-2 px-4 rounded-md" selectedClassName="active-tab">
                                Interpersonal Skills
                            </Tab>
                            <Tab className="w-full font-salsa text-center cursor-pointer py-2 px-4 rounded-md" selectedClassName="active-tab">
                                Education
                            </Tab>
                        </TabList>

                        <TabPanel>
                            <p className="p-4 font-salsa text-gray-600 leading-6 text-justify">Hi, This is Surovi. <br /> <br />A dedicated React JS Developer equipped with a Computer Science and Engineering degree. My passion lies in the art of coding, website development, and continuous exploration of cutting-edge technologies. I thrive on contributing to impactful full-stack projects, demonstrating my unwavering commitment to delivering top-tier solutions. I am enthusiastic about opportunities that harmonize with my skill set, bringing to the table not just expertise, but also a strong work ethic and a rapid learning pace. Feel free to explore my GitHub to witness my dedication and proficiency in action.  </p>
                        </TabPanel>
                        <TabPanel>
                            <ul className='flex flex-wrap gap-5 pt-10 pl-16'>
                                <li className='btn bg-white shadow-xl text-purple-900 text-lg cursor-pointer transform transition-transform hover:scale-105 hover:opacity-100 hover:bg-purple-900 hover:text-white opacity-80 border-none'>
                                    <FaReact className='mr-2' /> React
                                </li>
                                <li className='btn bg-white shadow-xl text-purple-900 text-lg cursor-pointer transform transition-transform hover:scale-105 hover:opacity-100 hover:bg-purple-900 hover:text-white opacity-80 border-none'><IoLogoJavascript />JavaScript</li>
                                <li className='btn bg-white shadow-xl text-purple-900 text-lg cursor-pointer transform transition-transform hover:scale-105 hover:opacity-100 hover:bg-purple-900 hover:text-white opacity-80 border-none'><FaHtml5 />HTML</li>
                                <li className='btn bg-white shadow-xl text-purple-900 text-lg cursor-pointer transform transition-transform hover:scale-105 hover:opacity-100 hover:bg-purple-900 hover:text-white opacity-80 border-none'><FaCss3Alt />CSS</li>
                                <li className='btn bg-white shadow-xl text-purple-900 text-lg cursor-pointer transform transition-transform hover:scale-105 hover:opacity-100 hover:bg-purple-900 hover:text-white opacity-80 border-none'><SiTailwindcss />TailwindCSS</li>
                                <li className='btn bg-white shadow-xl text-purple-900 text-lg cursor-pointer transform transition-transform hover:scale-105 hover:opacity-100 hover:bg-purple-900 hover:text-white opacity-80 border-none'><SiFirebase />Firebase</li>
                                <li className='btn bg-white shadow-xl text-purple-900 text-lg cursor-pointer transform transition-transform hover:scale-105 hover:opacity-100 hover:bg-purple-900 hover:text-white opacity-80 border-none'><SiMongodb />Mongodb</li>
                                <li className='btn bg-white shadow-xl text-purple-900 text-lg cursor-pointer transform transition-transform hover:scale-105 hover:opacity-100 hover:bg-purple-900 hover:text-white opacity-80 border-none'><FaBootstrap />Bootstrap</li>
                                <li className='btn bg-white shadow-xl text-purple-900 text-lg cursor-pointer transform transition-transform hover:scale-105 hover:opacity-100 hover:bg-purple-900 hover:text-white opacity-80 border-none'><FaGitAlt />Git/Github</li>
                            </ul>
                        </TabPanel>
                        <TabPanel>
                            <ul className='pt-10 pl-20 list-disc'>
                                <li className="mb-4 transform scale-100 hover:scale-95 transition duration-300 font-salsa">
                                    Effective Communication
                                </li>
                                <li className="mb-4 transform scale-100 hover:scale-95 transition duration-300 font-salsa">
                                    Team Collaboration
                                </li>
                                <li className="mb-4 transform scale-100 hover:scale-95 transition duration-300 font-salsa">
                                    Quick Learner
                                </li>
                                <li className="mb-4 transform scale-100 hover:scale-95 transition duration-300 font-salsa">
                                    Adaptability
                                </li>
                                <li className="mb-4 transform scale-100 hover:scale-95 transition duration-300 font-salsa">
                                    Time Management
                                </li>
                            </ul>

                        </TabPanel>
                        <TabPanel>
                            <div className="lg:pl-20 pl-5">
                            <FaGraduationCap className='text-4xl text-purple-900' />
                                <div className="flex-1 border-l-2 py-5 border-purple-900 ml-4 pl-5"> 
                                    <div className=" mb-2">
                                        
                                        <h3 className="text-xl font-salsa">BSc in CSE (IUBAT)</h3>
                                    </div>
                                    <p className="text-gray-600 text-justify font-salsa">
                                        <span className='bg-purple-900 text-white text-sm rounded-md px-2'>January 2015 - December 2019</span><br /> <br />
                                        Concentration: Structured Programming Language, Data Structures, Digital Logic Design, Numerical Methods, Data Communication, Microprocessor, Assembly, C++, Java, .NET, Compiler Design, Software Engineering, Artificial Intelligence, Software Design & Development.
                                    </p>
                                </div>
                            </div>

                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default About;
