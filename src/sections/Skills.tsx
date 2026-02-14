import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Code2, 
  Database, 
  GitBranch, 
  Layers, 
  Smartphone, 
  Cloud,
  Cpu,
  Workflow
} from 'lucide-react';

const technicalSkills = [
  { name: 'Flutter', level: 95, icon: Smartphone, color: '#00E5FF' },
  { name: 'Dart', level: 90, icon: Code2, color: '#00B4AB' },
  { name: 'Firebase', level: 85, icon: Cloud, color: '#FFCA28' },
  { name: 'RESTful APIs', level: 88, icon: Database, color: '#00E5FF' },
  { name: 'Git/GitHub', level: 82, icon: GitBranch, color: '#7CFF00' },
  { name: 'Python', level: 75, icon: Cpu, color: '#3776AB' },
];

const professionalSkills = [
  { name: 'Problem Solving', level: 90 },
  { name: 'Communication', level: 85 },
  { name: 'Teamwork', level: 88 },
  { name: 'Time Management', level: 82 },
  { name: 'Adaptability', level: 87 },
];

const stateManagement = [
  { name: 'GetX', level: 95 },
  { name: 'Provider', level: 88 },
  { name: 'RxDart', level: 85 },
  { name: 'Bloc', level: 80 },
];

const architecture = [
  { name: 'MVC', level: 90 },
  { name: 'MVVM', level: 85 },
  { name: 'Clean Architecture', level: 80 },
];

export default function Skills() {
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

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-surface overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
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
            My Expertise
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Skills & <span className="text-gradient">Abilities</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and professional capabilities
            that I bring to every project.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.h3
              variants={itemVariants}
              className="font-display text-2xl font-bold text-text-primary mb-8 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              Technical Skills
            </motion.h3>

            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <skill.icon
                        className="w-5 h-5"
                        style={{ color: skill.color }}
                      />
                      <span className="font-medium text-text-primary">{skill.name}</span>
                    </div>
                    <span className="text-sm text-text-secondary">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-bg rounded-full overflow-hidden border border-theme-border">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{
                        duration: 1,
                        delay: 0.3 + index * 0.1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="h-full rounded-full relative overflow-hidden"
                      style={{ backgroundColor: skill.color }}
                    >
                      <motion.div
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Professional Skills & Others */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-10"
          >
            {/* Professional Skills */}
            <div>
              <motion.h3
                variants={itemVariants}
                className="font-display text-2xl font-bold text-text-primary mb-6 flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20">
                  <Workflow className="w-5 h-5 text-primary" />
                </div>
                Professional Skills
              </motion.h3>

              <div className="grid grid-cols-2 gap-4">
                {professionalSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="bg-bg border border-theme-border rounded-xl p-4 shadow-card hover:shadow-card-hover transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-text-primary text-sm">{skill.name}</span>
                      <span className="text-primary font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-surface rounded-full overflow-hidden border border-theme-border">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.5 + index * 0.1,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* State Management */}
            <div>
              <motion.h3
                variants={itemVariants}
                className="font-display text-xl font-bold text-text-primary mb-4 flex items-center gap-3"
              >
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20">
                  <Layers className="w-4 h-4 text-primary" />
                </div>
                State Management
              </motion.h3>

              <div className="flex flex-wrap gap-3">
                {stateManagement.map((item, index) => (
                  <motion.div
                    key={item.name}
                    variants={itemVariants}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-bg rounded-full shadow-sm border border-theme-border hover:border-primary/50 transition-colors"
                  >
                    <span className="text-sm font-medium text-text-primary">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Architecture */}
            <div>
              <motion.h3
                variants={itemVariants}
                className="font-display text-xl font-bold text-text-primary mb-4 flex items-center gap-3"
              >
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20">
                  <Database className="w-4 h-4 text-primary" />
                </div>
                Architecture Patterns
              </motion.h3>

              <div className="flex flex-wrap gap-3">
                {architecture.map((item, index) => (
                  <motion.div
                    key={item.name}
                    variants={itemVariants}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-bg rounded-full shadow-sm border border-theme-border hover:border-primary/50 transition-colors"
                  >
                    <span className="text-sm font-medium text-text-primary">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
