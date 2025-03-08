import { useEffect, useState } from 'react';

const useScreenSize = (): number => {
  const [screenHeight, setScreenWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1024,
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => setScreenWidth(window.innerHeight);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenHeight;
};

export default useScreenSize;
