import React from 'react';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  CodeBracketIcon,
  HomeIcon,
  UserIcon,
  CogIcon,
  RectangleGroupIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: CodeBracketIcon,
      url: 'https://github.com/muhammadusman',
      color: 'hover:text-gray-300'
    },
    {
      name: 'Email',
      icon: EnvelopeIcon,
      url: 'mailto:usman@example.com',
      color: 'hover:text-red-400'
    },
    {
      name: 'Phone',
      icon: PhoneIcon,
      url: 'tel:+923001234567',
      color: 'hover:text-green-400'
    },
    {
      name: 'Location',
      icon: MapPinIcon,
      url: '#',
      color: 'hover:text-blue-400'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home', icon: HomeIcon },
    { name: 'About', href: '#about', icon: UserIcon },
    { name: 'Skills', href: '#skills', icon: CogIcon },
    { name: 'Projects', href: '#projects', icon: RectangleGroupIcon },
    { name: 'Contact', href: '#contact', icon: ChatBubbleLeftRightIcon }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <CodeBracketIcon className="w-8 h-8 text-primary-400" />
              <span className="text-2xl font-bold">Muhammad Usman</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Full Stack Developer crafting digital experiences with modern technologies.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className={`p-2 bg-gray-800 rounded-lg transition-all duration-300 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-primary-400">Quick Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="flex items-center gap-3 text-gray-300 hover:text-primary-400 transition-colors group w-full text-left"
                  >
                    <link.icon className="w-4 h-4" />
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-primary-400">What I Do</h3>
            <ul className="space-y-2 text-gray-300">
              {[
                'Frontend Development',
                'Backend Development',
                'Responsive Design',
                'API Integration',
                'Database Design',
                'Performance Optimization'
              ].map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-primary-400">Let's Connect</h3>
            <div className="space-y-4 text-gray-300">
              <p>Have a project in mind? Let's discuss how we can work together to bring your ideas to life.</p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <EnvelopeIcon className="w-4 h-4 text-primary-400" />
                  <span>usman@example.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneIcon className="w-4 h-4 text-primary-400" />
                  <span>+92 300 1234567</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPinIcon className="w-4 h-4 text-primary-400" />
                  <span>Lahore, Pakistan</span>
                </div>
              </div>

              <motion.a
                href="#contact"
                onClick={() => scrollToSection('#contact')}
                whileHover={{ scale: 1.05 }}
                className="inline-block bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg transition-colors font-medium mt-4"
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              © {currentYear} Muhammad Usman. All rights reserved.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-1 mt-2 md:mt-0"
            >
              Crafted with 
              <span className="text-red-500">❤️</span>
              using React & Tailwind CSS
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;