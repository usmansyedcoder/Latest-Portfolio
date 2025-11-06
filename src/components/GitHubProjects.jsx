import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { 
  StarIcon, 
  CodeBracketIcon,
  EyeIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';

const GitHubProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Your GitHub username
  const GITHUB_USERNAME = 'usmansyedcoder';
  const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`;

  // Featured projects - you can customize this list
  const featuredProjects = [
    'mern-portfolio',
    'react-ecommerce',
    'nodejs-api',
    'javascript-projects'
    // Add more project names that you want to feature
  ];

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        setLoading(true);
        const response = await axios.get(GITHUB_API_URL);
        
        // Filter and format the projects
        const formattedProjects = response.data
          .filter(repo => !repo.fork) // Exclude forked repositories
          .map(repo => ({
            id: repo.id,
            title: repo.name,
            description: repo.description || 'No description available',
            githubLink: repo.html_url,
            liveLink: repo.homepage,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            language: repo.language,
            topics: repo.topics || [],
            updatedAt: repo.updated_at,
            isFeatured: featuredProjects.includes(repo.name.toLowerCase())
          }))
          .sort((a, b) => {
            // Sort featured projects first, then by stars
            if (a.isFeatured && !b.isFeatured) return -1;
            if (!a.isFeatured && b.isFeatured) return 1;
            return b.stars - a.stars;
          });

        setProjects(formattedProjects);
      } catch (err) {
        console.error('Error fetching GitHub projects:', err);
        setError('Failed to load projects from GitHub');
        
        // Fallback to sample data if API fails
        setProjects(getSampleProjects());
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubProjects();
  }, []);

  // Sample data in case GitHub API fails
  const getSampleProjects = () => [
    {
      id: 1,
      title: 'MERN Portfolio',
      description: 'A modern portfolio website built with MongoDB, Express, React, and Node.js',
      githubLink: `https://github.com/${GITHUB_USERNAME}/mern-portfolio`,
      liveLink: '',
      stars: 15,
      forks: 3,
      language: 'JavaScript',
      topics: ['react', 'nodejs', 'mongodb', 'express'],
      isFeatured: true
    },
    {
      id: 2,
      title: 'React E-commerce',
      description: 'Full-stack e-commerce application with React and Node.js',
      githubLink: `https://github.com/${GITHUB_USERNAME}/react-ecommerce`,
      liveLink: '',
      stars: 8,
      forks: 2,
      language: 'JavaScript',
      topics: ['react', 'ecommerce', 'mongodb'],
      isFeatured: true
    },
    {
      id: 3,
      title: 'Node.js API',
      description: 'RESTful API built with Node.js, Express and MongoDB',
      githubLink: `https://github.com/${GITHUB_USERNAME}/nodejs-api`,
      liveLink: '',
      stars: 12,
      forks: 4,
      language: 'JavaScript',
      topics: ['nodejs', 'express', 'mongodb', 'api'],
      isFeatured: true
    }
  ];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: 'bg-yellow-400',
      TypeScript: 'bg-blue-600',
      Python: 'bg-green-500',
      Java: 'bg-red-500',
      CSS: 'bg-purple-500',
      HTML: 'bg-orange-500',
      PHP: 'bg-indigo-500',
      Ruby: 'bg-red-600',
      'C++': 'bg-pink-500',
      'C#': 'bg-green-600',
      Go: 'bg-cyan-500',
      Rust: 'bg-orange-600',
      Swift: 'bg-orange-400',
      Kotlin: 'bg-purple-600',
      Dart: 'bg-blue-400',
      Shell: 'bg-gray-500',
      'Vue.js': 'bg-green-400',
    };
    return colors[language] || 'bg-gray-400';
  };

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              GitHub Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Loading projects from GitHub...
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 animate-pulse"
              >
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>
                <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
                <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error && projects.length === 0) {
    return (
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            GitHub Projects
          </h2>
          <p className="text-red-500 mb-4">{error}</p>
          <p className="text-gray-600 dark:text-gray-400">
            Showing sample projects instead.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            GitHub Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Check out my latest projects on GitHub
          </p>
          <motion.a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
          >
            <CodeBracketIcon className="w-5 h-5" />
            View All on GitHub
          </motion.a>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white truncate">
                    {project.title}
                  </h3>
                  {project.isFeatured && (
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">
                      Featured
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Language and Stats */}
                <div className="flex items-center justify-between mb-4">
                  {project.language && (
                    <div className="flex items-center gap-2">
                      <span className={`w-3 h-3 rounded-full ${getLanguageColor(project.language)}`}></span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {project.language}
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <StarIcon className="w-4 h-4" />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CodeBracketIcon className="w-4 h-4" />
                      <span>{project.forks}</span>
                    </div>
                  </div>
                </div>

                {/* Topics */}
                {project.topics.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-xs"
                      >
                        {topic}
                      </span>
                    ))}
                    {project.topics.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-xs">
                        +{project.topics.length - 3}
                      </span>
                    )}
                  </div>
                )}

                {/* Updated Date */}
                {project.updatedAt && (
                  <p className="text-xs text-gray-500 mb-4">
                    Updated {formatDate(project.updatedAt)}
                  </p>
                )}

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <CodeBracketIcon className="w-4 h-4" />
                    Code
                  </a>
                  
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-primary-500 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-primary-600 transition-colors"
                    >
                      <EyeIcon className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {projects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <CodeBracketIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No Projects Found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              No public repositories found for {GITHUB_USERNAME}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default GitHubProjects;