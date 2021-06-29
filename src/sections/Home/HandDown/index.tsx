import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import styles from './styles.module.scss';

const HandDown = () => {
  const animationRef = useRef<HTMLDivElement | null>(null);

  const next = () => {
    const $about = document.querySelector('#about');
    if ($about) {
      $about.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (animationRef.current) {
      lottie.loadAnimation({
        container: animationRef.current, // Required
        path: 'https://assets5.lottiefiles.com/packages/lf20_uxqdrvci.json', // Required
        renderer: 'svg', // Required
        loop: true, // Optional
        autoplay: true, // Optional
        name: 'Hello World', // Name for future reference. Optional.
      });
    }
  }, []);

  return (
    <div ref={animationRef} className={styles.handDown} onClick={next} />
  );
};

export default HandDown;
