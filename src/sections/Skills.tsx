import { Code2, Database, GitBranch, Smartphone, Cloud, Cpu } from 'lucide-react';

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
  const groups = [
    { title: 'Technical Skills', skills: technicalSkills },
    { title: 'Professional Skills', skills: professionalSkills },
    { title: 'State Management', skills: stateManagement },
    { title: 'Architecture Patterns', skills: architecture },
  ];
  return <section id="skills" className="portfolio-section">
    <div className="section-container">
      <header className="section-heading"><span className="section-kicker">My Expertise</span><h2>Skills & <span className="text-gradient">Abilities</span></h2><p>A comprehensive overview of my technical skills and professional capabilities
        that I bring to every project.</p></header>
      <div className="skill-grid">{groups.map(group => <article className="skill-card" key={group.title}>
        <h3>{group.title}</h3>
        <div className="skill-tags">{group.skills.map(skill => <span key={skill.name}>{skill.name}<small>{skill.level}%</small></span>)}</div>
      </article>)}</div>
    </div>
  </section>;
}
