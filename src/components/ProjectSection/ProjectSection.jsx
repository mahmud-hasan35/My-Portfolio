import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/project-images/project.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  // slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024, // Tablet / small laptop
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768, // iPad / mid screen
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 480, // Mobile screen
        settings: { slidesToShow: 1, arrows: false }, // mobile এ arrow hide
      },
    ],
  };

  return (
    <section id="projects" className="text-gray-700 body-font px-4 md:px-8 py-16 md:py-24">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 md:mb-14 text-center">
          My <span className="text-indigo-600">Projects</span>
        </h1>

        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.id} className="px-2 md:px-4">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden group transition hover:shadow-2xl">
                {/* Image */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-4 md:p-5">
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech?.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs md:text-sm px-2 py-1 bg-indigo-100 text-indigo-600 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap justify-between items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-gray-800 text-white text-xs md:text-sm rounded-lg hover:bg-gray-900 transition"
                    >
                      <FaGithub /> GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-yellow-400 font-semibold text-white text-xs md:text-sm rounded-lg hover:bg-yellow-500 transition"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ProjectSection;
