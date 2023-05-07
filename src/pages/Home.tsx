import { Grid, Text } from '@mantine/core'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  return (
    <>
      <Grid ml='5vw'>
        <Grid.Col span='content'>
          <ProjectCard
            img='randomizerimage.png'
            alt='Randomizer Logo'
            title='My Anime Randomizer'
            desc={
              <Text>
                The first website I built from scratch. Randomly selects anime from{' '}
                <a href='https://myanimelist.net' target='_blank'>
                  MAL
                </a>
                .
              </Text>
            }
            link='https://animerandomizer.darkshinygira.com'
          />
        </Grid.Col>
        <Grid.Col span='content'>
          <ProjectCard
            img='SwelteringSun.png'
            alt='Sweltering Sun Logo'
            title='Sweltering Sun Damage Calculator'
            desc={
              <Text>
                A damage calculator for the ROM Hack Pokémon Sweltering Sun. Edited version of
                Showdown's official{' '}
                <a href='https://calc.pokemonshowdown.com/index.html' target='_blank'>
                  calculator.
                </a>
              </Text>
            }
            link='https://sweltering.darkshinygira.com'
          />
        </Grid.Col>
      </Grid>
    </>
  )
}
