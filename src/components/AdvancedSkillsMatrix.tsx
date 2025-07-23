import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Brain, Database, BarChart3, Cloud, Code, Cpu, Zap, Bot, GitBranch, Layers } from 'lucide-react';
import { useState } from 'react';

const AdvancedSkillsMatrix = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const skillCategories = [
    {
      id: 'data-engineering',
      title: 'Data Engineering & ETL',
      icon: Database,
      color: 'from-emerald-500 to-teal-600',
      description: 'Building robust data pipelines and infrastructure',
      skills: [
        { name: 'Apache Spark', level: 90, category: 'Big Data', certifications: ['Databricks Certified'] },
        { name: 'Apache Kafka', level: 85, category: 'Streaming', certifications: [] },
        { name: 'SQL & NoSQL', level: 95, category: 'Database', certifications: ['PostgreSQL Pro'] },
        { name: 'Docker & Kubernetes', level: 80, category: 'DevOps', certifications: [] },
        { name: 'AWS Data Services', level: 85, category: 'Cloud', certifications: ['AWS Certified'] },
        { name: 'Data Warehousing', level: 88, category: 'Architecture', certifications: [] }
      ]
    },
    {
      id: 'ml-ai',
      title: 'Machine Learning & AI',
      icon: Brain,
      color: 'from-purple-500 to-indigo-600',
      description: 'Advanced ML algorithms and neural networks',
      skills: [
        { name: 'PyTorch & TensorFlow', level: 92, category: 'Deep Learning', certifications: ['PyTorch Certified'] },
        { name: 'Hugging Face Transformers', level: 88, category: 'NLP', certifications: [] },
        { name: 'Scikit-learn', level: 95, category: 'ML', certifications: [] },
        { name: 'Computer Vision', level: 85, category: 'CV', certifications: [] },
        { name: 'MLOps & Deployment', level: 82, category: 'Operations', certifications: [] },
        { name: 'A/B Testing', level: 90, category: 'Experimentation', certifications: [] }
      ]
    },
    {
      id: 'data-viz',
      title: 'Data Visualization & Analytics',
      icon: BarChart3,
      color: 'from-orange-500 to-red-500',
      description: 'Creating insights through visual storytelling',
      skills: [
        { name: 'Streamlit', level: 90, category: 'Web Apps', certifications: [] },
        { name: 'Plotly & Dash', level: 88, category: 'Interactive', certifications: [] },
        { name: 'Tableau', level: 85, category: 'BI Tools', certifications: ['Tableau Certified'] },
        { name: 'Power BI', level: 80, category: 'BI Tools', certifications: [] },
        { name: 'D3.js', level: 75, category: 'Web Viz', certifications: [] },
        { name: 'Statistical Analysis', level: 92, category: 'Statistics', certifications: [] }
      ]
    },
    {
      id: 'programming',
      title: 'Programming & Development',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      description: 'Full-stack development and software engineering',
      skills: [
        { name: 'Python', level: 95, category: 'Core', certifications: ['Python Institute'] },
        { name: 'JavaScript/TypeScript', level: 85, category: 'Web', certifications: [] },
        { name: 'React & FastAPI', level: 88, category: 'Frameworks', certifications: [] },
        { name: 'Git & Version Control', level: 92, category: 'DevOps', certifications: [] },
        { name: 'API Development', level: 90, category: 'Backend', certifications: [] },
        { name: 'Testing & CI/CD', level: 85, category: 'Quality', certifications: [] }
      ]
    }
  ];

  const filteredCategories = selectedCategory === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === selectedCategory);

  const getSkillColor = (level: number) => {
    if (level >= 90) return 'from-green-500 to-emerald-500';
    if (level >= 80) return 'from-blue-500 to-cyan-500';
    if (level >= 70) return 'from-yellow-500 to-orange-500';
    return 'from-gray-400 to-gray-500';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Skills Matrix</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          From data ingestion to model deployment - comprehensive expertise across the ML pipeline
        </p>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Badge 
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            className="cursor-pointer px-4 py-2 transition-all duration-300 hover:scale-105"
            onClick={() => setSelectedCategory('all')}
          >
            All Skills
          </Badge>
          {skillCategories.map((category) => (
            <Badge 
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              className="cursor-pointer px-4 py-2 transition-all duration-300 hover:scale-105"
              onClick={() => setSelectedCategory(category.id)}
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.title}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredCategories.map((category, index) => (
          <Card key={category.id} className="group border-0 shadow-lg bg-white/60 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-3 mb-2">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-xl text-gray-900">{category.title}</CardTitle>
                  <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-900">{skill.name}</span>
                        <Badge variant="outline" className="text-xs">
                          {skill.category}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-2">
                        {skill.certifications.length > 0 && (
                          <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
                            Certified
                          </Badge>
                        )}
                        <span className="text-sm font-semibold text-gray-700">{skill.level}%</span>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-gray-200"
                      />
                      <div 
                        className={`absolute top-0 left-0 h-2 rounded-full bg-gradient-to-r ${getSkillColor(skill.level)} transition-all duration-1000 group-hover/skill:shadow-lg`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    
                    {skill.certifications.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1">
                        {skill.certifications.map((cert, certIndex) => (
                          <Badge key={certIndex} variant="outline" className="text-xs text-green-700 border-green-300">
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
          <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
          <div className="text-sm text-gray-600">Technologies Mastered</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl">
          <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
          <div className="text-sm text-gray-600">ML Projects Deployed</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl">
          <div className="text-3xl font-bold text-orange-600 mb-2">5+</div>
          <div className="text-sm text-gray-600">Certifications Earned</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
          <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
          <div className="text-sm text-gray-600">Average Skill Level</div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSkillsMatrix;