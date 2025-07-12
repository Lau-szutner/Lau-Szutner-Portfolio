const ContacMe = () => {
  return (
    <section className="w-full grid place-items-center">
      <div className="grid lg:grid-cols-2 gap-10 w-9/12 place-items-center">
        {/* Form Panel */}
        <div className="w-full">
          <h3 className="text-2xl font-bold mb-6 text-left">Send a Message</h3>

          <Container>
            <form className=" w-full grid place-items-center">
              <div className="w-full">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-left pl-2"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full !box-border px-4 py-3 border border-darktech-border rounded-lg focus:outline-none focus:ring-2 focus:ring-darktech-neon-green/50 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-left pl-2"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full !box-border px-4 py-3 border border-darktech-border rounded-lg focus:outline-none focus:ring-2 focus:ring-darktech-neon-green/50 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-left pl-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full !box-border px-4 py-3 border border-darktech-border rounded-lg focus:outline-none focus:ring-2 focus:ring-darktech-neon-green/50 focus:border-transparent"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 flex items-center justify-center gap-2 bg-gradient-to-r from-darktech-neon-green to-darktech-holo-cyan text-darktech-background font-medium rounded-lg transition-transform duration-300 hover:scale-[1.02] disabled:opacity-70"
              >
                {/* Send Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-send"
                >
                  <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                  <path d="m21.854 2.147-10.94 10.939"></path>
                </svg>
                Send Message
              </button>
            </form>
          </Container>
        </div>

        <div className="w-full">
          <h3 className="text-2xl font-bold mb-6 text-left">Contact Info</h3>
          <Container>
            <div></div>
            {/* Contact Info Panel */}
            <div className="">
              <div className="">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-darktech-card text-darktech-neon-green shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-mail"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-lg font-medium text-left">Email</h4>
                    <a
                      href="mailto:lautaro.szutner@gmail.com"
                      className="text-darktech-muted hover:text-darktech-neon-green transition-colors break-all"
                    >
                      lautaro.szutner@gmail.com
                    </a>
                  </div>
                </div>
                {/* LinkedIn */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-darktech-card text-darktech-holo-cyan shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-linkedin"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-lg font-medium text-left">LinkedIn</h4>
                    <a
                      href="https://ar.linkedin.com/in/lautaro-fernandez-szutner-203639277"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-darktech-muted hover:text-darktech-holo-cyan transition-colors break-words"
                    >
                      linkedin.com/in/lautaro-fernandez-szutner-203639277
                    </a>
                  </div>
                </div>
                {/* GitHub */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-darktech-card text-darktech-cyber-pink shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-github"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-lg font-medium text-left">GitHub</h4>
                    <a
                      href="https://github.com/Lau-szutner/portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-darktech-muted hover:text-darktech-cyber-pink transition-colors break-words"
                    >
                      github.com/Lau-szutner/portfolio
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Let's Connect Panel */}
            <div className="glass-panel p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-left">
                Let's Connect
              </h3>
              <p className="text-darktech-muted mb-6 text-left">
                Interested in collaborating or have a project in mind? I'm
                always open to discussing new opportunities and ideas.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://ar.linkedin.com/in/lautaro-fernandez-szutner-203639277"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-darktech-card text-darktech-muted hover:text-darktech-holo-cyan hover:bg-darktech-card/70 transition-colors"
                >
                  {/* LinkedIn Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a
                  href="https://github.com/Lau-szutner/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-darktech-card text-darktech-muted hover:text-darktech-cyber-pink hover:bg-darktech-card/70 transition-colors"
                >
                  {/* GitHub Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </a>
                <a
                  href="mailto:lautaro.szutner@gmail.com"
                  className="p-3 rounded-full bg-darktech-card text-darktech-muted hover:text-darktech-neon-green hover:bg-darktech-card/70 transition-colors"
                >
                  {/* Mail Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default ContacMe;

import { ReactNode } from 'react';

export const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="relative flex items-center justify-center group">
        {/* Glow de fondo que aparece al hacer hover, con blur solo en el fondo */}
        <div className="absolute inset-0 rounded-md bg-[#00ffea] opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300 z-0"></div>

        {/* Botón encima */}

        <div className="w-full relative z-10 bg-neutral-800 text-white p-5 rounded-md border-2 border-neutral-700 hover:border-[#00ffea]">
          {children}
        </div>
      </div>
    </div>
  );
};
