import miwa from '../img/miwa.png';
import yuuto from '../img/yuuto.png';
import spotify from '../img/spotify.png';
import {Fragment} from 'react';

type Technology = 'Next.js' | 'Tailwind' | 'PostgreSQL' | 'Sequelize' | 'Node.js' | 'TypeScript' | 'Electron' | 'Vite' |
  'React' | 'GitHub Pages' | 'Python' | 'pywidevine' | 'ffmpeg';

export default function ProjectsSection() {
  const projects: {
    name: string;
    description: string;
    image: string;
    url: string;
    madeWith: Technology[];
  }[] = [
    {
      name: 'Miwa.lol',
      description: 'Miwa.lol is a bio links website that allows you to create a modern and customizable page to share your social media links.',
      image: miwa,
      url: 'https://miwa.lol/?utm_source=yuuto.dev&utm_medium=projects',
      madeWith: ['Next.js', 'Tailwind', 'PostgreSQL', 'Sequelize']
    },
    {
      name: 'Deezer Discord RPC',
      description: 'Deezer Discord RPC is a Discord Rich Presence that displays the song you are listening to on Deezer.',
      image: 'https://github.com/JustYuuto/deezer-discord-rpc/raw/master/screenshots/rpc_on_profile.png',
      url: 'https://github.com/JustYuuto/deezer-discord-rpc',
      madeWith: ['Node.js', 'TypeScript', 'Electron']
    },
    {
      name: 'Yuuto.dev',
      description: 'My personal website, made with Vite, React and Tailwind.',
      image: yuuto,
      url: 'https://yuuto.dev',
      madeWith: ['Vite', 'React', 'Tailwind', 'GitHub Pages']
    },
    {
      name: 'Spotify Downloader',
      description: 'Spotify Downloader is a Python script that allows you to download songs directly from Spotify servers.',
      image: spotify,
      url: 'https://github.com/JustYuuto/spotify-downloader',
      madeWith: ['Python', 'pywidevine', 'ffmpeg']
    }
  ];
  const links: { [key in Technology]: string; } = {
    'Next.js': 'https://nextjs.org',
    'Tailwind': 'https://tailwindcss.com',
    'PostgreSQL': 'https://www.postgresql.org',
    'Sequelize': 'https://sequelize.org',
    'Node.js': 'https://nodejs.org',
    'TypeScript': 'https://www.typescriptlang.org',
    'Electron': 'https://www.electronjs.org',
    'Vite': 'https://vite.dev',
    'React': 'https://react.dev',
    'GitHub Pages': 'https://pages.github.com',
    'Python': 'https://www.python.org',
    'pywidevine': 'https://pypi.org/project/pywidevine/1.0.0/',
    'ffmpeg': 'https://ffmpeg.org'
  };

  return (
    <section id="projects">
      <div className="relative flex min-h-screen flex-col items-center justify-center pt-20 text-center">
        <div className="max-w-lg space-y-4">
          <h1 className="text-4xl font-bold">Projects</h1>
          <p>
            Here are some of the projects I've worked on.
          </p>
        </div>
        <div className="mx-4 my-8 grid grid-cols-1 gap-8 xl:grid-cols-2">
          {projects.map(project => (
            <div key={project.url} className="relative flex w-full flex-col space-y-4 rounded-lg border p-4 text-left xl:w-[32rem]">
              <img src={project.image} alt={project.name} className="mx-auto size-auto rounded-lg object-cover" loading="lazy" draggable={false} />
              <div className="flex items-center justify-between">
                <h2 className="truncate text-2xl font-bold" title={project.name}>{project.name}</h2>
                <a href={project.url} className="text-blue-500 duration-150 hover:text-blue-400" target="_blank">
                  View project
                </a>
              </div>
              <p>{project.description}</p>
              {project.madeWith && (
                <div className="flex space-x-2 text-sm text-gray-500">
                  <span>
                    Made with&nbsp;
                    {project.madeWith.map(tech => (
                      <Fragment key={tech}>
                        {links[tech] ? (
                          <a href={links[tech]} className="text-blue-500 duration-150 hover:text-blue-400" target="_blank">
                            {tech}
                          </a>
                        ) : tech}
                        {project.madeWith?.indexOf(tech) !== project.madeWith.length - 1 ? (
                          project.madeWith?.indexOf(tech) === project.madeWith.length - 2 ? ' & ' : ', '
                        ) : ''}
                      </Fragment>
                    ))}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
