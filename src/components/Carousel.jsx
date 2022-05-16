import React from 'react';
import { Carousel, Container } from "react-bootstrap";
import "../styles/index.css";

const CarouselP = () => (
  <Container>
    <Carousel fade>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/docutv7ug/image/upload/v1652292664/Block-Master/foto12_letbza.webp"
          alt="First slide"
          id="imgCarousel"
        />
        <Carousel.Caption>
          <h3>Spiderman 3</h3>
          <p>El regreso de Chubaka</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/docutv7ug/image/upload/v1652293267/Block-Master/foto13_hejxsj.jpg"
          alt="Second slide"
          id="imgCarousel"
        />
        <Carousel.Caption>
          <h3>Los Eternos</h3>
          <p>La pelicula mas eterna de marvel por ser tan mala</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/docutv7ug/image/upload/v1652293381/Block-Master/foto16_hqodzl.webp"
          alt="Third slide"
          id="imgCarousel"
        />
        <Carousel.Caption>
          <h3>Clasicos de niños</h3>
          <p>Los mejores clasicos de señal colombia</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/docutv7ug/image/upload/v1652293267/Block-Master/foto15_hdvvio.jpg"
          alt="Third slide"
          id="imgCarousel"
        />
        <Carousel.Caption>
          <h3>Harry Potter y el misterio del poster</h3>
          <p>La pelicula con mayor presupuesto en la actualidad</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://res.cloudinary.com/docutv7ug/image/upload/v1652293267/Block-Master/foto14_qvxoat.webp"
          alt="Third slide"
          id="imgCarousel"
        />
        <Carousel.Caption>
          <h3>La Peli Roja</h3>
          <p>Una historia basada en la clasica serie de Rebelde de los 60´s</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </Container>
)
export default CarouselP;