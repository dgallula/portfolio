"use client";

import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const highlights = [
    {
      icon: Briefcase,
      title: "3+ Years Experience",
      description: "Combining freelance and salaried work in Full-Stack development"
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description: "Python ML courses, AWS DevOps, and John Bryce certification (90/100)"
    },
    {
      icon: Heart,
      title: "Innovation Passion",
      description: "Integration of AI tools (Cursor, Claude) in development workflows"
    }
  ];

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate developer with solid technical expertise and constant motivation for innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-white/90 dark:bg-white/10 backdrop-blur-md border-gray-200 dark:border-white/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">My Journey</h3>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>
                    Full-Stack Developer specialized in frontend, I started my journey in 2022 
                    with comprehensive training at John Bryce College where I achieved a 90/100 average.
                  </p>
                  <p>
                    Since then, I've gained 3 years of combined experience between freelance projects 
                    and salaried positions, developing expertise in React, Next.js, Node.js, PHP and MongoDB.
                  </p>
                  <p>
                    I specialize in integrating AI tools (Cursor, Claude) to optimize development workflows, 
                    while continuously learning Python ML, Azure and Java.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 dark:bg-white/10 backdrop-blur-md border-gray-200 dark:border-white/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">My Vision</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  I believe in creating solutions that improve user experience and business efficiency. 
                  My approach combines technical excellence with innovation to deliver quality products.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-gradient-to-r from-blue-500/20 to-emerald-500/20 backdrop-blur-md border-white/20 hover:border-blue-400/50 transition-all duration-300 group-hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-2">
                            {highlight.title}
                          </h4>
                          <p className="text-gray-300">
                            {highlight.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Education Timeline */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">Education & Certifications</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                  <span className="text-blue-400 font-semibold">2024</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Python Course – Machine Learning</h4>
                <p className="text-gray-300">AWS for DevOps with Yaniv Arad</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <GraduationCap className="w-6 h-6 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">2022</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Full Stack Development Course</h4>
                <p className="text-gray-300">John Bryce College (GPA: 90/100)</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;