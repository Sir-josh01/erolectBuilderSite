import React, { useState } from "react";

const projects = [
  {
    id: 1,
    category: "Pools",
    type: "video",
    title: "Infinity Edge Oasis",
    img: "/pool-work-1.jpg",
    videoUrl: "/VID-20260312-WA0017.mp4",
    location: "Maitama, Abuja",
    problem:
      "The client had a sloped backyard that was unusable for traditional construction.",
    solution:
      "Engineered a cantilevered infinity pool that utilizes the slope for a dramatic overflow effect.",
    challenge: "Managing structural weight distribution on loose soil.",
  },
  {
    id: 2,
    // type: "video",
    category: "Construction",
    title: "Modern Office Complex",
    img: "../../public/con-work-1.jpg",
    // videoUrl: "https://www.w3schools.com/html/movie.mp4",
    location: "Central Area, Abuja",
    problem: "Strict deadlines for a high-rise foundation.",
    solution:
      "Used accelerated curing concrete and 24-hour engineering shifts.",
  },
  {
    id: 3,
    category: "Pools",
    title: "Olympic Lap Pool",
    img: "/pool-work-2.jpg",
     // videoUrl: "https://www.w3schools.com/html/movie.mp4",
    location: "Central Area, Abuja",
    problem: "Strict deadlines for a high-rise foundation.",
    solution: "",
    challenges: "",
  },
  {
    id: 4,
    // type: "",
    category: "Construction",
    title: "Luxury Villa Foundation",
    img: "/con-work-3.jpg",
     // videoUrl: "https://www.w3schools.com/html/movie.mp4",
    location: "Central Area, Abuja",
    problem: "",
    solution: "",
    challenges: "",
  },
  {
    id: 5,
    // type: "",
    category: "Pools",
    title: "Geometric Rooftop Pool",
    img: "../../public/pool.jpg",
     // videoUrl: "https://www.w3schools.com/html/movie.mp4",
    location: "",
    problem: "",
    solution: "",
    challenges: "",
  },
  {
    id: 6,
    // type: "",
    category: "Construction",
    title: "Steel Frame Warehouse",
    img: "../../public/con-work.jpg",
     // videoUrl: "https://www.w3schools.com/html/movie.mp4",
    location: "",
    problem: "",
    solution: "",
    challenges: "",
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null); // Tracks the open modal

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Our Featured Work
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {["All", "Pools", "Construction"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-bold transition-all cursor-pointer ${
                  filter === cat
                    ? "bg-brand-primary text-white"
                    : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative overflow-hidden rounded-sm bg-brand-dark aspect-square cursor-pointer"
            >
              <img
                src={project.img}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-40 transition-all duration-700"
              />

              {/* Video Indicator Icon */}
              {project.type === "video" && (
                <div className="absolute top-4 right-4 bg-brand-primary/80 p-2 rounded-full text-white z-20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                    />
                  </svg>
                </div>
              )}

              <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-brand-primary text-xs font-bold uppercase tracking-widest mb-2">
                  {project.category}
                </span>
                <h4 className="text-white text-2xl font-bold">
                  {project.title}
                </h4>
                <button className="mt-4 text-white text-sm font-bold border-b-2 border-brand-primary w-fit">
                  VIEW PROJECT
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* --- PROJECT MODAL --- */}
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-brand-dark/95 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white dark:bg-gray-800 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-sm flex flex-col md:flex-row shadow-2xl">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 bg-brand-primary text-white w-10 h-10 flex items-center justify-center font-bold hover:bg-sky-500 transition-colors"
              >
                ✕
              </button>

              {/* Modal Image */}
              <div className="md:w-1/2 h-64 md:h-auto bg-black flex items-center">
                {selectedProject.type === "video" ? (
                  <video
                    src={selectedProject.videoUrl}
                    controls
                    autoPlay
                    loop
                    className="w-full h-full object-cover"
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={selectedProject.img}
                    className="w-full h-full object-cover"
                    alt={selectedProject.title}
                  />
                )}
              </div>

              {/* Modal Details */}
              <div className="md:w-1/2 p-8 md:p-12 space-y-6">
                <div>
                  <span className="text-brand-primary font-bold uppercase tracking-widest text-xs">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 flex items-center gap-2 mt-1">
                    <span className="text-brand-primary">📍</span>{" "}
                    {selectedProject.location || "Location Confidential"}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="text-sm font-bold uppercase text-gray-900 dark:text-white border-l-2 border-brand-primary pl-2">
                      The Problem
                    </h5>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                      {selectedProject.problem}
                    </p>
                  </div>
                  <div>
                    <h5 className="text-sm font-bold uppercase text-gray-900 dark:text-white border-l-2 border-brand-primary pl-2">
                      The Solution
                    </h5>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full py-4 bg-brand-primary text-white font-bold uppercase tracking-widest text-xs hover:bg-sky-500 transition-all"
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
