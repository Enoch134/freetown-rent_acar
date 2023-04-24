import React from "react";

import AboutCommonSection from "../components/UI/AboutCommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <AboutCommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  We Are Committed To Provide Safe Ride Solutions
                </h2>

                <p className="section__description">
                  At our company, we are committed to providing safe ride solutions for our customers. 
                  We understand that safety is a top priority when it comes to transportation, 
                  which is why we have implemented a range of measures to ensure that our rides are as secure as possible.
                </p>
                <p className="section__description">
                All of our drivers go through a rigorous vetting process, which includes thorough 
                background checks and training on safe driving practices. We also regularly inspect 
                and maintain our vehicles to make sure they are in top condition. Additionally, 
                we use advanced technology solutions, such as GPS tracking and panic buttons, 
                to enhance the safety of our rides and provide peace of mind to our customers.
                </p>
             
                <p className="section__description">
                 Our safety policies and protocols are regularly reviewed and updated to ensure
                 that we are meeting the highest standards of safety and professionalism. 
                 We believe that by prioritizing safety, we can provide our customers 
                 with a positive and secure experience that meets their transportation needs.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>+23279482050</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
