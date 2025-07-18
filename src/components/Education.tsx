
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Education = () => {
  const education = [
    {
      degree: 'M.Tech. Aerospace Engineering',
      institution: 'Indian Institute of Technology Bombay',
      location: 'Mumbai, India',
      period: '2024 - 2026',
      grade: 'Ongoing',
      description: 'Pursuing advanced studies with focus on computational methods and data-driven approaches in aerospace engineering.',
      achievements: [
        'Advanced Machine Learning applications',
        'Numerical Methods and Computational Fluid Dynamics',
        'Data-Driven Design methodologies',
        'Research in ML applications for aerospace systems'
      ]
    },
    {
      degree: 'B.Tech. Civil Engineering',
      institution: 'Sreenidhi Institute of Science & Technology',
      location: 'Hyderabad, India',
      period: '2019 - 2023',
      grade: 'Graduated',
      description: 'Built strong foundation in analytical thinking, problem-solving, and quantitative methods essential for data science.',
      achievements: [
        'Strong analytical and problem-solving skills',
        'Quantitative methods and statistical analysis',
        'Mathematical modeling and computational thinking',
        'Engineering principles applied to data problems'
      ]
    }
  ];

  const courses = [
    {
      name: 'Foundation of Machine Learning (CS 725)',
      year: '2024',
      institution: 'Indian Institute of Technology Bombay',
      location: 'Mumbai, India',
      description: 'Advanced course covering theoretical foundations and practical applications of machine learning algorithms.'
    },
    {
      name: 'AI and Data Science (PH 227)',
      year: '2024',
      institution: 'Indian Institute of Technology Bombay',
      location: 'Mumbai, India',
      description: 'Comprehensive course integrating artificial intelligence concepts with data science methodologies.'
    }
  ];

  const certifications = [
    {
      name: 'Applied Data Science Lab',
      issuer: 'WorldQuant University',
      date: 'June 2025',
      credentialUrl: 'https://www.credly.com/badges/8e07e8f3-8c91-4462-b350-0e0dc9caba5f'
    },
    {
      name: 'Deep Learning for Computer Vision',
      issuer: 'WorldQuant University',
      date: 'April 2025',
      credentialUrl: 'https://www.credly.com/badges/cfcd0d66-6e06-4797-899f-8989b851f672'
    },
    {
      name: 'Artificial Intelligence Foundations',
      issuer: 'Teachnook x IIT Roorkee',
      date: 'August 2024',
      certificateId: 'TNCC1552',
      credentialUrl: 'https://drive.google.com/file/d/1mytswfPrwDrPbP1bqcsMsIB6VTrLLQb8/view?usp=drive_link'
    }
  ];

  return (
    <div id="education" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Learning</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          My academic journey, professional certifications, and continuous learning that keeps me updated with the latest in data science and AI.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Education */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 flex items-center">
            <GraduationCap className="h-6 w-6 mr-2 text-blue-600" />
            Education
          </h3>
          
          {education.map((edu, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{edu.degree}</CardTitle>
                <CardDescription className="text-lg font-medium text-blue-600">
                  {edu.institution}
                </CardDescription>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {edu.period}
                  </div>
                  <div className="font-medium text-green-600">{edu.grade}</div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-600">{edu.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Focus Areas:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {edu.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 flex items-center">
            <Award className="h-6 w-6 mr-2 text-blue-600" />
            Certifications
          </h3>
          
          <div id="certifications" className="space-y-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-500">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900">{cert.name}</h4>
                    <Badge variant="outline" className="text-xs bg-purple-50 text-purple-700 border-purple-200">
                      {cert.date}
                    </Badge>
                  </div>
                  <p className="text-blue-600 font-medium mb-3">{cert.issuer}</p>
                  <div className="flex items-center justify-end">
                    <a 
                      href={cert.credentialUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-800 underline hover:no-underline transition-all"
                    >
                      View Credential →
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-gray-900 flex items-center mb-8">
          <BookOpen className="h-6 w-6 mr-2 text-blue-600" />
          Specialized Courses
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-indigo-500 group">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    {/* IIT Bombay Logo */}
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">IIT</span>
                    </div>
                    <Badge variant="outline" className="text-xs bg-indigo-50 text-indigo-700 border-indigo-200">
                      {course.year}
                    </Badge>
                  </div>
                </div>
                
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {course.name}
                </h4>
                
                <p className="text-blue-600 font-medium text-sm mb-2">{course.institution}</p>
                <p className="text-gray-500 text-sm mb-3">{course.location}</p>
                
                <p className="text-gray-600 text-sm leading-relaxed">{course.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Skills Stats */}
      <div className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Learning Journey Stats</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">10+</div>
            <div className="text-gray-600 text-sm">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">1</div>
            <div className="text-gray-600 text-sm">Year of Learning</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
            <div className="text-gray-600 text-sm">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">2</div>
            <div className="text-gray-600 text-sm">IIT Courses</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-gray-600 text-sm">Commitment</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
