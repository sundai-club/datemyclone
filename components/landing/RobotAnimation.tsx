'use client';

import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import robotAnimation from './robot-animation.json';

export const RobotAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const anim = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: robotAnimation,
      });

      return () => anim.destroy();
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full max-w-[400px] mx-auto" />
  );
};
