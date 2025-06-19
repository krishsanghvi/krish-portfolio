import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { personalInfo } from "../../data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 overflow-hidden">
      <div className="safe-container">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div className="min-w-0">
            <h3 className="text-xl font-semibold mb-4 text-responsive">{personalInfo.name}</h3>
            <p className="text-gray-400 mb-4 text-responsive">
              {personalInfo.title}
            </p>
            <p className="text-gray-400 text-sm text-responsive">
              Building innovative solutions with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="min-w-0">
            <h3 className="text-xl font-semibold mb-4 text-responsive">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors text-responsive">About</a>
              <a href="#experience" className="block text-gray-400 hover:text-white transition-colors text-responsive">Experience</a>
              <a href="#projects" className="block text-gray-400 hover:text-white transition-colors text-responsive">Projects</a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors text-responsive">Contact</a>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="min-w-0">
            <h3 className="text-xl font-semibold mb-4 text-responsive">Connect</h3>
            <div className="space-y-3 mb-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-start text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-responsive break-words">{personalInfo.email}</span>
              </a>
              <p className="flex items-start text-gray-400">
                <span className="mr-2 flex-shrink-0">📍</span>
                <span className="text-responsive">{personalInfo.location}</span>
              </p>
            </div>
            
            <div className="flex gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex flex-col sm:flex-row items-center justify-center gap-1 text-responsive">
            <span className="flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by {personalInfo.name}
            </span>
            <span>© {currentYear}</span>
          </p>
        </div>
      </div>
    </footer>
  );
} 