const Navbar = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
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
        <h1 className="text-2xl font-bold text-gray-900"><button
          onClick={() => scrollTo('hero')}
          className="text-gray-800 hover:text-black transition cursor-pointer"
        >
          Or Dinar
        </button></h1>
        <div className="space-x-6">
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
      </div>
    </nav>
  );
};

export default Navbar;
