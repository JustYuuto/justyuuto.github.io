import pfp from '../img/pfp.jpg';

export default function MainSection() {
  return (
    <section id="main">
      <div className="relative flex h-screen flex-col items-center justify-center text-center">
        <div className="max-w-lg space-y-4">
          <img src={pfp} alt="Avatar" className="mx-auto mb-8 size-32 rounded-full" draggable={false} />
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
