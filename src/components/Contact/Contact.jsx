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
      className="py-16 md:py-24 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-20">
          Contact <span className="text-violet-600">Me</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
          {/* Left Info Section */}
          <div className="space-y-6 md:space-y-8 flex flex-col justify-center p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
              Get in Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              I'm open for new opportunities and collaborations. Fill out the form and I’ll get back to you as soon as possible.
            </p>

            <div className="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
              <p className="flex items-center hover:text-violet-600 transition">
                <MdLocationOn className="mr-3 text-violet-500 text-xl sm:text-2xl" /> 
                Dhaka, Bangladesh
              </p>
              <p className="flex items-center hover:text-violet-600 transition">
                <MdPhone className="mr-3 text-violet-500 text-xl sm:text-2xl" /> 
                +880 1780544535
              </p>
              <p className="flex items-center hover:text-violet-600 transition">
                <MdEmail className="mr-3 text-violet-500 text-xl sm:text-2xl" /> 
                mahmudhasanh35@gmail.com
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-5 sm:space-x-6 mt-4">
              <a
                href="https://www.facebook.com/mahdi.job.3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 text-xl sm:text-2xl transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://github.com/mahmud-hasan35"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-xl sm:text-2xl transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/mahmud-hasan-030904312/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-500 text-xl sm:text-2xl transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Right Form Section */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4 p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition"
          >
            <div>
              <label className="block mb-2 font-medium text-sm sm:text-base">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-violet-500 focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-sm sm:text-base">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-violet-500 focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-sm sm:text-base">Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Write your message..."
                required
                className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-violet-500 focus:outline-none transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-6 sm:px-8 py-3 font-semibold text-base sm:text-lg rounded-lg shadow-md bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 text-black hover:from-amber-400 hover:to-amber-500 transition"
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
