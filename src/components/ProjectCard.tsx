import { ReactNode } from 'react';
import { Card, Button, Image, Text, Center, Space } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
interface Props {
  img: string;
  alt: string;
  title: string;
  desc: ReactNode;
  buttonLink: string;
  cardLink: string;
}

function ProjectCard({ img, alt, title, desc, buttonLink, cardLink }: Props) {
  const navigate = useNavigate();
  return (
    <Card
      w='min-content'
      onClick={(e) => {
        if ((e.target as HTMLElement).className.includes('Button')) return;
        navigate(cardLink);
      }}
      sx={{ cursor: 'pointer' }}
    >
      <Card.Section>
        <Image src={img} alt={alt} height='20vh' fit='contain' />
      </Card.Section>
      <Text fz='lg'>{title}</Text>
      <Text size='sm' w='15vw' c='dimmed'>
        {desc}
      </Text>
      <Space h='md' />
      <Center>
        <Button
          variant='gradient'
          component='a'
          href={buttonLink}
          gradient={{ from: 'blue.3', to: 'teal.5' }}
        >
          Check it out
        </Button>
      </Center>
    </Card>
  );
}

export default ProjectCard;
