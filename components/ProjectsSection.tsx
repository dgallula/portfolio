"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Database, Cloud } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: "AikoSearch",
      company: "JMD Process",
      year: "2025",
      description: "AI search application where users define their own trusted sources to get highly targeted and professional answers tailored to specific industries.",
      technologies: ["Next.js", "MongoDB", "Python", "Azure", "Material-UI"],
      highlights: [
        "User interface with filterable dropdown and autocompletion",
        "GUI loading messages with CSS Shimmer animations",
        "User language selection with context customization",
        "Search criteria persistence via REST API"
      ],
      type: "Professional",
      color: "from-blue-500 to-indigo-600",
      icon: Code
    },
    {
      title: "Bon-Voyage.com",
      year: "2024",
      description: "Complete travel platform with booking system, user management and modern administration interface.",
      technologies: ["Node.js", "React", "MySQL", "Express"],
      highlights: [
        "Real-time booking system",
        "Complete administrator interface",
        "Secure payment management",
        "Responsive and modern design"
      ],
      type: "Freelance",
      color: "from-emerald-500 to-teal-600",
      icon: Database,
      link: "https://github.com/dgallula/projet3_john-bryce-vacations-master"
    },
    {
      title: "Bon Plans Jerusalem",
      year: "2024",
      description: "Local deals and recommendations platform for Jerusalem, featuring curated content and user-friendly interface.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      highlights: [
        "Local business directory",
        "Deal recommendations system",
        "Responsive design",
        "User-friendly navigation"
      ],
      type: "Freelance",
      color: "from-yellow-500 to-orange-600",
      icon: Cloud,
      link: "http://bons-plans-jerusalem.com/"
    },
    {
      title: "ShoppingONLINE.com",
      year: "2024",
      description: "Modern e-commerce with shopping cart, inventory management, secure payments and administrator dashboard.",
      technologies: ["Node.js", "Angular", "MongoDB", "Express"],
      highlights: [
        "Interactive shopping cart",
        "Automated inventory management",
        "Secure payments",
        "Complete administrator dashboard"
      ],
      type: "Freelance",
      color: "from-purple-500 to-pink-600",
      icon: Database,
      link: "https://github.com/dgallula/projet4-jb-shoppingonline-angular-mongodb-master"
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">My Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover my recent achievements and the technologies I've used
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:border-white/30 transition-all duration-300 group h-full">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color}`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                            {project.title}
                          </h3>
                          {project.company && (
                            <p className="text-blue-400 font-medium">{project.company}</p>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-emerald-400 font-semibold">{project.year}</span>
                        <p className="text-xs text-gray-400 mt-1">{project.type}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, highlightIndex) => (
                          <motion.li
                            key={highlightIndex}
                            className="flex items-start space-x-2 text-gray-300 text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: (index * 0.1) + (highlightIndex * 0.1) }}
                          >
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
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

                    {/* Actions */}
                    {project.link && (
                      <div className="flex space-x-3">
                        <Button
                          asChild
                          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                        >
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Project
                          </a>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;