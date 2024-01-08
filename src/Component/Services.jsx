import { FaCode, FaCrop, FaAppStore } from "react-icons/fa";

const Services = () => {
  return (
    <div id="services" className=" py-16 px-16 text-gray-600">
      <div className="container mx-auto">
        <h1 className="sub-title text-4xl text-center mb-10 text-gray-900 font-semibold">My Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center bg-white p-6 rounded-md shadow-md transition-transform transform hover:scale-105 hover:bg-purple-400 hover:text-black">
            <FaCode className="text-4xl text-purple-700 mb-4 mx-auto hover:text-white" />
            <h2 className="text-xl font-semibold mb-4">Web Design</h2>
            <ul className="text-left mb-4 list-disc pl-5">
              <li>Responsive and mobile-friendly website development.</li>
              <li>Cross-browser compatibility testing.</li>
              <li>Custom website design and development.</li>
            </ul>
          </div>
          <div className="text-center bg-white p-6 rounded-md shadow-md transition-transform transform hover:scale-105 hover:bg-purple-400 hover:text-black">
            <FaCrop className="text-4xl text-purple-700 mb-4 mx-auto hover:text-white" />
            <h2 className="text-xl font-semibold mb-4">Version Control and Collaboration</h2>
            <ul className="text-left mb-4 list-disc pl-5">
              <li>Git version control for code management.</li>
              <li>Collaborative development using platforms like GitHub or GitLab.</li>
              <li>Code reviews and pull request contributions.</li>
            </ul>
          </div>
          <div className="text-center bg-white p-6 rounded-md shadow-md transition-transform transform hover:scale-105 hover:bg-purple-400 hover:text-black">
            <FaAppStore className="text-4xl text-purple-700 mb-4 mx-auto hover:text-white" />
            <h2 className="text-xl font-semibold mb-4">Single Page Applications</h2>
            <ul className="text-left mb-4 list-disc pl-5">
              <li>Proficiency in HTML, CSS, and JavaScript.</li>
              <li>Experience with modern frontend frameworks (e.g., React, Vue, Angular).</li>
              <li>Responsive web design using frameworks like Bootstrap or Tailwind CSS.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
