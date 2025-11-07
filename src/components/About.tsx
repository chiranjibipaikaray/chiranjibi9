import { Code, Database, Globe } from 'lucide-react';

const About = () => {
  const skills = [
    'Azure Cloud',
    'Azure DevOps',
    'Terraform (IaC)',
    'Kubernetes',
    'Docker',
    'Git',
    'GitHub Actions',
    'Azure Pipelines',
    'Argo CD',
    'GitOps',
    'Helm Chart',
    'Prometheus',
    'Grafana',
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 md:px-20 lg:px-32 py-20 bg-slate-900"
    >
      <div className="max-w-4xl">
        <div className="flex items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 font-mono whitespace-nowrap">
            <span className="text-emerald-400 mr-2">01.</span>About Me
          </h2>
          <div className="h-px bg-slate-700 ml-8 flex-1"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              Hello! I'm{' '}
              <span className="text-slate-300 font-medium">
                Chiranjibi Paikaray
              </span>
              , a passionate{' '}
              <span className="text-emerald-400">DevOps Engineer</span> who
              enjoys designing, automating, and optimizing cloud environments.
              I focus on building scalable and reliable systems through modern
              DevOps practices.
            </p>

            <p>
              Over the years, I’ve worked on several projects including{' '}
              <span className="text-slate-300 font-medium">Elearn</span> and{' '}
              <span className="text-slate-300 font-medium">StreamFlix</span>,
              where I focused on CI/CD automation, infrastructure as code, and
              containerized deployments on Azure Cloud. I’ve also developed my
              own personal portfolio website to showcase my work and experiments
              with modern frontend technologies.
            </p>

            <p>
              My interests revolve around cloud-native technologies, automation,
              and continuous improvement to make software delivery faster and
              more reliable.
            </p>

            <p className="text-slate-300 font-medium">
              Here are some tools and technologies I work with frequently:
            </p>
            <ul className="grid grid-cols-2 gap-2 text-sm font-mono">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-emerald-400 mr-2">▹</span>
                  {skill}
                </li>
              ))}
            </ul>

            <div className="pt-6 text-sm text-slate-500">
              <p>
                🌐 Portfolio:{' '}
                <a
                  href="https://chiranjibipaikaray.site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline"
                >
                  chiranjibipaikaray.site
                </a>
              </p>
              <p>
                🔗 LinkedIn:{' '}
                <a
                  href="https://www.linkedin.com/in/chiranjibi-paikaray-748018315"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline"
                >
                  linkedin.com/in/chiranjibi-paikaray
                </a>
              </p>
              <p>
                📧 Email:{' '}
                <a
                  href="mailto:chiranjibipaikaray3@gmail.com"
                  className="text-emerald-400 hover:underline"
                >
                  chiranjibipaikaray3@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 border border-slate-700 rounded bg-slate-800/30 hover:border-emerald-400/50 transition-colors duration-300">
              <Code className="w-8 h-8 text-emerald-400 mb-3" />
              <h3 className="text-slate-200 font-semibold mb-2">
                Automation & CI/CD
              </h3>
              <p className="text-slate-400 text-sm">
                Building efficient CI/CD pipelines using GitHub Actions, Azure
                Pipelines, and Argo CD to streamline application delivery.
              </p>
            </div>

            <div className="p-6 border border-slate-700 rounded bg-slate-800/30 hover:border-emerald-400/50 transition-colors duration-300">
              <Database className="w-8 h-8 text-emerald-400 mb-3" />
              <h3 className="text-slate-200 font-semibold mb-2">
                Cloud & Infrastructure
              </h3>
              <p className="text-slate-400 text-sm">
                Automating infrastructure provisioning and management using
                Terraform, Helm, and Azure Cloud with a focus on scalability and
                performance.
              </p>
            </div>

            <div className="p-6 border border-slate-700 rounded bg-slate-800/30 hover:border-emerald-400/50 transition-colors duration-300">
              <Globe className="w-8 h-8 text-emerald-400 mb-3" />
              <h3 className="text-slate-200 font-semibold mb-2">
                Monitoring & Reliability
              </h3>
              <p className="text-slate-400 text-sm">
                Implementing observability, logging, and alerting systems using
                Prometheus and Grafana to maintain uptime and stability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
