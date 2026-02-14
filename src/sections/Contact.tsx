import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, Send, Github, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'work.rafi.mahmud@gmail.com', href: 'mailto:work.rafi.mahmud@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+880 1799-951107', href: 'tel:+8801799951107' },
  { icon: MapPin, label: 'Location', value: 'Dhaka Division, Bangladesh', href: '#' },
  { icon: Globe, label: 'Website', value: 'modachermahmudrafi.vercel.app', href: 'https://modachermahmudrafi.vercel.app' },
];

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/mahmudrafi24', color: 'hover:bg-gray-800' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/modacher-mahmud-rafi', color: 'hover:bg-blue-600' },
  { icon: ExternalLink, label: 'Portfolio', href: 'https://modachermahmudrafi.vercel.app', color: 'hover:bg-primary' },
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

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
      id="contact"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-surface overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
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
            Get In Touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
            I'm always open to discussing new opportunities.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="font-display text-2xl font-bold text-text-primary mb-6">
                Contact Information
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-4 p-4 bg-bg border border-theme-border rounded-xl shadow-sm hover:shadow-card hover:border-primary/30 transition-all"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="block text-xs text-text-secondary">{item.label}</span>
                      <span className="text-sm font-medium text-text-primary">{item.value}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-display text-lg font-bold text-text-primary mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 bg-bg border border-theme-border rounded-xl shadow-sm flex items-center justify-center text-text-secondary ${social.color} hover:text-white hover:border-transparent transition-all`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-primary to-primary-dark border border-primary/30 rounded-2xl p-6 text-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  className="w-3 h-3 bg-lime-400 rounded-full"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="font-medium">Available for Freelance</span>
              </div>
              <p className="text-white/80 text-sm">
                I'm currently available for freelance projects and open to full-time opportunities.
                Let's create something amazing together!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-bg border border-theme-border rounded-2xl p-8 shadow-card">
              <h3 className="font-display text-2xl font-bold text-text-primary mb-6">
                Send Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-text-primary">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      required
                      className="h-12 bg-surface border-theme-border text-text-primary placeholder:text-text-secondary focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-text-primary">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="h-12 bg-surface border-theme-border text-text-primary placeholder:text-text-secondary focus:border-primary focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-text-primary">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="Message subject"
                    required
                    className="h-12 bg-surface border-theme-border text-text-primary placeholder:text-text-secondary focus:border-primary focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-text-primary">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    required
                    rows={5}
                    className="bg-surface border-theme-border text-text-primary placeholder:text-text-secondary focus:border-primary focus:ring-primary resize-none"
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="w-full h-12 bg-gradient-primary hover:opacity-90 text-white font-medium rounded-xl transition-all"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                    ) : isSubmitted ? (
                      <span className="flex items-center gap-2">
                        Message Sent!
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
