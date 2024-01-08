import { useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import logoimg from '../../public/image/sys-removebg-preview.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = (e) => {
        e.stopPropagation(); 
        setIsOpen(!isOpen);
    };

    const scrollToTop = () => {
        scroll.scrollToTop();
        toggleMenu();
    };
    
    return (
        <nav className="bg-purple-900 shadow-lg lg:p-0 p-2 fixed z-10 w-full">
            <div className="mx-auto flex justify-between items-center">
                <div className="text-white lg:flex lg:items-center text-2xl lg:-mt-0 -mt-4 font-salsa">
                    <img className='h-24 lg:-mr-8 lg:-mb-0 -mb-5 lg:ml-0 ml-5' src={logoimg} alt="" />
                    Surovi Yasmin Shimu
                </div>

                <div className="lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="h-10 w-10"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>

                <div className={`lg:flex mr-10 ${isOpen ? 'hidden' : 'hidden lg:block'}`}>
                    <ul className="flex space-x-10 font-salsa">
                        <li className="text-white text-lg cursor-pointer">
                            <ScrollLink
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={scrollToTop}
                            >
                                Home
                            </ScrollLink>
                        </li>
                        <li className="text-white text-lg cursor-pointer">
                            <ScrollLink
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                About
                            </ScrollLink>
                        </li>
                        <li className="text-white text-lg cursor-pointer">
                            <ScrollLink
                                activeClass="active"
                                to="services"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                Services
                            </ScrollLink>
                        </li>
                        <li className="text-white text-lg cursor-pointer">
                            <ScrollLink
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                Projects
                            </ScrollLink>
                        </li>
                        <li className="text-white text-lg cursor-pointer">
                            <ScrollLink
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                Contact
                            </ScrollLink>
                        </li>
                      
                        
                    </ul>
                </div>
            </div>

         
            <div
                className={`lg:hidden fixed inset-0 bg-purple-900 w-1/2 z-50 ${isOpen ? 'block' : 'hidden'
                    }`}
                onClick={(e) => toggleMenu(e)} 
            >
                <div className={`flex justify-end p-4`}>
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="h-8 w-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div
                    className={`p-4`}
                >
                    <ul className="space-y-4">
                        <li className="text-white cursor-pointer">
                            <ScrollLink
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={scrollToTop}
                            >
                                Home
                            </ScrollLink>
                        </li>
                        <li className="text-white cursor-pointer">
                            <ScrollLink
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={500}
                                
                            >
                                About
                            </ScrollLink>
                        </li>
                        <li className="text-white cursor-pointer">
                            <ScrollLink
                                activeClass="active"
                                to="services"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                Services
                            </ScrollLink>
                        </li>
                        <li className="text-white cursor-pointer">
                            <ScrollLink
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                Projects
                            </ScrollLink>
                        </li>
                        <li className="text-white cursor-pointer">
                            <ScrollLink
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                Contact
                            </ScrollLink>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
