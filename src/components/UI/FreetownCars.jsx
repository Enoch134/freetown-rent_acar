import React from "react";
import "../../styles/hero-slider.css";
import Helmet from "../Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import FiveSeater from "./FiveSeater";
import SevenSeater from "./SevenSeater";
import carData from "../../assets/data/carData";
import CarItem from "./CarItem";

const FreetownCars = () => {

  return (
    <Helmet>
        <section>
        <div className="slider__item slider__item-01 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">Hire your car here for comforttability</h4>
            <h1 className="text-light mb-4">Hire Now for a safe journey</h1>
          </div>
        </Container>
      </div>
        </section>
        <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Freetown Cars</h6>
              <h2 className="section__title">Hot Offers</h2>
            </Col>

            {carData.slice(0, 6).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
          <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Freetown</h6>
              <h2 className="section__title">Cars for our town Service</h2>
            </Col>
             <FiveSeater/>
           
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>
             <SevenSeater/>
           
          </Row>
        </Container>
      </section>
    </Helmet>
    
  );
};

export default FreetownCars;
