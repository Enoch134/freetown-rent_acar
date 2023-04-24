import React from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
// import FindCarForm from "../components/UI/FindCarForm";
// import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
// import carData from "../assets/data/carData";
// import CarItem from "../components/UI/CarItem";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import Testimonial from "../components/UI/Testimonial";

// import BlogList from "../components/UI/BlogList";
// import SevenSeater from "../components/UI/SevenSeater";
// import FiveSeater from "../components/UI/FiveSeater";
import OurService from "../components/UI/OurService";
import SectionBooking from "../components/UI/SectionBooking";
import AboutHome from "../components/UI/AboutHome";

const Home = () => {
  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section z-index-1">
        <HeroSlider />
      </section>
      {/* =========== about section ================ */}
     
      <div className="mb-300">
         <AboutHome />
      </div>
      {/* ========== services section ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle text-black">See our</h6>
              <h2 className="section__title text-black">Popular Services</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>
      {/* =========== car offer section ============= */}
      {/* <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Come with</h6>
              <h2 className="section__title">Hot Offers</h2>
            </Col>

            {carData.slice(0, 6).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section> */}
      {/* =========== become a driver section ============ */}
      <BecomeDriverSection />

      {/* =========== testimonial section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle text-black">Our clients says</h6>
              <h2 className="section__title text-black">Testimonials</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>

      {/* =============== blog section =========== */}
      <section className="bg-dark">
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle text-white">Explore Our Services</h6>
              <h6 className="section__title text-white">Latest Offers</h6>
            </Col>

            <OurService />
          </Row>
        </Container>
      </section>

       <SectionBooking/>
       
      {/* <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Explore our blogs</h6>
              <h2 className="section__title">Latest Blogs</h2>
            </Col>

            <FiveSeater />
          </Row>
        </Container>
      </section>


      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Explore our blogs</h6>
              <h2 className="section__title">Latest Blogs</h2>
            </Col>

            <SevenSeater/>
          </Row>
        </Container>
      </section> */}
    </Helmet>
  );
};

export default Home;
