import React from 'react';
import styles from './AboutStyles.module.css'; // Importing the styles

function About() {
  return (
    <section id="about" className={styles.container}>
      <h1>About Me</h1>
      <div className={styles.content}>
        <p>
          I’m Yasindu Ariyarathna, a Graduate Software Engineering and Data Science student with a strong focus on front-end development. My work centers on creating innovative software solutions that improve daily experiences, as well as leveraging AI automation to streamline processes and drive efficiency.
        </p>
        <p>
          My journey into software development started from a fascination with computers and technology. I enjoy problem-solving, collaborating on projects, and creating user-friendly interfaces. I'm currently studying at Swinburne University of Technology, and working on personal projects to hone my development skills.
        </p>
      </div>
    </section>
  );
}

export default About;
