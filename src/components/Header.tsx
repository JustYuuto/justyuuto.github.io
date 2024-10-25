export default function Header() {
  const links = [
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
    <header className="absolute inset-x-0 top-0 flex items-center justify-between px-8 py-4">
      <div>
        <span role="link" className="cursor-pointer text-2xl font-bold" onClick={() => {
          scroll(0, 0);
        }}>
          Yuuto
          <span className="text-base text-gray-500">.dev</span>
        </span>
      </div>
      <div>
        <nav>
          <ul className="flex space-x-6">
            {links.map(link => (
              <li key={link.url}>
                <a href={link.url} className="text-gray-100 duration-150 hover:text-gray-400">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
