import { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiArrowRight } from 'react-icons/fi';
import { projectsData } from '../data/projectsData';

function Projects() {
	const getVisibleCount = () => {
		if (typeof window !== 'undefined') {
			if (window.innerWidth >= 1280) return 3;
			if (window.innerWidth >= 768) return 2;
		}
		return 1;
	};

	const [visibleCount, setVisibleCount] = useState(getVisibleCount());
	const [currentIndex, setCurrentIndex] = useState(0);
	const maxStart = Math.max(0, projectsData.length - visibleCount);

	useEffect(() => {
		const handleResize = () => setVisibleCount(getVisibleCount());
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const goPrev = () => setCurrentIndex((prev) => (prev <= 0 ? maxStart : prev - 1));
	const goNext = () => setCurrentIndex((prev) => (prev >= maxStart ? 0 : prev + 1));

	return (
		<section className="py-24 md:py-32 bg-white dark:bg-[#070b19] transition-colors duration-300 overflow-hidden">
			<div className="container-custom">
        {/* Title */}
        <div className="mb-20 text-center lg:text-left">
           <p className="text-blue-600 dark:text-blue-400 text-sm md:text-lg font-oswald font-bold tracking-[0.4em] mb-10 uppercase opacity-90 border-l-4 border-blue-600 pl-6">
            OUR PORTFOLIO • ስራዎቻችን
          </p>
          
          <h2 className="text-slate-900 dark:text-white text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-oswald font-extrabold uppercase leading-none tracking-tight mb-4">
            FEATURED <span className="text-blue-600 dark:text-blue-500">PROJECTS</span>
          </h2>

          <div className="flex items-center gap-4 sm:gap-8 md:gap-12">
            <div className="flex-1 h-1 bg-blue-600/30 dark:bg-blue-400/20" />
            <h3 className="text-slate-900 dark:text-white text-xl sm:text-3xl md:text-5xl lg:text-6xl font-oswald font-extrabold uppercase leading-none tracking-normal sm:tracking-[0.2em] text-center">
              WISE DIGITAL SHOWCASE
            </h3>
            <div className="flex-1 h-1 bg-blue-600/30 dark:bg-blue-400/20" />
          </div>
        </div>

				<div className="relative group/slider">
					<button
						onClick={goPrev}
						aria-label="Previous project"
						className="absolute -left-3 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all shadow-xl active:scale-95"
					>
						<FiChevronLeft className="w-8 h-8" />
					</button>

					<div className="overflow-hidden px-2">
					  <div
							className="flex transition-transform duration-700 ease-in-out"
							style={{ transform: `translateX(-${(100 / visibleCount) * currentIndex}%)` }}
						>
							{projectsData.map((project) => (
								<article
									key={project.id}
									className="px-4 h-full"
									style={{ minWidth: `${100 / visibleCount}%` }}
								>
									<a href={`/projects/${project.id}`} className="block h-full group">
										<div className="h-full bg-slate-50 dark:bg-[#0d1633] rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-blue-900/40 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col hover:-translate-y-1">
											<div className="h-64 overflow-hidden relative">
                        <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity z-10" />
												{project.image ? (
													<img
														src={project.image}
														alt={project.title}
														className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
													/>
												) : (
													<div className="w-full h-full bg-slate-900 flex items-center justify-center">
														<span className="text-white text-4xl font-oswald font-bold opacity-30 uppercase tracking-widest">Wise Digital</span>
													</div>
												)}
											</div>

											<div className="p-8 md:p-10 flex-1 flex flex-col">
												<div className="flex flex-wrap gap-2 mb-4">
													{project.technologies.slice(0, 3).map((tech) => (
														<span
															key={tech}
															className="text-xs font-oswald font-bold px-3 py-1 rounded-md border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 uppercase tracking-wider bg-blue-50 dark:bg-blue-950/60"
														>
															{tech}
														</span>
													))}
												</div>

												<h3 className="text-2xl md:text-3xl font-oswald font-extrabold text-slate-900 dark:text-white mb-3 uppercase tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
													{project.title}
												</h3>
												<p className="text-slate-600 dark:text-slate-300 text-base md:text-lg font-sans leading-relaxed flex-1">
													{project.description}
												</p>

												<div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 text-blue-600 dark:text-blue-400 font-oswald uppercase tracking-wider font-bold text-sm">
													<span>View Details</span>
													<FiArrowRight className="w-4 h-4" />
												</div>
											</div>
										</div>
									</a>
								</article>
							))}
						</div>
					</div>

					<button
						onClick={goNext}
						aria-label="Next project"
						className="absolute -right-3 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all shadow-xl active:scale-95"
					>
						<FiChevronRight className="w-8 h-8" />
					</button>
				</div>
			</div>
		</section>
	);
}

export default Projects;
