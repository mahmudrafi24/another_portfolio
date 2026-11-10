import { ArrowDown, ArrowRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';

export default function Hero() {
  return (
    <section id="home" className="portfolio-hero">
      <ParticleBackground />
      <div className="hero-content">
        <span className="hero-eyebrow">Hello!</span>
        <h1><span className="hero-intro">I am</span> Md. Modacher<br />Mahmud Rafi</h1>
        <p className="hero-role">Flutter Developer<span className="typing-cursor" aria-hidden="true">|</span></p>
        <p className="hero-description">I am a Flutter developer with a strong background in mobile application
          development. I specialize in building cross-platform apps with beautiful
          UI and robust functionality.</p>
        <div className="hero-meta">
          <a href="mailto:work.rafi.mahmud@gmail.com"><Mail size={16} />work.rafi.mahmud@gmail.com</a>
          <span><MapPin size={16} />Dhaka Division, Bangladesh</span>
        </div>
        <div className="hero-actions">
          <a className="portfolio-button primary" href="#projects">View Projects<ArrowRight size={17} /></a>
          <a className="portfolio-button secondary" href="/resume/Modacher_Mahmud_Rafi_Resume.pdf" download><Download size={17} />Download Resume</a>
          <a className="hero-hire" href="#contact">Hire Me<ArrowRight size={15} /></a>
        </div>
        <div className="hero-socials">
          <a href="https://github.com/mahmudrafi24" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={23} /></a>
          <a href="https://linkedin.com/in/modacher-mahmud-rafi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={23} /></a>
        </div>
      </div>
      <a className="hero-scroll" href="#about" aria-label="Explore About Me"><ArrowDown size={20} /></a>
    </section>
  );
}
