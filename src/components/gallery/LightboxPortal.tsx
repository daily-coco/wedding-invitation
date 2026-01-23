import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: React.ReactNode;
};

export default function LightboxPortal({ children }: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const el = useMemo(() => {
    const node = document.createElement('div');
    node.setAttribute('id', 'lightbox-root');
    return node;
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  }, [mounted, el]);

  return createPortal(children, el);
}
