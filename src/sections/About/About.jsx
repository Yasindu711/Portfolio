import styles from './AboutStyles.module.css'; // Importing the styles

function About() {
  return (
    <section id="about" className={styles.container}>
      <h1>About Me</h1>
      <div className={styles.content}>
        <p>
          I&apos;m Yasindu Ariyarathna, an AI Automation and Systems Analyst based in Melbourne. I build software and systems for everyday use, leveraging AI to design agents, automations, and integrations that remove manual work and give people their time back.
        </p>
        <p>
          My journey started with a fascination for computers and technology, and it hasn&apos;t changed much since - I still like pulling problems apart and building the thing that solves them. These days that means production AI infrastructure: custom MCP servers, 30+ live automations, and integrations across 25+ platforms, all running daily for a real team. I hold a Bachelor of Computer Science (Data Science) from Swinburne University of Technology, and I&apos;m always building something on the side.
        </p>
      </div>
    </section>
  );
}

export default About;
