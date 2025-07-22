
import { ExternalLink, Github, Star, ArrowRight, Brain, BarChart3, TrendingUp, MapPin, Car, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'NLP News Article Classification Pipeline',
      description: 'An end-to-end NLP pipeline for classifying news articles using Apache Spark for data processing and Hugging Face Transformers for model training. Features include data ingestion, cleaning, model training, evaluation, and a live Streamlit demo.',
      image: 'https://www.istockphoto.com/photo/natural-language-processing-nlp-gm2050481773-563250879?auto=format&fit=crop&q=80&w=1770', // A suitable image for news/NLP
      technologies: ['Python', 'Apache Spark', 'PySpark', 'Hugging Face Transformers', 'PyTorch', 'Streamlit', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn'],
      github: 'https://github.com/SRAVAN-DSAI/nlp_news_pipeline',
      live: 'https://nlp-news-pipeline.streamlit.app/', // Your live Streamlit app URL
      category: 'NLP ML', // Or 'MLOps' if you emphasize deployment
      featured: true, // Assuming you want to feature it
      icon: 'BsNewspaper', // A relevant icon (assuming this is from a library like react-icons/bs)
      color: 'from-green-500 to-teal-500' // A color scheme that fits the NLP theme
    },
    {
      title: 'Apartment Price Prediction - Buenos Aires',
      description: 'Machine learning model to predict apartment prices in Buenos Aires using regression techniques and feature engineering.',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=700&q=80',
      technologies: ['Python', 'Machine Learning', 'Regression', 'Feature Engineering'],
      github: 'https://github.com/sravan-dsai/apartment-sales',
      live: '#',
      category: 'ML',
      featured: true,
      icon: MapPin,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Air Quality Forecasting - Nairobi',
      description: 'Time series forecasting model to predict air quality in Nairobi using environmental data and machine learning algorithms.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80',
      technologies: ['Python', 'Time Series', 'Forecasting', 'Environmental Data'],
      github: 'https://github.com/sravan-dsai/air-quality-nairobi',
      live: '#',
      category: 'ML',
      featured: false,
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Neural Network Car Price Prediction',
      description: 'Deep learning approach using neural networks to predict car prices with advanced feature selection and model optimization.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80',
      technologies: ['Python', 'Deep Learning', 'Neural Networks', 'TensorFlow', 'PyTorch'],
      github: 'https://github.com/sravan-dsai/car-price-prediction',
      live: '#',
      category: 'DL',
      featured: false,
      icon: Car,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Customer Segmentation Dashboard',
      description: 'Interactive dashboard for customer segmentation analysis using clustering algorithms and data visualization techniques.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80',
      technologies: ['Python', 'Clustering', 'Data Visualization', 'Plotly', 'Dashboard'],
      github: 'https://github.com/sravan-dsai/customer-segmentation',
      live: '#',
      category: 'Data',
      featured: false,
      icon: Users,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Bankruptcy Risk Assessment',
      description: 'Predictive model to assess bankruptcy risk for Polish companies using financial indicators and machine learning classification.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80',
      technologies: ['Python', 'Classification', 'Risk Assessment', 'Financial Analysis'],
      github: 'https://github.com/sravan-dsai/bankruptcy-poland',
      live: '#',
      category: 'ML',
      featured: false,
      icon: Brain,
      color: 'from-rose-500 to-pink-500'
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
          <Card key={index} className="group card-hover border-0 shadow-lg bg-white/60 backdrop-blur-sm overflow-hidden">
            <div className="relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-300`}></div>
              
              {/* Project icon */}
              <div className="absolute top-4 left-4 p-2 bg-white/90 backdrop-blur-sm rounded-xl group-hover:scale-110 transition-transform duration-300">
                <project.icon className="h-5 w-5 text-gray-700" />
              </div>
              
              {project.featured && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center animate-glow">
                  <Star className="h-3 w-3 mr-1" />
                  Featured
                </div>
              )}
              
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex space-x-2">
                  <Button size="sm" variant="secondary" className="flex-1 bg-white/90 backdrop-blur-sm hover:bg-white" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className={`bg-gradient-to-r ${project.color} text-white border-0`}>
                  {project.category}
                </Badge>
                {project.featured && (
                  <div className="flex items-center text-yellow-600">
                    <Star className="h-4 w-4 mr-1 fill-current" />
                    <span className="text-xs font-medium">Featured</span>
                  </div>
                )}
              </div>
              <CardTitle className="text-xl text-gray-900 group-hover:text-gray-700 transition-colors line-clamp-2">
                {project.title}
              </CardTitle>
              <CardDescription className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                {project.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, techIndex) => (
                  <Badge 
                    key={techIndex} 
                    variant="outline" 
                    className="text-xs skill-badge hover:shadow-md transition-all duration-300"
                  >
                    {tech}
                  </Badge>
                ))}
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
