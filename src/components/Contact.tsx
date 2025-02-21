
import { Mail, Phone, MapPin, Instagram, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, useState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Aqui você pode adicionar a lógica de envio do formulário
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
          <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-up">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-4 px-6 rounded-md hover:bg-primary-dark transition-colors duration-300 font-medium"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-up" style={{ animationDelay: "0.2s" }}>
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
                    <h3 className="text-lg font-medium text-gray-900">Telefone</h3>
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
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <h3 className="text-lg font-medium text-gray-900 mb-6">Redes Sociais</h3>
              <div className="flex justify-center space-x-8">
                <a
                  href="https://instagram.com/infinitynetwork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors p-2"
                >
                  <Instagram className="h-8 w-8" />
                </a>
                <a
                  href="mailto:contato@infinitynetwork.com"
                  className="text-gray-600 hover:text-primary transition-colors p-2"
                >
                  <Mail className="h-8 w-8" />
                </a>
                <a
                  href="https://wa.me/5511912345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors p-2"
                >
                  <Send className="h-8 w-8" />
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
