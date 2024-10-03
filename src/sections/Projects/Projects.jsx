import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/distribution.png';
import freshBurger from '../../assets/online.png';
import hipsster from '../../assets/monitor.png';
import fitLift from '../../assets/game.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Yasindu711/blockchain-project"
          h3="Block Chain"
          p="Analysis Website"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Yasindu711/MarketPlace"
          h3="E-Commerce Market"
          p="Online Market Place"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Yasindu711/Data-Visualisation-Using-D3"
          h3="Data Visualisations"
          p="OECD Stats Analysed with D3"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Yasindu711/SwinAdventure"
          h3="SwinAdventure"
          p="Console Game"
        />
      </div>
    </section>
  );
}

export default Projects;