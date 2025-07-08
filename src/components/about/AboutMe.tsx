import React from 'react';
import HomeIcon from '../../assets/About/HomeIcon';
import Education from '../../assets/About/Education';
import Rocket from '../../assets/About/Rocket';
import Jobs from '../../assets/About/Jobs';
import AboutMeCard from './AboutMeCard';
import Experience from './Experience';

const AboutMe: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col place-items-center gap-5 my-20 grid place-items-center w-full">
      {' '}
      <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-center w-full ">
        About me
      </h2>
      <div className="w-10/12 grid grid-cols-[1fr_1fr] gap-5">
        <div className="grid gap-5">
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
        {/* <AboutMeCard
          titleBold=""
          body="Hi! I’m Lautaro Fernández Szutner, a Full Stack Web Developer based in Buenos Aires. I love turning ideas into clean, functional, and user-friendly web applications."
          width="w-full"
          icon={<Jobs />}
        ></AboutMeCard> */}

        <Experience
          icon={<Jobs />} // 👈 Aquí pasas el ícono
          title="EliumNova"
          dates="12/12/2025 - 12/12/2025"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
        ></Experience>
      </div>
    </div>
  );
};

export default AboutMe;
