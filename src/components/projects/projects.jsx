import React, { useState } from "react";
import "./projects.scss";
import { Container, Button } from "react-bootstrap";
import gambar1 from './photo/simplecounter.jpg'

export default function Projects() {
  const [project, setProject] = useState([
    {
      id: 1,
      title: "Simple Counter",
      content:
        "This's the first app i made. when i learn react for the first time,i made this app as a canvas to see what happen. Do you see the typo? yeah that sign,this app no modificaton.  i use create-react-app and simple css. when i making this app, i dont know SASS",
      url: "https://bakharaalief.github.io/simplecounter/"
    }
  ]);
  const pencet = input => {
    window.open(input);
  };
  return (
    <div className="projects" id="projects">
      <Container>
        <h1>Projects</h1>
        {project.map(project => (
          <div className="project" key={project.id}>
            <div className="image">
              <img src={gambar1} alt="" />
            </div>
            <div className="text">
              <h2>{project.title}</h2>
              <p>{project.content}</p>
              <div className="tombol">
                <Button onClick={() => pencet(project.url)}>Web link</Button>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
}
