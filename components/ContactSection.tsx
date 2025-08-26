"use client";

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone, MapPin, Send, Star, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success("Message sent successfully! I will reply to you soon.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dgallula@gmail.com",
      href: "mailto:dgallula@gmail.com",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/gallula-david-1671b0227",
      href: "https://www.linkedin.com/in/gallula-david-1671b0227/",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "/dgallula",
      href: "https://github.com/dgallula",
      color: "from-gray-700 to-gray-900"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Israel / Remote",
      href: null,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const recommendation = {
    name: "Raphel Ben Hamou",
    title: "Co-Founder @ Rivalyze",
    location: "Rosh HaAyin",
    phone: "0547551536",
    testimonial: "David is a talented developer with an excellent technical approach and great adaptability. His motivation and professionalism make him a valuable asset to any team."
  };

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how I can help you
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:border-white/30 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                      placeholder="Subject of your message"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 resize-none"
                      placeholder="Describe your project or need..."
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Recommendation */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Contact Information */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <motion.div
                        key={info.label}
                        className="group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white/5 transition-all duration-200">
                          <div className={`p-3 bg-gradient-to-r ${info.color} rounded-lg`}>
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-300 text-sm font-medium">{info.label}</p>
                            {info.href ? (
                              <a
                                href={info.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-blue-400 transition-colors font-medium"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-white font-medium">{info.value}</p>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Recommendation */}
            <Card className="bg-gradient-to-br from-emerald-500/20 to-blue-500/20 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                  <h3 className="text-2xl font-bold text-white">Recommendation</h3>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <User className="w-5 h-5 text-emerald-400" />
                      <h4 className="text-xl font-semibold text-white">{recommendation.name}</h4>
                    </div>
                    <p className="text-emerald-400 font-medium">{recommendation.title}</p>
                    <p className="text-gray-300 text-sm">{recommendation.location}</p>
                    <p className="text-gray-300 text-sm">{recommendation.phone}</p>
                  </div>
                  
                  <blockquote className="text-gray-300 italic leading-relaxed border-l-4 border-emerald-400 pl-4">
                    "{recommendation.testimonial}"
                  </blockquote>
                </motion.div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md border-white/20">
              <CardContent className="p-6 text-center">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-4 h-4 bg-green-400 rounded-full mx-auto mb-3"></div>
                  <h4 className="text-lg font-semibold text-white mb-2">Available for new projects</h4>
                  <p className="text-gray-300 text-sm">
                    I am currently open to collaboration opportunities
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md border-white/20">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold text-white mb-4">Let's create something incredible together</h3>
              <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
                Whether it's for a web project, mobile application or custom solution, 
                I'm here to transform your ideas into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
                >
                  <a href="mailto:dgallula@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Discuss your project
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3"
                >
                  <a href="https://www.linkedin.com/in/gallula-david-1671b0227/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 mr-2" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;