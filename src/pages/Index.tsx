
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-x-hidden">
      {/* Enhanced Animated Background with Neural Network Pattern */}
      <div className="absolute inset-0 opacity-10">
        {/* Neural Network Connections */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="neural-grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="currentColor" className="text-cyan-400">
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="80" cy="40" r="2" fill="currentColor" className="text-blue-400">
                <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="50" cy="80" r="2" fill="currentColor" className="text-purple-400">
                <animate attributeName="opacity" values="0.5;1;0.5" dur="4s" repeatCount="indefinite" />
              </circle>
              <line x1="20" y1="20" x2="80" y2="40" stroke="currentColor" strokeWidth="0.5" className="text-cyan-400" opacity="0.3" />
              <line x1="80" y1="40" x2="50" y2="80" stroke="currentColor" strokeWidth="0.5" className="text-blue-400" opacity="0.3" />
              <line x1="50" y1="80" x2="20" y2="20" stroke="currentColor" strokeWidth="0.5" className="text-purple-400" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-grid)" />
        </svg>
      </div>

      {/* Floating Data Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-${i % 3} ${3 + Math.random() * 4}s ease-in-out infinite`
            }}
          />
        ))}
      </div>

      {/* Matrix-style Code Rain */}
      <div className="absolute inset-0 opacity-5 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-20 text-green-400 text-xs font-mono animate-pulse">
          {`import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from tensorflow import keras

# Deep Learning Model
model = keras.Sequential([
    keras.layers.Dense(512, activation='relu'),
    keras.layers.Dropout(0.3),
    keras.layers.Dense(256, activation='relu'),
    keras.layers.Dense(10, activation='softmax')
])

# Data Preprocessing
X_train, X_test, y_train, y_test = train_test_split(
    features, target, test_size=0.2, random_state=42
)`}
        </div>
        <div className="absolute top-1/3 right-20 text-blue-400 text-xs font-mono animate-pulse delay-1000">
          {`# Neural Network Architecture
def build_neural_network():
    model = tf.keras.Sequential([
        tf.keras.layers.Input(shape=(784,)),
        tf.keras.layers.Dense(128, activation='relu'),
        tf.keras.layers.BatchNormalization(),
        tf.keras.layers.Dropout(0.2),
        tf.keras.layers.Dense(64, activation='relu'),
        tf.keras.layers.Dense(10, activation='softmax')
    ])
    return model

# Training Loop
for epoch in range(epochs):
    loss = model.fit(X_train, y_train)
    accuracy = model.evaluate(X_test, y_test)`}
        </div>
        <div className="absolute bottom-1/3 left-32 text-purple-400 text-xs font-mono animate-pulse delay-2000">
          {`# Advanced Analytics
df_analysis = df.groupby('category').agg({
    'revenue': ['mean', 'sum', 'std'],
    'customers': 'count',
    'profit_margin': lambda x: x.quantile(0.75)
}).round(2)

# Statistical Modeling
from scipy import stats
correlation_matrix = df.corr()
p_values = stats.pearsonr(X, y)

# Machine Learning Pipeline
pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('selector', SelectKBest(k=10)),
    ('classifier', RandomForestClassifier(n_estimators=100))
])`}
        </div>
      </div>

      {/* Mathematical Formulas Overlay */}
      <div className="absolute inset-0 opacity-8 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 text-cyan-300 text-lg font-serif">
          <div className="transform rotate-12 space-y-2">
            <div>∇f(x) = Σᵢ ∂f/∂xᵢ êᵢ</div>
            <div>σ(z) = 1/(1 + e⁻ᶻ)</div>
            <div>L = -Σᵢ yᵢlog(ŷᵢ)</div>
          </div>
        </div>
        <div className="absolute top-1/2 right-16 text-blue-300 text-lg font-serif">
          <div className="transform -rotate-12 space-y-2">
            <div>P(A|B) = P(B|A)×P(A)/P(B)</div>
            <div>R² = 1 - SSᵣₑₛ/SSₜₒₜ</div>
            <div>F₁ = 2×(P×R)/(P+R)</div>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-1/3 text-purple-300 text-lg font-serif">
          <div className="transform rotate-6 space-y-2">
            <div>MSE = (1/n)Σᵢ(yᵢ - ŷᵢ)²</div>
            <div>χ² = Σᵢ(Oᵢ - Eᵢ)²/Eᵢ</div>
            <div>log(p/(1-p)) = β₀ + β₁x</div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Glassmorphism Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-2xl z-50 border-b border-white/10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Mobile Hamburger Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                className="p-2 hover:bg-white/10 rounded-xl transition-all duration-300 text-white"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>

            {/* Enhanced Logo */}
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent md:order-first order-last">
              KS
              <span className="text-xs ml-1 text-cyan-400">Data Scientist</span>
            </div>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden md:flex space-x-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group px-6 py-3 rounded-xl hover:bg-white/5 backdrop-blur-sm border border-transparent hover:border-white/10"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-8"></span>
                </a>
              ))}
            </div>

            {/* Enhanced Desktop Social Links */}
            <div className="hidden md:flex items-center space-x-3">
              <Button variant="ghost" size="sm" className="p-3 hover:bg-white/10 rounded-xl transition-all duration-300 text-gray-300 hover:text-cyan-400" asChild>
                <a href="https://www.linkedin.com/in/sravan-kodari" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="p-3 hover:bg-white/10 rounded-xl transition-all duration-300 text-gray-300 hover:text-cyan-400" asChild>
                <a href="https://github.com/sravan-dsai" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-0 rounded-xl hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300" 
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
            <div className="bg-black/30 backdrop-blur-xl rounded-2xl mx-2 mb-4 shadow-2xl border border-white/10 overflow-hidden">
              <div className="flex flex-col py-4">
                {navItems.map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="text-gray-300 hover:text-cyan-400 transition-all duration-300 px-6 py-4 hover:bg-white/5 relative group"
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: isMobileMenuOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
                    }}
                  >
                    <span className="font-medium">{item.label}</span>
                    <div className="absolute left-6 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-8"></div>
                  </a>
                ))}
                
                {/* Mobile Social Links */}
                <div className="flex items-center justify-center space-x-4 pt-6 mt-4 border-t border-white/10">
                  <Button variant="ghost" size="sm" className="p-3 hover:bg-white/10 rounded-xl transition-all duration-300 text-gray-300 hover:text-cyan-400" asChild>
                    <a href="https://www.linkedin.com/in/sravan-kodari" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-6 w-6" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" className="p-3 hover:bg-white/10 rounded-xl transition-all duration-300 text-gray-300 hover:text-cyan-400" asChild>
                    <a href="https://github.com/sravan-dsai" target="_blank" rel="noopener noreferrer">
                      <Github className="h-6 w-6" />
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-0 rounded-xl hover:shadow-lg transition-all duration-300" 
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

      {/* About Section with Enhanced Glassmorphism */}
      <section id="about" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-purple-900/20 backdrop-blur-sm"></div>
        <div className="relative">
          <About />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-purple-900/50 to-slate-900/80"></div>
        <div className="relative">
          <Skills />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-l from-cyan-900/20 to-purple-900/20"></div>
        <div className="relative">
          <Projects />
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900/50 to-cyan-900/20"></div>
        <div className="relative">
          <Education />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-cyan-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative">
          <Contact />
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-black to-slate-900 text-white py-16 relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-purple-900/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center md:text-left space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Kodari Sravan</h3>
              <p className="text-gray-300 text-lg">Data Scientist & ML Engineer</p>
              <p className="text-gray-400 text-sm leading-relaxed">Transforming data into intelligent solutions through advanced machine learning and deep learning techniques</p>
            </div>
            <div className="text-center md:text-left space-y-4">
              <h4 className="font-semibold text-lg text-white mb-6">Quick Links</h4>
              <div className="space-y-3">
                {navItems.slice(1).map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block text-gray-300 hover:text-cyan-400 hover:translate-x-2 transition-all duration-300 py-1"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="text-center md:text-left space-y-4">
              <h4 className="font-semibold text-lg text-white mb-6">Connect</h4>
              <div className="flex justify-center md:justify-start space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-cyan-400 hover:bg-white/10 p-3 rounded-xl transition-all duration-300 hover:scale-110" asChild>
                  <a href="https://www.linkedin.com/in/sravan-kodari" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-cyan-400 hover:bg-white/10 p-3 rounded-xl transition-all duration-300 hover:scale-110" asChild>
                  <a href="https://github.com/sravan-dsai" target="_blank" rel="noopener noreferrer">
                    <Github className="h-6 w-6" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-cyan-400 hover:bg-white/10 p-3 rounded-xl transition-all duration-300 hover:scale-110" asChild>
                  <a href="https://x.com/sravankodari1" target="_blank" rel="noopener noreferrer">
                    <XIcon className="h-6 w-6" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-cyan-400 hover:bg-white/10 p-3 rounded-xl transition-all duration-300 hover:scale-110" asChild>
                  <a href="mailto:sravankodari4@gmail.com">
                    <Mail className="h-6 w-6" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700/50 mt-12 pt-8 text-center">
            <p className="text-gray-400">&copy; 2025 Kodari Sravan. Built with passion for data science and innovation.</p>
          </div>
        </div>
      </footer>

      <style>
        {`
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
        `}
      </style>
    </div>
  );
};

export default Index;
