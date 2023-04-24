import React from "react";
import { Container, Row} from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import ProvinceSection from "../components/UI/ProvinceSection";
import Province from "../components/UI/Province";
import carData from "../assets/data/carData";

const ProvinceListing = () => {
  return (
    <Helmet title="Province">
      <ProvinceSection />

      <section>
        <Container>
          <Row>
            {carData.map((item) => (
              <Province item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProvinceListing;
