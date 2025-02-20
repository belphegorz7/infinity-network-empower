
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
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
