import React from 'react';
import styles from './AboutStyles.module.css'; // Importing the styles

function About() {
  return (
    <section id="about" className={styles.container}>
      <h1>About Me</h1>
      <div className={styles.content}>
        <p>
          Hi, I'm Yasindu Ariyarathna, a passionate software engineering student with a focus on front-end development, web applications, and building software solutions that make everyday life easier. I have experience in various programming languages and frameworks, and I'm always eager to learn new technologies and improve my skills.
        </p>
        <p>
          My journey into software development started from a fascination with computers and technology. I enjoy problem-solving, collaborating on projects, and creating user-friendly interfaces. I'm currently studying at Swinburne University of Technology, and working on personal projects to hone my development skills.
        </p>
      </div>
    </section>
  );
}

export default About;
