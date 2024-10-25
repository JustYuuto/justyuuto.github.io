export default function MainSection({ user }: { user: LanyardUser }) {
  return (
    <section id="main">
      <div className="relative flex h-screen flex-col items-center justify-center text-center">
        <div className="max-w-lg space-y-4">
          <img src={
            `https://cdn.discordapp.com/avatars/${user.discord_user.id}/${user.discord_user.avatar}.${user.discord_user.avatar.startsWith('a_') ? 'gif' : 'png'}?size=256`
          } alt="Avatar" className="mx-auto mb-8 size-32 rounded-full" draggable={false} />
          <h1 className="text-4xl font-bold">Hi! I'm Yuuto</h1>
          <p>
            I'm a 17 yo developer from France.
          </p>
        </div>
        <div className="absolute bottom-24">
          <span className="text-sm text-gray-500">
            Scroll down to see my projects
          </span>
        </div>
      </div>
    </section>
  );
}
