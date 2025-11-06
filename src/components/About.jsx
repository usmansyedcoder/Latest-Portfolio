import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaGraduationCap, 
  FaBriefcase, 
  FaMapMarkerAlt, 
  FaCalendarAlt,
  FaLaptopCode 
} from 'react-icons/fa';

const About = () => {
  const skills = [
    { name: 'Frontend Development', description: 'React, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS' },
    { name: 'Backend Development', description: 'Node.js, Express.js, MongoDB, REST APIs, Authentication' },
    { name: 'Tools & Technologies', description: 'Git, GitHub, VS Code, Postman, Vercel, Render' },
    { name: 'UI/UX Design', description: 'Figma, Responsive Design, User Experience, Prototyping' }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      period: '2019 - 2023',
      description: 'Graduated with honors. Focused on software engineering, algorithms, and web technologies.'
    },
    {
      degree: 'Full Stack Web Development Bootcamp',
      institution: 'Tech Academy',
      period: '2022',
      description: 'Intensive 6-month program covering modern web development technologies and best practices.'
    }
  ];

  const experience = [
    {
      role: 'Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2023 - Present',
      description: 'Developing and maintaining web applications using MERN stack. Collaborating with cross-functional teams to deliver high-quality software solutions.'
    },
    {
      role: 'Frontend Developer Intern',
      company: 'Digital Creations',
      period: '2022 - 2023',
      description: 'Built responsive user interfaces and implemented modern design patterns. Worked with React, Redux, and modern CSS frameworks.'
    },
    {
      role: 'Freelance Web Developer',
      company: 'Self-Employed',
      period: '2021 - 2022',
      description: 'Developed websites and web applications for various clients. Managed projects from conception to deployment.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate full-stack developer with a love for creating beautiful, functional, 
            and user-friendly web applications. Always learning and exploring new technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Personal Info & Skills */}
          <div className="lg:col-span-1 space-y-8">
            {/* Personal Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <FaCode className="w-5 h-5 text-primary-600" />
                Personal Info
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                    <p className="font-medium text-gray-900 dark:text-white">Lahore, Pakistan</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <FaCalendarAlt className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Experience</p>
                    <p className="font-medium text-gray-900 dark:text-white">2+ Years</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <FaBriefcase className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Status</p>
                    <p className="font-medium text-gray-900 dark:text-white">Available for Freelance</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <FaLaptopCode className="w-5 h-5 text-primary-600" />
                What I Do
              </h3>
              
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-l-4 border-primary-500 pl-4 py-1"
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {skill.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Education & Experience */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <FaBriefcase className="w-5 h-5 text-primary-600" />
                Work Experience
              </h3>
              
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8 pb-6 last:pb-0"
                  >
                    <div className="absolute left-0 top-1 w-3 h-3 bg-primary-500 rounded-full border-4 border-white dark:border-gray-800"></div>
                    {index !== experience.length - 1 && (
                      <div className="absolute left-1.5 top-4 w-0.5 h-full bg-gray-300 dark:bg-gray-600"></div>
                    )}
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {exp.role}
                      </h4>
                      <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                        {exp.company}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        {exp.period}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <FaGraduationCap className="w-5 h-5 text-primary-600" />
                Education
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8 pb-6 last:pb-0"
                  >
                    <div className="absolute left-0 top-1 w-3 h-3 bg-primary-500 rounded-full border-4 border-white dark:border-gray-800"></div>
                    {index !== education.length - 1 && (
                      <div className="absolute left-1.5 top-4 w-0.5 h-full bg-gray-300 dark:bg-gray-600"></div>
                    )}
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        {edu.period}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        {edu.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;