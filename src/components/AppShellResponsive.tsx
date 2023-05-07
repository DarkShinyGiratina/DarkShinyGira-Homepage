import { ReactNode } from 'react';
import { AppShell, useMantineTheme } from '@mantine/core';
import CustomHeader from './CustomHeader';

interface Props {
  content: ReactNode;
  is404: boolean;
}

const headerLinks = [
  { link: '/', label: 'Home' },
  { link: '/about-me', label: 'About Me' },
];

function AppShellResponsive({ content, is404 }: Props) {
  const theme = useMantineTheme();
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      header={<CustomHeader links={headerLinks} is404={is404} />}
    >
      {content}
    </AppShell>
  );
}

export default AppShellResponsive;
