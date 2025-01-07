import {
  SiDiscord,
  SiDiscordHex,
  SiGithub,
  SiGithubHex, SiInstagram, SiInstagramHex,
  SiSteam,
  SiSteamHex,
  SiX,
  SiXHex
} from '@icons-pack/react-simple-icons';

export default function ContactSection() {
  const links = [
    { icon: <SiDiscord />, link: 'https://discord.com/users/269415459735076864', label: 'Discord', color: SiDiscordHex },
    { icon: <SiGithub />, link: 'https://github.com/JustYuuto', label: 'GitHub', color: SiGithubHex },
    { icon: <SiX />, link: 'https://x.com/YuutoGoat', label: 'Twitter/X', color: SiXHex },
    { icon: <SiSteam />, link: 'https://steamcommunity.com/id/PasYuuto/', label: 'Steam', color: SiSteamHex },
    { icon: <SiInstagram />, link: 'https://www.instagram.com/yuutocmoi', label: 'Instagram', color: SiInstagramHex },
  ];

  return (
    <section id="contact" className="flex h-screen flex-col items-center justify-center gap-8 px-6">
      <div className="space-y-6 text-center">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p>
          If you want to contact me (or just consult my profiles), here are some links.
        </p>
      </div>
      <div className="flex select-none flex-wrap justify-center gap-4">
        {links.map(({ icon, link, label, color }) => (
          <a key={label} href={link} target="_blank" rel="noreferrer" className="flex items-center gap-3.5 overflow-hidden rounded-full bg-[--color] px-5 py-4" style={{
            ['--color' as string]: color,
          }}>
            <div className="w-6">{icon}</div>
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}
