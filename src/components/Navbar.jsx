import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const sections = [
    { id: 'hero', label: 'Introduction' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'techstack', label: 'Tech' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-gray-50 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">
          <button
            onClick={() => scrollTo('hero')}
            className="text-gray-800 hover:text-black transition cursor-pointer"
          >
            Or Dinar
          </button>
        </h1>

        {/* ✅ Desktop Menu - hidden on mobile */}
        <div className="hidden md:flex space-x-6">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-gray-800 hover:text-black transition cursor-pointer"
            >
              {label}
            </button>
          ))}
        </div>

        {/* ✅ Mobile Menu Button - only visible on mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-3xl text-gray-800">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Dropdown Menu - only shows when isOpen is true */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-200 px-4 pb-4 space-y-2">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="block w-full text-left text-gray-800 hover:text-black transition"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
