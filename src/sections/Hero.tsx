import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import { useTheme } from '@/components/theme/ThemeProvider';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      setMousePosition({
        x: (clientX - innerWidth / 2) / innerWidth,
        y: (clientY - innerHeight / 2) / innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: [0.175, 0.885, 0.32, 1.275] as const,
      },
    },
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-bg"
    >
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl ${
            theme === 'dark' 
              ? 'bg-cyan-500/10' 
              : 'bg-cyan-400/20'
          }`}
        />
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl ${
            theme === 'dark' 
              ? 'bg-lime-500/10' 
              : 'bg-green-400/20'
          }`}
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full ${
            theme === 'dark'
              ? 'bg-gradient-radial from-cyan-500/10 to-transparent'
              : 'bg-gradient-radial from-cyan-400/20 to-transparent'
          }`}
        />
        
        {/* Floating geometric shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className={`absolute top-32 right-1/4 w-8 h-8 border-2 rotate-45 ${
            theme === 'dark' ? 'border-cyan-500/30' : 'border-cyan-500/40'
          }`}
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute bottom-40 left-1/4 w-6 h-6 rounded-full ${
            theme === 'dark' ? 'bg-lime-500/20' : 'bg-green-500/30'
          }`}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className={`absolute top-1/3 right-20 w-4 h-4 ${
            theme === 'dark' ? 'bg-cyan-400/40' : 'bg-cyan-500/50'
          }`}
        />
      </div>

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                Hello!
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-4"
            >
              I am{' '}
              <span className="text-gradient">Md. Modacher</span>
              <br />
              <span className="text-gradient">Mahmud Rafi</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 text-xl sm:text-2xl text-text-secondary">
                <motion.span 
                  className="w-2 h-2 bg-primary rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Flutter Developer
              </span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-text-secondary text-lg mb-8 max-w-xl mx-auto lg:mx-0"
            >
              I am a Flutter developer with a strong background in mobile application
              development. I specialize in building cross-platform apps with beautiful
              UI and robust functionality.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href="#contact"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: theme === 'dark' 
                    ? '0 10px 40px rgba(0, 229, 255, 0.4)' 
                    : '0 10px 40px rgba(0, 172, 193, 0.3)' 
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-primary text-white rounded-full font-medium transition-all"
              >
                Hire Me
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary/10 transition-all"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 justify-center lg:justify-start">
              <motion.a
                href="https://github.com/mahmudrafi24"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-surface border border-theme-border text-text-primary rounded-full hover:border-primary hover:text-primary transition-all"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/modacher-mahmud-rafi"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-surface border border-theme-border text-text-primary rounded-full hover:border-primary hover:text-primary transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="order-1 lg:order-2 flex justify-center"
            style={{
              perspective: 1000,
            }}
          >
            <motion.div
              className="relative"
              style={{
                rotateX: mousePosition.y * -10,
                rotateY: mousePosition.x * 10,
                transformStyle: 'preserve-3d',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-full blur-3xl opacity-30 scale-110 ${
                theme === 'dark' ? 'bg-cyan-500' : 'bg-cyan-400'
              }`} />
              
              {/* Decorative ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className={`absolute -inset-4 border-2 border-dashed rounded-full ${
                  theme === 'dark' ? 'border-cyan-500/30' : 'border-cyan-500/40'
                }`}
              />
              
              {/* Main image */}
              <div className={`relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 ${
                theme === 'dark' 
                  ? 'border-surface shadow-neon' 
                  : 'border-white shadow-glow'
              }`}>
                <img
                  src="/images/hero-profile.png"
                  alt="Md. Modacher Mahmud Rafi"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-4 top-1/4 px-4 py-2 bg-surface border border-theme-border rounded-xl shadow-card"
              >
                <span className="text-sm font-medium text-primary">Flutter</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -left-4 bottom-1/4 px-4 py-2 bg-surface border border-theme-border rounded-xl shadow-card"
              >
                <span className="text-sm font-medium text-accent">Dart</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute right-0 bottom-0 px-4 py-2 bg-surface border border-theme-border rounded-xl shadow-card"
              >
                <span className="text-sm font-medium text-primary">Firebase</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0], y: [0, 12] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
