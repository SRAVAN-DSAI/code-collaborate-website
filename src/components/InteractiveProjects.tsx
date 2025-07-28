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
      live: 'https://nlp-news-classifier.streamlit.app/',
      demo: 'https://nlp-news-classifier.streamlit.app/',
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
      title: "UrbanSound8K Audio Classification with PyTorch",
      description: "Advanced audio classification using a fine-tuned ResNet18 model, achieving 96.37% accuracy on urban sound detection.",
      longDescription: "This project implements a convolutional neural network (ResNet18) fine-tuned with PyTorch to classify audio from the UrbanSound8K dataset into 10 categories. Features include real-time spectrogram generation, batch processing, and deployment via Streamlit, with visualizations using Plotly.",
      image: "https://www.researchgate.net/profile/Mohamed-Zakaria-Kurd/publication/355730779/figure/fig2/AS:1112013642583040@1642879088806/Spectrogram-of-an-audio-signal.png",
      technologies: ["Python", "PyTorch", "Torchvision", "Librosa", "Streamlit", "Plotly", "Pandas", "Matplotlib", "Azure Machine Learning"],
      github: "https://github.com/SRAVAN-DSAI/Sound-Classifier",
      live: "https://waveform-classifier.streamlit.app/",
      demo: "https://waveform-classifier.streamlit.app/",
      category: "Audio Processing",
      featured: true,
      icon: TrendingUp,
      color: "from-green-500 to-teal-500",
      metrics: {accuracy: "96.37%",f1Score: "95.80%",inference: "100ms"},
      tags: ["Audio Classification", "Deep Learning", "Real-time", "Production"],
      complexity: "Advanced",
      duration: "1 week",
      team: "Solo Project"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'NLP', label: 'NLP', count: projects.filter(p => p.category === 'NLP').length },
    { id: 'Audio Processing', label: 'Audio', count: projects.filter(p => p.category === 'Audio Processing').length }
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
        <TabsList className="grid w-full grid-cols-3 gap-1 h-auto p-1 bg-gray-100 rounded-xl">
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

        <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <Card 
                        key={project.id} 
                        className="group border-0 shadow-lg bg-white/60 backdrop-blur-sm overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                        onMouseEnter={() => setHoveredProject(project.id)}
                        onMouseLeave={() => setHoveredProject(null)}
                    >
                         {/* Card content remains the same... */}
                    </Card>
                ))}
            </div>
        </TabsContent>
        <TabsContent value="NLP" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                 {projects.filter(p => p.category === 'NLP').map((project) => (
                    <Card key={project.id}  className="group border-0 shadow-lg bg-white/60 backdrop-blur-sm overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}>
                         {/* Card content remains the same... */}
                    </Card>
                ))}
            </div>
        </TabsContent>
         <TabsContent value="Audio Processing" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                 {projects.filter(p => p.category === 'Audio Processing').map((project) => (
                    <Card key={project.id}  className="group border-0 shadow-lg bg-white/60 backdrop-blur-sm overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}>
                         {/* Card content remains the same... */}
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
