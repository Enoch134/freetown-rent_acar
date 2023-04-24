import React from "react";
import "../../styles/become-driver.css";
import { Container, Row, Col } from "reactstrap";

import driverImg from "../../assets/all-images/slider-img/2013-subaru-tribeca_100396941_h.jpg";

const BecomeDriverSection = () => {
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="5" md="6" sm="12" className="become__driver-img">
            <img src={driverImg} alt="" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
            Are you looking to make your next journey a memorable one? 
            Look no further than our car rental service! Our commitment to customer
            satisfaction means that we go above and beyond to ensure your rental experience is smooth, 
            hassle-free, and enjoyable. Our well-maintained vehicles, friendly customer service,
            and competitive rates provide everything you need to make your trip a success.
            Whether you're traveling for business or pleasure, we're here to help you make the most of your journey. 
            Choose us for your car rental needs and enjoy a journey that's full of great memories.
            </h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
