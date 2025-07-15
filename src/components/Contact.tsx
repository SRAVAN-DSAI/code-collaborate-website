
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8374147548',
      href: 'tel:+918374147548'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'sravankodari4@gmail.com',
      href: 'mailto:sravankodari4@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, India',
      href: '#'
    }
  ];

  return (
    <div id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
          Ready to collaborate on data science projects? Let's discuss how we can work together to turn your data into valuable insights.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
            <p className="text-blue-100 mb-8">
              I'm always interested in hearing about new opportunities and exciting data science projects. 
              Whether you have a question about machine learning, need help with data analysis, or just want to say hi, feel free to reach out!
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
            <h4 className="text-lg font-semibold text-white mb-4">What I Bring:</h4>
            <ul className="space-y-2 text-blue-100">
              <li>• Advanced Machine Learning & Deep Learning expertise</li>
              <li>• Data Science and Analytics experience</li>
              <li>• Python, PyTorch, TensorFlow proficiency</li>
              <li>• Cloud computing with AWS</li>
              <li>• Research-oriented approach to problem solving</li>
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
          <CardContent>
            <form action="https://formspree.io/f/mvgrzqoj" method="POST" className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Name
                </label>
                <Input 
                  name="name"
                  placeholder="Your Name" 
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Email
                </label>
                <Input 
                  type="email" 
                  name="email"
                  placeholder="your@email.com" 
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <Textarea 
                  name="message"
                  placeholder="Tell me about your project or how I can help..." 
                  rows={4}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                />
              </div>

              <Button type="submit" className="w-full bg-white text-blue-600 hover:bg-blue-50">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
