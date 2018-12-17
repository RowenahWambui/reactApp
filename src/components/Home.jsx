import React, { Component } from 'react'
import {Link } from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import './Home.css'; 

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>React Website Tutorial</h2>
            <p>Learning how to build react websites. FINALLY!!!!!</p>
          <Link to="/about">
            <Button bsStyle="primary">About Us</Button>
          </Link>
        </Jumbotron>
       <Row className="show-grid text-center">
        <Col xs={12} sm={4} className="person-wrapper">
          <Image src="assets/course1.jpg" circle className="profie-photo"/>
          <h3>Sue</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae temporibus amet
             culpa nulla eligendi illum mollitia qui.Explicabo doloribus accusantium, ducimus 
             officia qui adipisci deserunt odio ab temporibus repellendus amet.</p>
        </Col>
        <Col xs={12} sm={4} className="person-wrapper">
          <Image src="assets/course1.jpg" circle className="profie-photo"/>
          <h3>Sue</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae temporibus amet
             culpa nulla eligendi illum mollitia qui.Explicabo doloribus accusantium, ducimus 
             officia qui adipisci deserunt odio ab temporibus repellendus amet.</p>
        </Col>
        <Col xs={12} sm={4} className="person-wrapper">
          <Image src="assets/course1.jpg" circle className="profie-photo"/>
          <h3>Sue</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae temporibus amet
             culpa nulla eligendi illum mollitia qui.Explicabo doloribus accusantium, ducimus 
             officia qui adipisci deserunt odio ab temporibus repellendus amet.</p>
        </Col>
      </Row>
      </Grid>
    )
  }
}
