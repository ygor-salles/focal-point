import { ReactNode } from 'react';

import { BaseLayout } from '@components/BaseLayout';

export default function HomeLayout({ children }: { children: ReactNode }) {
  return <BaseLayout>{children}</BaseLayout>;
}
