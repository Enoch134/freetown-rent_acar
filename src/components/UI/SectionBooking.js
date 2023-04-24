import React from "react";
import "../../styles/sectionBooking.css";
import { Container, Row, Col,Button } from "reactstrap";
import { Link } from "react-router-dom";


const SectionBooking = () => {
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="4" md="6" sm="12">
            <h6 className="section__title become__drive-title align-items-center">
           
              START YOUR JOURNE WITH US
            
            </h6>
            <h6 className="section__title become__drive-title align-items-center "> 
               BOOK ONLINE OR CALL TODAY
            </h6>

            <Button className="btn mt-4 bg-dark ">
              <Link to="/contact" class="text-decoration-none text-white ">Contact Us</Link>{' '}
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SectionBooking;
