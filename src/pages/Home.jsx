import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import GitHubProjects from '../components/GitHubProjects'; // Replace Projects with GitHubProjects
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <GitHubProjects /> {/* Replace <Projects /> with <GitHubProjects /> */}
      <Contact />
    </div>
  );
};

export default Home;