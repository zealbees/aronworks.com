import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <div
        className="dark-mode-texts pt-30 pb-35 bg-image mt-19 rounded-10 mx-md-6"
        css={`
          background-image: url("/assets/images/hero-image.png");
        `}
      >
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <div className="text-center">
                <p className="gr-text-8 gr-text-color font-weight-bold mb-9">
                  Minimal Interior Design
                </p>
                <h1 className="gr-text-2 mb-8">
                  We minimize your waste in every step of the process.
                </h1>
                <Link href="/#">
                  <a className="btn btn-white text-secondary gr-hover-y px-lg-9">
                    Book my appointment
                  </a>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Hero;
