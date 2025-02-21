
import { Mail, Phone, MapPin, Instagram, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Entre em Contato
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para atender suas necessidades e transformar suas ideias em realidade
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Endereço</h3>
                  <p className="mt-2 text-gray-600">
                    Rua Example, 123<br />
                    São Paulo, SP<br />
                    CEP: 00000-000
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Telefone/WhatsApp</h3>
                  <p className="mt-2 text-gray-600">
                    <a href="tel:+551112345678" className="hover:text-primary transition-colors">
                      +55 (11) 1234-5678
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="mt-2 text-gray-600">
                    <a href="mailto:contato@infinitynetwork.com" className="hover:text-primary transition-colors">
                      contato@infinitynetwork.com
                    </a>
                  </p>
                </div>
              </div>
              <a 
                href="https://wa.me/5511912345678" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 text-white py-4 px-6 rounded-md hover:bg-green-600 transition-colors duration-300 font-medium flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Falar pelo WhatsApp
              </a>
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Redes Sociais</h3>
              <div className="space-y-6">
                <a 
                  href="https://github.com/infinity-network" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-gray-600 hover:text-primary transition-colors"
                >
                  <Github className="h-6 w-6" />
                  <span>github.com/infinity-network</span>
                </a>
                <a 
                  href="https://instagram.com/infinity.network" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-gray-600 hover:text-primary transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                  <span>@infinity.network</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
