import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { number: '01.', name: 'About', href: '#about' },
    { number: '02.', name: 'Projects', href: '#projects' },
    { number: '03.', name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="relative text-emerald-400 font-mono text-2xl font-bold hover:scale-110 transition-transform group"
        >
          CP
          <span className="absolute left-1/2 -translate-x-1/2 top-8 opacity-0 group-hover:opacity-100 text-xs text-slate-400 transition-all duration-300">
            Chiranjibi Paikaray
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-slate-300 hover:text-emerald-400 transition-colors font-mono text-sm"
            >
              <span className="text-emerald-400">{item.number}</span> {item.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-emerald-400 text-emerald-400 rounded font-mono text-sm hover:bg-emerald-400/10 hover:shadow-[0_0_10px_#34d399] transition-all duration-300"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-emerald-400"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-slate-900/95 backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-300 hover:text-emerald-400 transition-colors font-mono text-lg"
              >
                <span className="text-emerald-400">{item.number}</span> {item.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-emerald-400 text-emerald-400 rounded font-mono text-sm hover:bg-emerald-400/10 hover:shadow-[0_0_10px_#34d399] transition-all duration-300"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
