import {useEffect, useState} from 'react';

export default function Loading() {
  const [dots, setDots] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev === 3) {
          return 1;
        } else {
          return prev + 1;
        }
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-50 bg-black">
      <div className="flex h-screen items-center justify-center">
        <div className="text-4xl font-bold text-white">
          {'.'.repeat(dots)}
        </div>
      </div>
    </div>
  );
}
