// src/data/projectsData.ts
import criptoMerch from '../../assets/projects/criptoMerch.png';
import moneyMind from '../../assets/projects/moneyMind.png';
import mrRobot from '../../assets/projects/mrRobot.png';
import praga from '../../assets/projects/praga.png';
import razer from '../../assets/projects/razer.png';
import todoListVue from '../../assets/projects/todoListVue.png';

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
    title: 'Mr Robot Fan Page',
    image: mrRobot,
    body: 'Mr Robot Fan Page – One of my first web projects showcasing HTML, CSS, responsive design, and creative layout inspired by the TV series Mr Robot.  ',
    skills: [
      { iconName: 'html', label: 'HTML' },
      { iconName: 'css', label: 'CSS' },
      { iconName: 'javascript', label: 'JAVASCRIPT' },
    ],
    webUrl: 'https://lau-szutner.github.io/Praga-React/',
    githubUrl: 'https://github.com/Lau-szutner/Praga-React',
  },
  {
    title: 'To-do List Vue',
    image: todoListVue,
    body: 'This project is a To-Do List application developed using Vue.js. It enables users to add, edit, and delete tasks with seamless data persistence via Local Storage.',
    skills: [
      { iconName: 'Vue', label: 'VUE' },
      { iconName: 'html', label: 'HTML' },
      { iconName: 'javascript', label: 'JAVASCRIPT' },
      { iconName: 'css', label: 'CSS' },
    ],
    webUrl: 'https://lau-szutner.github.io/Todo-list-vue/',
    githubUrl: 'https://github.com/Lau-szutner/Todo-list-vue',
  },
  {
    title: 'E-comerce Razer',
    image: razer,
    body: 'Este proyecto es un sitio web de comercio electrónico desarrollado en Bootstrap para la venta de productos de la marca Razer. Especificamente diseñado para ser utilizado como un proyecto universitario para https://davinci.edu.ar/',
    skills: [
      { iconName: 'html', label: 'HTML' },
      { iconName: 'css', label: 'CSS' },
    ],
    webUrl: 'https://lau-szutner.github.io/Razer-Bootsrap/',
    githubUrl: 'https://github.com/Lau-szutner/Razer-Bootsrap',
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

  {
    title: 'Praga',
    image: praga,
    body: 'Mr Robot Fan Page – One of my first web projects showcasing HTML, CSS, responsive design, and creative layout inspired by the TV series Mr Robot.  ',
    skills: [
      { iconName: 'html', label: 'HTML' },
      { iconName: 'css', label: 'CSS' },
      { iconName: 'javascript', label: 'JAVASCRIPT' },
    ],
    webUrl: 'https://lau-szutner.github.io/Mr-Robot-Web-Page/',
    githubUrl: 'https://github.com/Lau-szutner/Mr-Robot-Web-Page',
  },
];
