import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

// import icon1 from "../../assets/image/svg/l5-feature-icon1.svg";
// import icon2 from "../../assets/image/svg/l5-feature-icon2.svg";
// import icon3 from "../../assets/image/svg/l5-feature-icon3.svg";
// import icon4 from "../../assets/image/svg/l5-feature-icon4.svg";

const Feature = () => (
  <>
    {/* <!-- Feature section --> */}
    <div className="feature-section pt-14 pt-lg-25 pb-7 pb-lg-11 bg-default-6">
      <Container>
        <Row className="justify-content-center">
          <Col xl="7" lg="8" md="9">
            <div className="section-title text-center mb-13 mb-lg-23">
              <h4 className="pre-title gr-text-7 text-red mb-7">
                Why choose us
              </h4>
              <h2 className="title gr-text-4">
                It's our Passion and Energy that makes a Positive difference.
              </h2>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="10">
            <Row className="align-items-center justify-content-center">
              <Col
                lg="6"
                md="10"
                className="mb-11 mb-lg-19"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <div className="feature-widget media">
                  <div className="widget-icon p-7 rounded-15 mr-9 gr-bg-blue-opacity-1">
                    {/* <img src={icon1} alt="" /> */}

                    <Image
                      src="/assets/images/customer-centric.svg"
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="widget-text">
                    <h3 className="title gr-text-7 mb-6">Customer Centric</h3>
                    <p className="gr-text-9 mb-0 pr-11">
                      We prioritise customer satisfaction by creating positve
                      experience through our services.
                    </p>
                  </div>
                </div>
              </Col>
              <Col
                lg="6"
                md="10"
                className="mb-11 mb-lg-19"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                <div className="feature-widget media">
                  <div className="widget-icon p-7 rounded-15 mr-9 gr-bg-red-opacity-1">
                    {/* <img src={icon2} alt="" /> */}
                    <Image
                      src="/assets/images/inhouse-expertise.svg"
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="widget-text">
                    <h3 className="title gr-text-7 mb-6">In-House Expertise</h3>
                    <p className="gr-text-9 mb-0 pr-11">
                      By amalagamating the latest trends and substance, our
                      adroit team imparts tailor-made services and solutions to
                      every client.
                    </p>
                  </div>
                </div>
              </Col>
              <Col
                lg="6"
                md="10"
                className="mb-11 mb-lg-19"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="600"
              >
                <div className="feature-widget media">
                  <div className="widget-icon p-7 rounded-15 mr-9 gr-bg-green-opacity-1">
                    {/* <img src={icon3} alt="" /> */}
                    <Image
                      src="/assets/images/commitment.svg"
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="widget-text">
                    <h3 className="title gr-text-7 mb-6">Commitment</h3>
                    <p className="gr-text-9 mb-0 pr-11">
                      {" "}
                      We are not just involved but commited to our clients in
                      and each every step we take to render them flawless
                      services.
                    </p>
                  </div>
                </div>
              </Col>
              <Col
                lg="6"
                md="10"
                className="mb-11 mb-lg-19"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="800"
              >
                <div className="feature-widget media">
                  <div className="widget-icon p-7 rounded-15 mr-9 gr-bg-blackish-blue-opacity-1">
                    {/* <img src={icon4} alt="" /> */}
                    <Image
                      src="/assets/images/360-degree.svg"
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="widget-text">
                    <h3 className="title gr-text-7 mb-6">
                      A 360 Degree Partnership
                    </h3>
                    <p className="gr-text-9 mb-0 pr-11">
                      We do end to end partnership, right from infant stage,
                      through the execution and also after services to our
                      clients.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

export default Feature;
