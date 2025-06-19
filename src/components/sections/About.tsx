import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import { education, skills } from "../../data/portfolio";

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="safe-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-responsive">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-responsive">
            Learn more about my background, education, and technical skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 lg:p-8 shadow-lg w-full"
          >
            <div className="flex items-center mb-6">
              <GraduationCap className="w-8 h-8 text-blue-600 mr-3 flex-shrink-0" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-responsive">
                Education
              </h3>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-medium text-gray-900 dark:text-white text-responsive">
                {education.institution}
              </h4>
              <p className="text-lg text-gray-700 dark:text-gray-300 text-responsive">
                {education.degree}
              </p>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1 flex-shrink-0" />
                  <span className="text-responsive">{education.graduationDate}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium text-responsive">GPA: {education.gpa}</span>
                </div>
              </div>

              <div className="mt-6">
                <h5 className="font-medium text-gray-900 dark:text-white mb-3 text-responsive">
                  Relevant Coursework:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full break-words"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 lg:p-8 shadow-lg w-full"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-responsive">
              Technical Skills
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-3 text-responsive">
                  Programming Languages
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full break-words"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-3 text-responsive">
                  Frameworks & Libraries
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full break-words"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-3 text-responsive">
                  Tools & Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full break-words"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 