import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Jumbotron, Accordion, Card } from 'react-bootstrap'
import ModalAssessment from './ModalAssessment/ModalAssessment';

class App extends Component {

  constructor() {
    super();
    this.updateScore = this.updateScore.bind(this);
    this.submitScore = this.submitScore.bind(this);
  }

  state = {
    takenAssessment: null,
    item1: null,
    item2: null,
    item3: null,
    item4: null,
    item5: null,
    item6: null,
    item7: null,
    item8: null,
    item9: null,
    item10: null,
    item11: null,
    item12: null,
    item13: null,
    item14: null,
    item15: null,
    item16: null,
    item17: null,
    item18: null,
    item19: null,
    item20: null,
    item21: null,
  }

  updateScore = (event) => {
    const name = event.target.name;
    const value = event.target.value

    this.setState({
      [name]: parseInt(value)
    });

    const answerStr = JSON.stringify(this.state)
    console.log(`Updated state ${answerStr}`)
  }

  submitScore = () => {
    this.setState({
      takenAssessment: true
    });
    alert(`Total Scores = ${JSON.stringify(this.state)}`)
  }

  render() {
    const timeManagementScore = this.state.item1 + this.state.item2 + this.state.item3 + this.state.item4 + this.state.item5 + this.state.item6 + this.state.item7

    const noteTakingScore = this.state.item8 + this.state.item9 + this.state.item10 + this.state.item11 + this.state.item12 + this.state.item13 + this.state.item14

    const connectingWithOthersScore = this.state.item15 + this.state.item16 + this.state.item17 + this.state.item18 + this.state.item19 + this.state.item20 + this.state.item21

    if (this.state.takenAssessment && timeManagementScore <= noteTakingScore && timeManagementScore <= connectingWithOthersScore) {
      return (
        <div>
          <Container>
            <Jumbotron>
              <h1>App</h1>
            </Jumbotron>
            <section>
              <Accordion>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="4">
                    Organization and Time Management
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="4">
                    <div>
                      <Card.Body>Activity 1</Card.Body>
                      <Card.Body>Activity 2</Card.Body>
                      <Card.Body>Activity 3</Card.Body>
                    </div>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </section>
          </Container>
        </div>
      )
    } else if (this.state.takenAssessment && noteTakingScore < timeManagementScore && noteTakingScore <= connectingWithOthersScore) {
      return (
        <div>
          <Container>
            <Jumbotron>
              <h1>App</h1>
            </Jumbotron>
            <section>
              <Accordion>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="6">
                    Note Taking
                </Accordion.Toggle>
                  <Accordion.Collapse eventKey="6">
                    <div>
                      <Card.Body>Activity 1</Card.Body>
                      <Card.Body>Activity 2</Card.Body>
                      <Card.Body>Activity 3</Card.Body>
                    </div>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </section>
          </Container>
        </div>
      )
    } else if (this.state.takenAssessment && connectingWithOthersScore < timeManagementScore && connectingWithOthersScore < noteTakingScore) {
      return (
        <div>
          <Container>
            <Jumbotron>
              <h1>App</h1>
            </Jumbotron>
            <section>
              <Accordion>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="10">
                    Connecting with Others
                </Accordion.Toggle>
                  <Accordion.Collapse eventKey="10">
                    <div>
                      <Card.Body>Activity 10.1</Card.Body>
                      <Card.Body>Activity 10.2</Card.Body>
                      <Card.Body>Activity 10.3</Card.Body>
                    </div>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </section>
          </Container>
        </div>
      )
    } else {
      return (
        <div>
          <Container>
            <Jumbotron>
              <h1>App</h1>
            </Jumbotron>
            <section>
              <Accordion>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    Self-Assessment (Initial)
                </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <div>
                      <ModalAssessment updateScore={this.updateScore} submitScore={this.submitScore} />
                    </div>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </section>
          </Container>
        </div>
      );
    }
  }
}
export default App;
