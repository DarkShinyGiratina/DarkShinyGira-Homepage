import { ReactNode } from "react";
import { Card, Button } from "react-bootstrap";

interface Props {
  img: string;
  title: string;
  desc: ReactNode;
  link: string;
}

function ProjectCard({ img, title, desc, link }: Props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {desc}
        <Button variant="primary" href={link}>
          Check it out
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
