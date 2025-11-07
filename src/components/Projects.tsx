import { ExternalLink, Github, Folder } from 'lucide-react';

const Projects = () => {
  const featuredProjects = [
    {
      title: 'Kubernetes Deployment Manager',
      description:
        'A web-based dashboard for managing Kubernetes deployments, monitoring cluster health, and automating CI/CD pipelines on Azure Kubernetes Service (AKS).',
      tech: ['React', 'TypeScript', 'Kubernetes', 'Docker', 'Azure'],
      github: '#',
      external: '#',
    },
    {
      title: 'Microservices Control Plane',
      description:
        'A container-native microservices architecture deployed on Azure, integrating CI/CD workflows, service mesh, and GitOps for seamless automation.',
      tech: ['Docker', 'Kubernetes', 'Argo CD', 'Azure DevOps', 'Terraform'],
      github: '#',
      external: '#',
    },
    {
      title: 'Real-time Monitoring Dashboard',
      description:
        'A real-time cloud monitoring system for visualizing cluster metrics and alerts using Prometheus, Grafana, and Node.js APIs.',
      tech: ['Prometheus', 'Grafana', 'Node.js', 'Express', 'React'],
      github: '#',
      external: '#',
    },
  ];

  const otherProjects = [
    {
      title: 'Infrastructure as Code Setup',
      description:
        'Automated Azure infrastructure provisioning using Terraform and Azure Pipelines for consistent multi-environment deployments.',
      tech: ['Terraform', 'Azure', 'Azure DevOps'],
    },
    {
      title: 'CI/CD Pipeline Templates',
      description:
        'Reusable CI/CD pipeline templates for containerized applications using GitHub Actions and Azure DevOps.',
      tech: ['GitHub Actions', 'Docker', 'Azure Pipelines'],
    },
    {
      title: 'Monitoring Stack',
      description:
        'Complete monitoring solution with Prometheus, Grafana, and Alertmanager for infrastructure observability.',
      tech: ['Prometheus', 'Grafana', 'Docker'],
    },
  ];

  return (
    <section id="projects" className="min-h-screen px-6 md:px-20 lg:px-32 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 font-mono whitespace-nowrap">
            <span className="text-emerald-400 mr-2">02.</span> Featured Work & Deployments
          </h2>
          <div className="h-px bg-slate-700 ml-8 flex-1"></div>
        </div>
        <p className="text-slate-400 font-mono text-sm mb-12">
          A few of the systems and automation projects I’ve engineered recently.
        </p>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <div key={index} className="relative group">
              <div className="grid md:grid-cols-12 gap-4 items-center">
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

                  {/* Stylish description box */}
                  <div className="relative bg-slate-800/40 p-6 rounded-xl border border-slate-700/50 shadow-lg backdrop-blur-md hover:border-emerald-400/40 hover:shadow-emerald-400/10 transition-all duration-500">
                    <p className="text-slate-300 leading-relaxed tracking-wide">
                      {project.description}
                    </p>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </div>

                  <ul className="flex flex-wrap gap-4 mt-4 font-mono text-sm text-slate-400">
                    {project.tech.map((tech, techIndex) => (
                      <li key={techIndex}>{tech}</li>
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

                {/* Project Thumbnail */}
                <div
                  className={`md:col-span-5 ${
                    index % 2 === 0
                      ? 'md:col-start-8'
                      : 'md:col-start-1 md:row-start-1'
                  } hidden md:block`}
                >
                  <div className="aspect-video rounded-xl border border-emerald-400/20 bg-gradient-to-br from-slate-800 to-slate-900 hover:border-emerald-400/50 hover:shadow-[0_0_20px_#34d39940] transition-all duration-700 transform hover:scale-[1.02]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="text-2xl font-bold text-slate-200 mb-12 text-center">
          Other Noteworthy Projects
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 hover:-translate-y-2 hover:border-emerald-400/50 hover:shadow-[0_0_20px_#34d39930] transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-4">
                <Folder className="w-10 h-10 text-emerald-400" />
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
                {project.tech.map((tech, techIndex) => (
                  <li key={techIndex}>{tech}</li>
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
