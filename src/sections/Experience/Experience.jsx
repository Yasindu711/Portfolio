import styles from './ExperienceStyles.module.css';

const roles = [
  {
    company: 'AXTON Finance',
    title: 'AI Automation and Systems Analyst',
    employmentType: 'Full-time',
    dates: 'May 2025 – Present',
    location: 'Melbourne, Victoria, Australia · Hybrid',
    points: [
      "Oversee AXTON Finance's IT ecosystem, including systems architecture, infrastructure, automation, and cross-platform integrations.",
      'Design, engineer, and maintain automated workflows and system connections to improve operational efficiency, data integrity, and reliability for brokers and administration teams.',
      'Apply AI and automation across operational processes to reduce manual handling, improve data quality and support faster decision-making.',
      'Work closely with the leadership team, including founder Clinton Waters, to translate business requirements into clearly defined, scalable technical solutions.',
      'Develop and deploy AI agents using the Claude and OpenAI APIs, iterating on prompts, tool design and architecture to improve reliability and accuracy across real business workflows.',
      "Scaled AXTON's automation infrastructure from 16 to 30+ live workflows across Make, n8n, Zapier and Power Automate, saving around 50 hours of manual work each month.",
      'Integrated 25+ platforms into a single connected ecosystem, writing custom Python and JavaScript connectors where off-the-shelf tooling fell short.',
      'Act as the primary point of contact for internal IT support, providing hands-on technical assistance, troubleshooting, and system guidance to ensure smooth day-to-day operations.',
      "Lead the continuous optimisation and evolution of AXTON's technology environment, ensuring systems remain well-architected, secure, reliable, and aligned with business growth and ongoing advancements in automation and AI within the mortgage industry.",
    ],
  },
  {
    company: 'JB Hi-Fi',
    title: 'Operations Team Member',
    employmentType: 'Part-time',
    dates: 'Oct 2023 – Present',
    location: 'Melbourne, Victoria, Australia · On-site',
    points: [
      'Ensured accurate inventory control and timely order fulfilment to enhance customer satisfaction.',
      'Collaborated with cross-functional teams to meet daily operational goals and deliver seamless in-store and online experiences.',
      'Collaborated with the management team to analyze sales and store performance data, providing insights that supported sales growth strategies and operational improvements.',
      'Supported issue resolution and provided clear communication to customers and teammates.',
    ],
  },
  {
    company: "McDonald's",
    title: 'Crew Member',
    employmentType: 'Part-time',
    dates: 'Jun 2022 – Oct 2023',
    location: 'Melbourne, Victoria, Australia',
    points: [],
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
            {role.points.length > 0 && (
              <ul className={styles.points}>
                {role.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
