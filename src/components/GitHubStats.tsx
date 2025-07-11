'use client';

import { useEffect, useState } from 'react';
import Github from '../assets/github/github';
import Arrow from '../assets/github/arrow';

type GitHubStats = {
  repos: number;
  stars: number;
  forks: number;
  commits: string; // Lo dejamos como string por si quieres poner 2500+ manual
};

export default function GitHubStats() {
  const [stats, setStats] = useState<GitHubStats>({
    repos: 0,
    stars: 0,
    forks: 0,
    commits: '1500+', // Ejemplo: ponlo fijo o calcula real
  });

  useEffect(() => {
    const fetchStats = async () => {
      const username = 'lau-szutner';
      const userRes = await fetch(`https://api.github.com/users/${username}`);
      const userData = await userRes.json();

      const reposRes = await fetch(userData.repos_url);
      const reposData = await reposRes.json();

      console.log(reposData);
      const stars = reposData.reduce(
        (acc: number, repo: any) => acc + repo.stargazers_count,
        0
      );
      const forks = reposData.reduce(
        (acc: number, repo: any) => acc + repo.forks_count,
        0
      );

      setStats({
        repos: userData.public_repos,
        stars,
        forks,
        commits: '1500+',
      });
    };

    fetchStats();
  }, []);

  return (
    <section
      id="github-stats"
      className="py-20 relative w-7/12 place-self-center"
    >
      <div className="container mx-auto px-4">
        <div className="w-full mx-auto grid gap-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">GitHub Public Stats</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A visualization of my coding activities and contributions on
              GitHub.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center ">
            <StatCard
              icon={<Github />}
              value={stats.repos}
              label="Repositories"
            />
            <StatCard icon="⭐" value={stats.stars} label="Stars" />
            <StatCard icon="🍴" value={stats.forks} label="Forks" />
            <StatCard icon="📅" value={stats.commits} label="Commits" />
          </div>

          <div className={`w-full h-fit !box-border relative group`}>
            <div className="absolute inset-0 rounded-md bg-[#00ffea] opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300 z-0"></div>

            <div className="relative z-10 bg-neutral-800 text-white p-5 rounded-md border-2 border-neutral-700 hover:border-[#00ffea]">
              <div className="flex items-center mb-4">
                <span className="text-cyan-400 mr-2">
                  <Arrow></Arrow>
                </span>
                <h3 className="text-xl font-semibold">Contribution Activity</h3>
              </div>

              <div className="flex items-center justify-center">
                <img
                  src={`https://ghchart.rshah.org/008005/lau-szutner`}
                  alt="GitHub Contribution Graph"
                  className="w-full filter brightness-110"
                />
              </div>

              <div className="flex justify-between px-2 mt-3 text-xs text-gray-400">
                <span>12 months ago</span>
                <span>6 months ago</span>
                <span>Now</span>
              </div>
            </div>
          </div>

          <div className={`w-full h-fit !box-border relative group`}>
            <div className="absolute inset-0 rounded-md bg-[#00ffea] opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300 z-0"></div>

            <div className="relative z-10 bg-neutral-800 text-white p-5 rounded-md border-2 border-neutral-700 hover:border-[#00ffea]">
              <div className="grid grid-cols-2 gap-6 mx-auto place-items-center">
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=lau-szutner&show_icons=true&hide_border=true&title_color=ffffff&icon_color=00ffea&&text_color=ffffff&bg_color=00000000`}
                  alt="GitHub Stats"
                  className="w-12/12"
                />
                <img
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=lau-szutner&layout=compact&hide_border=true&title_color=ffffff&icon_color=4ade80&text_color=ffffff&bg_color=00000000&exclude_repo=BookUp,Cripto-Merch,Razer-Bootsrap`}
                  alt="Top Languages"
                  className="w-11/12"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <a
            href="https://github.com/lau-szutner"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-green-500/20 hover:bg-green-500/30 border border-green-500/50 text-green-400 transition-all"
          >
            🐱‍💻 View Full GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}

type StatCardProps = {
  icon: string;
  value: number | string;
  label: string;
};

function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <div className={`w-full h-fit !box-border relative group`}>
      <div className="absolute inset-0 rounded-md bg-[#00ffea] opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300 z-0"></div>

      <div className="relative z-10 bg-neutral-800 text-white p-5 rounded-md border-2 border-neutral-700 hover:border-[#00ffea]">
        <div className="flex items-center justify-center mb-2 text-2xl">
          {icon}
        </div>
        <p className="text-3xl font-bold">{value}</p>
        <p className="text-sm text-gray-400">{label}</p>
      </div>
    </div>
  );
}
