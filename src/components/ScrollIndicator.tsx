import { ExternalLink, Github, Folder } from 'lucide-react';
import { useEffect, useState } from 'react';

const Projects = () => {
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  // simple fade-in scroll effect (lightweight, error-free)
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.project-card');
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setVisibleIndexes((prev) =>
            prev.includes(index) ? prev : [...prev, index]
          );
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✨ Featured projects
  const featuredProjects = [
    {
      title: 'Azure Kubernetes Control Plane',
      description:
        'A scalable control plane for managing containerized microservices on AKS, integrated with GitOps workflows and automated deployments.',
      tech: ['AKS', 'Terraform', 'Argo CD', 'Azure DevOps', 'Docker'],
      github: '#',
      external: '#',
    },
    {
      title: 'CI/CD Pipeline Automation',
      description:
        'End-to-end CI/CD pipeline using Azure Pipelines and GitHub Actions for fully automated builds, testing, and deployment to cloud environments.',
      tech: ['Azure Pipelines', 'GitHub Actions', 'Docker', 'Helm'],
      github: '#',
      external: '#',
    },
    {
      title: 'Observability & Monitoring Stack',
      description:
        'Centralized monitoring stack built using Prometheus, Grafana, and custom exporters for real-time observability and reliability tracking.',
      tech: ['Prometheus', 'Grafana', 'Docker', 'Kubernetes'],
      github: '#',
      external: '#',
    },
  ];

  // ✨ Other projects
  const otherProjects = [
    {
      title: 'Elearn Platform Deployment',
      description:
        'Containerized CI/CD setup for an e-learning platform deployed on Azure Cloud with Terraform and Azure DevOps pipelines.',
      tech: ['Azure DevOps', 'Docker', 'Kubernetes'],
    },
    {
      title: 'StreamFlix Media Service',
      description:
        'Scalable streaming application deployed through Argo CD using multi-environment configuration and Helm charts.',
      tech: ['Argo CD', 'Helm', 'Docker', 'Kubernetes'],
    },
    {
      title: 'Infrastructure as Code Setup',
      description:
        'Automated Azure infrastructure provisioning using Terraform modules and integrated pipeline workflows for seamless deployments.',
      tech: ['Terraform', 'Azure', 'Azure Pipelines'],
    },
  ];

  return (
    <section id="projects" className="min-h-screen px-6 md:px-20 lg:px-32 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 font-mono whitespace-nowrap">
            <span className="text-emerald-400 mr-2">02.</span>Things I've Built
          </h2>
          <div className="h-px bg-slate-700 ml-8 flex-1" />
        </div>

        {/* Featured projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`project-card transition-all duration-700 ease-out ${
                visibleIndexes.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="relative group grid md:grid-cols-12 gap-4 items-center">
                <div
                  className={`md:col-span-7 ${
                    index % 2 === 0 ? '' : 'md:col-start-6'
                  } z-10`}
                >
                  <p className="text-emerald-400 font-mono text-sm mb-2">
                    Featured Project
                  </p>
                  <h3 className="text-2xl font-bold text-slate-200 mb-4 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="bg-slate-800/40 backdrop-blur-md p-6 rounded-2xl border border-slate-700 group-hover:border-emerald-400/40 transition-all shadow-lg group-hover:shadow-emerald-400/10">
                    <p className="text-slate-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <ul className="flex flex-wrap gap-4 mt-4 font-mono text-sm text-slate-400">
                    {project.tech.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                  <div className="flex gap-4 mt-4">
                    <a
                      href={project.github}
                      className="text-slate-400 hover:text-emerald-400 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.external}
                      className="text-slate-400 hover:text-emerald-400 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Image Placeholder */}
                <div
                  className={`md:col-span-5 ${
                    index % 2 === 0
                      ? 'md:col-start-8'
                      : 'md:col-start-1 md:row-start-1'
                  } hidden md:block`}
                >
                  <div className="aspect-video bg-gradient-to-br from-emerald-400/10 to-slate-800/20 rounded-2xl border border-emerald-400/20 group-hover:border-emerald-400/50 shadow-inner transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other projects */}
        <h3 className="text-2xl font-bold text-slate-200 mb-12 text-center">
          Other Noteworthy Projects
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/40 backdrop-blur-md border border-slate-700 rounded-2xl p-6 hover:-translate-y-2 hover:border-emerald-400/40 hover:shadow-emerald-400/10 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <Folder className="w-10 h-10 text-emerald-400 drop-shadow-[0_0_6px_rgba(16,185,129,0.3)]" />
                <a
                  href="#"
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
              <h4 className="text-xl font-semibold text-slate-200 mb-3">
                {project.title}
              </h4>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-3 font-mono text-xs text-slate-400">
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
