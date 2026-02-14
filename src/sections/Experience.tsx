import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const experiences = [
  {
    title: 'Jr. Flutter Developer',
    company: 'Sparktech Agency',
    location: 'Mohakhali, Dhaka',
    period: 'February 2025 - Present',
    description: [
      'Flutter/Dart development of parcel delivery, Time Tracker (audio recording/processing), and Salon booking apps across iOS and Android platforms',
      'Integrated Firebase (Auth, Firestore, Cloud Functions) for real-time data synchronization and authentication',
      'Reduced load times by 30% via optimized queries and efficient state management using GetX, RxDart, and Provider',
      'Implemented RESTful APIs and WebSockets for seamless real-time data sync between mobile clients and backend services',
      'Built native platform channels using Kotlin (Android) and Swift (iOS) for custom functionality',
    ],
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    title: 'Python Trainer',
    company: 'ICT Division of Bangladesh',
    location: 'Dhaka, Bangladesh',
    period: 'January 2024 - January 2025',
    description: [
      'Mentored 70+ trainees on fundamental Python concepts including data types, loops, functions, and error handling',
      'Guided trainees in connecting Python with MySQL databases, executing SQL queries, and managing data',
      'Helped participants develop console-based applications integrating Python with database operations',
      'Taught GUI application development using Tkinter for practical project building',
    ],
    color: 'from-lime-500 to-green-500',
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-surface overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
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
            My Journey
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20 md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              variants={itemVariants}
              className={`relative mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:pr-[50%]' : 'md:pl-[50%]'
              }`}
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.5 + index * 0.2, type: 'spring' }}
                className="absolute left-4 md:left-1/2 w-4 h-4 bg-surface border-4 border-primary rounded-full z-10 md:-translate-x-1/2"
              />

              {/* Card */}
              <div
                className={`ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                }`}
              >
                <motion.div
                  whileHover={{ y: -5, boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)' }}
                  className="bg-bg border border-theme-border rounded-2xl p-6 lg:p-8 shadow-card transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center`}>
                          <Briefcase className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-display text-xl font-bold text-text-primary">
                          {exp.title}
                        </h3>
                      </div>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="inline-flex items-center gap-1 text-sm text-text-secondary">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm text-text-secondary">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.7 + index * 0.2 + i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-text-secondary">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
