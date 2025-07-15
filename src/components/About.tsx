
import { Code, Briefcase, GraduationCap, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '50+' },
    { icon: Briefcase, label: 'Years Experience', value: '3+' },
    { icon: GraduationCap, label: 'Certifications', value: '8' },
    { icon: Award, label: 'Awards Won', value: '5' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
        <p class="text-xl text-gray-400 max-w-3xl mx-auto">
          I'm a passionate data scientist and machine learning engineer with a love for transforming complex data into actionable insights and innovative solutions.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div class="space-y-6">
          <h3 class="text-2xl font-bold">A Data-Driven Odyssey</h3>
          <p class="text-gray-400 leading-relaxed">
            With 1 year of experience in data science and machine learning, I've had the privilege of working on diverse projects, from predictive modeling to interactive data visualizations. My journey began with a curiosity about uncovering hidden patterns in data during my B.Tech in Civil Engineering.
          </p>
          <p class="text-gray-400 leading-relaxed">
            I specialize in Python, SQL, PyTorch, TensorFlow, and data visualization tools like Plotly and Matplotlib. I'm passionate about building robust machine learning models, deep learning architectures, and creating engaging data stories that drive business value.
          </p>
          <p class="text-gray-400 leading-relaxed">
            When I'm not analyzing data, you can find me exploring emerging AI technologies, contributing to open-source projects, or sharing knowledge with the data science community through mentorship and technical writing.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-blue-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
