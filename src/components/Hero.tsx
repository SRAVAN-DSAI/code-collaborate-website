
import { ArrowRight, Github, Linkedin, Mail, Download, Sparkles, Code2, Database, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div id="hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 text-white">
          {/* Enhanced Status Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-purple-500/20 backdrop-blur-sm border border-emerald-400/40 rounded-full text-emerald-300 text-sm font-semibold shadow-lg">
            <Sparkles className="w-5 h-5 mr-3 animate-pulse" />
            Available for Data Science Opportunities
          </div>

          <div className="space-y-8">
            <h1 className="text-7xl lg:text-8xl font-black leading-tight tracking-tight">
              Hello, I'm{' '}
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Kodari Sravan
              </span>
            </h1>
            
            <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-6 text-2xl lg:text-3xl font-bold text-gray-200">
              <div className="flex items-center space-x-3">
                <Brain className="w-10 h-10 text-emerald-400" />
                <span>Data Scientist</span>
              </div>
              <span className="text-emerald-400 text-4xl hidden lg:block">&</span>
              <div className="flex items-center space-x-3">
                <Code2 className="w-10 h-10 text-purple-400" />
                <span>ML Engineer</span>
              </div>
            </div>
            
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed font-medium">
              Transforming complex datasets into actionable insights through advanced machine learning, 
              deep learning, and statistical modeling. I build intelligent systems that drive innovation 
              and create measurable business impact with cutting-edge AI solutions.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-emerald-500 to-purple-500 hover:from-emerald-600 hover:to-purple-600 text-white border-0 rounded-xl hover:shadow-2xl hover:shadow-emerald-500/25 hover:scale-105 transition-all duration-300 text-lg px-10 py-5 font-semibold"
            >
              <a href="#projects" className="flex items-center">
                Explore My Work
                <ArrowRight className="ml-3 h-6 w-6" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 rounded-xl transition-all duration-300 text-lg px-10 py-5 hover:scale-105 font-semibold"
              asChild
            >
              <a href="https://drive.google.com/file/d/1nDaoEC5m45RBwLVrEk94YiN77cd4PDgV/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <Download className="mr-3 h-6 w-6" />
                Download CV
              </a>
            </Button>
          </div>

          <div className="flex space-x-6 pt-6">
            <Button variant="ghost" size="sm" className="p-4 hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-110" asChild>
              <a href="https://github.com/sravan-dsai" target="_blank" rel="noopener noreferrer">
                <Github className="h-8 w-8 text-gray-300 hover:text-emerald-400 transition-colors" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="p-4 hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-110" asChild>
              <a href="https://www.linkedin.com/in/sravan-kodari" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-8 w-8 text-gray-300 hover:text-emerald-400 transition-colors" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="p-4 hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-110" asChild>
              <a href="#contact">
                <Mail className="h-8 w-8 text-gray-300 hover:text-emerald-400 transition-colors" />
              </a>
            </Button>
          </div>
        </div>

        <div className="relative">
          {/* Enhanced Profile Image Container */}
          <div className="relative w-96 h-96 mx-auto">
            {/* Animated Background Rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400/30 to-purple-500/30 animate-spin-slow"></div>
            <div className="absolute inset-4 rounded-full bg-gradient-to-r from-purple-500/30 to-emerald-400/30 animate-spin-slow-reverse"></div>
            
            {/* Profile Image */}
            <img 
              src="https://raw.githubusercontent.com/SRAVAN-DSAI/app/main/profile.JPG" 
              alt="Kodari Sravan - Data Scientist & ML Engineer"
              className="absolute inset-8 w-80 h-80 object-cover rounded-full shadow-2xl border-4 border-emerald-400/40 z-10"
            />
            
            {/* Enhanced Floating Tech Icons */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-3 rounded-full text-sm font-bold transform rotate-12 shadow-2xl z-20">
              Python • ML • AI
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-bold transform -rotate-12 shadow-2xl z-20">
              Deep Learning
            </div>
            
            {/* Enhanced Data Visualization Elements */}
            <div className="absolute top-1/4 -left-10 w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl opacity-90 animate-pulse z-10 flex items-center justify-center">
              <Database className="w-8 h-8 text-white" />
            </div>
            <div className="absolute bottom-1/4 -right-10 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-90 animate-bounce z-10 flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-gray-400 text-sm mb-3 font-medium">Explore More</div>
        <div className="w-8 h-12 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-2 h-4 bg-gradient-to-b from-emerald-400 to-purple-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
