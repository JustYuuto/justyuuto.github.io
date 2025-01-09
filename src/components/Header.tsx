export default function Header() {
  const links = [
    {
      name: 'What I Use',
      url: '#what-i-use'
    },
    {
      name: 'Projects',
      url: '#projects'
    },
    {
      name: 'Contact',
      url: '#contact'
    }
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-center md:justify-between px-8 py-4 backdrop-blur">
      <span role="link" className="cursor-pointer text-2xl font-bold max-md:hidden" onClick={() => {
        scroll(0, 0);
      }}>
        Yuuto
        <span className="text-base text-gray-500">.dev</span>
      </span>
      <nav>
        <ul className="flex gap-6">
          {links.map(link => (
            <li key={link.url}>
              <a href={link.url} className="text-gray-100 duration-150 hover:text-gray-400">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
