import React from 'react';

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-white py-12 md:py-20 px-6 md:px-20 flex justify-center items-center"
    >
      <div className="max-w-7xl w-full text-center">
      <div className="border-t-2 border-amber-400 mb-10"></div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Project 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Secure System</h3>
            <p className="text-lg text-gray-700 mb-4">
              A secure system implemented using the MERN stack utilizing authentication tokens, redux toolkit and bootstrap.
            </p>
            <a
              href="#"
              className="text-amber-500 font-semibold hover:text-amber-600 transition"
            >
              View Project
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Mini Blog</h3>
            <p className="text-lg text-gray-700 mb-4">
              A blog applicaiton implemented with the MERN stack and tailwindcss with elements of user authentication.
            </p>
            <a
              href="#"
              className="text-amber-500 font-semibold hover:text-amber-600 transition"
            >
              View Project
            </a>
          </div>

          

          {/* Add more projects here as needed */}
        </div>
        <div className="border-b-2 border-amber-400 mt-10"></div>
      </div>
    </section>
  );
};

export default Projects;
