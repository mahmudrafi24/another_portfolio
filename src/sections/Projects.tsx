import { useState } from 'react';
import { ArrowUpRight, Github, Smartphone } from 'lucide-react';

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
    image: '/images/YogawithJen.jpg',
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
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Flutter Package', ...new Set(projects.filter(project => project.category !== 'Flutter Package').map(project => project.category))];
  const visibleProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter);
  return (
    <section id="projects" className="portfolio-section">
      <div className="section-container">
        <header className="section-heading">
          <span className="section-kicker">My Work</span>
          <h2>Featured <span className="text-gradient">Projects</span></h2>
          <p>Here are some of my recent projects that showcase my skills in Flutter development
            and mobile app design.</p>
        </header>
        <div className="project-filters" role="group" aria-label="Filter projects by category">
          {filters.map(category => <button key={category} aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}</button>)}
        </div>
        <p className="sr-only" role="status">{visibleProjects.length} projects shown</p>
        <div className="project-grid">
          {visibleProjects.map(project => <article className="project-card" key={project.title}>
            <div className="project-image"><img src={project.image} alt={project.title} loading="lazy" /><span>{project.category}</span></div>
            <div className="project-content">
              <div className="project-technologies">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer"><Github size={15} />GitHub<ArrowUpRight size={14} /></a>}
                {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo<ArrowUpRight size={14} /></a>}
                {project.playStore && <a href={project.playStore} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on Google Play`}><Smartphone size={15} />Google Play<ArrowUpRight size={14} /></a>}
                {project.appStore && <a href={project.appStore} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on App Store`}>App Store<ArrowUpRight size={14} /></a>}
              </div>
            </div>
          </article>)}
        </div>
        <div className="section-action"><a className="portfolio-button secondary" href="https://github.com/mahmudrafi24" target="_blank" rel="noopener noreferrer"><Github size={17} />View All Projects<ArrowUpRight size={16} /></a></div>
      </div>
    </section>
  );
}
