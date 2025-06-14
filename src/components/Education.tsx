import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: "Master of Business Administration (MBA)",
      institution: "PSG INSTITUTE OF MANAGEMNET ",
      duration: "2025 - 2027",
      location: "India",
      description: "Specializing in Strategic Management and Leadership Development",
      achievements: ["Dean's List", "Leadership Excellence Award", "Strategic Planning Project Lead"],
      color: "from-blue-500 to-cyan-400"
    },
    {
      degree: "Bachelor's Degree -Microbiology ",
      institution: "PSG COLLEGE OF ARTS & SCIENCE",
      duration: "2021 - 2024",
      location: "India",
      description: "Foundation in Micro Biology  and analytical thinking",
      achievements: ["Graduated with 7.5 cgpa", "Student Council Member", "Academic Excellence"],
      color: "from-purple-500 to-pink-400"
    },
    {
      degree: "Chess ",
      location: "India",
      description: "Advanced chess coaching and mentoring ",
      achievements: ["Certified Chess Instructor", "State level player", "Youth Mentor","1416 rating"],
      color: "from-green-500 to-teal-400"
    }
  ];

  return (
    <section id="education" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-4">
            Education
          </h2>
          <p className="text-xl text-blue-200">
            My academic journey and achievements
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-400"></div>

            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-12 ml-16"
              >
                {/* Timeline dot */}
                <div className={`absolute -left-20 top-6 w-4 h-4 rounded-full bg-gradient-to-r ${edu.color} border-4 border-slate-900`}></div>

                {/* Education card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-slate-800/50 backdrop-blur-md rounded-lg p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${edu.color}`}>
                        <GraduationCap size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                        <p className="text-blue-300 font-semibold">{edu.institution}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-blue-200">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <p className="text-blue-100 mb-4">{edu.description}</p>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-blue-300">
                      <Award size={16} />
                      <span className="font-semibold">Key Achievements:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, achIndex) => (
                        <span
                          key={achIndex}
                          className={`px-3 py-1 rounded-full text-sm bg-gradient-to-r ${edu.color} text-white`}
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;