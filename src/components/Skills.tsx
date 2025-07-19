
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Database, BarChart3, Cloud, Code, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming & Data Analysis',
      icon: Code,
      skills: [
        'Python', 'SQL', 'Data Analysis', 'Machine Learning', 'Deep Learning', 'Automation'
      ],
      color: 'from-blue-500 to-cyan-500',
      logos: [
        { name: 'Python', icon: '🐍' },
        { name: 'SQL', icon: '🗃️' },
        { name: 'Pandas', icon: '🐼' },
        { name: 'NumPy', icon: '🔢' },
        { name: 'Jupyter', icon: '📓' },
        { name: 'VSCode', icon: '💻' }
      ]
    },
    {
      title: 'ML/DL Frameworks',
      icon: Brain,
      skills: [
        'PyTorch', 'TensorFlow', 'Scikit-learn', 'Keras', 'Neural Networks', 'Model Development'
      ],
      color: 'from-purple-500 to-pink-500',
      logos: [
        { name: 'PyTorch', icon: '🔥' },
        { name: 'TensorFlow', icon: '🧠' },
        { name: 'Scikit-learn', icon: '🤖' },
        { name: 'Keras', icon: '⚡' },
        { name: 'OpenCV', icon: '👁️' },
        { name: 'Hugging Face', icon: '🤗' }
      ]
    },
    {
      title: 'Data Visualization & Big Data',
      icon: BarChart3,
      skills: [
        'Plotly', 'Matplotlib', 'Seaborn', 'PySpark', 'Big Data Processing', 'Dashboard Creation'
      ],
      color: 'from-green-500 to-emerald-500',
      logos: [
        { name: 'Plotly', icon: '📊' },
        { name: 'Matplotlib', icon: '📈' },
        { name: 'Seaborn', icon: '🎨' },
        { name: 'Tableau', icon: '📋' },
        { name: 'Power BI', icon: '⚡' },
        { name: 'Apache Spark', icon: '⚡' }
      ]
    },
    {
      title: 'Cloud & Tools',
      icon: Cloud,
      skills: [
        'AWS', 'S3', 'EC2', 'Git', 'Version Control', 'Cloud Computing'
      ],
      color: 'from-orange-500 to-red-500',
      logos: [
        { name: 'AWS', icon: '☁️' },
        { name: 'Git', icon: '🌿' },
        { name: 'Docker', icon: '🐳' },
        { name: 'Linux', icon: '🐧' },
        { name: 'Google Cloud', icon: '🌤️' },
        { name: 'GitHub', icon: '🐙' }
      ]
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
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.logos.map((logo, logoIndex) => (
                  <div 
                    key={logoIndex} 
                    className="flex flex-col items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-md"
                  >
                    <span className="text-2xl mb-2">{logo.icon}</span>
                    <span className="text-xs font-medium text-gray-700 text-center">{logo.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Skills;
