import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import Freetown from "../components/UI/Freetown";
import carData from "../assets/data/carData";

const FreetownListing = () => {
  return (
    <Helmet title="Freetown">
      <CommonSection />

      <section>
        <Container>
          <Row>
            {carData.map((item) => (
              <Freetown item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FreetownListing;
