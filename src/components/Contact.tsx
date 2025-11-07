import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 md:px-20 lg:px-32 py-20"
    >
      <div className="max-w-2xl text-center">
        <p className="text-emerald-400 font-mono text-base md:text-lg mb-5">
          03. What's Next?
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-200 mb-6">
          Get In Touch
        </h2>
        <p className="text-slate-400 text-lg leading-relaxed mb-12">
          I'm currently open to new opportunities and collaborations. 
          Whether you have a project idea, a question about DevOps practices, 
          or just want to connect — feel free to reach out! 
          I’ll do my best to get back to you soon.
        </p>

        <div className="flex justify-center gap-6 mb-12">
          {/* Email */}
          <a
            href="mailto:chiranjibipaikaray3@gmail.com"
            className="text-slate-400 hover:text-emerald-400 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/chiranjibi-paikaray"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-emerald-400 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/chiranjibi-paikaray-748018315"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-emerald-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        <a
          href="mailto:chiranjibipaikaray3@gmail.com"
          className="inline-block px-8 py-4 border-2 border-emerald-400 text-emerald-400 rounded font-mono text-sm hover:bg-emerald-400/10 transition-all duration-300"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
