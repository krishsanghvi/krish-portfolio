import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { personalInfo } from "../../data/portfolio";
import { Button } from "../ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800 overflow-hidden">
      <div className="safe-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-responsive">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-responsive">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-responsive">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-gray-900 dark:text-white text-responsive">Email</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors break-words text-responsive"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-gray-900 dark:text-white text-responsive">Phone</p>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors text-responsive"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-gray-900 dark:text-white text-responsive">Location</p>
                    <p className="text-gray-600 dark:text-gray-400 text-responsive">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h4 className="font-medium text-gray-900 dark:text-white mb-4 text-responsive">
                  Connect with me
                </h4>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
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
              className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 lg:p-8"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-responsive">
                Let's Work Together
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-responsive">
                Recent CS graduate seeking full-time software engineering opportunities. 
                Open to discussing exciting projects and career opportunities in tech.
              </p>

              <div className="space-y-4">
                <Button
                  size="lg"
                  asChild
                  className="w-full"
                >
                  <a href={`mailto:${personalInfo.email}`}>
                    <Mail className="w-5 h-5 mr-2" />
                    <span className="text-responsive">Send me an email</span>
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