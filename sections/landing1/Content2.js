import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

const Content = () => {
  return (
    <>
      {/* <!-- Content Area --> */}
      <div className="content-section2 pt-13 pt-lg-17 bg-default-6 overflow-hidden">
        <Container>
          <Row className="align-items-center">
            <Col lg="4" md="3">
              <div className="content-img mb-lg-n29 mb-md-n13">
                <Image
                  className="w-100"
                  src="/assets/images/l3-content2-img.png"
                  alt=""
                  width={445}
                  height={776}
                />
              </div>
            </Col>
            <Col
              lg="7"
              md="9"
              className="offset-lg-1 mt-9 mt-lg-0 px-xl-11"
              data-aos="fade-left"
              data-aos-duration="700"
            >
              <div className="content-text pr-xl-13">
                <h2 className="title gr-text-4 mb-7">
                  Reasons you should <br className="d-none d-lg-block" />
                  choose us to grow today.
                </h2>
                <p className="gr-text-8 mb-0">
                  To us, it's not just work. It's the Passion and Energy we put
                  in to make a Positive difference.
                </p>
              </div>
              <div className="content-widget mt-9 mb-11 mb-lg-0">
                <Row>
                  <Col md="6">
                    <div className="single-widget d-flex align-items-center py-5">
                      <div className="widget-icon text-secondary mr-6 gr-text-8">
                        <i className="icon icon-check-simple"></i>
                      </div>
                      <h3 className="w-title gr-text-8 font-weight-bold mb-0">
                        Customer Centric
                      </h3>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="single-widget d-flex align-items-center py-5">
                      <div className="widget-icon text-secondary mr-6 gr-text-8">
                        <i className="icon icon-check-simple"></i>
                      </div>
                      <h3 className="w-title gr-text-8 font-weight-bold mb-0">
                        In-House Expertise
                      </h3>
                    </div>
                  </Col>
                  <Col xl="6" md="5">
                    <div className="single-widget d-flex align-items-center py-5">
                      <div className="widget-icon text-secondary mr-6 gr-text-8">
                        <i className="icon icon-check-simple"></i>
                      </div>
                      <h3 className="w-title gr-text-8 font-weight-bold mb-0">
                        Commitment to Perfection
                      </h3>
                    </div>
                  </Col>
                  <Col xl="6" md="7">
                    <div className="single-widget d-flex align-items-center py-5">
                      <div className="widget-icon text-secondary mr-6 gr-text-8">
                        <i className="icon icon-check-simple"></i>
                      </div>
                      <h3 className="w-title gr-text-8 font-weight-bold mb-0">
                        A 360 Degree Partnership
                      </h3>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Content;
