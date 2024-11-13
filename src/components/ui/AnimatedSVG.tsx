import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const AnimatedSVG: React.FC = () => {
  const svgPathRef = useRef<SVGPathElement>(null);
  const stringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let path = 'M 10 100 Q 500 100 990 100';
    const finalPath = 'M 10 100 Q 500 100 990 100';

    const handleMouseMove = (e: MouseEvent) => {
      const { offsetX, offsetY } = e;
      path = `M 10 100 Q ${offsetX} ${offsetY} 990 100`;

      gsap.to(svgPathRef.current, {
        attr: { d: path },
        duration: 0.2,
        ease: 'elastic.out(1, 0.3)',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(svgPathRef.current, {
        attr: { d: finalPath },
        duration: 0.5,
        ease: 'elastic.out(1, 0.2)',
      });
    };

    const stringElement = stringRef.current;
    stringElement?.addEventListener('mousemove', handleMouseMove);
    stringElement?.addEventListener('mouseleave', handleMouseLeave);

    // Clean up event listeners on unmount
    return () => {
      stringElement?.removeEventListener('mousemove', handleMouseMove);
      stringElement?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      id="string"
      className="flex justify-center items-center w-full h-full py-6 md:py-10"
      ref={stringRef}
    >
      <svg
        viewBox="0 0 1000 200" // Use viewBox for responsiveness
        className="w-full md:w-3/4 lg:w-1/2" // Responsive width with Tailwind
        height="auto" // Make height responsive to width
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Define the gradient */}
        <defs>
          <linearGradient
            id="color-gradient"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="100%"
            y2="0"
          >
            <stop offset="0%" stopColor="red" />
            <stop offset="50%" stopColor="blue" />
            <stop offset="100%" stopColor="pink" />
          </linearGradient>
        </defs>
        <path
          ref={svgPathRef}
          d="M 10 100 Q 500 100 990 100"
          stroke="url(#color-gradient)"
          strokeWidth="1.5"
          fill="transparent"
        />
      </svg>
    </div>
  );
};

export default AnimatedSVG;
