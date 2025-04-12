import { CppIcon, ExpressIcon, GitIcon, JsIcon, MongoIcon, MysqlIcon, NodejsIcon, PythonIcon, PytorchIcon, ReactIcon, ReduxIcon, TfIcon, TwcIcon } from "../assets/icons.jsx";

const TechStack = () => {
  return (
    <section
      id="techstack"
      className="min-h-screen py-12 md:py-20 px-6 md:px-20 flex justify-center items-center bg-white"
    >
      <div className="max-w-7xl w-full text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          My <span className="text-amber-500">Tech Stack</span>
        </h2>

        <div className="flex justify-evenly py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 md:gap-16 content-center mx-auto">
            <div className="text-center flex items-center">
              <PythonIcon className='w-10 h-10' />
              <h3 className="text-xl font-semibold text-gray-800 px-2">Python</h3>
            </div>

            <div className="text-center flex items-center">
              <CppIcon className='w-10 h-10' />
              <h3 className="text-xl font-semibold text-gray-800 px-2">C++</h3>
            </div>

            <div className="text-center flex items-center">
              <JsIcon className='w-10 h-10' />
              <h3 className="text-xl font-semibold text-gray-800 px-2">Javascript</h3>
            </div>

            <div className="text-center flex items-center">
              <ExpressIcon className='w-10 h-10' />
              <h3 className="text-xl font-semibold text-gray-800 px-2">Express</h3>
            </div>

            <div className="text-center flex items-center">
              <NodejsIcon className='w-10 h-10' />
              <h3 className="text-xl font-semibold text-gray-800 px-2">Node.js</h3>
            </div>

            <div className="text-center flex items-center">
              <ReactIcon className='w-10 h-10' />
              <h3 className="text-xl font-semibold text-gray-800 px-2">React</h3>
            </div>

            <div className="text-center flex items-center">
              <ReduxIcon className='w-10 h-10' />
              <h3 className="text-xl font-semibold text-gray-800 px-2">Redux</h3>
            </div>

            <div className="text-center flex items-center">
              <TwcIcon className='w-10 h-10' />
              <h3 className="text-xl font-semibold text-gray-800 px-2">TailwindCSS</h3>
            </div>

            <div className="text-center flex items-center">
              <TfIcon className='w-10 h-10' />
              <h3 className="text-xl font-semibold text-gray-800 px-2">TensorFlow</h3>
            </div>

            <div className="text-center flex items-center">
              <PytorchIcon className='w-10 h-10' />
              <h3 className="text-xl font-semibold text-gray-800 px-2">PyTorch</h3>
            </div>

            <div className="text-center flex items-center">
              <MongoIcon className='w-10 h-10' />
              <h3 className="text-xl font-semibold text-gray-800 px-2">MongoDB</h3>
            </div>

            <div className="text-center flex items-center">
              <MysqlIcon className='w-10 h-10' />
              <h3 className="text-xl font-semibold text-gray-800 px-2">MySQL</h3>
            </div>

            <div className="text-center flex items-center">
              <GitIcon className='w-10 h-10' />
              <h3 className="text-xl font-semibold text-gray-800 px-2">Git</h3>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default TechStack;
