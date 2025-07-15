
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Tech University',
      location: 'Mumbai, India',
      period: '2017 - 2021',
      grade: 'CGPA: 8.5/10',
      description: 'Specialized in Software Engineering and Web Development. Active member of coding club and tech societies.',
      achievements: [
        'Dean\'s List for 3 consecutive semesters',
        'Best Project Award for Final Year Project',
        'Led University Coding Club'
      ]
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-CSA-2023-001'
    },
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2022',
      credentialId: 'GCP-PD-2022-156'
    },
    {
      name: 'Meta Frontend Developer Professional',
      issuer: 'Meta (Facebook)',
      date: '2022',
      credentialId: 'META-FE-2022-789'
    },
    {
      name: 'MongoDB Developer Certification',
      issuer: 'MongoDB University',
      date: '2021',
      credentialId: 'MDB-DEV-2021-234'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          My academic background and professional certifications that keep me up-to-date with industry standards.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Education */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 flex items-center">
            <GraduationCap className="h-6 w-6 mr-2 text-blue-600" />
            Education
          </h3>
          
          {education.map((edu, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
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
                  <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
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
          
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900">{cert.name}</h4>
                    <Badge variant="outline" className="text-xs">
                      {cert.date}
                    </Badge>
                  </div>
                  <p className="text-blue-600 font-medium mb-1">{cert.issuer}</p>
                  <p className="text-xs text-gray-500">Credential ID: {cert.credentialId}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
