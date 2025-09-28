// src/components/Projects/types.ts

import icons from '../../assets/icons';

export type IconName = keyof typeof icons;

export interface ProjectSkill {
  iconName: IconName;
  label: string;
}

export interface ProjectProps {
  skills: ProjectSkill[];
  image: string;
  title: string;
  body: string;
  githubUrl: string;
  webUrl: string;
}
