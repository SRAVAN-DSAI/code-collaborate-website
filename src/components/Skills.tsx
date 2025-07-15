
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming & Data Analysis',
      skills: ['Python', 'SQL', 'Data Analysis', 'Machine Learning', 'Deep Learning', 'Automation']
    },
    {
      title: 'ML/DL Frameworks',
      skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Keras', 'Neural Networks', 'Model Development']
    },
    {
      title: 'Data Visualization & Big Data',
      skills: ['Plotly', 'Matplotlib', 'Seaborn', 'PySpark', 'Big Data Processing', 'Dashboard Creation']
    },
    {
      title: 'Cloud & Tools',
      skills: ['AWS', 'S3', 'EC2', 'Git', 'Version Control', 'Cloud Computing', 'Collaboration']
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
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary" 
                    className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                  >
                    {skill}
                  </Badge>
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
