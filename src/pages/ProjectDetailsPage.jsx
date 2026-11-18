import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { projectsData } from '../data/projectsData';

function ProjectDetailsPage() {
  const pathParts = window.location.pathname.split('/');
  const id = Number(pathParts[pathParts.length - 1]);
  const project = projectsData.find((item) => item.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-[#070b19] transition-colors duration-300">
        <Navbar />
        <main className="pt-36 pb-16 container-custom">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Project not found</h1>
          <a href="/#projects" className="text-blue-600 dark:text-blue-400 font-semibold text-lg hover:underline">
            ← Back to Projects
          </a>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070b19] transition-colors duration-300">
      <Navbar />
      <main className="pt-36 pb-20 container-custom">
        <a href="/#projects" className="inline-block mb-8 text-blue-600 dark:text-blue-400 font-bold text-lg hover:underline">
          ← Back to Projects
        </a>

        <article className="rounded-3xl overflow-hidden border-2 border-slate-200 dark:border-blue-900/40 bg-white dark:bg-[#0d1633] shadow-2xl">
          <div className="h-72 md:h-96 bg-gradient-to-br from-blue-900 to-blue-600 relative overflow-hidden">
            {project.image ? (
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            ) : null}
          </div>

          <div className="p-8 md:p-12">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-sm px-4 py-1.5 rounded-full bg-blue-600 text-white font-bold uppercase tracking-wider">
                {project.category}
              </span>
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-sm px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-semibold border border-blue-200 dark:border-blue-800"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-oswald font-extrabold text-slate-900 dark:text-white mb-4 uppercase tracking-tight">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-slate-600 dark:text-slate-300 font-sans">
              {project.description}
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

export default ProjectDetailsPage;
