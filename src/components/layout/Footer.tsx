import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { personalInfo } from "../../data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{personalInfo.name}</h3>
            <p className="text-gray-400 mb-4">
              {personalInfo.title}
            </p>
            <p className="text-gray-400 text-sm">
              Building innovative solutions with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#experience" className="block text-gray-400 hover:text-white transition-colors">Experience</a>
              <a href="#projects" className="block text-gray-400 hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <div className="space-y-3 mb-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                {personalInfo.email}
              </a>
              <p className="flex items-center text-gray-400">
                📍 {personalInfo.location}
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
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by {personalInfo.name} © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
} 