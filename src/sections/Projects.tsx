import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import { ExternalLink, Github, Play } from 'lucide-react';
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStore, FaAppStoreIos } from "react-icons/fa6";
const projects = [
  {
    title: 'Image Picker',
    category: 'Flutter Package',
    description: 'Custom image picking solution using raw Dart, Kotlin, and Swift with native platform channels for complete control over native functionality.',
    image: '/images/project-image-picker.jpg',
    technologies: ['Dart', 'Kotlin', 'Swift', 'Platform Channels'],
    github: 'https://github.com/mahmudrafi24/image_picker',
    demo: null,
    playStore: 'https://play.google.com/store/apps/details?id=com.mahmudrafi24.image_picker',
    appStore: 'https://apps.apple.com/us/app/image-picker/id1649892425',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Time Tracker Application',
    category: 'Mobile App',
    description: 'Employee time tracking app with real-time synchronization, audio recording/processing features, and collaborative note sections.',
    image: '/images/project-time-tracker.jpg',
    technologies: ['Flutter', 'Dart', 'WebSockets', 'REST API'],
    github: null,
    playStore: 'https://play.google.com/store/apps/details?id=com.mahmudrafi24.image_picker',
    appStore: 'https://apps.apple.com/us/app/image-picker/id1649892425',
    demo: null,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Salon Go',
    category: 'Mobile App',
    description: 'Cross-platform salon booking app with Google Maps integration, real-time notifications, and seamless booking management.',
    image: '/images/project-salon-go.jpg',
    technologies: ['Flutter', 'Firebase', 'Google Maps', 'Push Notifications'],
    github: null,
    playStore: 'https://play.google.com/store/apps/details?id=com.mahmudrafi24.image_picker',
    appStore: 'https://apps.apple.com/us/app/image-picker/id1649892425',
    demo: 'https://play.google.com/store/apps/details?id=com.salon.go',
    color: 'from-rose-500 to-orange-500',
  },
  {
    title: 'Vlepo',
    category: 'Delivery App',
    description: 'Full-featured delivery app with advanced image handling, custom widgets, real-time tracking, and comprehensive order management.',
    image: '/images/project-vlepo.jpg',
    technologies: ['Flutter', 'GetX', 'REST API', 'SharedPreferences'],
    github: null,
    playStore: 'https://play.google.com/store/apps/details?id=com.mahmudrafi24.image_picker',
    appStore: 'https://apps.apple.com/us/app/image-picker/id1649892425',
    demo: 'https://play.google.com/store/apps/details?id=com.vlepo.alex',
    color: 'from-lime-500 to-green-500',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-bg overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            My Work
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in Flutter development
            and mobile app design.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="relative bg-surface border border-theme-border rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${project.color}`}>
                    {project.category}
                  </div>
                  
                  {/* Action buttons */}
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-surface border border-theme-border rounded-full text-text-primary hover:text-primary hover:border-primary transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-surface border border-theme-border rounded-full text-text-primary hover:text-primary hover:border-primary transition-colors"
                      >
                        <Play className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className='w-full flex items-center justify-between'>
                  <h3 className="font-display text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                    </h3>
                    <div className='flex items-center gap-2'>
                      {project.playStore && (
                        <a href={project.playStore} target="_blank" rel="noopener noreferrer">
                          <BiLogoPlayStore size={20} />
                        </a>
                      )}
                      {project.appStore && (
                        <a href={project.appStore} target="_blank" rel="noopener noreferrer">
                          <FaAppStore size={20} />
                        </a>
                      )}

                    </div>
                  </div>
                  
                  <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/mahmudrafi24"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-all"
          >
            <Github className="w-5 h-5" />
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
