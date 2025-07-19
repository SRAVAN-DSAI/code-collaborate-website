
import { Code, Briefcase, GraduationCap, Award, Target, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '10+', color: 'from-blue-500 to-cyan-500' },
    { icon: Briefcase, label: 'Years of Experience', value: '1', color: 'from-purple-500 to-pink-500' },
    { icon: GraduationCap, label: 'Certifications', value: '3', color: 'from-green-500 to-emerald-500' },
    { icon: TrendingUp, label: 'Success Rate', value: '100%', color: 'from-orange-500 to-red-500' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <span className="w-8 h-px bg-gradient-to-r from-blue-600 to-purple-600"></span>
          <span className="text-blue-600 font-medium text-sm tracking-wider uppercase">About Me</span>
          <span className="w-8 h-px bg-gradient-to-r from-purple-600 to-blue-600"></span>
        </div>
        <h2 className="text-4xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
          Transforming Data into Impact
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          I'm a passionate data scientist and machine learning engineer with a love for transforming complex data into 
          <span className="text-blue-600 font-semibold"> actionable insights</span> and 
          <span className="text-purple-600 font-semibold"> innovative solutions</span>.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
        <div className="space-y-8 order-2 lg:order-1">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent">
              A Data-Driven Odyssey
            </h3>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed text-lg">
                With <span className="font-semibold text-blue-600">1 year of experience</span> in data science and machine learning, 
                I've had the privilege of working on diverse projects, from <span className="font-semibold text-purple-600">predictive modeling</span> to 
                <span className="font-semibold text-green-600"> interactive data visualizations</span>. My journey began with a curiosity about 
                uncovering hidden patterns in data during my B.Tech in Civil Engineering.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                I specialize in <span className="font-semibold text-blue-600">Python</span>, <span className="font-semibold text-green-600">SQL</span>, 
                <span className="font-semibold text-red-600"> PyTorch</span>, <span className="font-semibold text-orange-600">TensorFlow</span>, and data visualization tools like 
                <span className="font-semibold text-purple-600"> Plotly</span> and <span className="font-semibold text-pink-600">Matplotlib</span>. 
                I'm passionate about building robust machine learning models and creating engaging data stories that drive business value.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                When I'm not analyzing data, you can find me exploring emerging AI technologies, contributing to open-source projects, 
                or sharing knowledge with the data science community through <span className="font-semibold text-cyan-600">mentorship</span> and 
                <span className="font-semibold text-indigo-600"> technical writing</span>.
              </p>
            </div>
          </div>

          {/* Professional highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3 bg-blue-50 p-4 rounded-xl">
              <Target className="h-6 w-6 text-blue-600" />
              <div>
                <div className="font-semibold text-blue-900">Goal-Oriented</div>
                <div className="text-sm text-blue-700">Results-driven approach</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-purple-50 p-4 rounded-xl">
              <Users className="h-6 w-6 text-purple-600" />
              <div>
                <div className="font-semibold text-purple-900">Collaborative</div>
                <div className="text-sm text-purple-700">Team-focused mindset</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-green-50 p-4 rounded-xl">
              <TrendingUp className="h-6 w-6 text-green-600" />
              <div>
                <div className="font-semibold text-green-900">Growth-Minded</div>
                <div className="text-sm text-green-700">Continuous learning</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 order-1 lg:order-2">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center card-hover border-0 shadow-lg bg-white/60 backdrop-blur-sm group">
              <CardContent className="p-8">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${stat.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
