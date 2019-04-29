import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Button, Card, CardDeck } from "react-bootstrap";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <h2>Welcome to React Bootstrap</h2>
          <p>Lets enjoy the chamness, innocence of little angels.....</p>
          <Link to="/about">
            <Button bsStyle="primary">About</Button>
          </Link>
        </Jumbotron>
        <CardDeck>
          <Card>
            <Card.Img variant="top" src="assets/child.jpg" />
            <Card.Body>
              <Card.Title>Martin</Card.Title>
              <Card.Text>
                God gave you this gift of imagination. Use it. I thought today
                we would do a happy little picture. In nature, dead trees are
                just as normal as live trees. This is a fantastic little
                painting. If these lines aren't straight, your water's going to
                run right out of your painting and get your floor wet.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Innocence to be admire.</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="assets/children.jpg" />
            <Card.Body>
              <Card.Title>Martin & Vanessa</Card.Title>
              <Card.Text>
                You have to make almighty decisions when you're the creator. The
                very fact that you're aware of suffering is enough reason to be
                overjoyed that you're alive and can experience it. In your
                imagination you can go anywhere you want. Even the worst thing
                we can do here is good.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Beauty of almighty.</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="assets/sibling.jpg" />
            <Card.Body>
              <Card.Title>Sibling</Card.Title>
              <Card.Text>
                We don't want to set these clouds on fire. A thin paint will
                stick to a thick paint. Only think about one thing at a time.
                Don't get greedy. You have to allow the paint to break to make
                it beautiful. Don't fiddle with it all day.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Sibling love.</small>
            </Card.Footer>
          </Card>
        </CardDeck>
        ;
      </Container>
    );
  }
}

export default Home;
