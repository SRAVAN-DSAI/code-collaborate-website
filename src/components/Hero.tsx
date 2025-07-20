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
    <div id="hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
      {/* Data Engineering Background Elements */}
      <div className="absolute inset-0 opacity-5">
        {/* Data flow lines */}
        <div className="absolute top-1/4 left-0 w-full h-px data-flow-line"></div>
        <div className="absolute top-2/4 left-0 w-full h-px data-flow-line" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-0 w-full h-px data-flow-line" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Pipeline Nodes */}
      <div className="absolute top-16 left-16 w-12 h-12 pipeline-node animate-node-glow">
        <Database className="w-6 h-6 text-white m-3" />
      </div>
      <div className="absolute top-32 right-24 w-10 h-10 pipeline-node animate-node-glow" style={{ animationDelay: '1s' }}>
        <BarChart3 className="w-5 h-5 text-white m-2.5" />
      </div>
      <div className="absolute bottom-40 left-32 w-8 h-8 pipeline-node animate-node-glow" style={{ animationDelay: '2s' }}>
        <Cpu className="w-4 h-4 text-white m-2" />
      </div>
      <div className="absolute bottom-24 right-16 w-10 h-10 pipeline-node animate-node-glow" style={{ animationDelay: '0.5s' }}>
        <Cloud className="w-5 h-5 text-white m-2.5" />
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute top-12 right-32 animate-data-float">
        <Server className="w-6 h-6 text-primary/20" />
      </div>
      <div className="absolute bottom-16 left-24 animate-data-float" style={{ animationDelay: '1.5s' }}>
        <GitBranch className="w-5 h-5 text-primary/20" />
      </div>
      <div className="absolute top-40 left-1/2 animate-data-float" style={{ animationDelay: '3s' }}>
        <Workflow className="w-7 h-7 text-primary/20" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 relative">
          <div className="space-y-6 relative">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-primary font-medium">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-primary rounded-full animate-deployment-pulse"></div>
                  <div className="w-2 h-2 bg-data-flow rounded-full animate-deployment-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-2 h-2 bg-ml-primary rounded-full animate-deployment-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
                <span className="text-sm tracking-wider uppercase font-semibold">Data Engineering Portfolio</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-foreground mb-2">Hello, I'm</span>
                <div className="relative inline-block">
                  <span className="relative block data-gradient animate-node-glow font-extrabold">
                    Kodari Sravan
                  </span>
                </div>
              </h1>
            </div>
            
            <div className="text-xl lg:text-2xl text-muted-foreground font-medium min-h-[3rem] mt-6">
              <span className="border-r-2 border-primary pr-1 animate-pulse">
                {typedText}
              </span>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mt-6">
              Transforming raw data into production-ready ML systems. From 
              <span className="text-data-flow font-semibold"> data pipelines</span> to 
              <span className="text-ml-primary font-semibold"> model deployment</span>, 
              I build scalable <span className="text-pipeline font-semibold"> MLOps infrastructure</span> that powers 
              <span className="text-deployment font-semibold"> intelligent applications</span>.
            </p>

            {/* Professional highlights */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="tech-glass px-4 py-2 rounded-xl flex items-center space-x-2">
                <Database className="w-4 h-4 text-data-flow" />
                <span className="text-sm text-foreground font-medium">10+ ML Projects</span>
              </div>
              <div className="tech-glass px-4 py-2 rounded-xl flex items-center space-x-2">
                <Server className="w-4 h-4 text-ml-primary" />
                <span className="text-sm text-foreground font-medium">MLOps Focused</span>
              </div>
              <div className="tech-glass px-4 py-2 rounded-xl flex items-center space-x-2 animate-deployment-pulse">
                <Cloud className="w-4 h-4 text-deployment" />
                <span className="text-sm text-foreground font-medium">Available Now</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-data-flow hover:from-primary-dark hover:to-data-flow text-primary-foreground border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 data-card"
            >
              <a href="#projects" className="flex items-center">
                View ML Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-border hover:border-primary hover:bg-accent transition-all duration-300 data-card"
              asChild
            >
              <a href="https://drive.google.com/file/d/1nDaoEC5m45RBwLVrEk94YiN77cd4PDgV/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Technical Resume
              </a>
            </Button>
          </div>

          <div className="flex space-x-6">
            <Button variant="ghost" size="sm" className="p-3 hover:bg-accent rounded-xl transition-all duration-300 hover:scale-110 data-card" asChild>
              <a href="https://github.com/sravan-dsai" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="p-3 hover:bg-accent rounded-xl transition-all duration-300 hover:scale-110 data-card" asChild>
              <a href="https://www.linkedin.com/in/sravan-kodari" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6 text-muted-foreground hover:text-data-flow transition-colors" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="p-3 hover:bg-accent rounded-xl transition-all duration-300 hover:scale-110 data-card" asChild>
              <a href="#contact">
                <Mail className="h-6 w-6 text-muted-foreground hover:text-ml-primary transition-colors" />
              </a>
            </Button>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* Main profile image container with data engineering theme */}
            <div className="relative w-80 h-80 mx-auto">
              {/* Tech-themed background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-data-flow/20 rounded-full animate-node-glow"></div>
              
              {/* Data pipeline circles around image */}
              <div className="absolute -inset-8">
                <div className="absolute top-0 left-1/2 w-3 h-3 pipeline-node animate-deployment-pulse">
                  <Database className="w-1.5 h-1.5 text-white m-0.75" />
                </div>
                <div className="absolute top-1/4 right-0 w-3 h-3 pipeline-node animate-deployment-pulse" style={{ animationDelay: '0.5s' }}>
                  <BarChart3 className="w-1.5 h-1.5 text-white m-0.75" />
                </div>
                <div className="absolute bottom-1/4 right-0 w-3 h-3 pipeline-node animate-deployment-pulse" style={{ animationDelay: '1s' }}>
                  <Cpu className="w-1.5 h-1.5 text-white m-0.75" />
                </div>
                <div className="absolute bottom-0 left-1/2 w-3 h-3 pipeline-node animate-deployment-pulse" style={{ animationDelay: '1.5s' }}>
                  <Cloud className="w-1.5 h-1.5 text-white m-0.75" />
                </div>
                <div className="absolute bottom-1/4 left-0 w-3 h-3 pipeline-node animate-deployment-pulse" style={{ animationDelay: '2s' }}>
                  <Server className="w-1.5 h-1.5 text-white m-0.75" />
                </div>
                <div className="absolute top-1/4 left-0 w-3 h-3 pipeline-node animate-deployment-pulse" style={{ animationDelay: '2.5s' }}>
                  <Workflow className="w-1.5 h-1.5 text-white m-0.75" />
                </div>
              </div>

              <img 
                src="https://raw.githubusercontent.com/SRAVAN-DSAI/app/main/profile.JPG" 
                alt="Kodari Sravan - Data Scientist & ML Engineer"
                className="w-full h-full object-cover rounded-full shadow-2xl relative z-10 border-4 border-card"
              />
            </div>
            
            {/* Professional status badge */}
            <div className="absolute -top-6 -right-4 tech-glass px-4 py-2 rounded-full text-sm font-semibold transform rotate-12 animate-deployment-pulse">
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-deployment rounded-full animate-pulse"></div>
                <span className="text-foreground">Ready for MLOps!</span>
              </span>
            </div>
            
            {/* Tech specialization badges */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              <div className="tech-glass px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                <Database className="w-3 h-3 text-data-flow" />
                <span className="text-foreground">Data Engineering</span>
              </div>
              <div className="tech-glass px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                <Cpu className="w-3 h-3 text-ml-primary" />
                <span className="text-foreground">ML Systems</span>
              </div>
              <div className="tech-glass px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                <Cloud className="w-3 h-3 text-deployment" />
                <span className="text-foreground">Cloud Deploy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
