import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '@/components/theme/ThemeToggle';

const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  useEffect(() => {
    const update = () => {
      const sections = ['home', ...navLinks.map(link => link.toLowerCase())];
      const current = sections.reverse().find(id => {
        const section = document.getElementById(id);
        return section && section.getBoundingClientRect().top <= 140;
      });
      if (current) setActiveSection(current);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('keydown', escape);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('keydown', escape);
    };
  }, []);
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <nav className="portfolio-nav" aria-label="Main navigation">
        <div className="nav-inner">
          <a href="#home" className="nav-brand" onClick={() => setIsMobileMenuOpen(false)}>Rafi<span>.</span></a>
          <div className="desktop-links">
            {navLinks.map(link => <a key={link} href={`#${link.toLowerCase()}`} aria-current={activeSection === link.toLowerCase() ? 'location' : undefined}>{link}</a>)}
          </div>
          <div className="nav-controls">
            <ThemeToggle />
            <button className="menu-toggle" aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={isMobileMenuOpen} aria-controls="mobile-navigation" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>{isMobileMenuOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
        {isMobileMenuOpen && <div className="mobile-links" id="mobile-navigation">
          {navLinks.map(link => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)}>{link}</a>)}
        </div>}
      </nav>
    </>
  );
}
