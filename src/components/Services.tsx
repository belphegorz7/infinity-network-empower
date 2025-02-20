
import { Code, Network, Cloud, Lock } from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <div className="p-6 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300 animate-fade-up">
    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-primary" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Desenvolvimento de Software",
      description: "Criamos soluções personalizadas que impulsionam seu negócio com as mais recentes tecnologias.",
    },
    {
      icon: Network,
      title: "Manutenção de Redes",
      description: "Garantimos a estabilidade e segurança da sua infraestrutura de rede com suporte 24/7.",
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "Maximize a eficiência com nossas soluções de computação em nuvem escaláveis.",
    },
    {
      icon: Lock,
      title: "Segurança Digital",
      description: "Proteja seus dados e sistemas com nossas soluções avançadas de segurança.",
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark">
            Nossos Serviços
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Soluções completas para suas necessidades tecnológicas
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
