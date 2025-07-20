import { ArrowRight, Github, Linkedin, Mail, Download, Sparkles, Star, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Data Scientist & ML Engineer";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 animate-float">
        <Code2 className="w-8 h-8 text-blue-500/30" />
      </div>
      <div className="absolute top-20 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <Sparkles className="w-6 h-6 text-purple-500/30" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <Star className="w-5 h-5 text-cyan-500/30" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 relative">
          <div className="space-y-6 relative">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-blue-600 font-medium">
                <span className="w-8 h-px bg-gradient-to-r from-blue-600 to-purple-600"></span>
                <span className="text-sm tracking-wider uppercase">Welcome to my portfolio</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-gray-900 mb-2">Hello, I'm</span>
                <div className="relative inline-block">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 rounded-2xl blur-lg opacity-60"></div>
                  <span className="relative block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-glow">
                    Kodari Sravan
                  </span>
                </div>
              </h1>
            </div>
            
            <div className="text-xl lg:text-2xl text-gray-600 font-medium min-h-[3rem] mt-6">
              <span className="border-r-2 border-blue-600 pr-1 animate-pulse">
                {typedText}
              </span>
            </div>
            
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed mt-6">
              Passionate about transforming complex data into 
              <span className="text-blue-600 font-semibold"> actionable insights</span>. 
              I specialize in machine learning, deep learning, and data visualization, building 
              <span className="text-purple-600 font-semibold"> intelligent solutions</span> that drive 
              <span className="text-cyan-600 font-semibold"> business innovation</span>.
            </p>

            {/* Achievement highlights */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-2 bg-blue-50 px-3 py-2 rounded-full">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-blue-700 font-medium">10+ Projects</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-50 px-3 py-2 rounded-full">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-purple-700 font-medium">Fresher</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-50 px-3 py-2 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-700 font-medium">Available Now</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <a href="#projects" className="flex items-center">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-gray-300 hover:border-blue-600 hover:bg-blue-50 transition-all duration-300"
              asChild
            >
              <a href="https://drive.google.com/file/d/1nDaoEC5m45RBwLVrEk94YiN77cd4PDgV/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Resume
              </a>
            </Button>
          </div>

          <div className="flex space-x-6">
            <Button variant="ghost" size="sm" className="p-3 hover:bg-blue-50 rounded-xl transition-all duration-300 hover:scale-110" asChild>
              <a href="https://github.com/sravan-dsai" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6 text-gray-600 hover:text-gray-900 transition-colors" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="p-3 hover:bg-blue-50 rounded-xl transition-all duration-300 hover:scale-110" asChild>
              <a href="https://www.linkedin.com/in/sravan-kodari" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6 text-gray-600 hover:text-blue-600 transition-colors" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="p-3 hover:bg-blue-50 rounded-xl transition-all duration-300 hover:scale-110" asChild>
              <a href="#contact">
                <Mail className="h-6 w-6 text-gray-600 hover:text-purple-600 transition-colors" />
              </a>
            </Button>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* Main profile image container */}
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
              <img 
                src="https://raw.githubusercontent.com/SRAVAN-DSAI/app/main/profile.JPG" 
                alt="Kodari Sravan"
                className="w-full h-full object-cover rounded-full shadow-2xl relative z-10 border-4 border-white"
              />
              {/* Floating elements around the image */}
{/*               <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-80 animate-bounce"></div>
              <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-70 animate-pulse"></div> */}
{/*               <div className="absolute top-1/2 -right-12 w-8 h-8 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-60 animate-ping"></div> */}
            </div>
            
            {/* Status badge */}
            <div className="absolute -top-6 -right-4 bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold transform rotate-12 shadow-lg animate-bounce">
              Available for opportunities!
            </div>
            
            {/* Tech stack floating badges */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">Python</div>
              <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">ML</div>
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">AI</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
