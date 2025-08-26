"use client";

import { motion } from 'framer-motion';
import { Globe, Star, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const LanguagesSection = () => {
  const languages = [
    {
      name: "English",
      level: "High level",
      flag: "🇺🇸",
      description: "Fluent professional communication, technical documentation, international meetings",
      color: "from-red-500 to-blue-500"
    },
    {
      name: "Hebrew",
      level: "High level", 
      flag: "🇮🇱",
      description: "Excellent professional and personal communication, technical training followed in Hebrew",
      color: "from-blue-500 to-white"
    },
    {
      name: "French",
      level: "Native",
      flag: "🇫🇷",
      description: "Native speaker with perfect mastery of professional and technical communication",
      color: "from-blue-500 to-red-500"
    }
  ];

  const communicationSkills = [
    {
      icon: MessageCircle,
      title: "Technical Communication",
      description: "Ability to explain complex concepts in multiple languages"
    },
    {
      icon: Globe,
      title: "International Collaboration", 
      description: "Experience with multicultural teams and international clients"
    },
    {
      icon: Star,
      title: "Cultural Adaptation",
      description: "Understanding of cultural nuances in professional communication"
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Languages</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Multilingual communication for successful international collaborations
          </p>
        </motion.div>

        {/* Languages Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {languages.map((language, index) => (
            <motion.div
              key={language.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:border-white/30 transition-all duration-300 group h-full">
                <CardContent className="p-6 text-center">
                  {/* Flag and Name */}
                  <div className="mb-6">
                    <motion.div
                      className="text-6xl mb-4 inline-block"
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                    >
                      {language.flag}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">{language.name}</h3>
                    <p className={`text-lg font-semibold bg-gradient-to-r ${language.color} bg-clip-text text-transparent`}>
                      {language.level}
                    </p>
                  </div>


                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {language.description}
                  </p>

                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Communication Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">Communication Skills</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {communicationSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-md border-white/20 hover:border-indigo-400/50 transition-all duration-300 group">
                    <CardContent className="p-6 text-center">
                      <div className="mb-4">
                        <div className="inline-flex p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                        {skill.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {skill.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Language Benefits */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Card className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-md border-white/20">
            <CardContent className="p-8">
              <Globe className="w-12 h-12 mx-auto text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Multilingual Advantage</h3>
              <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
                My mastery of three languages allows me to work effectively with international teams, 
                understand the needs of diverse clients and quickly adapt to different work environments. 
                This multilingual ability facilitates collaboration on multicultural projects and 
                integration into global teams.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default LanguagesSection;