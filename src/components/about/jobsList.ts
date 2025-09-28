interface Job {
  title: string;
  dates: string;
  description: string;
}

const jobsList: Job[] = [
  {
    title: 'Full Stack Developer at EliumNova',
    dates: 'Jan 2024 - Present',
    description:
      'Full stack developer in the team, using Next.js for the frontend and Node.js with Sequelize and MySQL for the backend. Responsible for API design, consumption, and documentation, authentication management, production deployments, and constant collaboration with the team to ensure robust and maintainable solutions.',
  },
  {
    title: 'PC installation and repair',
    dates: 'Jan 2021 - May 2022',
    description:
      'PC assembly and repair, hardware and software maintenance and upgrades, as well as troubleshooting technical issues. Also knowledgeable in network installation and configuration.',
  },
  {
    title: 'Freelance Web Developer',
    dates: 'Jun 2022 - Dec 2023',
    description:
      'Developed custom web products for clients, including landing pages, e-commerce platforms, and management systems. Used technologies such as React, Next.js, and Node.js to build scalable and optimized solutions. Worked directly with clients to define requirements, design interfaces, and deliver projects on time.',
  },
];

export default jobsList;
