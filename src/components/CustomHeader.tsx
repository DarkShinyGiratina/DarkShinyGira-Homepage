import {
  Burger,
  Group,
  Header,
  Image,
  Paper,
  Space,
  Text,
  Transition,
  createStyles,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    position: 'absolute',
    left: '93%',
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: '80%',
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflowWrap: 'break-word',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

interface Props {
  links: { link: string; label: string }[];
  is404: boolean;
}

export default function CustomHeader({ links, is404 }: Props) {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState(links[0].link);
  const [opened, { toggle, close }] = useDisclosure(false);
  const navigate = useNavigate();
  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        event.preventDefault();
        navigate(link.link);
        close();
      }}
    >
      {link.label}
    </a>
  ));

  // Every time we draw the header, set the active button to whatever path we're on.
  useEffect(() => {
    setActive(window.location.pathname);
  });

  return (
    <Header height={{ base: 50, md: 70 }} p='md'>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          height: '100%',
        }}
      >
        <Group spacing={'0.25vw'}>
          <Image src={is404 ? '/luxio.png' : '/icon.png'} width={'3vw'} fit='contain' />
          <Text c='indigo.8'>DSG's Projects</Text>
        </Group>
        <Space w='lg' />
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} className={classes.burger} size='sm' />

        <Transition transition='pop-top-right' duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </div>
    </Header>
  );
}
