
import { FileCode2, Server, Globe, Database, X } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

interface Project {
  icon: any;
  title: string;
  description: string;
  tech: string[];
  longDescription?: string;
  features?: string[];
  challenges?: string[];
}

const PortfolioCard = ({ 
  project, 
  onClick 
}: { 
  project: Project; 
  onClick: () => void;
}) => (
  <div 
    className="bg-white/50 backdrop-blur-sm rounded-lg border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer" 
    onClick={onClick}
  >
    <div className="p-6">
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <project.icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="px-3 py-1 bg-primary/5 text-primary rounded-full text-sm">
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const ProjectDialog = ({ 
  project, 
  isOpen, 
  onClose 
}: { 
  project: Project | null; 
  isOpen: boolean; 
  onClose: () => void;
}) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <project.icon className="h-6 w-6 text-primary" />
            </div>
            <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
          </div>
        </DialogHeader>
        <div className="mt-6 space-y-6">
          <div>
            <h4 className="text-lg font-semibold mb-2">Descrição</h4>
            <p className="text-gray-600">{project.longDescription || project.description}</p>
          </div>
          {project.features && (
            <div>
              <h4 className="text-lg font-semibold mb-2">Funcionalidades</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
          {project.challenges && (
            <div>
              <h4 className="text-lg font-semibold mb-2">Desafios Superados</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {project.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>
          )}
          <div>
            <h4 className="text-lg font-semibold mb-2">Tecnologias Utilizadas</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="px-3 py-1 bg-primary/5 text-primary rounded-full text-sm">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      icon: Globe,
      title: "E-commerce Responsivo",
      description: "Desenvolvimento de plataforma completa de e-commerce com dashboard administrativo.",
      tech: ["React", "Node.js", "MongoDB"],
      longDescription: "Plataforma completa de e-commerce desenvolvida com foco em performance e experiência do usuário. Inclui dashboard administrativo para gestão de produtos, pedidos e clientes.",
      features: [
        "Sistema de autenticação e autorização",
        "Gestão de produtos e categorias",
        "Carrinho de compras em tempo real",
        "Painel administrativo completo",
        "Integração com gateway de pagamento"
      ],
      challenges: [
        "Otimização de performance com grande volume de dados",
        "Implementação de cache distribuído",
        "Desenvolvimento de sistema de busca avançado"
      ]
    },
    {
      icon: Server,
      title: "Sistema de Gestão",
      description: "Sistema integrado para gestão empresarial com múltiplos módulos.",
      tech: ["Angular", "Java", "PostgreSQL"],
      longDescription: "Sistema ERP modular desenvolvido para atender às necessidades específicas de empresas de médio porte, com foco em escalabilidade e facilidade de uso.",
      features: [
        "Gestão financeira integrada",
        "Controle de estoque em tempo real",
        "Relatórios personalizados",
        "Módulo de RH completo",
        "Dashboard analítico"
      ],
      challenges: [
        "Integração com sistemas legados",
        "Migração de dados complexa",
        "Implementação de múltiplos níveis de acesso"
      ]
    },
    {
      icon: FileCode2,
      title: "Aplicativo Mobile",
      description: "App multiplataforma para delivery com geolocalização.",
      tech: ["React Native", "Firebase", "Google Maps"],
      longDescription: "Aplicativo móvel multiplataforma para serviço de delivery, com recursos avançados de geolocalização e tracking em tempo real.",
      features: [
        "Rastreamento em tempo real",
        "Sistema de avaliação",
        "Chat integrado",
        "Notificações push",
        "Cálculo automático de rotas"
      ],
      challenges: [
        "Otimização do consumo de bateria",
        "Sincronização offline-first",
        "Precisão da localização em áreas densas"
      ]
    },
    {
      icon: Database,
      title: "Infraestrutura Cloud",
      description: "Migração e otimização de infraestrutura para ambiente cloud.",
      tech: ["AWS", "Docker", "Kubernetes"],
      longDescription: "Projeto de migração e otimização de infraestrutura legada para ambiente cloud, com foco em alta disponibilidade e escalabilidade.",
      features: [
        "Auto-scaling configurado",
        "Balanceamento de carga",
        "Backup automatizado",
        "Monitoramento 24/7",
        "Disaster recovery"
      ],
      challenges: [
        "Migração sem downtime",
        "Otimização de custos",
        "Implementação de segurança em camadas"
      ]
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <AspectRatio ratio={16/9}>
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                alt="Desenvolvimento em equipe"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </AspectRatio>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <AspectRatio ratio={16/9}>
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                alt="Setup moderno"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </AspectRatio>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <PortfolioCard
              key={project.title}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>
      <ProjectDialog
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Portfolio;
