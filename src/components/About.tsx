
const About = () => {
  return (
    <section id="sobre" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
              Sobre a Infinity Network
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Desde 2019, a Infinity Network tem se destacado no mercado de tecnologia,
              oferecendo soluções inovadoras em desenvolvimento de software e manutenção
              de redes com o melhor custo-benefício do setor.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Nossa missão é democratizar o acesso à tecnologia de ponta, tornando
              soluções avançadas acessíveis a empresas de todos os portes.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-10">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-primary">5+</h3>
                <p className="text-gray-600 mt-2">Anos de Experiência</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-primary">100+</h3>
                <p className="text-gray-600 mt-2">Clientes Satisfeitos</p>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Equipe Infinity Network"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
