import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12 md:px-20"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side: Image */}
        <div className="flex justify-center">
          <img
            src="../../public/images/pic2.JPEG"
            alt="Your profile"
            className="w-125 h-125 scale-110 rounded-4xl object-cover shadow-lg transform transition-transform duration-500 hover:scale-115"
          />
        </div>
        {/* Right Side: About Text */}
        <div className="text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="text-lg text-gray-700 mb-6">
            I’m a highly motivated <span className='font-bold'>Software Developer</span> driven by the desire to build impactful and meaningful solutions.
            Knowledgeable in <span className='font-bold'>Full-Stack development</span>, Software Lifecycle, with an interest in <span className='font-bold'>Machine Learning</span>.
          </p>
        </div>


      </div>
    </section>
  );
};

export default About;
