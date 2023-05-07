import { Grid, Text, Title } from '@mantine/core';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <>
      <Title order={1} ml='5vw' ta={'center'}>
        Welcome to my site! Click on a card to learn more about that project!
      </Title>
      <Grid ml='5vw'>
        <Grid.Col span='content'>
          <ProjectCard
            img='/randomizerimage.png'
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
            buttonLink='https://animerandomizer.darkshinygira.com'
            cardLink='/projects/anime-randomizer'
          />
        </Grid.Col>
        <Grid.Col span='content'>
          <ProjectCard
            img='/SwelteringSun.png'
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
            buttonLink='https://sweltering.darkshinygira.com'
            cardLink='/projects/swelt-calc'
          />
        </Grid.Col>
      </Grid>
    </>
  );
}
