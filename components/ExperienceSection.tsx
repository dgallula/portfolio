"use client";

import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Frontend Developer – AikoSearch",
      company: "JMD Process",
      period: "2025",
      location: "Remote",
      type: "Full-time",
      description: "Development of an AI search application allowing users to define their own trusted sources to get highly targeted and professional answers.",
      achievements: [
        "Implementation of Material-UI dropdown with filtering and autocompletion",
        "Creation of GUI loading messages with CSS Shimmer animations",
        "Development of user language selection settings",
        "Implementation of search criteria persistence via REST API"
      ],
      technologies: ["Next.js", "MongoDB", "Python", "Azure", "Material-UI"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Full Stack Developer",
      company: "Davidev (Freelance)",
      period: "2024 - Present",
      location: "Remote",
      type: "Freelance",
      description: "Development and optimization of technological products to improve efficiency and user experience. Extensive experience with Node.js in various projects.",
      achievements: [
        "Development of Bon-voyage.com (complete travel platform)",
        "Development of SWAP platform for trading and exchanges",
        "Development of ShoppingONLINE.com (modern e-commerce)",
        "Performance optimization and user experience improvement"
      ],
      technologies: ["Node.js", "React", "Angular", "MySQL", "MongoDB", "Express"],
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "QA & Full-Stack Developer",
      company: "RetraitePlus",
      period: "01/2023 – 08/2023",
      location: "France",
      type: "Full-time",
      description: "Comprehensive QA testing on 100+ websites and landing pages, optimization and debugging of CRM functionalities to improve task management for sales and technical teams.",
      achievements: [
        "QA testing on over 100 websites and landing pages",
        "Optimization and debugging of CRM functionalities",
        "CRM system improvement to streamline task management",
        "Close collaboration with sales and technical teams"
      ],
      technologies: ["PHP", "jQuery", "JavaScript", "CRM Systems"],
      color: "from-purple-500 to-pink-600"
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">My Experience</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey in Full-Stack development and QA
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-emerald-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-20"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} border-4 border-gray-900`}></div>

                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:border-white/30 transition-all duration-300 group">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-gray-300">
                          <div className="flex items-center space-x-2">
                            <Building2 className="w-4 h-4 text-blue-400" />
                            <span className="font-medium text-blue-400">{exp.company}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-emerald-400" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 md:mt-0 text-right">
                        <div className="flex items-center space-x-2 text-gray-300">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-2 bg-gradient-to-r ${exp.color} text-white`}>
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Main Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <motion.li
                            key={achievementIndex}
                            className="flex items-start space-x-3 text-gray-300"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: (index * 0.1) + (achievementIndex * 0.05) }}
                          >
                            <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-1 bg-white/10 rounded-full text-xs text-blue-400 font-medium border border-blue-400/30"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: techIndex * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;