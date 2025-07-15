
import { Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'Remote',
      period: '2022 - Present',
      description: 'Led development of scalable web applications serving 100k+ users. Implemented microservices architecture and improved system performance by 40%.',
      technologies: ['React', 'Node.js', 'AWS', 'MongoDB', 'TypeScript'],
      achievements: [
        'Reduced application load time by 60%',
        'Led a team of 4 developers',
        'Implemented CI/CD pipeline'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupHub Inc.',
      location: 'New York, NY',
      period: '2021 - 2022',
      description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with design team to create responsive user interfaces.',
      technologies: ['React', 'Express.js', 'PostgreSQL', 'Docker'],
      achievements: [
        'Delivered 15+ client projects',
        'Improved code quality with testing',
        'Mentored junior developers'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency Pro',
      location: 'San Francisco, CA',
      period: '2020 - 2021',
      description: 'Specialized in creating responsive web applications and landing pages. Worked closely with UX/UI designers to implement pixel-perfect designs.',
      technologies: ['JavaScript', 'Vue.js', 'SASS', 'Webpack'],
      achievements: [
        'Built 20+ responsive websites',
        'Improved user engagement by 35%',
        'Optimized website performance'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          My professional journey and the exciting projects I've worked on.
        </p>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-xl text-gray-900">{exp.title}</CardTitle>
                  <CardDescription className="text-lg font-medium text-blue-600">
                    {exp.company}
                  </CardDescription>
                </div>
                <div className="flex flex-col md:items-end space-y-1">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {exp.period}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    {exp.location}
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-gray-600">{exp.description}</p>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Experience;
