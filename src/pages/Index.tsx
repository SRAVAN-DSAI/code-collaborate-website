
import { Github, Linkedin, Mail, Menu, X, ExternalLink } from 'lucide-react';
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

  // Custom X (Twitter) Icon Component
  const XIcon = ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative overflow-x-hidden">
      {/* Enhanced Data Science Background */}
      <div className="absolute inset-0 opacity-15">
        {/* Dynamic Data Visualization Pattern */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="data-viz" width="150" height="150" patternUnits="userSpaceOnUse">
              {/* Data Nodes */}
              <circle cx="30" cy="30" r="3" fill="currentColor" className="text-emerald-400">
                <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="120" cy="60" r="4" fill="currentColor" className="text-blue-400">
                <animate attributeName="opacity" values="1;0.4;1" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="75" cy="120" r="3.5" fill="currentColor" className="text-purple-400">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" />
              </circle>
              
              {/* Data Connections */}
              <line x1="30" y1="30" x2="120" y2="60" stroke="currentColor" strokeWidth="1" className="text-emerald-400" opacity="0.4">
                <animate attributeName="opacity" values="0.2;0.6;0.2" dur="4s" repeatCount="indefinite" />
              </line>
              <line x1="120" y1="60" x2="75" y2="120" stroke="currentColor" strokeWidth="1" className="text-blue-400" opacity="0.4">
                <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3s" repeatCount="indefinite" />
              </line>
              <line x1="75" y1="120" x2="30" y2="30" stroke="currentColor" strokeWidth="1" className="text-purple-400" opacity="0.4">
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3.5s" repeatCount="indefinite" />
              </line>
              
              {/* Mini Charts */}
              <rect x="10" y="100" width="2" height="15" fill="currentColor" className="text-cyan-400" opacity="0.6" />
              <rect x="15" y="95" width="2" height="20" fill="currentColor" className="text-cyan-400" opacity="0.7" />
              <rect x="20" y="105" width="2" height="10" fill="currentColor" className="text-cyan-400" opacity="0.5" />
              
              <rect x="100" y="10" width="15" height="2" fill="currentColor" className="text-pink-400" opacity="0.6" />
              <rect x="95" y="15" width="20" height="2" fill="currentColor" className="text-pink-400" opacity="0.7" />
              <rect x="105" y="20" width="10" height="2" fill="currentColor" className="text-pink-400" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#data-viz)" />
        </svg>
      </div>

      {/* Floating Data Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute text-xs font-mono opacity-30 ${
              i % 3 === 0 ? 'text-emerald-400' : i % 3 === 1 ? 'text-blue-400' : 'text-purple-400'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-${i % 4} ${4 + Math.random() * 3}s ease-in-out infinite`
            }}
          >
            {['📊', '📈', '🤖', '⚡', '🔬', '💡', '🎯', '🚀'][i % 8]}
          </div>
        ))}
      </div>

      {/* Data Science Keywords Overlay */}
      <div className="absolute inset-0 opacity-10 overflow-hidden pointer-events-none font-mono">
        <div className="absolute top-20 left-10 text-emerald-300 text-lg font-bold transform rotate-12 space-y-3">
          <div className="animate-pulse">Machine Learning</div>
          <div className="animate-pulse delay-1000">Deep Learning</div>
          <div className="animate-pulse delay-2000">Neural Networks</div>
        </div>
        <div className="absolute top-1/3 right-20 text-blue-300 text-lg font-bold transform -rotate-12 space-y-3">
          <div className="animate-pulse delay-500">Data Analytics</div>
          <div className="animate-pulse delay-1500">Big Data</div>
          <div className="animate-pulse delay-2500">AI Solutions</div>
        </div>
        <div className="absolute bottom-1/3 left-1/3 text-purple-300 text-lg font-bold transform rotate-6 space-y-3">
          <div className="animate-pulse delay-300">Predictive Models</div>
          <div className="animate-pulse delay-1300">Statistical Analysis</div>
          <div className="animate-pulse delay-2300">Data Visualization</div>
        </div>
        <div className="absolute top-1/2 left-16 text-cyan-300 text-lg font-bold transform -rotate-6 space-y-3">
          <div className="animate-pulse delay-700">Python • TensorFlow</div>
          <div className="animate-pulse delay-1700">Scikit-learn • Pandas</div>
          <div className="animate-pulse delay-2700">MLOps • Cloud AI</div>
        </div>
      </div>

      {/* Subtle Code Snippets */}
      <div className="absolute inset-0 opacity-8 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-32 text-emerald-400 text-sm font-mono animate-pulse">
          <div className="space-y-1">
            <div>model.fit(X_train, y_train)</div>
            <div>accuracy = model.score(X_test, y_test)</div>
            <div>print(f"Accuracy: {accuracy:.2f}")</div>
          </div>
        </div>
        <div className="absolute bottom-40 left-40 text-blue-400 text-sm font-mono animate-pulse delay-1000">
          <div className="space-y-1">
            <div>df = pd.read_csv('data.csv')</div>
            <div>df.describe()</div>
            <div>plt.plot(df['predictions'])</div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Navigation with Better Typography */}
      <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-3xl z-50 border-b border-white/20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Mobile Hamburger Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                className="p-2 hover:bg-white/20 rounded-xl transition-all duration-300 text-white"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>

            {/* Enhanced Logo with Better Typography */}
            <div className="text-4xl font-black bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent md:order-first order-last tracking-tight">
              KS
              <span className="text-sm ml-2 text-emerald-400 font-medium">Data Scientist</span>
            </div>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-200 hover:text-emerald-400 transition-all duration-300 relative group px-6 py-3 rounded-xl hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-white/20 font-medium"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-purple-400 transition-all duration-300 group-hover:w-8"></span>
                </a>
              ))}
            </div>

            {/* Enhanced Desktop Social Links */}
            <div className="hidden md:flex items-center space-x-3">
              <Button variant="ghost" size="sm" className="p-3 hover:bg-white/20 rounded-xl transition-all duration-300 text-gray-200 hover:text-emerald-400" asChild>
                <a href="https://www.linkedin.com/in/sravan-kodari" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="p-3 hover:bg-white/20 rounded-xl transition-all duration-300 text-gray-200 hover:text-emerald-400" asChild>
                <a href="https://github.com/sravan-dsai" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-purple-500 text-white border-0 rounded-xl hover:shadow-2xl hover:shadow-emerald-500/25 hover:scale-105 transition-all duration-300 font-medium" 
                asChild
              >
                <a href="https://drive.google.com/file/d/1nDaoEC5m45RBwLVrEk94YiN77cd4PDgV/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Resume
                </a>
              </Button>
            </div>

            <div className="md:hidden w-10"></div>
          </div>

          {/* Enhanced Mobile Menu */}
          <div className={`md:hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen 
              ? 'max-h-screen opacity-100 pb-6' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
            <div className="bg-black/40 backdrop-blur-xl rounded-2xl mx-2 mb-4 shadow-2xl border border-white/20 overflow-hidden">
              <div className="flex flex-col py-4">
                {navItems.map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="text-gray-200 hover:text-emerald-400 transition-all duration-300 px-6 py-4 hover:bg-white/10 relative group font-medium"
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: isMobileMenuOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
                    }}
                  >
                    <span>{item.label}</span>
                    <div className="absolute left-6 bottom-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-purple-400 transition-all duration-300 group-hover:w-8"></div>
                  </a>
                ))}
                
                {/* Mobile Social Links */}
                <div className="flex items-center justify-center space-x-4 pt-6 mt-4 border-t border-white/20">
                  <Button variant="ghost" size="sm" className="p-3 hover:bg-white/20 rounded-xl transition-all duration-300 text-gray-200 hover:text-emerald-400" asChild>
                    <a href="https://www.linkedin.com/in/sravan-kodari" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-6 w-6" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" className="p-3 hover:bg-white/20 rounded-xl transition-all duration-300 text-gray-200 hover:text-emerald-400" asChild>
                    <a href="https://github.com/sravan-dsai" target="_blank" rel="noopener noreferrer">
                      <Github className="h-6 w-6" />
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-purple-500 text-white border-0 rounded-xl hover:shadow-lg transition-all duration-300 font-medium" 
                    asChild
                  >
                    <a href="https://drive.google.com/file/d/1nDaoEC5m45RBwLVrEk94YiN77cd4PDgV/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Resume
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 relative">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-purple-900/30 backdrop-blur-sm"></div>
        <div className="relative">
          <About />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-purple-950/70 to-slate-950/90"></div>
        <div className="relative">
          <Skills />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-l from-emerald-900/20 to-purple-900/30"></div>
        <div className="relative">
          <Projects />
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-slate-950/60 to-emerald-950/30"></div>
        <div className="relative">
          <Education />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-emerald-950 via-purple-950 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative">
          <Contact />
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-slate-950 via-black to-slate-950 text-white py-16 relative overflow-hidden border-t border-white/20">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/20 to-purple-950/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center md:text-left space-y-4">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">Kodari Sravan</h3>
              <p className="text-gray-200 text-xl font-medium">Data Scientist & ML Engineer</p>
              <p className="text-gray-400 text-sm leading-relaxed">Transforming data into intelligent solutions through advanced machine learning and deep learning techniques</p>
            </div>
            <div className="text-center md:text-left space-y-4">
              <h4 className="font-bold text-xl text-white mb-6">Quick Links</h4>
              <div className="space-y-3">
                {navItems.slice(1).map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block text-gray-300 hover:text-emerald-400 hover:translate-x-2 transition-all duration-300 py-1 font-medium"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="text-center md:text-left space-y-4">
              <h4 className="font-bold text-xl text-white mb-6">Connect</h4>
              <div className="flex justify-center md:justify-start space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-emerald-400 hover:bg-white/20 p-3 rounded-xl transition-all duration-300 hover:scale-110" asChild>
                  <a href="https://www.linkedin.com/in/sravan-kodari" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-emerald-400 hover:bg-white/20 p-3 rounded-xl transition-all duration-300 hover:scale-110" asChild>
                  <a href="https://github.com/sravan-dsai" target="_blank" rel="noopener noreferrer">
                    <Github className="h-6 w-6" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-emerald-400 hover:bg-white/20 p-3 rounded-xl transition-all duration-300 hover:scale-110" asChild>
                  <a href="https://x.com/sravankodari1" target="_blank" rel="noopener noreferrer">
                    <XIcon className="h-6 w-6" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-emerald-400 hover:bg-white/20 p-3 rounded-xl transition-all duration-300 hover:scale-110" asChild>
                  <a href="mailto:sravankodari4@gmail.com">
                    <Mail className="h-6 w-6" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700/50 mt-12 pt-8 text-center">
            <p className="text-gray-400 font-medium">&copy; 2025 Kodari Sravan. Built with passion for data science and innovation.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float-0 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-180deg); }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(90deg); }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-35px) rotate(-90deg); }
        }
      `}</style>
    </div>
  );
};

export default Index;
