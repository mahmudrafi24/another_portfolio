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
    playStore: null,
    appStore: null,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Alpha Track',
    category: 'HR Management App',
    description: 'Employee time tracking app with real-time synchronization, audio recording/processing features, and collaborative note sections.',
    image: '/images/AlphaTrack.jpg',
    technologies: ['Flutter', 'Dart', 'WebSockets', 'REST API'],
    github: null,
    playStore: 'https://play.google.com/store/apps/details?id=com.mahmudrafi24.image_picker',
    appStore: 'https://apps.apple.com/us/app/image-picker/id1649892425',
    demo: null,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Sanaeya',
    category: 'Workshop Management App',
    description: 'The Senaeya App is an integrated system for managing and operating workshops and auto maintenance centers is fully functional without any additional hardware or software . ',
    image: '/images/Senaeya.jpg',
    technologies: ['Flutter', 'Dart', 'Provider', 'Push Notification', 'VIN Decoder', 'Finger Print Recongnize'    ],
    github: null,
    playStore: 'https://play.google.com/store/apps/details?id=com.fahadalfayez.senaeya&hl=en-US',
    appStore: 'https://apps.apple.com/us/app/senaeya-%D8%A7%D9%84%D8%B5%D9%86%D8%A7%D8%B9%D9%8A%D8%A9/id6756404472',
    demo: null,
    color: 'from-sky-500 to-indigo-500',
  },
  {
    title: 'Deliverly',
    category: 'Devlivery App',
    description: 'Deliverly connects people who need to send items with couriers ready to deliver. The app makes it easy to create delivery requests, match with available couriers, and complete deliveries quickly and securely.',
    image: '/images/Deliverly.jpg',
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST API','Google Maps', 'Push Notifications', 'Twilio'],
    github: null,
    playStore: 'https://play.google.com/store/apps/details?id=com.ivan.delivery&pcampaignid=web_share',
    appStore: 'https://apps.apple.com/us/app/deliverly-%D7%9E%D7%A9%D7%9C%D7%95%D7%97%D7%99%D7%9D-%D7%A2%D7%9C-%D7%94%D7%93%D7%A8%D7%9A/id6753113179',
    demo: null,
    color: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Salon Go',
    category: 'Salon Booking App',
    description: 'Cross-platform salon booking app with Google Maps integration, real-time notifications, and seamless booking management.',
    image: '/images/project-salon-go.jpg',
    technologies: ['Flutter', 'Firebase', 'Google Maps', 'Push Notifications'],
    github: null,
    playStore: 'https://play.google.com/store/apps/details?id=com.mahmudrafi24.image_picker',
    appStore: null,
    demo: null,
    color: 'from-rose-500 to-orange-500',
  },
   {
    title: 'Project Finder',
    category: 'Real Estate App',
    description: 'A subscription-based B2B app for real estate professionals, designed to connect agents with verified developers and manage projects through paid access',
    image: '/images/projectFinder.jpg',
    technologies: ['Dart', 'Flutter', 'Platform Channels', 'Provider', 'Firebase', 'Stripe'],
    github: null,
    playStore: 'https://play.google.com/store/apps/details?id=com.projectfinderllc.projectfinder',
    appStore: 'https://apps.apple.com/za/app/project-finder-app/id6754875552',
    demo: null,
    color: 'from-fuchsia-500 to-purple-500',
  },
  {
    title: 'Yoga with Jen',
    category: 'Yoga App',
    description: 'Yoga With Jen - Personalized Yoga for Flexibility, Stress Relief & Mind-Body Wellness',
    image: 'public/images/YogawithJen.jpg',
    technologies: ['Flutter', 'GetX', 'Firebase', 'Google Maps'],
    github: null,
    playStore: 'https://play.google.com/store/apps/details?id=com.yoga.users',
    appStore: null,
    demo: null,
    color: 'from-teal-500 to-emerald-500',
  },
  {
    title: 'Vlepo',
    category: 'Delivery App',
    description: 'Full-featured delivery app with advanced image handling, custom widgets, real-time tracking, and comprehensive order management.',
    image: '/images/project-vlepo.jpg',
    technologies: ['Flutter', 'GetX', 'REST API', 'SharedPreferences'],
    github: null,
    playStore: 'https://play.google.com/store/apps/details?id=com.mahmudrafi24.image_picker',
    appStore: null,
    demo: null,
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group h-full"
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="relative bg-surface border border-theme-border rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 h-full flex flex-col"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden flex-shrink-0">
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
                <div className="p-6 flex flex-col flex-grow">
                  <div className='w-full flex items-center justify-between'>
                  <h3 className="font-display text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                    </h3>
                    <div className='flex items-center gap-2 flex-shrink-0'>
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
                  <div className="flex gap-2 overflow-x-auto flex-nowrap mt-auto pb-1 scrollbar-thin">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20 whitespace-nowrap flex-shrink-0"
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
