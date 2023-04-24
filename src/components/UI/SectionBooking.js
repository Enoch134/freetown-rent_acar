import React from "react";
import "../../styles/sectionBooking.css";
import { Container, Row, Col,Button } from "reactstrap";
import { Link } from "react-router-dom";
import Typical from 'react-typical'

const SectionBooking = () => {
  return (
    <section className="become__driver">
      <Container>
        <Row>
          {/* <Col lg="5" md="6" sm="12" className="become__driver-img">
            <img src={driverImg} alt="" className="w-100" />
          </Col> */}

          <Col lg="4" md="6" sm="12">
            <h6 className="section__title become__drive-title align-items-center">
            <Typical
             steps={['START', 3000, 'YOUR JOURNE WITH US', 2000]}
             loop={Infinity}
             wrapper="p"
            /> 
            </h6>
            <h6 className="section__title become__drive-title align-items-center "> 
            <Typical
             steps={['BOOK', 1000, 'ONLINE OR CALL TODAY', 1000]}
             loop={Infinity}
             wrapper="p"
            /> </h6>

            <Button className="btn mt-4 bg-dark ">
              <Link to="/contact" class="text-decoration-none text-white ">Book Now</Link>{' '}
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SectionBooking;
