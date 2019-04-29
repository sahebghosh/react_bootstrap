import React from "react";
import { Container, Col, Image } from "react-bootstrap";
import "./About.css";

function About() {
  return (
    <div>
      <Image src="assets/friend.jpg" className="header-image" />

      <Container>
        <Col xs={12} sm={8} smOffset={2}>
          <Image src="assets/smile.jpg" className="about-profile-pic" rounded />
          <h3>Martin & Vennesa</h3>
          <p>
            Now then, let's play. How to paint. That's easy. What to paint.
            That's much harder. And maybe a little bush lives there. Just let
            your mind wander and enjoy. This should make you happy. See how easy
            it is to create a little tree right in your world.
          </p>
          <p>
            This is a fantastic little painting. You have to make almighty
            decisions when you're the creator. It's life. It's interesting. It's
            fun. When you do it your way you can go anywhere you choose. You
            want your tree to have some character. Make it special. It's amazing
            what you can do with a little love in your heart.
          </p>
          <p>
            Little trees and bushes grow however makes them happy. Take your
            time. Speed will come later. It looks so good, I might as well not
            stop. Van Dyke Brown is a very nice brown, it's almost like a
            chocolate brown. You could sit here for weeks with your one hair
            brush trying to do that - or you could do it with one stroke with an
            almighty brush. I get carried away with this brush cleaning.
          </p>
          <p>
            You better get your coat out, this is going to be a cold painting.
            That's the way I look when I get home late; black and blue. That's
            crazy. We're trying to teach you a technique here and how to use it.
          </p>
        </Col>
      </Container>
    </div>
  );
}

export default About;
