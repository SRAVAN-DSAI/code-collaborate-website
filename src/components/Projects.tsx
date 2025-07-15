
import { ExternalLink, Github, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'Housing Market Analysis - Mexico',
      description: 'Comprehensive analysis of Mexico\'s housing market using machine learning techniques to predict property values and market trends.',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=700&q=80',
      technologies: ['Python', 'Machine Learning', 'Data Analysis', 'Pandas', 'Scikit-learn'],
      github: 'https://github.com/sravan-dsai/housing-mexico',
      live: '#',
      category: 'ML Data',
      featured: true
    },
    {
      title: 'Apartment Price Prediction - Buenos Aires',
      description: 'Machine learning model to predict apartment prices in Buenos Aires using regression techniques and feature engineering.',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=700&q=80',
      technologies: ['Python', 'Machine Learning', 'Regression', 'Feature Engineering'],
      github: 'https://github.com/sravan-dsai/apartment-sales',
      live: '#',
      category: 'ML',
      featured: true
    },
    {
      title: 'Air Quality Forecasting - Nairobi',
      description: 'Time series forecasting model to predict air quality in Nairobi using environmental data and machine learning algorithms.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80',
      technologies: ['Python', 'Time Series', 'Forecasting', 'Environmental Data'],
      github: 'https://github.com/sravan-dsai/air-quality-nairobi',
      live: '#',
      category: 'ML',
      featured: false
    },
    {
      title: 'Neural Network Car Price Prediction',
      description: 'Deep learning approach using neural networks to predict car prices with advanced feature selection and model optimization.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80',
      technologies: ['Python', 'Deep Learning', 'Neural Networks', 'TensorFlow', 'PyTorch'],
      github: 'https://github.com/sravan-dsai/car-price-prediction',
      live: '#',
      category: 'DL',
      featured: false
    },
    {
      title: 'Customer Segmentation Dashboard',
      description: 'Interactive dashboard for customer segmentation analysis using clustering algorithms and data visualization techniques.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80',
      technologies: ['Python', 'Clustering', 'Data Visualization', 'Plotly', 'Dashboard'],
      github: 'https://github.com/sravan-dsai/customer-segmentation',
      live: '#',
      category: 'Data',
      featured: false
    },
    {
      title: 'Bankruptcy Risk Assessment',
      description: 'Predictive model to assess bankruptcy risk for Polish companies using financial indicators and machine learning classification.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80',
      technologies: ['Python', 'Classification', 'Risk Assessment', 'Financial Analysis'],
      github: 'https://github.com/sravan-dsai/bankruptcy-poland',
      live: '#',
      category: 'ML',
      featured: false
    }
  ];

  return (
    <div id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Here are some of my recent projects that showcase my expertise in data science, machine learning, and deep learning.
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
              <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                {project.category}
              </div>
            </div>
            
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
              <CardDescription className="text-sm text-gray-600 line-clamp-3">
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
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </a>
                </Button>
                <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600" asChild>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button variant="outline" size="lg" asChild>
          <a href="https://github.com/sravan-dsai" target="_blank" rel="noopener noreferrer">
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Projects;
