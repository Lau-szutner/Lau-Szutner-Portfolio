import React from 'react';
import HomeIcon from '../../assets/About/HomeIcon';
import Education from '../../assets/About/Education';
import Rocket from '../../assets/About/Rocket';
import Jobs from '../../assets/About/Jobs';
import AboutMeCard from './AboutMeCard';
import Experience from './Experience';
import ExperienceList from './ExperienceList';

const AboutMe: React.FC = () => {
  const jobsList = [
    {
      title: 'Frontend Developer at EliumNova',
      dates: 'Jan 2024 - Present',
      description:
        'Building responsive web applications using React and Tailwind CSS, focusing on UI/UX improvements and performance optimization.',
    },
    {
      title: 'Full Stack Developer at WebSolutions',
      dates: 'Jun 2022 - Dec 2023',
      description:
        'Developed end-to-end web applications with MERN stack, integrating REST APIs and ensuring scalability.',
    },
    {
      title: 'Junior Developer at CodeFactory',
      dates: 'Jan 2021 - May 2022',
      description:
        'Assisted in building and maintaining client websites, writing clean code and improving website SEO and accessibility.',
    },
  ];

  return (
    <div
      className="flex flex-col gap-5 grid place-items-center w-full pt-30"
      id="About"
    >
      <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-center w-full mb-15">
        About me
      </h2>
      <div className="w-10/12 grid grid-cols-[1fr_1fr] gap-5">
        <div className="grid  justify-items-start h-fit gap-5">
          <AboutMeCard
            titleBold=""
            body="Hi! I’m Lautaro Fernández Szutner, a Full Stack Web Developer based in Buenos Aires. I love turning ideas into clean, functional, and user-friendly web applications."
            width="w-full"
            icon={<Rocket />}
          ></AboutMeCard>
          <div className="flex gap-5">
            <AboutMeCard
              titleBold="Location:"
              body="Buenos Aires"
              width="w-fit"
              icon={<HomeIcon />} // 👈 Aquí pasas el ícono
            ></AboutMeCard>

            <AboutMeCard
              titleBold="Education:"
              body="Davinci institute BA"
              width="w-fit"
              icon={<Education />} // 👈 Aquí pasas el ícono
            ></AboutMeCard>
          </div>
        </div>

        <ExperienceList icon={<Jobs />}>
          {jobsList.map((job, index) => (
            <Experience
              key={index}
              title={job.title}
              dates={job.dates}
              description={job.description}
            />
          ))}
        </ExperienceList>
      </div>
    </div>
  );
};

export default AboutMe;
