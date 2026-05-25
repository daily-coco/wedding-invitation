import type { PropsWithChildren } from 'react';
import { Wrapper } from './MainLayout.styles.ts';

export default function MainLayout({ children }: PropsWithChildren) {
  return <Wrapper>{children}</Wrapper>;
}
