// src/data/projectsData.ts
import criptoMerch from '../../assets/projects/Cripto-Merch.png';
import moneyMind from '../../assets/projects/moneyMind.png';
import { ProjectProps } from './types';

export const projects: ProjectProps[] = [
  {
    title: 'MoneyMind',
    body: 'Money Mind API es una aplicación de gestión financiera que permite controlar ingresos, gastos, presupuestos y ahorros. Desarrollada con Next.js y Express.js usando Sequelize y MySQL, sigue una arquitectura MVC escalable y permite la autenticación de usuarios mediante JWT.',
    image: moneyMind,
    skills: [
      { iconName: 'react', label: 'React' },
      { iconName: 'javascript', label: 'Javascript' },
      { iconName: 'typescript', label: 'Typescript' },
      { iconName: 'nextjs', label: 'Nextjs' },
    ],
    webUrl: 'nnn',
    githubUrl: 'https://github.com/Lau-szutner/Money-Mind',
  },
  {
    title: 'Cripto Merch',
    image: criptoMerch,
    body: 'E-commerce website dedicated to selling cryptocurrency-themed merchandise. This project was created as a university assignment to practice Bootstrap, HTML, and CSS, while building a modern and responsive online store.',
    skills: [
      { iconName: 'html', label: 'HTML' },
      { iconName: 'Bootstrap', label: 'Bootstrap' },
      { iconName: 'css', label: 'CSS' },
    ],
    webUrl: 'https://lau-szutner.github.io/Cripto-Merch/',
    githubUrl: 'https://github.com/Lau-szutner/Cripto-Merch',
  },
];
