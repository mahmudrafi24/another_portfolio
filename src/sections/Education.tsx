import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Trophy } from 'lucide-react';

const education = {
  degree: 'Bachelor of Software Engineering',
  major: 'Major in Data Science',
  institution: 'Daffodil International University',
  location: 'Daffodil Smart City, Birulia, Ashulia, Savar',
  year: '2024',
  cgpa: '3.65',
};

const achievements = [
  { title: 'Escape the Room Contest 2021', position: '31st Position', icon: Trophy },
  { title: 'Unlock the Algorithm 2021', position: '38th Position', icon: Award },
  { title: 'Unlock the Algorithm 2022', position: '47th Position', icon: Award },
  { title: 'DIU Data Science Summit', position: 'Participant 2022, 2024', icon: BookOpen },
];

const involvements = [
  'DIU CPC Workshops: Attended workshops and training, enhancing skills in computer programming and competitive coding',
  'Chess Club Member: Actively participated in the Daffodil International University Chess Club',
];

export default function Education() {
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
      id="education"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-bg overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
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
            Academic Background
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary">
            Education & <span className="text-gradient">Achievements</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Education Card */}
          <motion.div variants={itemVariants}>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-primary/5 to-accent/5 border border-theme-border rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-text-primary mb-1">
                    {education.degree}
                  </h3>
                  <p className="text-primary font-medium">{education.major}</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-text-secondary">
                  <div className="w-8 h-8 bg-surface rounded-lg flex items-center justify-center border border-theme-border">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <span>{education.institution}</span>
                </div>
                <div className="flex items-center gap-3 text-text-secondary">
                  <div className="w-8 h-8 bg-surface rounded-lg flex items-center justify-center border border-theme-border">
                    <Calendar className="w-4 h-4 text-primary" />
                  </div>
                  <span>Graduated {education.year}</span>
                </div>
              </div>

              {/* CGPA Badge */}
              <div className="bg-surface border border-theme-border rounded-2xl p-6 text-center">
                <span className="block text-sm text-text-secondary mb-1">CGPA</span>
                <span className="text-4xl font-bold text-gradient">{education.cgpa}</span>
                <span className="text-text-secondary">/4.00</span>
              </div>
            </motion.div>

            {/* Involvements */}
            <motion.div variants={itemVariants} className="mt-8">
              <h4 className="font-display text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Involvements
              </h4>
              <div className="space-y-3">
                {involvements.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-surface border border-theme-border rounded-xl"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-text-secondary">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Achievements */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display text-xl font-bold text-text-primary mb-6 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-primary" />
              Achievements & Contests
            </h4>

            <div className="grid sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-surface border border-theme-border rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 mb-4">
                    <achievement.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h5 className="font-medium text-text-primary mb-1">{achievement.title}</h5>
                  <p className="text-primary text-sm font-medium">{achievement.position}</p>
                </motion.div>
              ))}
            </div>

            {/* Publication */}
            <motion.div
              variants={itemVariants}
              className="mt-8 bg-gradient-to-br from-surface to-bg border border-theme-border rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-primary" />
                <span className="text-sm text-text-secondary">Publication</span>
              </div>
              <h4 className="font-display text-lg font-bold text-text-primary mb-2">
                A Machine Learning Approach to Predict Flood in Bangladesh from Historical Data
              </h4>
              <p className="text-text-secondary text-sm mb-4">
                Thesis published in Daffodil International University Journal (D Space), 2024
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs border border-primary/20">Machine Learning</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs border border-primary/20">Regression</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs border border-primary/20">Ensemble Learning</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
