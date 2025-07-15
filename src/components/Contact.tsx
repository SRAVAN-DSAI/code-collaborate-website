
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sravan@example.com',
      href: 'mailto:sravan@example.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'New York, NY',
      href: '#'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
          Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
            <p className="text-blue-100 mb-8">
              I'm always interested in hearing about new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>

          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-blue-100 text-sm">{item.label}</p>
                  <a 
                    href={item.href}
                    className="text-white font-medium hover:text-blue-200 transition-colors"
                  >
                    {item.value}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <h4 className="text-lg font-semibold text-white mb-4">Why Work With Me?</h4>
            <ul className="space-y-2 text-blue-100">
              <li>• 3+ years of professional experience</li>
              <li>• Full-stack development expertise</li>
              <li>• Responsive and modern designs</li>
              <li>• Clean, maintainable code</li>
              <li>• Timely project delivery</li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Send me a message</CardTitle>
            <CardDescription className="text-blue-100">
              Fill out the form below and I'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  First Name
                </label>
                <Input 
                  placeholder="John" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Last Name
                </label>
                <Input 
                  placeholder="Doe" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Email
              </label>
              <Input 
                type="email" 
                placeholder="john@example.com" 
                className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Subject
              </label>
              <Input 
                placeholder="Project inquiry" 
                className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Message
              </label>
              <Textarea 
                placeholder="Tell me about your project..." 
                rows={4}
                className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
              />
            </div>

            <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
