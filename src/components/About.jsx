import React, { Component } from 'react'
import {Grid, Col, Image} from 'react-bootstrap';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div>
          <Image src= "assets/course05.jpg" className="header-image"/>
          <Grid>
            <Col xs={12} sm={8} smOffset={2}>
            <Image src= "assets/course05.jpg" className="about-pic" rounded/>
              <h3>About Her</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, 
                animi ipsum? Amet, laudantium ratione. Fugit dolor hic inventore! Id ullam
                 voluptates voluptatem, magnam quam quos nulla vero ea porro ab?</p>
            </Col>
          </Grid> 
      </div>
    )
  }
}
