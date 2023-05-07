import { Card, Col, Row } from "react-bootstrap";
import "./App.css";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <Row>
        <Col sm={12} md={4}>
          <ProjectCard
            img="randomizerimage.png"
            title="My Anime Randomizer"
            desc={
              <Card.Text>
                The first website I built from scratch. Randomly selects anime from{" "}
                <a href="https://myanimelist.net" target="_blank">
                  MAL
                </a>
                .
              </Card.Text>
            }
            link="https://animerandomizer.darkshinygira.com"
          />
        </Col>
        <Col sm={12} md={4}>
          <ProjectCard
            img="SwelteringSun.png"
            title="Sweltering Sun Damage Calculator"
            desc={
              <Card.Text>
                A damage calculator for the ROM Hack Pokémon Sweltering Sun. Edited version of Showdown's official{" "}
                <a href="https://calc.pokemonshowdown.com/index.html" target="_blank">
                  calculator.
                </a>
              </Card.Text>
            }
            link="https://sweltering.darkshinygira.com"
          />
        </Col>
      </Row>
    </>
  );
}

export default App;
