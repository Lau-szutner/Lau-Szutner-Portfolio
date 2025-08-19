export default projects: ProjectProps[] = [
  {
    title: 'MoneyMind',
    skills: [
      { iconName: 'react', label: 'React' },
      { iconName: 'javascript', label: 'Javascript' },
      { iconName: 'typescript', label: 'Typescript' },
      { iconName: 'nextjs', label: 'Nextjs' },
    ],
  },
  {
    title: 'MoneyMind',
    skills: [
      { iconName: 'react', label: 'React' },
      { iconName: 'javascript', label: 'Javascript' },
      { iconName: 'typescript', label: 'Typescript' },
      { iconName: 'nextjs', label: 'Nextjs' },
    ],
  },
  {
    title: 'MoneyMind',
    skills: [
      { iconName: 'react', label: 'React' },
      { iconName: 'javascript', label: 'Javascript' },
      { iconName: 'typescript', label: 'Typescript' },
      { iconName: 'nextjs', label: 'Nextjs' },
    ],
  },
  // agrega más proyectos...
];
interface ProjectProps {
  title: string;
  skills: ProjectSkill[];
}
