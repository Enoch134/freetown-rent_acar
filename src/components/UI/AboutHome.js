import React from "react";
import { Container, Row, Col,Button } from "reactstrap";
import {Link} from "react-router-dom"
import "../../styles/about-section.css";
import FJ2 from "../../assets/all-images/cars-img/FJ2.jpg";

const AboutHome = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to Freetown RentaCar</h2>
              <p className="section__description">
                Welcome to Freetown RentaCar, where we offer top-quality rental cars to suit your needs. 
                Our commitment to customer service and safety means that you can expect a smooth and stress-free rental experience with us.
                We offer a range of vehicles that are regularly maintained and inspected, and our rates are competitive and transparent. 
                Booking with us is easy and convenient, whether you choose to do it online or speak with a member of our team directly.
                Thank you for considering Freetown RentaCar for your rental needs. We look forward to providing you with excellent service and reliable transportation.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> We offer town service for an hour
                 
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> We offer town service for half day
                 
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i>  We offer town service for full day 
                 
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i>  We offer service for full days in the provence
                 
                </p>
                
              </div>
              <Button className="btn mt-4 bg-dark width-30">
                <Link to="/about" class="text-decoration-none text-white ">About</Link>{' '}
               </Button>
            </div>
          </Col>

          <Col lg="5" md="6">
            <div className="about__img">
              <img src={FJ2} alt="" className="w-100 " />
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default AboutHome;
