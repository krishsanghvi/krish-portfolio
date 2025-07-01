import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "../../data/portfolio";
import { scrollToSection } from "../../lib/utils";
import { Button } from "../ui/button";
import { ThemeToggle } from "../ui/theme-toggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.replace("#", ""));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const sectionId = href.replace("#", "");
    scrollToSection(sectionId);
    setIsOpen(false);
    setActiveSection(sectionId);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isOpen && !target.closest('.mobile-menu-container')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
      // Prevent body scroll when mobile menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 safe-area-top ${
          scrolled
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-xl border-b border-gray-200/50 dark:border-gray-700/50"
            : "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200/30 dark:border-gray-700/30"
        }`}
      >
        <div className="safe-container">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white cursor-pointer touch-target"
              onClick={() => scrollToSection("home")}
            >
              Krish Sanghvi
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium touch-target px-2 py-1 ${
                    activeSection === item.href.replace("#", "") 
                      ? "text-blue-600 dark:text-blue-400" 
                      : ""
                  }`}
                >
                  {item.name}
                  {activeSection === item.href.replace("#", "") && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <ThemeToggle />
              </motion.div>
            </div>

            {/* Mobile menu button and theme toggle */}
            <div className="md:hidden flex items-center space-x-2 mobile-menu-container">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-900 dark:text-white relative z-50"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </motion.div>
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-14 sm:top-16 left-4 right-4 z-40 bg-white/98 dark:bg-gray-900/98 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 md:hidden mobile-menu-container safe-area-top"
            >
              <div className="p-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    onClick={() => handleNavClick(item.href)}
                    className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-200 touch-target ${
                      activeSection === item.href.replace("#", "")
                        ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                  >
                    <span className="text-base">{item.name}</span>
                  </motion.button>
                ))}
                
                {/* Mobile-specific additional actions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
                  className="pt-2 border-t border-gray-200 dark:border-gray-700"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => {
                      window.open('/Krish_Sanghvi_resume.pdf', '_blank');
                      setIsOpen(false);
                    }}
                    className="w-full justify-center"
                  >
                    Download Resume
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
} 