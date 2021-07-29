import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../Img/img1.jpg';
import img2 from '../Img/img2.jpg';
import img3 from '../Img/img3.jpg';

export default function Slider() {

  return (
      <Carousel>
          <Carousel.Item style={{'height': '600px'}}>
              <img
                  className="d-block w-100"
                  src={img1}
                  alt="text"
              />
              <Carousel.Caption>
                  <h3>WebDev</h3>
                  <p>more texts...</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{'height': '600px'}}>
              <img
                  className="d-block w-100"
                  src={img2}
                  alt="text"
              />
              <Carousel.Caption>
                  <h3>WebDev</h3>
                  <p>more texts...</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{'height': '600px'}}>
              <img
                  className="d-block w-100"
                  src={img3}
                  alt="text"
              />
              <Carousel.Caption>
                  <h3>WebDev</h3>
                  <p>more texts...</p>
              </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
);
}
