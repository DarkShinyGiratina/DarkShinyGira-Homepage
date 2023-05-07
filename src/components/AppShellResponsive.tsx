import { ReactNode } from 'react'
import { AppShell, useMantineTheme } from '@mantine/core'
import CustomHeader from './CustomHeader'

interface Props {
  content: ReactNode
}

const headerLinks = [
  { link: '/', label: 'Home' },
  { link: '/test', label: 'Test' },
]

function AppShellResponsive({ content }: Props) {
  const theme = useMantineTheme()
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      header={<CustomHeader links={headerLinks} />}
    >
      {content}
    </AppShell>
  )
}

export default AppShellResponsive
