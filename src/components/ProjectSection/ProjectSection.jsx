import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/project-images/project.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const responsive = {
    desktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
  };

  return (
    <section id="projects" className="px-3 sm:px-6 lg:px-10 py-12">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
          My <span className="text-indigo-600">Projects</span>
        </h1>

        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={2500}
          keyBoardControl
          containerClass="carousel-container"
          itemClass="px-2"
          removeArrowOnDeviceType={["mobile"]}
          showDots
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-2xl transition duration-300"
            >
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-4">
                <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600 text-sm md:text-base mb-4 line-clamp-3">
                  {project.description}
                </p>

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

                <div className="flex justify-between items-center gap-3">
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
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectSection;
