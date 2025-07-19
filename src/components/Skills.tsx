
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
        { name: 'Python', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'PostgreSQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg' },
        { name: 'Pandas', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
        { name: 'NumPy', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
        { name: 'Jupyter', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
        { name: 'VSCode', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' }
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
        { name: 'PyTorch', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
        { name: 'TensorFlow', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
        { name: 'Scikit-learn', iconUrl: 'https://raw.githubusercontent.com/scikit-learn/scikit-learn/main/doc/logos/scikit-learn-logo-small.png' },
        { name: 'Keras', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg' },
        { name: 'OpenCV', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
        { name: 'Anaconda', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg' }
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
        { name: 'Plotly', iconUrl: 'https://images.plot.ly/logo/new-branding/plotly-logomark.png' },
        { name: 'Matplotlib', iconUrl: 'https://matplotlib.org/stable/_images/sphx_glr_logos2_003.png' },
        { name: 'Seaborn', iconUrl: 'https://seaborn.pydata.org/_images/logo-mark-lightbg.svg' },
        { name: 'Tableau', iconUrl: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg' },
        { name: 'Power BI', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' },
        { name: 'Apache Spark', iconUrl: 'https://spark.apache.org/images/spark-logo-trademark.png' }
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
        { name: 'AWS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
        { name: 'Git', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'Docker', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Linux', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
        { name: 'Google Cloud', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
        { name: 'GitHub', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' }
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
                    <img 
                      src={logo.iconUrl} 
                      alt={logo.name}
                      className="w-8 h-8 mb-2 object-contain"
                      onError={(e) => {
                        // Fallback to a generic icon if image fails to load
                        e.currentTarget.style.display = 'none';
                      }}
                    />
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
