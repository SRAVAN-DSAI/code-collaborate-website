
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
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          I'm a passionate full-stack developer with a love for creating beautiful, functional, and user-friendly applications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">My Journey</h3>
          <p className="text-gray-600 leading-relaxed">
            With over 3 years of experience in software development, I've had the privilege of working on diverse projects 
            ranging from small business websites to large-scale enterprise applications. My journey began with a curiosity 
            about how things work behind the scenes of the web.
          </p>
          <p className="text-gray-600 leading-relaxed">
            I specialize in modern web technologies including React, Node.js, TypeScript, and cloud platforms. 
            I'm passionate about writing clean, maintainable code and creating exceptional user experiences.
          </p>
          <p className="text-gray-600 leading-relaxed">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
            or sharing knowledge with the developer community through blog posts and mentorship.
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
