import { motion } from "framer-motion";
import { Github, ExternalLink, Award, FileText } from "lucide-react";
import { projects } from "../../data/portfolio";
import { Button } from "../ui/button";

export function Projects() {
  return (
    <section id="projects" className="mobile-spacing-y bg-white dark:bg-gray-800 overflow-hidden">
      <div className="safe-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-responsive-3xl sm:text-responsive-4xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Featured Projects
          </h2>
          <p className="text-responsive-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my technical skills and problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-full hover:scale-105"
            >
              <div className="p-4 sm:p-5 lg:p-6">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white leading-tight flex-1 pr-2">
                    {project.title}
                  </h3>
                  {project.award && (
                    <Award className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  )}
                </div>

                <p className="text-responsive text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded break-words"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                  {project.achievements.slice(0, 2).map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 sm:mt-2 mr-2 flex-shrink-0"></span>
                      <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>

                {project.award && (
                  <div className="mb-3 sm:mb-4 p-2.5 sm:p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                    <div className="flex items-center">
                      <Award className="w-4 h-4 text-yellow-600 mr-2 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-yellow-800 dark:text-yellow-200">
                        {project.award}
                      </span>
                    </div>
                  </div>
                )}

                <div className="flex flex-col gap-2 sm:gap-3">
                  {/* Primary actions row */}
                  <div className="flex gap-2 sm:gap-3">
                    {project.links?.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="flex-1 min-w-0 touch-target"
                      >
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <Github className="w-4 h-4 mr-1.5 sm:mr-2 flex-shrink-0" />
                          <span className="truncate text-xs sm:text-sm">Code</span>
                        </a>
                      </Button>
                    )}
                    {project.links?.demo && (
                      <Button
                        size="sm"
                        asChild
                        className="flex-1 min-w-0 touch-target"
                      >
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <ExternalLink className="w-4 h-4 mr-1.5 sm:mr-2 flex-shrink-0" />
                          <span className="truncate text-xs sm:text-sm">Demo</span>
                        </a>
                      </Button>
                    )}
                  </div>
                  
                  {/* Secondary action if available */}
                  {project.links?.presentation && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="w-full touch-target"
                    >
                      <a
                        href={project.links.presentation}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <FileText className="w-4 h-4 mr-1.5 sm:mr-2 flex-shrink-0" />
                        <span className="truncate text-xs sm:text-sm">Presentation</span>
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            asChild
            className="touch-target px-6 sm:px-8"
          >
            <a
              href="https://github.com/krishsanghvi"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 