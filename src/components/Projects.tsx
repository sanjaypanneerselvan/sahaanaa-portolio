import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Basic Microbiological techniques",
      description: "Developed a comprehensive platform for analyzing business strategies and market trends using data analytics and visualization tools.",
      technologies: ["Business Intelligence", "Data Analysis", "Strategic Planning"],
      duration: "2024",
      category: "Business Strategy",
      color: "from-blue-500 to-cyan-400",
      githubUrl: "#",
      liveUrl: "#"
    },
    
  ];

  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-4">
            Projects
          </h2>
          <p className="text-xl text-blue-200">
            Showcasing my work and achievements
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-400 hidden md:block"></div>

            <div className="space-y-12">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative ${index % 2 === 0 ? 'md:ml-16' : 'md:mr-16 md:ml-auto'} max-w-2xl`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute ${index % 2 === 0 ? '-left-20' : '-right-20'} top-6 w-4 h-4 rounded-full bg-gradient-to-r ${project.color} border-4 border-slate-900 hidden md:block`}></div>

                  {/* Project card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="bg-slate-800/50 backdrop-blur-md rounded-lg p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-blue-200 mb-3">
                          <div className="flex items-center space-x-1">
                            <Calendar size={16} />
                            <span>{project.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Tag size={16} />
                            <span>{project.category}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-blue-100 mb-4 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 rounded-full text-sm bg-gradient-to-r ${project.color} text-white`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <motion.a
                        href={project.githubUrl}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors duration-200"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </motion.a>
                      <motion.a
                        href={project.liveUrl}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-lg transition-all duration-200`}
                      >
                        <ExternalLink size={16} />
                        <span>View</span>
                      </motion.a>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;