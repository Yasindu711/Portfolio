import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

const categories = [
  {
    label: 'AI & Agentic Systems',
    skills: ['OpenAI API', 'Anthropic Claude API', 'MCP (Model Context Protocol)', 'AI Agent Development', 'Prompt Engineering', 'Agentic Frameworks', 'Retrieval & Grounding (RAG)', 'LLM Evaluation', 'GenAI Prototyping'],
  },
  {
    label: 'Automation & Integration',
    skills: ['Microsoft Power Automate', 'Zapier', 'Make', 'n8n', 'REST APIs', 'Webhooks', 'JSON', 'System Integration', 'Custom Connectors'],
  },
  {
    label: 'Languages',
    skills: ['Python', 'JavaScript', 'SQL', 'C#', 'HTML/CSS'],
  },
  {
    label: 'Frameworks & Libraries',
    skills: ['React', 'FastAPI', 'Node.js', 'Tailwind CSS'],
  },
  {
    label: 'Cloud & Infrastructure',
    skills: ['Microsoft Azure', 'AWS', 'Docker', 'Git/GitHub'],
  },
  {
    label: 'Data & Reporting',
    skills: ['Power BI', 'SQL', 'Excel', 'MongoDB'],
  },
  {
    label: 'Platforms',
    skills: ['Microsoft 365', 'SharePoint', 'Notion', 'CRM systems (Mercury Nexus, Effi)'],
  },
];

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Technical Skills</h1>

      <div className={styles.grid}>
        {categories.map((cat) => (
          <div key={cat.label} className={styles.card}>
            <h2 className={styles.subTitle}>{cat.label}</h2>
            <div className={styles.skillList}>
              {cat.skills.map((skill) => (
                <SkillList key={skill} src={checkMarkIcon} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
