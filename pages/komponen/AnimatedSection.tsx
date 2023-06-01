import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

interface AnimatedSectionProps {
  children: React.ReactNode;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const styles = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0px)' : 'translateY(100px)',
  });

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('animated-section');
      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight && rect.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <animated.section id="animated-section" style={styles}>
      {children}
    </animated.section>
  );
};

export default AnimatedSection;