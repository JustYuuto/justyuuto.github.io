import {
  SiBun, SiCloudflare, SiCloudflareHex, SiDocker, SiDockerHex, SiGithub, SiNextdotjs, SiReact, SiReactHex, SiTailwindcss,
  SiTailwindcssHex, SiWebstorm
} from '@icons-pack/react-simple-icons';

export default function WhatIUseSection() {
  const items = [
    {
      name: 'WebStorm', icon: <SiWebstorm color="#fbfe51" />, link: 'https://www.jetbrains.com/webstorm/',
      use: 'IDE for JavaScript development'
    },
    {
      name: 'React', icon: <SiReact color={SiReactHex} />, link: 'https://react.dev/',
      use: 'Frontend library'
    },
    {
      name: 'Tailwind CSS', icon: <SiTailwindcss color={SiTailwindcssHex} />, link: 'https://tailwindcss.com/',
      use: 'Utility-first CSS framework'
    },
    {
      name: 'GitHub', icon: <SiGithub color="#fff" />, link: 'https://github.com/',
      use: 'Version control'
    },
    {
      name: 'Cloudflare', icon: <SiCloudflare color={SiCloudflareHex} />, link: 'https://www.cloudflare.com/',
      use: 'CDN, DDoS protection, DNS, etc.'
    },
    {
      name: 'Docker', icon: <SiDocker color={SiDockerHex} />, link: 'https://www.docker.com/',
      use: 'Containerization'
    },
    {
      name: 'Next.js', icon: <SiNextdotjs color="#fff" />, link: 'https://nextjs.org/',
      use: 'React framework'
    },
    {
      name: 'Bun', icon: <SiBun color="#fff" />, link: 'https://bun.sh/',
      use: 'Fast JavaScript bundler, runtime and package manager'
    }
  ];

  return (
    <section id="what-i-use" className="relative flex min-h-screen flex-col items-center justify-center pt-20 mx-3 text-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">What do I use?</h1>
        <p>
          Here are some of the software and tools I use on a daily basis.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map((item, index) => (
          <div key={index} className="flex text-left items-center gap-4 p-4 bg-gray-800 rounded-lg w-full md:max-w-96">
            <div className="size-6">{item.icon}</div>
            <div>
              <a href={item.link} target="_blank" rel="noreferrer" className="font-bold">{item.name}</a>
              <p>{item.use}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}