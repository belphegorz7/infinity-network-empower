
import { FileCode2, Server, Globe, Database } from "lucide-react";

const PortfolioCard = ({ title, description, icon: Icon, tech }: { title: string; description: string; icon: any; tech: string[] }) => (
  <div className="bg-white/50 backdrop-blur-sm rounded-lg border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group">
    <div className="p-6">
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="px-3 py-1 bg-primary/5 text-primary rounded-full text-sm">
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Portfolio = () => {
  const projects = [
    {
      icon: Globe,
      title: "E-commerce Responsivo",
      description: "Desenvolvimento de plataforma completa de e-commerce com dashboard administrativo.",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      icon: Server,
      title: "Sistema de Gestão",
      description: "Sistema integrado para gestão empresarial com múltiplos módulos.",
      tech: ["Angular", "Java", "PostgreSQL"],
    },
    {
      icon: FileCode2,
      title: "Aplicativo Mobile",
      description: "App multiplataforma para delivery com geolocalização.",
      tech: ["React Native", "Firebase", "Google Maps"],
    },
    {
      icon: Database,
      title: "Infraestrutura Cloud",
      description: "Migração e otimização de infraestrutura para ambiente cloud.",
      tech: ["AWS", "Docker", "Kubernetes"],
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50 matrix-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark">
            Nosso Portfólio
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Conheça alguns dos nossos projetos de sucesso
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <PortfolioCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
