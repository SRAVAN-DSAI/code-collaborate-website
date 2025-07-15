
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Sravan
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 font-medium">
              Full Stack Developer & Software Engineer
            </p>
            <p className="text-lg text-gray-500 max-w-lg">
              Passionate about creating innovative web applications and solving complex problems with clean, efficient code. 
              Specializing in React, Node.js, and modern web technologies.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

          <div className="flex space-x-6">
            <Button variant="ghost" size="sm" className="p-0">
              <Github className="h-6 w-6 text-gray-600 hover:text-gray-900" />
            </Button>
            <Button variant="ghost" size="sm" className="p-0">
              <Linkedin className="h-6 w-6 text-gray-600 hover:text-gray-900" />
            </Button>
            <Button variant="ghost" size="sm" className="p-0">
              <Mail className="h-6 w-6 text-gray-600 hover:text-gray-900" />
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative w-80 h-80 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute inset-8 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full flex items-center justify-center">
              <div className="text-white text-6xl font-bold">SK</div>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold transform rotate-12">
            Available for hire!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
