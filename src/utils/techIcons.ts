import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faReact,
  faNode,
  faJava,
  faJs,
  faHtml5,
  faCss3Alt,
  faGit,
  faDocker,
  faAws,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

export interface TechIcon {
  name: string;
  icon: IconDefinition;
  color?: string;
}

export const frontendTechs: TechIcon[] = [
  { name: 'React', icon: faReact, color: '#61DAFB' },
  { name: 'TypeScript', icon: faReact, color: '#3178C6' }, // Using React as fallback
  { name: 'HTML5', icon: faHtml5, color: '#E34C26' },
  { name: 'CSS3', icon: faCss3Alt, color: '#239120' },
  { name: 'JavaScript', icon: faJs, color: '#F7DF1E' },
];

export const backendTechs: TechIcon[] = [
  { name: 'Node.js', icon: faNode, color: '#339933' },
  { name: 'Java', icon: faJava, color: '#007396' },
  { name: 'MongoDB', icon: faDatabase, color: '#13AA52' },
  { name: 'PostgreSQL', icon: faDatabase, color: '#336791' },
];

export const toolsTechs: TechIcon[] = [
  { name: 'Git', icon: faGit, color: '#F1502F' },
  { name: 'Docker', icon: faDocker, color: '#2496ED' },
  { name: 'AWS', icon: faAws, color: '#FF9900' },
];

export const allTechs = {
  frontend: frontendTechs,
  backend: backendTechs,
  tools: toolsTechs,
};
