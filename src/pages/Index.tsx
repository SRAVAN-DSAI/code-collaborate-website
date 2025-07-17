
import { Github, Linkedin, Mail, Twitter, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Contact from '@/components/Contact';

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              KS
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Desktop Social Links */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="p-0" asChild>
                <a href="https://www.linkedin.com/in/sravan-kodari" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 text-gray-600 hover:text-blue-600 transition-colors" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="p-0" asChild>
                <a href="https://github.com/sravan-dsai" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 text-gray-600 hover:text-gray-900 transition-colors" />
                </a>
              </Button>
              <Button variant="outline" size="sm" className="hover:bg-blue-50 hover:border-blue-300" asChild>
                <a href="https://drive.google.com/file/d/1nDaoEC5m45RBwLVrEk94YiN77cd4PDgV/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                className="p-2"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-gray-700" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? 'max-h-96 opacity-100 pb-4' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
            <div className="flex flex-col space-y-4 pt-4 border-t border-gray-200">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300 px-2 py-1 rounded-md hover:bg-blue-50"
                >
                  {item.label}
                </a>
              ))}
              
              {/* Mobile Social Links */}
              <div className="flex items-center justify-center space-x-6 pt-4 border-t border-gray-200">
                <Button variant="ghost" size="sm" className="p-0" asChild>
                  <a href="https://www.linkedin.com/in/sravan-kodari" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-6 w-6 text-gray-600 hover:text-blue-600 transition-colors" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="p-0" asChild>
                  <a href="https://github.com/sravan-dsai" target="_blank" rel="noopener noreferrer">
                    <Github className="h-6 w-6 text-gray-600 hover:text-gray-900 transition-colors" />
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="hover:bg-blue-50 hover:border-blue-300" asChild>
                  <a href="https://drive.google.com/file/d/1nDaoEC5m45RBwLVrEk94YiN77cd4PDgV/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white/50">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <Projects />
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white/50">
        <Education />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-4">Kodari Sravan</h3>
              <p className="text-gray-400">Data Scientist & ML Engineer</p>
              <p className="text-gray-400 text-sm mt-2">Passionate about AI and Machine Learning</p>
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {navItems.slice(1).map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex justify-center md:justify-start space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-0 transition-colors duration-300" asChild>
                  <a href="https://www.linkedin.com/in/sravan-kodari" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-0 transition-colors duration-300" asChild>
                  <a href="https://github.com/sravan-dsai" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-0 transition-colors duration-300" asChild>
                  <a href="https://x.com/sravankodari1" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-0 transition-colors duration-300" asChild>
                  <a href="mailto:sravankodari4@gmail.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Kodari Sravan. Crafted with passion and precision.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
