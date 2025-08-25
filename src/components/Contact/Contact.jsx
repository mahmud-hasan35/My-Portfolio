import React from "react";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    window.location.href = `mailto:mahmudhasanh35@gmail.com?subject=Message from ${name}&body=${message} (Sender Email: ${email})`;

    e.target.reset();
  };
  

  return (
    <section
      id="contact"
      className="py-24 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-center mb-20">Contact Me</h1>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* Left Info Section */}
          <div className="space-y-8 flex flex-col justify-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-4xl font-bold mb-3">Get in Touch</h2>
            <p className="text-gray-600 dark:text-gray-300">
              I'm open for new opportunities and collaborations. Fill out the form and I’ll get back to you as soon as possible.
            </p>

            <div className="space-y-5 text-gray-700 dark:text-gray-300">
              <p className="flex items-center hover:text-violet-600 transition-colors duration-300">
                <MdLocationOn className="mr-3 text-violet-500 text-2xl" /> Dhaka, Bangladesh
              </p>
              <p className="flex items-center hover:text-violet-600 transition-colors duration-300">
                <MdPhone className="mr-3 text-violet-500 text-2xl" /> +880 1780544535
              </p>
              <p className="flex items-center hover:text-violet-600 transition-colors duration-300">
                <MdEmail className="mr-3 text-violet-500 text-2xl" /> mahmudhasanh35@gmail.com
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 mt-4">
              <a
                href="https://facebook.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 text-2xl transition-colors duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://github.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-2xl transition-colors duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-500 text-2xl transition-colors duration-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Right Form Section (Reduced Height) */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4 p-6 md:p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300"
          >
            <div>
              <label className="block mb-2 font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-violet-500 focus:outline-none transition-all"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-violet-500 focus:outline-none transition-all"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                name="message"
                rows="4" // Height reduced from 5 to 4
                placeholder="Write your message..."
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-violet-500 focus:outline-none transition-all"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 font-semibold text-lg rounded-lg shadow-md bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 text-black hover:from-amber-400 hover:to-amber-500 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
