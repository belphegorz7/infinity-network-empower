
import { ArrowRight, Code, Terminal, Database } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-16 matrix-bg relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 p-4 h-full">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="text-primary text-xs font-mono opacity-20">
              {Array.from({ length: 10 }).map((_, j) => (
                <div key={j} className="mb-2">
                  {Math.random().toString(36).substring(2, 8)}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div className="flex justify-center space-x-4 mb-8">
            <Code className="w-8 h-8 text-primary animate-fade-up" />
            <Terminal className="w-8 h-8 text-primary animate-fade-up" style={{ animationDelay: "0.1s" }} />
            <Database className="w-8 h-8 text-primary animate-fade-up" style={{ animationDelay: "0.2s" }} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-primary-dark animate-fade-up">
            Transformando ideias em
            <span className="text-primary"> realidade digital</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Há 5 anos entregando soluções em desenvolvimento de software e manutenção de redes
            com excelência e o melhor custo-benefício do mercado.
          </p>
          <div className="mt-10 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="#contato"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors duration-300"
            >
              Fale Conosco
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
