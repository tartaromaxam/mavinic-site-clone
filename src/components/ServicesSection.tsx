
import React from 'react';
import { FileText, ShoppingBag, Globe, Monitor } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <FileText className="w-12 h-12 text-indigo-600" />,
      title: "Páginas de destino",
      description: "Design focado em conversão e geração de leads qualificados para seu negócio."
    },
    {
      icon: <ShoppingBag className="w-12 h-12 text-indigo-600" />,
      title: "Lojas Virtuais",
      description: "Plataforma completa para interação e vendas online com seus clientes."
    },
    {
      icon: <Globe className="w-12 h-12 text-indigo-600" />,
      title: "Portais/Blog",
      description: "Sites com diversos serviços e conteúdo para engajar sua audiência."
    },
    {
      icon: <Monitor className="w-12 h-12 text-indigo-600" />,
      title: "Sites Institucionais",
      description: "Presença digital profissional para fortalecer a marca da sua empresa."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
