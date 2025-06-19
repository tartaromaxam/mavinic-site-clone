
import React from 'react';
import { Facebook, Instagram, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const institutionalLinks = [
    { label: 'Lar', href: '#home' },
    { label: 'Sobre nós', href: '#about' },
    { label: 'Blogue', href: '#blog' },
    { label: 'Nosso Portfólio', href: '#portfolio' },
    { label: 'Contato', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Social */}
          <div className="space-y-6">
            <div className="text-2xl font-bold">
              CONSULTORIA MAVINIC
            </div>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-pink-600 rounded-full hover:bg-pink-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/5544988160797" className="p-3 bg-green-600 rounded-full hover:bg-green-700 transition-colors">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Institutional Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Institucional</h3>
            <ul className="space-y-2">
              {institutionalLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">(44) 98816-0797</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">contato@portfolio.mavinic.com.br</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            Direitos autorais © 2023 | CNPJ: 00.000.000/0001-00 | 
            <a href="#" className="hover:text-white transition-colors ml-2">
              Política de Privacidade
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
