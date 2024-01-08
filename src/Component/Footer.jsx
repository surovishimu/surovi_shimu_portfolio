
import { FaArrowUp} from 'react-icons/fa';

const Footer = () => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-purple-900 text-white py-8">
            <div className="container mx-auto flex items-center justify-between">
                <p className="mt-2 text-gray-300">&copy; 2024. All rights reserved by Surovi Yasmin Shimu</p>
                <button
                    className="bg-purple-500 text-white p-2 rounded-full"
                    onClick={handleScrollToTop}
                >
                    <FaArrowUp />
                </button>
            </div>
        </footer>
    );
};

export default Footer;
