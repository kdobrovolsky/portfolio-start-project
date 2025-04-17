import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  from?: 'left' | 'right' | 'top' | 'bottom';
}

const AnimatedSection = ({ 
  children, 
  delay = 0,
  duration = 0.6,
  from = 'bottom'
}: AnimatedSectionProps) => {
  const getInitial = () => {
    switch(from) {
      case 'left': return { opacity: 0, x: -200 };
      case 'right': return { opacity: 0, x: 100 };
      case 'top': return { opacity: 0, y: -50 };
      case 'bottom': 
      default: 
        return { opacity: 0, y: 50 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      transition={{ 
        duration: duration,
        delay: delay,
        ease: [0.16, 0.77, 0.47, 0.97]
      }}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;