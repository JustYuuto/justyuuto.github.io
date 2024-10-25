const getType = (type: number) => {
  switch (type) {
    case 0:
      return 'Playing';
    case 1:
      return 'Streaming';
    case 2:
      return 'Listening to';
    case 3:
      return 'Watching';
    default:
      return 'Unknown';
  }
};

const getLargeImage = (activity: LanyardUser['activities'][0]): string => {
  const largeImage = activity.assets?.large_image;
  if (!largeImage) return '';
  if (largeImage.startsWith('spotify:')) return `https://i.scdn.co/image/${largeImage.split(':')[1]}`;
  if (largeImage.startsWith('mp:external')) return `https://media.discordapp.net/${largeImage.split(':')[1]}`;
  return `https://cdn.discordapp.com/app-assets/${largeImage}.png`;
};

export default function ContactSection({ user }: { user: LanyardUser }) {
  const activity = user.activities?.length ? user.activities[0] : null;

  return (
    <section id="contact">
      <div className="flex h-screen flex-col items-center justify-center gap-6">
        <div className="max-w-lg space-y-4 text-center">
          <h1 className="text-4xl font-bold">Contact</h1>
        </div>
        <div>
          <ul className="flex items-center gap-4">
            <li>
              <a href={`https://discord.com/users/${user.discord_user.id}`} target="_blank" rel="noreferrer">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-8" fill="#5865F2">
                  <path
                    d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://github.com/JustYuuto" target="_blank" rel="noreferrer">
                <svg role="img" className="size-8" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className="mx-auto w-11/12 rounded-lg border p-4 md:w-[28rem]">
          <header className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={
                `https://cdn.discordapp.com/avatars/${user.discord_user.id}/${user.discord_user.avatar}.${user.discord_user.avatar.startsWith('a_') ? 'gif' : 'png'}?size=32`
              } loading="lazy" alt="Avatar" className="size-8 rounded-full" draggable={false}/>
              <a
                className="text-lg font-medium" href={`https://discord.com/users/${user.discord_user.id}`}
                target="_blank" rel="noreferrer"
              >
                @{user.discord_user.username}
              </a>
            </div>
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-6" fill="#5865F2">
              <path
                d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
            </svg>
          </header>
          <div>
            {activity ? <div className="flex gap-4">
              {activity.assets?.large_image ? (
                <img
                  src={getLargeImage(activity)}
                  alt="Activity"
                  className="size-24 rounded-lg"
                />
              ) : null}
              <div className="space-y-0.5 overflow-hidden text-gray-100">
                <p className="truncate">
                  {getType(activity.type)}&nbsp;
                  {activity.type === 2 ? activity.sync_id ? <a
                    href={`https://open.spotify.com/track/${activity.sync_id}`} target="_blank" rel="noreferrer"
                    className="text-blue-500 duration-150 hover:text-blue-400"
                  >
                    {activity.details}
                  </a> : activity.details : activity.name}
                </p>
                {activity.state || activity.details ? (
                  <p className="text-sm">
                    {activity.type === 2 && 'By '}
                    {activity.type === 2 ? activity.state.replaceAll(';', ',') : activity.details}
                  </p>
                ) : null}
                {activity.assets && activity.assets.large_text && activity.type === 2 ? (
                  <p className="text-sm">
                      On&nbsp;
                    {activity.assets.large_text}
                  </p>
                ) : (
                  <p className="text-sm">
                    {activity.state}
                  </p>
                )}
              </div>
            </div> : (
              <p>Not doing something</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
