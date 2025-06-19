
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              CONHEÇA A MAVINIC CONSULTORIA
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Somos um projeto inovador especializado na criação de sites, e-commerces, 
              landing pages e blogs profissionais. Utilizamos as melhores ferramentas 
              do mercado como WordPress, Elementor, WooCommerce e Crocoblock para 
              entregar soluções digitais que realmente convertem e geram resultados 
              para o seu negócio.
            </p>

            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Solicitar orçamento
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8 shadow-2xl">
              <img 
                src={`https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                alt="Profissional em ambiente de escritório"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
