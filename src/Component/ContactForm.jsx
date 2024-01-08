import { useRef } from 'react';
import { FaEnvelope, FaRocket, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pbke49h', 'template_9zgydas', form.current, 'JATFHNNR_uXD9Tq1A')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
                form.current.reset(); // Reset the form after successful submission
            })
            .catch((error) => {
                console.error(error.text);
                alert('Failed to send message. Please try again later.');
            });
    };

    return (
        <div id='contact' className=" py-16 px-4 sm:px-8 text-gray-600">
            <h1 className="sub-title text-4xl text-center mb-10 text-gray-900 font-semibold">Get In Touch</h1>
            <div className="container mx-auto flex flex-col sm:flex-row justify-around items-center">
                {/* Quick Contact Section */}
                <div className="max-w-md mb-8 sm:mb-0">
                    <h1 className="sub-title text-2xl text-gray-800 mb-4">Quick Contact</h1>
                    {/* Email */}
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">Email</h2>
                        <div className="flex items-center">
                            <FaEnvelope className="text-purple-700 mr-2" />
                            <span>surovi.shimu95@gmail.com</span>
                        </div>
                    </div>
                    {/* Social Media */}
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">Social Media</h2>
                        <div className="flex items-center">
                            <a href="https://www.facebook.com/surmoni" ><FaFacebook className="text-purple-700 mr-2" /></a>
                            <a href="https://github.com/surovishimu"> <FaLinkedin className="text-purple-700 mr-2" /></a>
                            <FaTwitter className="text-purple-700 mr-2" />
                        </div>
                    </div>
                    {/* Location */}
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Location</h2>
                        <div className="flex items-center">
                            <FaMapMarkerAlt className="text-purple-700 mr-2" />
                            <span>Dhaka, Bangladesh</span>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <form ref={form} onSubmit={sendEmail} className="max-w-lg w-full">
                    {/* Name */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="user_name"
                            required
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="user_email"
                            required
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>

                    {/* Subject */}
                    <div className="mb-4">
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                            Subject <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            required
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>

                    {/* Message */}
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows="4"
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-purple-700 text-white py-2 px-4 rounded-md flex items-center justify-center hover:bg-purple-800 w-full sm:w-auto"
                    >
                        <FaRocket className="mr-2" />
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
