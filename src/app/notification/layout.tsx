'use client';

import { PropsWithChildren } from 'react';

import TopBar from '@/src/components/Topbar';

const NotificationLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <TopBar.Container>
        <TopBar.BackButton />
      </TopBar.Container>
      {children}
    </>
  );
};

export default NotificationLayout;