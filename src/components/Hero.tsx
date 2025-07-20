import { ArrowRight, Github, Linkedin, Mail, Download, Database, BarChart3, Server, GitBranch, Cpu, Cloud, Workflow } from 'lucide-react';
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
    <div id="hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Clean Background Elements - No Overlap */}
      <div className="absolute inset-0 opacity-3 pointer-events-none">
        {/* Subtle data flow lines */}
        <div className="absolute top-1/4 left-0 w-full h-px data-flow-line hidden lg:block"></div>
        <div className="absolute top-3/4 left-0 w-full h-px data-flow-line hidden lg:block" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Simplified Pipeline Nodes - Better Positioned */}
      <div className="absolute top-8 left-8 w-8 h-8 pipeline-node animate-node-glow hidden lg:block">
        <Database className="w-4 h-4 text-white m-2" />
      </div>
      <div className="absolute top-8 right-8 w-8 h-8 pipeline-node animate-node-glow hidden lg:block" style={{ animationDelay: '1s' }}>
        <BarChart3 className="w-4 h-4 text-white m-2" />
      </div>
      <div className="absolute bottom-8 left-8 w-8 h-8 pipeline-node animate-node-glow hidden lg:block" style={{ animationDelay: '2s' }}>
        <Cpu className="w-4 h-4 text-white m-2" />
      </div>
      <div className="absolute bottom-8 right-8 w-8 h-8 pipeline-node animate-node-glow hidden lg:block" style={{ animationDelay: '0.5s' }}>
        <Cloud className="w-4 h-4 text-white m-2" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[600px]">
        <div className="space-y-6 lg:space-y-8 relative order-2 lg:order-1">
          <div className="space-y-4 lg:space-y-6 relative">
            <div className="space-y-3 lg:space-y-4">
              <div className="flex items-center space-x-3 text-primary font-medium">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-primary rounded-full animate-deployment-pulse"></div>
                  <div className="w-2 h-2 bg-data-flow rounded-full animate-deployment-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-2 h-2 bg-ml-primary rounded-full animate-deployment-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
                <span className="text-xs sm:text-sm tracking-wider uppercase font-semibold">Data Science Portfolio</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-foreground mb-1 sm:mb-2">Hello, I'm</span>
                <div className="relative inline-block">
                  <span className="relative block data-gradient animate-node-glow font-extrabold">
                    Kodari Sravan
                  </span>
                </div>
              </h1>
            </div>
            
            <div className="text-lg sm:text-xl lg:text-2xl text-muted-foreground font-medium min-h-[3rem] mt-4 lg:mt-6">
              <span className="border-r-2 border-primary pr-1 animate-pulse">
                {typedText}
              </span>
            </div>
            
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed mt-4 lg:mt-6">
              End-to-end data scientist specializing in the complete ML pipeline. From 
              <span className="text-data-flow font-semibold"> data engineering</span> and 
              <span className="text-ml-primary font-semibold"> model development</span> to 
              <span className="text-pipeline font-semibold"> MLOps</span> and 
              <span className="text-deployment font-semibold"> production deployment</span>.
            </p>

            {/* Professional Pipeline Stages */}
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-4">
              <div className="tech-glass px-3 sm:px-4 py-2 rounded-xl flex items-center space-x-2">
                <Database className="w-3 sm:w-4 h-3 sm:h-4 text-data-flow flex-shrink-0" />
                <span className="text-xs sm:text-sm text-foreground font-medium">Data Engineering</span>
              </div>
              <div className="tech-glass px-3 sm:px-4 py-2 rounded-xl flex items-center space-x-2">
                <BarChart3 className="w-3 sm:w-4 h-3 sm:h-4 text-ml-primary flex-shrink-0" />
                <span className="text-xs sm:text-sm text-foreground font-medium">ML Development</span>
              </div>
              <div className="tech-glass px-3 sm:px-4 py-2 rounded-xl flex items-center space-x-2">
                <Server className="w-3 sm:w-4 h-3 sm:h-4 text-pipeline flex-shrink-0" />
                <span className="text-xs sm:text-sm text-foreground font-medium">MLOps</span>
              </div>
              <div className="tech-glass px-3 sm:px-4 py-2 rounded-xl flex items-center space-x-2 animate-deployment-pulse">
                <Cloud className="w-3 sm:w-4 h-3 sm:h-4 text-deployment flex-shrink-0" />
                <span className="text-xs sm:text-sm text-foreground font-medium">Deployment</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-data-flow hover:from-primary-dark hover:to-data-flow text-primary-foreground border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 data-card w-full sm:w-auto"
            >
              <a href="#projects" className="flex items-center justify-center">
                View Data Science Projects
                <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-border hover:border-primary hover:bg-accent transition-all duration-300 data-card w-full sm:w-auto"
              asChild
            >
              <a href="https://drive.google.com/file/d/1nDaoEC5m45RBwLVrEk94YiN77cd4PDgV/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <Download className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                Technical Resume
              </a>
            </Button>
          </div>

          <div className="flex justify-center sm:justify-start space-x-4 sm:space-x-6">
            <Button variant="ghost" size="sm" className="p-2 sm:p-3 hover:bg-accent rounded-xl transition-all duration-300 hover:scale-110 data-card" asChild>
              <a href="https://github.com/sravan-dsai" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 sm:h-6 w-5 sm:w-6 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="p-2 sm:p-3 hover:bg-accent rounded-xl transition-all duration-300 hover:scale-110 data-card" asChild>
              <a href="https://www.linkedin.com/in/sravan-kodari" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 sm:h-6 w-5 sm:w-6 text-muted-foreground hover:text-data-flow transition-colors" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="p-2 sm:p-3 hover:bg-accent rounded-xl transition-all duration-300 hover:scale-110 data-card" asChild>
              <a href="#contact">
                <Mail className="h-5 sm:h-6 w-5 sm:w-6 text-muted-foreground hover:text-ml-primary transition-colors" />
              </a>
            </Button>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
          <div className="relative">
            {/* Main profile image container - Mobile Friendly */}
            <div className="relative w-64 sm:w-72 lg:w-80 h-64 sm:h-72 lg:h-80 mx-auto">
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-data-flow/10 rounded-full animate-node-glow"></div>
              
              {/* Data pipeline circles - Only visible on larger screens */}
              <div className="absolute -inset-4 sm:-inset-6 lg:-inset-8 hidden sm:block">
                <div className="absolute top-0 left-1/2 w-2 sm:w-3 h-2 sm:h-3 pipeline-node animate-deployment-pulse">
                  <Database className="w-1 sm:w-1.5 h-1 sm:h-1.5 text-white m-0.5 sm:m-0.75" />
                </div>
                <div className="absolute top-1/4 right-0 w-2 sm:w-3 h-2 sm:h-3 pipeline-node animate-deployment-pulse" style={{ animationDelay: '0.5s' }}>
                  <BarChart3 className="w-1 sm:w-1.5 h-1 sm:h-1.5 text-white m-0.5 sm:m-0.75" />
                </div>
                <div className="absolute bottom-1/4 right-0 w-2 sm:w-3 h-2 sm:h-3 pipeline-node animate-deployment-pulse" style={{ animationDelay: '1s' }}>
                  <Cpu className="w-1 sm:w-1.5 h-1 sm:h-1.5 text-white m-0.5 sm:m-0.75" />
                </div>
                <div className="absolute bottom-0 left-1/2 w-2 sm:w-3 h-2 sm:h-3 pipeline-node animate-deployment-pulse" style={{ animationDelay: '1.5s' }}>
                  <Cloud className="w-1 sm:w-1.5 h-1 sm:h-1.5 text-white m-0.5 sm:m-0.75" />
                </div>
                <div className="absolute bottom-1/4 left-0 w-2 sm:w-3 h-2 sm:h-3 pipeline-node animate-deployment-pulse" style={{ animationDelay: '2s' }}>
                  <Server className="w-1 sm:w-1.5 h-1 sm:h-1.5 text-white m-0.5 sm:m-0.75" />
                </div>
                <div className="absolute top-1/4 left-0 w-2 sm:w-3 h-2 sm:h-3 pipeline-node animate-deployment-pulse" style={{ animationDelay: '2.5s' }}>
                  <Workflow className="w-1 sm:w-1.5 h-1 sm:h-1.5 text-white m-0.5 sm:m-0.75" />
                </div>
              </div>

              <img 
                src="https://raw.githubusercontent.com/SRAVAN-DSAI/app/main/profile.JPG" 
                alt="Kodari Sravan - Data Scientist & ML Engineer"
                className="w-full h-full object-cover rounded-full shadow-2xl relative z-10 border-2 sm:border-4 border-card"
              />
            </div>
            
            {/* Professional status badge - Mobile responsive */}
            <div className="absolute -top-4 sm:-top-6 -right-2 sm:-right-4 tech-glass px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transform rotate-6 sm:rotate-12 animate-deployment-pulse">
              <span className="flex items-center space-x-1 sm:space-x-2">
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-deployment rounded-full animate-pulse"></div>
                <span className="text-foreground whitespace-nowrap">Ready for ML!</span>
              </span>
            </div>
            
            {/* Tech specialization badges - Mobile responsive */}
            <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-1 sm:gap-2 max-w-xs sm:max-w-none">
              <div className="tech-glass px-2 sm:px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                <Database className="w-2 sm:w-3 h-2 sm:h-3 text-data-flow flex-shrink-0" />
                <span className="text-foreground">Data Eng</span>
              </div>
              <div className="tech-glass px-2 sm:px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                <BarChart3 className="w-2 sm:w-3 h-2 sm:h-3 text-ml-primary flex-shrink-0" />
                <span className="text-foreground">ML</span>
              </div>
              <div className="tech-glass px-2 sm:px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                <Cloud className="w-2 sm:w-3 h-2 sm:h-3 text-deployment flex-shrink-0" />
                <span className="text-foreground">Deploy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
