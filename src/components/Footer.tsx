const Footer = () => {
  return (
    <footer className="py-8 px-6 text-center border-t border-slate-800 bg-slate-900/30">
      <div className="text-slate-400 text-sm font-mono">
        <p>
          Designed & Built by{' '}
          <a
            href="https://chiranjibipaikaray.site"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:underline hover:text-emerald-300 transition-colors"
          >
            Chiranjibi Paikaray
          </a>
        </p>
        <p className="mt-2 text-xs text-slate-500">
          Inspired by Brittany Chiang&apos;s v4 design
        </p>
      </div>
    </footer>
  );
};

export default Footer;
