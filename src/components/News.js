import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./News.css";

function News() {
  return (
    <div>
      <Image src="assets/hello.jpg" className="header-image" />
      <Container>
        <h2>Stories</h2>
        <Row>
          <Col xs={12} sm={8} className="main-section">
            <p>
              Put light against light - you have nothing. Put dark against dark
              - you have nothing. It's the contrast of light and dark that each
              give the other one meaning. Just beat the devil out of it. Decide
              where your cloud lives. Maybe he lives right in here. Don't fiddle
              with it all day.
            </p>
            <p>
              It's cold, but it's beautiful. From all of us here, I want to wish
              you happy painting and God bless, my friends. If you hypnotize it,
              it will go away. Here we're limited by the time we have. See
              there, told you that would be easy.
            </p>
            <p>
              In your world you can create anything you desire. Didn't you know
              you had that much power? You can move mountains. You can do
              anything. We're trying to teach you a technique here and how to
              use it. Trees grow in all kinds of ways. They're not all perfectly
              straight. Not every limb is perfect. This is the way you take out
              your flustrations.
            </p>
            <p>
              Isn't it fantastic that you can change your mind and create all
              these happy things? You have to allow the paint to break to make
              it beautiful. In your imagination you can go anywhere you want. If
              what you're doing doesn't make you happy - you're doing the wrong
              thing. You can bend rivers. But when I get home, the only thing I
              have power over is the garbage. Everyone is going to see things
              differently - and that's the way it should be.
            </p>
            <p>
              It's so important to do something every day that will make you
              happy. We'll put all the little clouds in and let them dance
              around and have fun.
            </p>
          </Col>
          <Col xs={12} sm={4} className="sidebar-section">
            <Image src="assets/photo.jpg" />
            <p>
              We don't have to be committed. We are just playing here. Water's
              like me. It's laaazy ... Boy, it always looks for the easiest way
              to do things The light is your friend. Preserve it. I thought
              today we would do a happy little picture. Every single thing in
              the world has its own personality - and it is up to you to make
              friends with the little rascals.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default News;
