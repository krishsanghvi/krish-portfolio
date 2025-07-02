import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { personalInfo } from "../../data/portfolio";
import { Button } from "../ui/button";

export function Contact() {
  return (
    <section id="contact" className="mobile-spacing-y bg-white dark:bg-gray-800 overflow-hidden">
      <div className="safe-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-responsive-3xl sm:text-responsive-4xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Get In Touch
          </h2>
          <p className="text-responsive-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8"
            >
              <h3 className="text-responsive-2xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Contact Information
              </h3>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-3 sm:mr-4 flex-shrink-0 mt-1" />
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-gray-900 dark:text-white text-responsive">Email</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors break-words text-responsive touch-target inline-block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-3 sm:mr-4 flex-shrink-0 mt-1" />
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-gray-900 dark:text-white text-responsive">Phone</p>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors text-responsive touch-target inline-block"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-3 sm:mr-4 flex-shrink-0 mt-1" />
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-gray-900 dark:text-white text-responsive">Location</p>
                    <p className="text-gray-600 dark:text-gray-400 text-responsive">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 sm:pt-6">
                <h4 className="font-medium text-gray-900 dark:text-white mb-3 sm:mb-4 text-responsive">
                  Connect with me
                </h4>
                <div className="flex gap-3 sm:gap-4">
                  <Button
                    variant="outline"
                    size="icon-lg"
                    asChild
                    className="touch-target"
                  >
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Profile"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon-lg"
                    asChild
                    className="touch-target"
                  >
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 sm:p-6 lg:p-8"
            >
              <h3 className="text-responsive-2xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Let's Work Together
              </h3>
              
              <p className="text-responsive text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
                Recent CS graduate seeking full-time software engineering opportunities. 
                Open to discussing exciting projects and career opportunities in tech.
              </p>

              <div className="space-y-3 sm:space-y-4">
                <Button
                  size="lg"
                  asChild
                  className="w-full touch-target justify-center"
                >
                  <a href={`mailto:${personalInfo.email}`}>
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    <span className="text-responsive">Send me an email</span>
                  </a>
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="w-full touch-target justify-center"
                >
                  <a href={`tel:${personalInfo.phone}`}>
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    <span className="text-responsive">Call me</span>
                  </a>
                </Button>
                
                <Button
                  variant="ghost"
                  size="lg"
                  asChild
                  className="w-full touch-target justify-center"
                >
                  <a 
                    href="/Krish_Sanghvi_resume.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-responsive">Download Resume</span>
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 