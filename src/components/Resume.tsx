import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Eye } from 'lucide-react';

const Resume: React.FC = () => {
  const handleDownload = () => {
    // Create a link to download the resume
    const link = document.createElement('a');
    link.href = '/Sahaanaa resume placements (1)-1.pdf';
    link.download = 'Sahaanaasri_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    // Open resume in new tab
    window.open('/Sahaanaa resume placements (1)-1.pdf', '_blank');
  };

  return (
    <section id="resume" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-4">
            Resume
          </h2>
          <p className="text-xl text-blue-200">
            Download or view my complete resume
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-md rounded-lg p-8 border border-blue-500/20 text-center"
          >
            <div className="mb-8">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mb-6"
              >
                <FileText size={48} className="text-white" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                Sahaanaasri S - Resume
              </h3>
              
              <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
                Get a comprehensive overview of my educational background, professional experience, 
                skills, and achievements. My resume showcases my journey as an MBA candidate and 
                chess mentor with a focus on strategic thinking and leadership development.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={handleView}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300"
              >
                <Eye size={20} />
                <span>View Resume</span>
              </motion.button>
              
              <motion.button
                onClick={handleDownload}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-2 px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                <Download size={20} />
                <span>Download PDF</span>
              </motion.button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 grid md:grid-cols-3 gap-6"
            >
              <div className="bg-slate-700/30 rounded-lg p-4">
                <h4 className="text-blue-400 font-semibold mb-2">Education</h4>
                <p className="text-blue-100 text-sm">MBA Candidate with strong academic foundation</p>
              </div>
              
              <div className="bg-slate-700/30 rounded-lg p-4">
                <h4 className="text-blue-400 font-semibold mb-2">Experience</h4>
                <p className="text-blue-100 text-sm">Chess mentoring and strategic leadership</p>
              </div>
              
              <div className="bg-slate-700/30 rounded-lg p-4">
                <h4 className="text-blue-400 font-semibold mb-2">Skills</h4>
                <p className="text-blue-100 text-sm">Strategic thinking, leadership, and coaching</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;