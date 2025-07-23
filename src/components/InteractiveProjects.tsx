import { useState } from 'react';
import { ExternalLink, Github, Star, Play, Database, Brain, BarChart3, TrendingUp, Layers, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const InteractiveProjects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'NLP News Article Classification with Hugging Face Transformers',
      description: 'Advanced sentiment analysis using pre-trained transformers, fine-tuned for domain-specific text classification with 96% accuracy.',
      longDescription: 'Leveraging BERT and RoBERTa models from Hugging Face, this project implements multi-class sentiment analysis with custom fine-tuning. Features include model comparison, attention visualization, and deployment via REST API.',
      image: "https://www.searchenginejournal.com/wp-content/uploads/2020/08/an-introduction-to-natural-language-processing-with-python-for-seos-5f3519eeb8368.png?auto=format&fit=crop&q=80&w=1770",
      technologies: ["Python", "Apache Spark", "PySpark", "Hugging Face Transformers", "PyTorch", "Streamlit", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"],
      github: 'https://github.com/SRAVAN-DSAI/nlp_news_classifier',
      live: 'https://nlp-news-pipeline.streamlit.app/',
      demo: 'https://nlp-news-pipeline.streamlit.app/',
      category: 'NLP',
      featured: true,
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      metrics: { accuracy: '96.1%', f1Score: '0.94', inference: '50ms' },
      tags: ['Transformer', 'Fine-tuned', 'Production'],
      complexity: 'Advanced',
      duration: '2 months',
      team: 'Solo Project'
    },
    {
      id: 2,
      title: 'End-to-End ML Pipeline for Real Estate Prediction',
      description: 'Complete ML pipeline from data ingestion to model deployment using Apache Spark, MLflow, and Streamlit. Features automated retraining and A/B testing.',
      longDescription: 'This project demonstrates a production-ready machine learning pipeline for predicting real estate prices. It includes data ingestion from multiple sources, feature engineering using PySpark, model training with automated hyperparameter tuning, and deployment using FastAPI and Streamlit.',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
      technologies: ['Apache Spark', 'MLflow', 'Streamlit', 'FastAPI', 'Docker', 'PostgreSQL'],
      github: 'https://github.com/sravan-dsai/ml-pipeline-real-estate',
      live: '#',
      demo: '#',
      category: 'MLOps',
      featured: true,
      icon: Layers,
      color: 'from-blue-500 to-cyan-500',
      metrics: { accuracy: '94.2%', latency: '< 100ms', uptime: '99.9%' },
      tags: ['Production Ready', 'Scalable', 'Real-time'],
      complexity: 'Advanced',
      duration: '3 months',
      team: 'Solo Project'
    },
    {
      id: 3,
      title: 'Real-time Data Streaming with Apache Kafka',
      description: 'Real-time data pipeline processing financial market data using Kafka, Spark Streaming, and real-time dashboard visualization.',
      longDescription: 'A comprehensive streaming data architecture that ingests live financial data, processes it using Spark Streaming, and displays real-time analytics through interactive dashboards. Includes anomaly detection and alerting.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
      technologies: ['Apache Kafka', 'Spark Streaming', 'Redis', 'Plotly Dash', 'Docker'],
      github: 'https://github.com/sravan-dsai/streaming-pipeline',
      live: '#',
      demo: '#',
      category: 'Data Engineering',
      featured: false,
      icon: Zap,
      color: 'from-green-500 to-emerald-500',
      metrics: { throughput: '10K msg/sec', latency: '< 50ms', availability: '99.95%' },
      tags: ['Real-time', 'Scalable', 'High Performance'],
      complexity: 'Expert',
      duration: '4 months',
      team: 'Team of 3'
    },
    {
      id: 4,
      title: 'Computer Vision for Medical Image Analysis',
      description: 'Deep learning model for medical image classification using CNNs, achieving state-of-the-art results on medical datasets.',
      longDescription: 'Custom CNN architecture for medical image analysis with data augmentation, transfer learning, and explainable AI features. Includes attention maps and clinical validation metrics.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80',
      technologies: ['PyTorch', 'OpenCV', 'Grad-CAM', 'DICOM', 'FastAPI', 'React'],
      github: 'https://github.com/sravan-dsai/medical-cv',
      live: '#',
      demo: '#',
      category: 'Computer Vision',
      featured: false,
      icon: Brain,
      color: 'from-orange-500 to-red-500',
      metrics: { sensitivity: '95.8%', specificity: '92.3%', auc: '0.97' },
      tags: ['Healthcare', 'CNN', 'Explainable AI'],
      complexity: 'Advanced',
      duration: '5 months',
      team: 'Collaboration'
    },
    {
      id: 5,
      title: 'Interactive Data Visualization Dashboard',
      description: 'Comprehensive business intelligence dashboard with real-time data updates, advanced filtering, and export capabilities.',
      longDescription: 'Full-featured dashboard built with Streamlit and Plotly, featuring interactive charts, real-time data updates, advanced filtering, and automated report generation for business stakeholders.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      technologies: ['Streamlit', 'Plotly', 'Pandas', 'PostgreSQL', 'Celery', 'Redis'],
      github: 'https://github.com/sravan-dsai/interactive-dashboard',
      live: '#',
      demo: '#',
      category: 'Data Visualization',
      featured: false,
      icon: BarChart3,
      color: 'from-indigo-500 to-purple-500',
      metrics: { users: '500+', charts: '25+', updateFreq: 'Real-time' },
      tags: ['Interactive', 'Business Intelligence', 'Real-time'],
      complexity: 'Intermediate',
      duration: '2 months',
      team: 'Solo Project'
    },
    {
      id: 6,
      title: 'Time Series Forecasting for IoT Data',
      description: 'LSTM-based forecasting model for IoT sensor data with anomaly detection and automated alerting system.',
      longDescription: 'Advanced time series analysis using LSTM networks to predict IoT sensor values. Features include seasonal decomposition, anomaly detection, and automated alert generation for industrial monitoring.',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&q=80',
      technologies: ['PyTorch', 'Time Series', 'LSTM', 'InfluxDB', 'Grafana', 'Docker'],
      github: 'https://github.com/sravan-dsai/iot-forecasting',
      live: '#',
      demo: '#',
      category: 'Time Series',
      featured: false,
      icon: TrendingUp,
      color: 'from-cyan-500 to-blue-500',
      metrics: { mape: '3.2%', rmse: '0.85', forecast: '7 days' },
      tags: ['IoT', 'LSTM', 'Anomaly Detection'],
      complexity: 'Advanced',
      duration: '3 months',
      team: 'Solo Project'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'MLOps', label: 'MLOps', count: projects.filter(p => p.category === 'MLOps').length },
    { id: 'NLP', label: 'NLP', count: projects.filter(p => p.category === 'NLP').length },
    { id: 'Data Engineering', label: 'Data Engineering', count: projects.filter(p => p.category === 'Data Engineering').length },
    { id: 'Computer Vision', label: 'Computer Vision', count: projects.filter(p => p.category === 'Computer Vision').length },
    { id: 'Data Visualization', label: 'Visualization', count: projects.filter(p => p.category === 'Data Visualization').length },
    { id: 'Time Series', label: 'Time Series', count: projects.filter(p => p.category === 'Time Series').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Expert': return 'bg-red-100 text-red-800';
      case 'Advanced': return 'bg-orange-100 text-orange-800';
      case 'Intermediate': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Interactive Project Portfolio</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Explore my comprehensive ML projects spanning the entire data science pipeline
        </p>
      </div>

      {/* Enhanced Filter Tabs */}
      <Tabs value={activeFilter} onValueChange={setActiveFilter} className="mb-12">
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7 gap-1 h-auto p-1 bg-gray-100 rounded-xl">
          {categories.map((category) => (
            <TabsTrigger 
              key={category.id} 
              value={category.id}
              className="flex flex-col items-center p-3 data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg transition-all duration-300"
            >
              <span className="font-medium text-sm">{category.label}</span>
              <span className="text-xs text-gray-500 mt-1">({category.count})</span>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={activeFilter} className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="group border-0 shadow-lg bg-white/60 backdrop-blur-sm overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Enhanced overlay with gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-90 transition-all duration-500`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>
                  
                  {/* Floating icon */}
                  <div className="absolute top-4 left-4 p-2 bg-white/95 backdrop-blur-sm rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <project.icon className="h-5 w-5 text-gray-700" />
                  </div>
                  
                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center shadow-lg">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </div>
                  )}
                  
                  {/* Complexity badge */}
                  <div className={`absolute bottom-4 left-4 px-2 py-1 rounded-full text-xs font-medium ${getComplexityColor(project.complexity)} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    {project.complexity}
                  </div>
                  
                  {/* Action buttons overlay */}
                  <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <Button size="sm" variant="secondary" className="bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg shadow-lg" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <Play className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className={`bg-gradient-to-r ${project.color} text-white border-0 shadow-sm`}>
                      {project.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <span>{project.duration}</span>
                      <span>•</span>
                      <span>{project.team}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-lg text-gray-900 group-hover:text-gray-700 transition-colors line-clamp-2 leading-tight">
                    {project.title}
                  </CardTitle>
                  
                  <CardDescription className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                    {hoveredProject === project.id ? project.longDescription : project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 space-y-4">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-2 text-center bg-gray-50 rounded-lg p-3">
                    {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                      <div key={metricIndex} className="flex flex-col">
                        <span className="text-xs text-gray-500 capitalize">{key}</span>
                        <span className="text-sm font-semibold text-gray-900">{value}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="text-xs hover:shadow-md transition-all duration-300 hover:scale-105"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs text-gray-500">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary" 
                        className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Enhanced CTA Section */}
      <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Interested in Collaboration?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          I'm always excited to work on challenging data science projects. Let's discuss how we can leverage ML to solve your business problems.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg">
            <a href="#contact" className="flex items-center">
              Start a Project
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/sravan-dsai" target="_blank" rel="noopener noreferrer">
              View All Code
              <Github className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveProjects;
