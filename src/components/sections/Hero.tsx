import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { AuroraBackground } from "../ui/aurora-background";
import { Button } from "../ui/button";
import { personalInfo } from "../../data/portfolio";
import { scrollToSection } from "../../lib/utils";

export function Hero() {
  return (
    <AuroraBackground id="home">
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl mx-auto w-full">
          {/* Split Screen Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black dark:text-white mb-6"
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block lg:inline">
                  {personalInfo.name}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-4"
              >
                {personalInfo.title}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-xl lg:max-w-none leading-relaxed"
              >
                {personalInfo.summary}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start"
              >
                <Button
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                >
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection("projects")}
                  className="border-gray-300 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3 text-lg"
                >
                  View My Work
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open('/Krish_Sanghvi_resume.pdf', '_blank')}
                  className="border-gray-300 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3 text-lg flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Resume
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="flex gap-6 justify-center lg:justify-start"
              >
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors hover:scale-110 transform duration-200"
                >
                  <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors hover:scale-110 transform duration-200"
                >
                  <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors hover:scale-110 transform duration-200"
                >
                  <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right Side - Creative Profile Picture */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex justify-center lg:justify-end order-1 lg:order-2"
            >
              {/* Floating Elements Background */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Floating Circles */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 2 }}
                  className="absolute bottom-20 right-10 w-16 h-16 bg-purple-500/20 rounded-full blur-lg"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1.8 }}
                  className="absolute top-1/2 left-0 w-12 h-12 bg-pink-500/20 rounded-full blur-lg"
                />
              </div>

              {/* Main Profile Container */}
              <div className="relative">
                {/* Outer Glow Ring */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-30 scale-110"
                />
                
                {/* Animated Border Ring */}
                <motion.div
                  initial={{ opacity: 0, rotate: 0 }}
                  animate={{ opacity: 1, rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full p-1"
                >
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-900" />
                </motion.div>

                {/* Profile Picture */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 200 }}
                  className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] rounded-full p-2 z-10"
                >
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden shadow-2xl">
                    <img
                      src="/profile.jpg"
                      alt="Krish Sanghvi"
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div className="hidden w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center text-8xl font-bold text-blue-600 dark:text-blue-400 rounded-full">
                      KS
                    </div>
                  </div>
                </motion.div>

                {/* Floating Tech Icons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="absolute -top-4 -right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg border border-white/20"
                >
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">AI Researcher</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="absolute -bottom-4 -left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg border border-white/20"
                >
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Full Stack Developer</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={() => scrollToSection("about")}
              className="p-2 rounded-full hover:bg-white/10 transition-colors animate-bounce"
            >
              <ArrowDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </AuroraBackground>
  );
} 