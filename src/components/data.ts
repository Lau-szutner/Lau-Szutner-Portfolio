// data.ts

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  [key: string]: string; // Para agregar otras redes opcionalmente
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  profileImage: string;
  socialLinks: SocialLinks;
}

export interface Project {
  name: string;
  description: string;
  url: string;
}

export interface Contact {
  email: string;
  phone: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  skills: string[];
  projects: Project[];
  contact: Contact;
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: 'Lautaro Fernández Szutner',
    title: 'Full Stack Developer',
    description: 'Me encanta crear aplicaciones web escalables y eficientes.',
    profileImage: './profileImage.png',
    socialLinks: {
      github: 'https://github.com/Lau-szutner',
      linkedin:
        'https://www.linkedin.com/in/lautaro-fernandez-szutner-203639277/?original_referer=https%3A%2F%2Far%2Elinkedin%2Ecom%2Fpub%2Fdir%2FLautaro%2FFernandez%2Far-0-Argentina&originalSubdomain=ar',
      email: 'mailto:lautaroszutner@gmail.com',
    },
  },
  skills: ['React', 'Node.js', 'MongoDB', 'Express'],
  projects: [
    {
      name: 'Portfolio Web',
      description: 'Mi portfolio personal en React',
      url: 'https://mi-portfolio.com',
    },
    {
      name: 'App de Tareas',
      description: 'Aplicación de gestión de tareas',
      url: 'https://mi-app.com',
    },
  ],
  contact: {
    email: 'tuemail@example.com',
    phone: '+54 9 11 1234-5678',
  },
};
