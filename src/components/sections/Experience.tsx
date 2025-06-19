import { motion } from "framer-motion";
import { MapPin, Calendar, Briefcase, GraduationCap, Heart } from "lucide-react";
import { experiences } from "../../data/portfolio";

const getIcon = (type: string) => {
  switch (type) {
    case 'work':
      return <Briefcase className="w-5 h-5" />;
    case 'research':
      return <GraduationCap className="w-5 h-5" />;
    case 'volunteer':
      return <Heart className="w-5 h-5" />;
    default:
      return <Briefcase className="w-5 h-5" />;
  }
};

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="safe-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-responsive">
            Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-responsive">
            My professional journey and key experiences that have shaped my skills and expertise.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-blue-200 dark:bg-blue-800"></div>

            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-start mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white z-10">
                  {getIcon(experience.type)}
                </div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 lg:p-6 shadow-lg w-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="min-w-0 flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-responsive">
                          {experience.position}
                        </h3>
                        <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 text-responsive">
                          {experience.company}
                        </h4>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1 flex-shrink-0" />
                        <span className="text-responsive">{experience.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                        <span className="text-responsive">{experience.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {experience.description.map((desc, descIndex) => (
                        <li key={descIndex} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-600 dark:text-gray-400 text-sm text-responsive">
                            {desc}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {experience.technologies && experience.technologies.length > 0 && (
                      <div>
                        <h5 className="font-medium text-gray-900 dark:text-white mb-2 text-responsive">
                          Technologies Used:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded break-words"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 