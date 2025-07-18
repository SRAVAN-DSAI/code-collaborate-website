
import { ArrowRight, Github, Linkedin, Mail, Download, Sparkles, Code2, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div id="hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 text-white">
          {/* Status Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full text-cyan-300 text-sm font-medium">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            Available for Data Science Opportunities
          </div>

          <div className="space-y-6">
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              Hello, I'm{' '}
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Kodari Sravan
              </span>
            </h1>
            
            <div className="flex items-center space-x-4 text-2xl lg:text-3xl font-semibold text-gray-300">
              <Code2 className="w-8 h-8 text-cyan-400" />
              <span>Data Scientist</span>
              <span className="text-cyan-400">&</span>
              <Database className="w-8 h-8 text-purple-400" />
              <span>ML Engineer</span>
            </div>
            
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Transforming complex datasets into actionable insights through advanced machine learning, 
              deep learning, and statistical modeling. I build intelligent systems that drive innovation 
              and create measurable business impact.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 rounded-xl hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300 text-lg px-8 py-4"
            >
              <a href="#projects" className="flex items-center">
                Explore My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 rounded-xl transition-all duration-300 text-lg px-8 py-4 hover:scale-105"
              asChild
            >
              <a href="https://drive.google.com/file/d/1nDaoEC5m45RBwLVrEk94YiN77cd4PDgV/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
          </div>

          <div className="flex space-x-6 pt-4">
            <Button variant="ghost" size="sm" className="p-3 hover:bg-white/10 rounded-xl transition-all duration-300 hover:scale-110" asChild>
              <a href="https://github.com/sravan-dsai" target="_blank" rel="noopener noreferrer">
                <Github className="h-7 w-7 text-gray-300 hover:text-cyan-400 transition-colors" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="p-3 hover:bg-white/10 rounded-xl transition-all duration-300 hover:scale-110" asChild>
              <a href="https://www.linkedin.com/in/sravan-kodari" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-7 w-7 text-gray-300 hover:text-cyan-400 transition-colors" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="p-3 hover:bg-white/10 rounded-xl transition-all duration-300 hover:scale-110" asChild>
              <a href="#contact">
                <Mail className="h-7 w-7 text-gray-300 hover:text-cyan-400 transition-colors" />
              </a>
            </Button>
          </div>
        </div>

        <div className="relative">
          {/* Enhanced Profile Image Container */}
          <div className="relative w-96 h-96 mx-auto">
            {/* Animated Background Rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-500/20 animate-spin-slow"></div>
            <div className="absolute inset-4 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-400/20 animate-spin-slow-reverse"></div>
            
            {/* Profile Image */}
            <img 
              src="https://raw.githubusercontent.com/SRAVAN-DSAI/app/main/profile.JPG" 
              alt="Kodari Sravan - Data Scientist & ML Engineer"
              className="absolute inset-8 w-80 h-80 object-cover rounded-full shadow-2xl border-4 border-cyan-400/30 z-10"
            />
            
            {/* Floating Tech Icons */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold transform rotate-12 shadow-lg z-20">
              Python • ML • AI
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold transform -rotate-12 shadow-lg z-20">
              Deep Learning
            </div>
            
            {/* Data Visualization Elements */}
            <div className="absolute top-1/4 -left-8 w-16 h-16 bg-gradient-to-r from-green-400 to-cyan-400 rounded-lg opacity-80 animate-pulse z-10"></div>
            <div className="absolute bottom-1/4 -right-8 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-80 animate-bounce z-10"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-gray-400 text-sm mb-2">Explore More</div>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
