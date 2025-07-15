
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div id="hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Hello, I'm Kodari Sravan
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 font-medium">
              Data Scientist & ML Engineer
            </p>
            <p className="text-lg text-gray-500 max-w-lg">
              Passionate about turning complex data into actionable insights. I specialize in machine learning, 
              deep learning, and data visualization, building strong predictive models and engaging data stories 
              that spark innovation and create business value.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <a href="#projects" className="flex items-center">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://drive.google.com/file/d/1nDaoEC5m45RBwLVrEk94YiN77cd4PDgV/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Resume
              </a>
            </Button>
          </div>

          <div className="flex space-x-6">
            <Button variant="ghost" size="sm" className="p-0" asChild>
              <a href="https://github.com/sravan-dsai" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6 text-gray-600 hover:text-gray-900" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="p-0" asChild>
              <a href="https://www.linkedin.com/in/sravan-kodari" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6 text-gray-600 hover:text-gray-900" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="p-0" asChild>
              <a href="#contact">
                <Mail className="h-6 w-6 text-gray-600 hover:text-gray-900" />
              </a>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative w-80 h-80 mx-auto">
            <img 
              src="https://raw.githubusercontent.com/SRAVAN-DSAI/app/main/profile.JPG" 
              alt="Kodari Sravan"
              className="w-full h-full object-cover rounded-full shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
          </div>
          <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold transform rotate-12">
            Available for opportunities!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
