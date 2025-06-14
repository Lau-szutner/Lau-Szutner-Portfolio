import Project from './Project';

const Projects = () => {
  return (
    <div className="h-screen  flex flex-col place-items-center gap-5">
      <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-center w-full">
        Projects
      </h2>
      <div className="grid grid-cols-2 gap-10">
        <Project
          title={'MoneyMind'}
          skills={[
            // { iconName: 'css', label: 'CSS3' },
            // { iconName: 'html', label: 'HTML5' },
            { iconName: 'react', label: 'React' },
            { iconName: 'javascript', label: 'Javascript' },
            { iconName: 'typescript', label: 'Typescript' },
            { iconName: 'nextjs', label: 'Nextjs' },
            { iconName: 'sequelize', label: 'Sequelize' },
            { iconName: 'git', label: 'Git' },
            { iconName: 'nodejs', label: 'Nodejs' },
            { iconName: 'express', label: 'Express' },
          ]}
        />
        <Project
          title={'Mr Robot'}
          skills={[
            { iconName: 'css', label: 'CSS3' },
            { iconName: 'html', label: 'HTML5' },
            { iconName: 'javascript', label: 'Javascript' },
            { iconName: 'git', label: 'Git' },
          ]}
        />
      </div>
    </div>
  );
};

export default Projects;
