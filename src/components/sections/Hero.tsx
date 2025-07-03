import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { AuroraBackground } from "../ui/aurora-background";
import { Button } from "../ui/button";
import { personalInfo } from "../../data/portfolio";
import { scrollToSection } from "../../lib/utils";
import { Hero3DScene, Hero3DSceneFallback, StaticHeroFallback } from "../ui/hero-3d-scene";
import { Suspense, lazy, useState, useEffect } from "react";

// Lazy load the 3D scene for better performance
const LazyHero3DScene = lazy(() => 
  import("../ui/hero-3d-scene").then((module) => ({ default: module.Hero3DScene }))
);

// Check for WebGL support
function checkWebGLSupport() {
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && 
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch (e) {
    return false;
  }
}

export function Hero() {
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    setHasWebGL(checkWebGLSupport());
  }, []);

  return (
    <AuroraBackground id="home">
      <div className="relative z-10 min-h-screen flex items-center justify-center safe-container py-8 lg:py-16 hero-landscape-safe overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          {/* Split Screen Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center min-h-[calc(100vh-8rem)] lg:min-h-[calc(100vh-6rem)]">
            
            {/* Left Side - Interactive 3D Scene */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex justify-center lg:justify-start order-1 lg:order-1 px-4 lg:px-0"
            >
              <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[500px] xl:h-[550px]">
                {hasWebGL ? (
                  <Suspense fallback={<Hero3DSceneFallback />}>
                    <LazyHero3DScene />
                  </Suspense>
                ) : (
                  <StaticHeroFallback />
                )}
                
                {/* Floating Tech Labels - Positioned around the 3D scene */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl lg:rounded-2xl px-2 py-1 lg:px-4 lg:py-2 shadow-lg border border-white/20"
                >
                  <span className="text-xs lg:text-sm font-semibold text-gray-700 dark:text-gray-300">AI Researcher</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl lg:rounded-2xl px-2 py-1 lg:px-4 lg:py-2 shadow-lg border border-white/20"
                >
                  <span className="text-xs lg:text-sm font-semibold text-gray-700 dark:text-gray-300">Full Stack Developer</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left order-2 lg:order-2 px-2 lg:px-0"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black dark:text-white mb-4 lg:mb-6 leading-tight text-responsive"
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block sm:block lg:inline">
                  {personalInfo.name}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-3 lg:mb-4 text-responsive"
              >
                {personalInfo.title}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base sm:text-lg text-gray-500 dark:text-gray-400 mb-6 lg:mb-8 max-w-xl lg:max-w-none leading-relaxed text-responsive"
              >
                {personalInfo.summary}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-3 lg:gap-4 mb-6 lg:mb-8 justify-center lg:justify-start"
              >
                <Button
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 lg:px-8 py-2 lg:py-3 text-base lg:text-lg"
                >
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection("projects")}
                  className="border-gray-300 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-6 lg:px-8 py-2 lg:py-3 text-base lg:text-lg"
                >
                  View My Work
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open('/Krish_Sanghvi_resume.pdf', '_blank')}
                  className="border-gray-300 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-6 lg:px-8 py-2 lg:py-3 text-base lg:text-lg flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Resume
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="flex gap-4 lg:gap-6 justify-center lg:justify-start"
              >
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 lg:p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors hover:scale-110 transform duration-200"
                >
                  <Github className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 lg:p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors hover:scale-110 transform duration-200"
                >
                  <Linkedin className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2 lg:p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors hover:scale-110 transform duration-200"
                >
                  <Mail className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700 dark:text-gray-300" />
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex justify-center mt-8 lg:mt-12"
          >
            <motion.button
              onClick={() => scrollToSection("about")}
              className="p-2 rounded-full hover:bg-white/10 transition-colors animate-bounce"
            >
              <ArrowDown className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600 dark:text-gray-400" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </AuroraBackground>
  );
}