import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, ExternalLink, ArrowUp } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/mahmudrafi24', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/modacher-mahmud-rafi', label: 'LinkedIn' },
  { icon: ExternalLink, href: 'https://modachermahmudrafi.vercel.app', label: 'Portfolio' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-bg text-text-primary overflow-hidden border-t border-theme-border">
      {/* Wave SVG */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 fill-surface"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>

      <div className="pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <motion.a
                href="#home"
                onClick={(e) => handleLinkClick(e, '#home')}
                className="inline-block font-display text-3xl font-bold text-gradient mb-4"
                whileHover={{ scale: 1.05 }}
              >
                Rafi
              </motion.a>
              <p className="text-text-secondary mb-6 max-w-md">
                Flutter Developer & Mobile App Specialist based in Dhaka, Bangladesh.
                Creating beautiful, performant cross-platform applications.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-surface border border-theme-border rounded-lg flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display text-lg font-bold text-text-primary mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.slice(0, 5).map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-text-secondary hover:text-primary transition-colors inline-flex items-center gap-2 group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all" />
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-display text-lg font-bold text-text-primary mb-4">Contact</h4>
              <ul className="space-y-3 text-text-secondary">
                <li>
                  <a
                    href="mailto:work.rafi.mahmud@gmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    work.rafi.mahmud@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+8801799951107"
                    className="hover:text-primary transition-colors"
                  >
                    +880 1799-951107
                  </a>
                </li>
                <li>Dhaka Division, Bangladesh</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-theme-border pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <p className="text-text-secondary text-sm flex items-center gap-1">
                © 2024 Md. Modacher Mahmud Rafi. Made with
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                in Bangladesh
              </p>

              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary-dark transition-colors"
              >
                <ArrowUp className="w-5 h-5 text-white" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
