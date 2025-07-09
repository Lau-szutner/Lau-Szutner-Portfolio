// import Project from './Project';
import ProjectCard from './ProjectsCard';
import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const Projects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <section
      className="h-min-screen flex flex-col place-items-center gap-5 pt-30 "
      id="Projects"
    >
      <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-center w-full mb-15">
        Projects
      </h2>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <ProjectCard
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
          ></ProjectCard>
          <ProjectCard
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
          ></ProjectCard>
          <ProjectCard
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
          ></ProjectCard>
        </div>
      </div>
    </section>
  );
};

export default Projects;
