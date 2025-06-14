import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Crown, Terminal } from 'lucide-react';

const About: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState('');

  const aboutInfo = `
// About Sahaanaasri
const profile = {
  name: "Sahaanaasri S",
  role: "MBA Candidate & Chess Mentor",
  location: "India",
  education: "Pursuing MBA",
  passion: ["Strategic Thinking", "Leadership", "Chess"],
  skills: ["Business Strategy", "Team Leadership", "Chess Coaching"],
  experience: "Chess mentor with expertise in strategic gameplay",
  vision: "To combine business acumen with strategic thinking",
  hobbies: ["Chess", "Reading", "Strategic Games"],
  motto: "Every move matters, both in chess and in life"
};

console.log("Welcome to my portfolio!");
console.log(profile);
  `;

  const handleRun = () => {
    setIsRunning(true);
    setOutput('');
    
    const lines = aboutInfo.trim().split('\n');
    let currentLine = 0;
    
    const typeNextLine = () => {
      if (currentLine < lines.length) {
        setOutput(prev => prev + lines[currentLine] + '\n');
        currentLine++;
        setTimeout(typeNextLine, 100);
      } else {
        setIsRunning(false);
      }
    };
    
    typeNextLine();
  };

  return (
    <section id="about" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-400/50 shadow-lg bg-slate-700">
              <img 
                src="/profile.JPG" 
                alt="Sahaanaasri S" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-6"
          >
            Sahaanaasri S
          </motion.h3>

          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-4">
            About Me
          </h2>
          <p className="text-xl text-blue-200">
            Discover my journey and passion
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-md rounded-lg border border-blue-500/20 overflow-hidden"
          >
            {/* Terminal Header */}
            <div className="bg-slate-900/80 px-4 py-3 flex items-center justify-between border-b border-blue-500/20">
              <div className="flex items-center space-x-2">
                <Terminal size={20} className="text-blue-400" />
                <span className="text-blue-300 font-mono">about.js</span>
              </div>
              <button
                onClick={handleRun}
                disabled={isRunning}
                className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-green-800 text-white rounded text-sm font-semibold transition-colors duration-200"
              >
                <Crown size={16} />
                <span>{isRunning ? 'Running...' : 'Play'}</span>
              </button>
            </div>

            {/* Terminal Content */}
            <div className="p-6">
              <pre className="text-green-400 font-mono text-sm leading-relaxed whitespace-pre-wrap">
                {output || "// Click 'Play' to execute the code and learn about me!"}
              </pre>
              {isRunning && (
                <motion.div
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-2 h-5 bg-green-400 ml-1"
                />
              )}
            </div>
          </motion.div>

          {output && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-12 grid md:grid-cols-2 gap-8"
            >
              <div className="bg-slate-800/30 backdrop-blur-md rounded-lg p-6 border border-blue-500/20">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">My Journey</h3>
                <p className="text-blue-100 leading-relaxed">
                  As an MBA candidate with a passion for strategic thinking, I bring together business acumen 
                  and the analytical mindset developed through years of chess. My journey combines academic 
                  excellence with practical leadership experience.
                </p>
              </div>

              <div className="bg-slate-800/30 backdrop-blur-md rounded-lg p-6 border border-blue-500/20">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Chess Mentoring</h3>
                <p className="text-blue-100 leading-relaxed">
                  Chess has taught me the importance of strategic planning, patience, and calculated risk-taking. 
                  As a chess mentor, I help others develop these crucial life skills while mastering the beautiful 
                  game of chess.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;