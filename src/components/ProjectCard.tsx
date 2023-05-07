import { ReactNode } from 'react'
import { Card, Button, Image, Text, Center, Space } from '@mantine/core'
interface Props {
  img: string
  alt: string
  title: string
  desc: ReactNode
  link: string
}

function ProjectCard({ img, alt, title, desc, link }: Props) {
  return (
    <Card w='min-content'>
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
          href={link}
          gradient={{ from: 'blue.3', to: 'teal.5' }}
        >
          Check it out
        </Button>
      </Center>
    </Card>
  )
}

export default ProjectCard
