
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              KS
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#hero" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#education" className="text-gray-700 hover:text-blue-600 transition-colors">Education</a>
              <a href="#certifications" className="text-gray-700 hover:text-blue-600 transition-colors">Certifications</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="p-0" asChild>
                <a href="https://www.linkedin.com/in/sravan-kodari" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 text-gray-600 hover:text-gray-900" />
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://drive.google.com/file/d/1nDaoEC5m45RBwLVrEk94YiN77cd4PDgV/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20">
        <Hero />
      </section>

      {/* About Section */}
      <section className="py-20">
        <About />
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white/50">
        <Skills />
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <Projects />
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white/50">
        <Experience />
      </section>

      {/* Education Section */}
      <section className="py-20">
        <Education />
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Kodari Sravan</h3>
              <p className="text-gray-400">Data Scientist & ML Engineer</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#skills" className="block text-gray-400 hover:text-white transition-colors">Skills</a>
                <a href="#projects" className="block text-gray-400 hover:text-white transition-colors">Projects</a>
                <a href="#education" className="block text-gray-400 hover:text-white transition-colors">Education</a>
                <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-0" asChild>
                  <a href="https://www.linkedin.com/in/sravan-kodari" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-0" asChild>
                  <a href="https://github.com/sravan-dsai" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-0" asChild>
                  <a href="https://x.com/sravankodari1" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-0" asChild>
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
