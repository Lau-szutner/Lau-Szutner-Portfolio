import React from 'react';
import HomeIcon from '../../assets/About/HomeIcon';
import Education from '../../assets/About/Education';
import Rocket from '../../assets/About/Rocket';
import Jobs from '../../assets/About/Jobs';
import AboutMeCard from './AboutMeCard';
import Experience from './Experience';
import ExperienceList from './ExperienceList';

import jobsList from './jobsList';

const AboutMe: React.FC = () => {
  return (
    <div className="gap-5 grid place-items-center w-full pt-30" id="About">
      <h2 className="text-6xl  font-bold text-center w-full mb-15">About me</h2>
      <div className="w-9/12 grid xl:grid-cols-[1fr_1fr] gap-5">
        <div className="grid md:justify-items-start gap-5 h-fit">
          <AboutMeCard
            titleBold=""
            body="Hi! I’m Lautaro Fernández Szutner, a Full Stack Web Developer based in Buenos Aires. I love turning ideas into clean, functional, and user-friendly web applications."
            width="w-fit"
            icon={<Rocket />}
          ></AboutMeCard>
          <div className="grid gap-5 h-fit w-full md:grid-cols-[1fr_1fr]">
            <AboutMeCard
              titleBold="Location:"
              body="Buenos Aires"
              width="w-full"
              icon={<HomeIcon />}
            ></AboutMeCard>

            <AboutMeCard
              titleBold="Education:"
              body="Davinci institute BA"
              width="w-full"
              icon={<Education />}
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
