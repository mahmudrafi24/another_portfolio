import { Briefcase, Calendar, MapPin } from 'lucide-react';

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
    title: 'Flutter Developer - Intern',
    company: 'Raise IT Solutions Ltd.',
    location: 'Dhaka, Bangladesh · Remote',
    period: 'October 2024 - December 2024',
    description: [
      'Developed and maintained a Flutter-based browser application, ensuring smooth and efficient web browsing functionality',
      'Integrated features such as download management, platform device ID recognition, and country-based user detection using APIs',
      'Implemented Provider for state management, optimizing performance and scalability',
      'Worked with Firebase to handle user authentication, data storage, and real-time updates',
      'Focused on UI/UX improvements, enhancing user experience with a responsive and intuitive design',
    ],
    color: 'from-purple-500 to-pink-500',
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
  return <section id="experience" className="portfolio-section">
    <div className="section-container">
      <header className="section-heading"><span className="section-kicker">My Journey</span><h2>Work <span className="text-gradient">Experience</span></h2></header>
      <div className="experience-timeline">{experiences.map(exp => <article className="experience-card" key={exp.title}>
        <div className="timeline-icon"><Briefcase size={19} /></div>
        <div className="experience-header"><div><h3>{exp.title}</h3><p className="experience-company">{exp.company}</p></div>
          <div className="experience-meta"><span><Calendar size={14} />{exp.period}</span><span><MapPin size={14} />{exp.location}</span></div>
        </div>
        <ul>{exp.description.map(item => <li key={item}>{item}</li>)}</ul>
      </article>)}</div>
    </div>
  </section>;
}
