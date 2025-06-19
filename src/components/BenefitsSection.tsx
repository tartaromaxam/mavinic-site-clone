
import React from 'react';
import { Eye, TrendingUp, Search, Shield, Award, Users, Clock, Target, Zap, Globe, Heart, Star, Smartphone, BarChart } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    { icon: <Eye className="w-8 h-8" />, text: "Traz visibilidade" },
    { icon: <TrendingUp className="w-8 h-8" />, text: "Aumenta as vendas" },
    { icon: <Search className="w-8 h-8" />, text: "Pesquisas do Google" },
    { icon: <Shield className="w-8 h-8" />, text: "Segurança" },
    { icon: <Award className="w-8 h-8" />, text: "Sucesso da empresa" },
    { icon: <Users className="w-8 h-8" />, text: "Mais clientes" },
    { icon: <Clock className="w-8 h-8" />, text: "Disponível 24h" },
    { icon: <Target className="w-8 h-8" />, text: "Foco no resultado" },
    { icon: <Zap className="w-8 h-8" />, text: "Performance" },
    { icon: <Globe className="w-8 h-8" />, text: "Alcance global" },
    { icon: <Heart className="w-8 h-8" />, text: "Satisfação do cliente" },
    { icon: <Star className="w-8 h-8" />, text: "Qualidade premium" },
    { icon: <Smartphone className="w-8 h-8" />, text: "Mobile friendly" },
    { icon: <BarChart className="w-8 h-8" />, text: "Análise de dados" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            COMO UM SITE AJUDA SEU NEGÓCIO?
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-6 rounded-lg text-center hover:bg-indigo-50 transition-colors duration-300 hover:scale-105 transform transition-transform"
            >
              <div className="text-gray-800 mb-3 flex justify-center">
                {benefit.icon}
              </div>
              <p className="text-sm font-medium text-gray-700">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
