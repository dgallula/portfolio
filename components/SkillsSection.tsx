"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React" },
        { name: "Next.js" },
        { name: "TypeScript" },
        { name: "Angular" }
      ]
    },
    {
      title: "Backend",
      color: "from-emerald-500 to-green-500",
      skills: [
        { name: "Java Spring Boot" },
        { name: "Python" },
        { name: "Node.js" },
        { name: "Express.js" }
      ]
    },
    {
      title: "Database",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "MongoDB" },
        { name: "MySQL" },
        { name: "SQL Server" },
        { name: "PostgreSQL" }
      ]
    },
    {
      title: "Cloud & DevOps",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Azure" },
        { name: "AWS" },
        { name: "Docker" },
        { name: "Git" }
      ]
    }
  ];

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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">My Skills</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            An overview of my technical skills and expertise level in each domain
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
            >
              <Card className="bg-white/90 dark:bg-white/10 backdrop-blur-md border-gray-200 dark:border-white/20 hover:border-blue-400 dark:hover:border-white/30 transition-all duration-300 group h-full">
                <CardContent className="p-6">
                  <div className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${category.color} text-white font-semibold mb-6`}>
                    {category.title}
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="group/skill"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      >
                        <div className="flex items-center space-x-3 p-3 bg-white/5 dark:bg-white/5 rounded-lg hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-200">
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`}></div>
                          <span className="text-gray-900 dark:text-white font-medium group-hover/skill:text-blue-400 transition-colors">
                            {skill.name}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Programming Principles */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-500/20 dark:to-purple-500/20 backdrop-blur-md border-gray-200 dark:border-white/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Programming Principles</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {['OOP', 'SOLID', 'Design Patterns', 'Singleton', 'Factory', 'Observer'].map((principle, index) => (
                  <motion.span
                    key={principle}
                    className="px-4 py-2 bg-white dark:bg-white/10 rounded-full text-blue-600 dark:text-blue-400 font-medium border border-blue-200 dark:border-blue-400/30"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {principle}
                  </motion.span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;