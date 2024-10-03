import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Technical Skills</h1>

      {/* Languages */}
      <h2 className={styles.subTitle}>Languages:</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML/CSS" />
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="SQL" />
        <SkillList src={checkMarkIcon} skill="C#" />
        <SkillList src={checkMarkIcon} skill="Ruby" />
      </div>

      <hr />

      {/* Frameworks */}
      <h2 className={styles.subTitle}>Frameworks:</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Angular" />
        <SkillList src={checkMarkIcon} skill="Material UI" />
        <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
        <SkillList src={checkMarkIcon} skill="FASt API" />
        <SkillList src={checkMarkIcon} skill="D3.js" />
      </div>

      <hr />

      {/* Tools */}
      <h2 className={styles.subTitle}>Tools:</h2>
      <div className={styles.skillList}>
        {/* First row of tools */}
        <SkillList src={checkMarkIcon} skill="Git/GitHub" />
        <SkillList src={checkMarkIcon} skill="AWS" />
        <SkillList src={checkMarkIcon} skill="Azure" />
        <SkillList src={checkMarkIcon} skill="VS Code" />
        <SkillList src={checkMarkIcon} skill="Docker" />
        <SkillList src={checkMarkIcon} skill="Figma" />
      </div>
      <div className={styles.skillList}>
        {/* Second row of tools */}
        <SkillList src={checkMarkIcon} skill="Tableau" />
        <SkillList src={checkMarkIcon} skill="MongoDB" />
        <SkillList src={checkMarkIcon} skill="Apache" />
        <SkillList src={checkMarkIcon} skill="Jest" />
        <SkillList src={checkMarkIcon} skill="NUnit Testing" />
      </div>
    </section>
  );
}

export default Skills;
