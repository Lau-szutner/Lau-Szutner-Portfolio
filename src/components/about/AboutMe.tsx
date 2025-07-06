import React from 'react';
import HomeIcon from '../../assets/About/HomeIcon';

import AboutMeCard from './AboutMeCard';
const AboutMe: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col place-items-center gap-5 my-20 grid place-items-center">
      {' '}
      <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-center w-full mb-15">
        About me
      </h2>
      <div className="w-10/12 ">
        <AboutMeCard
          titleBold=""
          body="Hi! I’m Lautaro Fernández Szutner, a Full Stack Web Developer based in Buenos Aires. I love turning ideas into clean, functional, and user-friendly web applications."
          width="w-5/12"
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
            icon={<HomeIcon />} // 👈 Aquí pasas el ícono
          ></AboutMeCard>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
