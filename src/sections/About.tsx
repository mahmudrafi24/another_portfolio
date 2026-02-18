import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, Download } from 'lucide-react';

const personalDetails = [
  { icon: Mail, label: 'Email', value: 'work.rafi.mahmud@gmail.com', href: 'mailto:work.rafi.mahmud@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+880 1799-951107', href: 'tel:+8801799951107' },
  { icon: MapPin, label: 'Address', value: 'Dhaka Division, Bangladesh', href: '#' },
  { icon: Globe, label: 'Website', value: 'modachermahmudrafi.vercel.app', href: 'https://modachermahmudrafi.vercel.app' },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-bg overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative"
          >
            <div className="relative">
              {/* Background shapes */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-8 -left-8 w-full h-full border-2 border-dashed border-primary/20 rounded-3xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-card-hover border border-theme-border">
                <img
                  src="/images/Portfolio_Image.png"
                  alt="About Md. Modacher Mahmud Rafi"
                  className="w-full aspect-square object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
              </div>

              {/* Experience badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
                className="absolute -bottom-6 -right-6 bg-surface border border-theme-border rounded-2xl shadow-card p-6"
              >
                <div className="text-center">
                  <span className="block text-4xl font-bold text-gradient">1.5+</span>
                  <span className="text-sm text-text-secondary">Years Experience</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                About Me
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6"
            >
              I am{' '}
              <span className="text-gradient">Md. Modacher Mahmud Rafi</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-text-secondary text-lg leading-relaxed mb-8"
            >
              I am a Junior Flutter Developer at Sparktech Agency with expertise in building
              cross-platform mobile applications. I specialize in Flutter, Dart, Firebase
              integration, and API development. With a strong foundation in software engineering
              and data science, I create efficient, scalable, and user-friendly mobile solutions
              that deliver exceptional user experiences.
            </motion.p>

            {/* Personal Details */}
            <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-4 mb-8">
              {personalDetails.map((detail, index) => (
                <motion.a
                  key={detail.label}
                  href={detail.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 8, backgroundColor: 'rgba(0, 229, 255, 0.05)' }}
                  className="flex items-center gap-3 p-3 rounded-xl transition-all border border-transparent hover:border-primary/20"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <detail.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="block text-xs text-text-secondary">{detail.label}</span>
                    <span className="text-sm font-medium text-text-primary">{detail.value}</span>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 10px 40px rgba(0, 229, 255, 0.3)' 
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-white rounded-full font-medium"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
