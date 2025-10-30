import styles from './ExperienceStyles.module.css';

const roles = [
  {
    company: 'AXTON Finance',
    title: 'AI and Systems Engineer',
    employmentType: 'Part-time',
    dates: 'May 2025 – Present · 6 mos',
    location: 'Melbourne, Victoria, Australia · Hybrid',
  },
  {
    company: 'JB Hi-Fi',
    title: 'Operations Team Member',
    employmentType: 'Part-time',
    dates: 'Oct 2023 – Present · 2 yrs 1 mo',
    location: 'Melbourne, Victoria, Australia · On-site',
  },
  {
    company: "McDonald's",
    title: 'Crew Member',
    employmentType: 'Part-time',
    dates: 'Jun 2022 – Present · 3 yrs 5 mos',
    location: 'Melbourne, Victoria, Australia',
  },
];

function Experience() {
  return (
    <section id="experience" className={styles.container}>
      <h1 className="sectionTitle">Work Experience</h1>
      <div className={styles.timeline}>
        {roles.map((role) => (
          <article key={`${role.company}-${role.title}`} className={styles.card}>
            <header className={styles.cardHeader}>
              <h2>{role.title}</h2>
              <p className={styles.companyLine}>
                {role.company}
                {role.employmentType ? ` · ${role.employmentType}` : ''}
              </p>
              <p className={styles.dates}>{role.dates}</p>
              <p className={styles.location}>{role.location}</p>
            </header>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
