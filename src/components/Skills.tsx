
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Database, BarChart3, Cloud, Code, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming & Data Analysis',
      icon: Code,
      skills: [
        { name: 'Python', level: 95 },
        { name: 'SQL', level: 90 },
        { name: 'Data Analysis', level: 92 },
        { name: 'Machine Learning', level: 88 },
        { name: 'Deep Learning', level: 85 },
        { name: 'Automation', level: 80 }
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'ML/DL Frameworks',
      icon: Brain,
      skills: [
        { name: 'PyTorch', level: 88 },
        { name: 'TensorFlow', level: 85 },
        { name: 'Scikit-learn', level: 92 },
        { name: 'Keras', level: 80 },
        { name: 'Neural Networks', level: 85 },
        { name: 'Model Development', level: 90 }
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Data Visualization & Big Data',
      icon: BarChart3,
      skills: [
        { name: 'Plotly', level: 85 },
        { name: 'Matplotlib', level: 90 },
        { name: 'Seaborn', level: 88 },
        { name: 'PySpark', level: 75 },
        { name: 'Big Data Processing', level: 70 },
        { name: 'Dashboard Creation', level: 82 }
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Cloud & Tools',
      icon: Cloud,
      skills: [
        { name: 'AWS', level: 78 },
        { name: 'S3', level: 80 },
        { name: 'EC2', level: 75 },
        { name: 'Git', level: 90 },
        { name: 'Version Control', level: 88 },
        { name: 'Cloud Computing', level: 75 }
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Here are the technologies and tools I use to transform data into insights and build intelligent solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <Card key={index} className="card-hover group border-0 shadow-lg bg-white/60 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-3">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl text-gray-900 group-hover:text-gray-700 transition-colors">
                  {category.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                    <span className="text-xs text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${skillIndex * 100}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Skills;
