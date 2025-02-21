
import { Code, Network, Cloud, Lock } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ServiceCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <div className="p-6 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300 group">
    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
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
    <section id="servicos" className="py-20 bg-gray-50 code-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark">
            Nossos Serviços
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Soluções completas para suas necessidades tecnológicas
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <AspectRatio ratio={16/9}>
              <img
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
                alt="Desenvolvimento de software"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </AspectRatio>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <AspectRatio ratio={16/9}>
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
                alt="Setup moderno"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </AspectRatio>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
