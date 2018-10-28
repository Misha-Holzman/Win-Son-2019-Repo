import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

class About extends Component {
  render() {
    return (
      <div>
        <img className="title" src="https://i.imgur.com/HNglClT.png"/>
      <div id="slider">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
          data-interval="5000"
          keyboard="true"
          data-pause="hover"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block"
                src="https://i.imgur.com/1nAfDSX.jpg"
                alt="First slide"
                style={{width: '1048px', height: '695px'}}
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://i.imgur.com/QetKdt9.jpg"
                alt="Second slide"
                style={{width: '100%', maxHeight: '695px'}}
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://i.imgur.com/0aXkuSm.jpg"
                alt="Third slide"
                style={{width: '100%', maxHeight: '695px'}}
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      </div>
    );
  }
}

export default About;
