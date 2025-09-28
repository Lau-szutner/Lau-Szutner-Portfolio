import { useState, useEffect } from 'react';
import Button from '../Button';
import Tilt from 'react-parallax-tilt';
import { portfolioData } from '../data.ts';

function Header() {
  const [scale, setScale] = useState(1);

  const name = portfolioData.personalInfo.name;
  const title = portfolioData.personalInfo.title;
  const github = portfolioData.personalInfo.socialLinks.github;
  const linkedin = portfolioData.personalInfo.socialLinks.linkedin;
  const email = portfolioData.personalInfo.socialLinks.email;
  const profileImage = portfolioData.personalInfo.profileImage;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1500) {
        setScale(1.5);
      } else {
        setScale(1.3);
      }
    };

    handleResize(); // Set initial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className="h-fit overflow-hidden background py-30 grid place-items-center"
      id="Home "
    >
      <div className="grid md:grid-cols-2 place-items-center h-full lg:w-11/12 md:w-9/12 gap-15">
        <div className="grid gap-5">
          <div className="text-5xl md:text-6xl lg:text-7xl mb-6">
            <p>
              <span className="text-accent">Hey there! </span>
              I'm
            </p>
          </div>
          <div className="text-5xl md:text-6xl lg:text-7xl font-bold">
            <div className="text-5xl md:text-6xl lg:text-7xl font-bold">
              {name.split(' ').map((part, idx) => (
                <p key={idx}>{part}</p>
              ))}
              <p className="text-xl text-gray-400 font-light my-5">{title}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Button link={github}>Github</Button>

            <Button link={linkedin}>Linkedin</Button>

            <Button link={email}>Email</Button>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <Tilt tiltReverse={false} scale={scale}>
            <div className="line">
              <img
                src={profileImage}
                alt="Foto de perfil"
                className="rounded-lg"
              />
            </div>
          </Tilt>
        </div>
      </div>
    </header>
  );
}

export default Header;
