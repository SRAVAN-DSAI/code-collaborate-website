
import { ExternalLink, Github, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      image: '/placeholder.svg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/placeholder.svg',
      technologies: ['React', 'Firebase', 'Material-UI', 'Socket.io'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application that provides current weather data and forecasts using OpenWeatherMap API with beautiful data visualizations.',
      image: '/placeholder.svg',
      technologies: ['JavaScript', 'Chart.js', 'OpenWeatherMap API', 'CSS3'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'Blog Platform',
      description: 'A modern blogging platform with markdown support, user authentication, and content management system built with Next.js.',
      image: '/placeholder.svg',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing my work and skills, built with modern web technologies and optimized for performance.',
      image: '/placeholder.svg',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat application with private messaging, group chats, and file sharing capabilities using Socket.io and React.',
      image: '/placeholder.svg',
      technologies: ['React', 'Socket.io', 'Node.js', 'Express', 'MongoDB'],
      github: '#',
      live: '#',
      featured: false
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Here are some of my recent projects that showcase my skills and experience in web development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative overflow-hidden rounded-t-lg">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {project.featured && (
                <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                  <Star className="h-3 w-3 mr-1" />
                  Featured
                </div>
              )}
            </div>
            
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
              <CardDescription className="text-sm text-gray-600 line-clamp-2">
                {project.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex space-x-3">
                <Button variant="outline" size="sm" className="flex-1">
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Button>
                <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button variant="outline" size="lg">
          View All Projects
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default Projects;
