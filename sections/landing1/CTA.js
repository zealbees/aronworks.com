import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

const CTA = () => {
  return (
    <>
      {/* <!-- CTA Area --> */}
      <div className="cta-section pt-13 pt-lg-25 pb-13 pb-lg-25 bg-secondary bg-pattern pattern-7">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <div className="text-center dark-mode-texts">
                <h2 className="gr-text-4 mb-7">Have a project in mind?</h2>
                <p className="gr-text-9 mb-11 px-xl-7 gr-text-color">
                  Connect with us to discuss your Ideas and Concept. 
                  We would be happy to take it further!
                </p>
                <Link href="/#">
                  <a className="btn btn-white text-secondary gr-hover-y px-lg-9">
                    Reach Us
                  </a>
                </Link>
                <p className="gr-text-11 mb-0 mt-6">It takes only 2 mins!</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CTA;
