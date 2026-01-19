import { useEffect, useRef, useState } from 'react';

type useInViewOptions = IntersectionObserverInit & {
  once?: boolean;
};

export function useInView<T extends HTMLElement>(option?: useInViewOptions) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  const {
    root = null,
    rootMargin = '0px 0px -10% 0px',
    threshold = 0.15,
    once = true,
  } = option ?? {};

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (once && inView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setInView(false);
        }
      },
      {
        root,
        rootMargin,
        threshold,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [root, rootMargin, threshold, once, inView]);

  return { ref, inView };
}
