import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { startTransition } from "react";

function Project({ id, img, title, text, address }) {
    
const navigate = useNavigate();

    const handleClick = (url) => {
      startTransition(() => {
        navigate(url);
      });
    };

  return (
    <Card
      className="blog-post"
      onClick={() => handleClick(`/project/${id}`)}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{address}</Card.Subtitle>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Project;
