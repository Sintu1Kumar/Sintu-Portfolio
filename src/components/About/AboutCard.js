import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { Bio } from "../../Assets/data";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">{Bio.name} </span>
            from <span className="purple"> {Bio.city}</span>
            <br />
            I am currently exploring opportunities as a web developer and
            backend developer.
            <br />I have completed {Bio.education}
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">{Bio.name}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
