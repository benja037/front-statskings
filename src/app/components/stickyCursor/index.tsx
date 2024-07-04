'use client';

import { useEffect } from 'react';
import styles from './style.module.scss';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface StickyCursorProps {
  stickyElementSrc: string;
}

const StickyCursor: React.FC<StickyCursorProps> = ({ stickyElementSrc }) => {
  const cursorSize = 30; // Ajusta el tamaño del cursor según sea necesario
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  };

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  return (
    <div className={styles.cursorContainer}>
      <motion.img
        src={stickyElementSrc}
        alt="Cursor"
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
          width: `${cursorSize}px`,
          height: `${cursorSize}px`,
        }}
        className={styles.cursor}
      />
    </div>
  );
};

export default StickyCursor;
