import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-20 lg:px-32">
      <div className={`max-w-4xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="text-emerald-400 font-mono text-base md:text-lg mb-5">
          Hi, my name is
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-200 mb-2">
          Chiranjibi Paikaray
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-6">
          I build things for the web.
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mb-12 leading-relaxed">
          I'm a software engineer specializing in building scalable applications and automating cloud infrastructure with modern technologies.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-4 border-2 border-emerald-400 text-emerald-400 rounded font-mono text-sm hover:bg-emerald-400/10 transition-all duration-300"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;
