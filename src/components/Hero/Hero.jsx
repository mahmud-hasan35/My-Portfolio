import React from "react";
import image from "../../assets/hero.jpg";
import CV from "/MY_CV.pdf";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section id="home" className="relative ">
      <div className="container flex flex-col-reverse justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        {/* Left Content */}
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
 <h1 className="text-3xl font-bold leading-tight md:text-4xl text-gray-900 dark:text-white">
      Hi, I’m <span className="bg-gradient-to-r from-amber-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
  Mahmud
</span> <br />
   <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 bg-clip-text text-transparent">
  <Typewriter
    words={["Frontend Developer", "MERN Stack Developer"]}
    loop={0} // infinite
    cursor
    cursorStyle="|"
    typeSpeed={80}
    deleteSpeed={50}
    delaySpeed={2000}
  />
</span>


    </h1>

<p className="mt-6 mb-8 text-base sm:text-lg sm:mb-12 text-gray-700 dark:text-gray-300">
  I specialize in building modern, responsive, and scalable web applications
  using React, Next.js, Tailwind CSS, and Node.js. I bring ideas to life with
  clean, efficient, and user-friendly interfaces.
</p>

          {/* Buttons */}
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 text-base sm:px-8 sm:py-3 sm:text-lg font-semibold rounded bg-yellow-400 text-white hover:bg-yellow-500 transition"
            >
              Veiw Projects
            </a>
            <a
              href={CV}
              download={CV}
              className="px-6 py-3 text-base sm:px-8 sm:py-3 sm:text-lg font-semibold border rounded border-b-fuchsia-950 hover:bg-white hover:text-black transition"
            >
              My Resume
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex items-center justify-center p-6 mb-8 lg:mb-0 h-64 sm:h-80 lg:h-96 xl:h-[28rem]">
          <img
            src={image}
            alt="Hero"
            className="object-cover rounded-2xl shadow-lg h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
