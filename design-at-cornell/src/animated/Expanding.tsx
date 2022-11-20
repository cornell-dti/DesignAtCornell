import React, { useRef } from 'react';
import { animated, useSpring } from 'react-spring';

const Expanding = ({ children, show, duration = 120 }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const toggleStyle = useSpring({
    overflow: 'hidden',
    height: show && ref.current ? `${ref.current.offsetHeight}px` : '0px',
    config: { duration },
  });

  return (
    <animated.div style={toggleStyle}>
      <div ref={ref}>{children}</div>
    </animated.div>
  );
};

export default Expanding;

interface Props {
  children?: React.ReactNode;
  show: boolean;
  duration?: number;
}
