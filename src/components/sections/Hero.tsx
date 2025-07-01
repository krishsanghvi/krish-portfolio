import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { AuroraBackground } from "../ui/aurora-background";
import { Button } from "../ui/button";
import { personalInfo } from "../../data/portfolio";
import { scrollToSection } from "../../lib/utils";

export function Hero() {
  return (
    <AuroraBackground id="home">
      <div className="relative z-10 min-h-screen-safe flex items-center justify-center safe-container mobile-spacing-y hero-landscape-safe overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          {/* Split Screen Layout */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-20 items-center min-h-[calc(100vh-8rem)] lg:min-h-[calc(100vh-6rem)]">
            
            {/* Left Side - Creative Profile Picture */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex justify-center lg:justify-start order-1 lg:order-1 px-2 sm:px-4 lg:px-0"
            >
              {/* Floating Elements Background - Optimized for mobile performance */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Floating Circles - Hidden on small mobile for better performance */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  className="hidden sm:block absolute top-4 sm:top-6 lg:top-10 right-4 sm:right-6 lg:right-10 w-8 h-8 sm:w-12 sm:h-12 lg:w-20 lg:h-20 bg-blue-500/20 rounded-full blur-xl"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 2 }}
                  className="hidden sm:block absolute bottom-8 sm:bottom-12 lg:bottom-20 left-4 sm:left-6 lg:left-10 w-6 h-6 sm:w-10 sm:h-10 lg:w-16 lg:h-16 bg-purple-500/20 rounded-full blur-lg"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1.8 }}
                  className="hidden md:block absolute top-1/2 right-0 w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-pink-500/20 rounded-full blur-lg"
                />
              </div>

              {/* Main Profile Container */}
              <div className="relative max-w-full">
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

                {/* Profile Picture - Responsive sizing */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 200 }}
                  className="relative w-48 h-48 xs:w-56 xs:h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px] xl:w-[420px] xl:h-[420px] rounded-full p-2 z-10 mx-auto"
                >
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden shadow-2xl">
                    <img
                      src="/profile.jpg"
                      alt="Krish Sanghvi - AI Researcher & Full Stack Developer"
                      className="w-full h-full object-cover rounded-full img-mobile-optimized"
                      loading="eager" // Load hero image immediately
                      decoding="async"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div className="hidden w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-bold text-blue-600 dark:text-blue-400 rounded-full">
                      KS
                    </div>
                  </div>
                </motion.div>

                {/* Floating Tech Icons - Responsive positioning */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="absolute -top-1 -right-1 xs:-top-2 xs:-right-2 sm:-top-4 sm:-right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl px-2 py-1 sm:px-3 sm:py-1 lg:px-4 lg:py-2 shadow-lg border border-white/20"
                >
                  <span className="text-xs sm:text-sm lg:text-sm font-semibold text-gray-700 dark:text-gray-300">AI Researcher</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="absolute -bottom-1 -left-1 xs:-bottom-2 xs:-left-2 sm:-bottom-4 sm:-left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl px-2 py-1 sm:px-3 sm:py-1 lg:px-4 lg:py-2 shadow-lg border border-white/20"
                >
                  <span className="text-xs sm:text-sm lg:text-sm font-semibold text-gray-700 dark:text-gray-300">Full Stack Developer</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left order-2 lg:order-2 px-2 sm:px-4 lg:px-0"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-responsive-3xl sm:text-responsive-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black dark:text-white mb-3 sm:mb-4 lg:mb-6 leading-tight"
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block xs:inline sm:block lg:inline">
                  {personalInfo.name}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-responsive-lg sm:text-responsive-xl md:text-xl lg:text-2xl xl:text-3xl text-gray-600 dark:text-gray-300 mb-2 sm:mb-3 lg:mb-4"
              >
                {personalInfo.title}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-responsive sm:text-responsive-lg text-gray-500 dark:text-gray-400 mb-4 sm:mb-6 lg:mb-8 max-w-xl lg:max-w-none leading-relaxed"
              >
                {personalInfo.summary}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col xs:flex-row gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6 lg:mb-8 justify-center lg:justify-start"
              >
                <Button
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 lg:px-8 py-3 lg:py-3 text-sm sm:text-base lg:text-lg touch-target"
                >
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection("projects")}
                  className="border-gray-300 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-4 sm:px-6 lg:px-8 py-3 lg:py-3 text-sm sm:text-base lg:text-lg touch-target"
                >
                  View My Work
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open('/Krish_Sanghvi_resume.pdf', '_blank')}
                  className="border-gray-300 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-4 sm:px-6 lg:px-8 py-3 lg:py-3 text-sm sm:text-base lg:text-lg flex items-center gap-2 touch-target"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden xs:inline">Resume</span>
                  <span className="xs:hidden">CV</span>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="flex gap-3 sm:gap-4 lg:gap-6 justify-center lg:justify-start"
              >
                <Button
                  variant="ghost"
                  size="icon-lg"
                  asChild
                  className="rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors hover:scale-110 transform duration-200"
                >
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon-lg"
                  asChild
                  className="rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors hover:scale-110 transform duration-200"
                >
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon-lg"
                  asChild
                  className="rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors hover:scale-110 transform duration-200"
                >
                  <a
                    href={`mailto:${personalInfo.email}`}
                    aria-label="Send Email"
                  >
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex justify-center mt-6 sm:mt-8 lg:mt-12"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollToSection("about")}
              className="rounded-full hover:bg-white/10 transition-colors animate-bounce touch-target"
              aria-label="Scroll to About section"
            >
              <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-400" />
            </Button>
          </motion.div>
        </div>
      </div>
    </AuroraBackground>
  );
}