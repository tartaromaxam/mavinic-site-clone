
import React, { useState } from 'react';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filters = ['Todos', 'Páginas de destino', 'Lojas', 'Sites Institucionais'];

  const projects = [
    { id: 1, title: 'Landing Page - Consultoria', category: 'Páginas de destino', image: 'photo-1488590528505-98d2b5aba04b' },
    { id: 2, title: 'E-commerce Fashion', category: 'Lojas', image: 'photo-1649972904349-6e44c42644a7' },
    { id: 3, title: 'Site Corporativo', category: 'Sites Institucionais', image: 'photo-1581091226825-a6a2a5aee158' },
    { id: 4, title: 'Landing Page - Tech', category: 'Páginas de destino', image: 'photo-1526374965328-7f61d4dc18c5' },
    { id: 5, title: 'Loja Virtual - Eletrônicos', category: 'Lojas', image: 'photo-1605810230434-7631ac76ec81' },
    { id: 6, title: 'Portal Institucional', category: 'Sites Institucionais', image: 'photo-1519389950473-47ba0277781c' },
  ];

  const filteredProjects = activeFilter === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            NOSSO PORTFOLIO
          </h2>
          <p className="text-xl text-gray-600">
            Confira abaixo alguns dos nossos projetos
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-indigo-50 shadow-md'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/${project.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`}
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">{project.category}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">
                  {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
