import React from 'react';
import { useInView } from '../../hooks/useInView';

type Props = {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
  delayMs?: number;
};

const FadeInSection = ({
  children,
  className,
  once = true,
  delayMs = 0,
}: Props) => {
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.12,
    rootMargin: '0px 0px -6% 0px',
    once,
  });

  return (
    <div
      ref={ref}
      data-fade-section
      className={[
        'fade-section',
        inView ? 'is-visible' : '',
        className ?? '',
      ].join(' ')}
      style={{ transitionDelay: `${delayMs}` }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
