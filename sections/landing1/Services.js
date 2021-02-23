import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

const Services = () => {
  return (
    <>
      {/* <!--Service section  -->*/}
      <div className="service-section bg-default-4 pt-15 pb-13 py-lg-25">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <div className="section-title text-center mb-11 mb-lg-19 px-lg-3">
                <h4 className="pre-title gr-text-12 text-red text-uppercase mb-7">
                  Our services
                </h4>
                <h2 className="title gr-text-4">
                  We treat our clients as our partners and offer customized
                  solutions.
                </h2>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center position-relative gr-z-index-1">
            <Col
              md="6"
              lg="4"
              className="mb-9 mb-lg-0"
              data-aos="fade-right"
              data-aos-duration="750"
            >
              <div className="service-card rounded-10 gr-hover-shadow-4 d-flex flex-column text-center pt-15 px-9 pb-11 bg-services-blue h-100">
                <div className="card-img mb-11">
                  <Image
                    className="rounded-10 w-100"
                    src="/assets/images/web-development.svg"
                    alt=""
                    width={200}
                    height={200}
                  />
                </div>
                <h3 className="card-title gr-text-6 mb-6">Web Development</h3>
                <p className="gr-text-9 mb-11">
                  We build accesible and engaging websites for small and medium
                  scale business to expand their growth.
                </p>
                <a
                  href="/"
                  className="gr-text-9 btn-link with-icon mt-auto text-black"
                >
                  Learn more{" "}
                  <i className="icon icon-tail-right font-weight-bold"></i>
                </a>
              </div>
            </Col>
            <Col
              md="6"
              lg="4"
              className="mb-9 mb-lg-0"
              data-aos="fade-left"
              data-aos-duration="750"
            >
              <div className="service-card rounded-10 gr-hover-shadow-4 d-flex flex-column text-center pt-15 px-9 pb-11 bg-services-violet h-100">
                <div className="card-img mb-11">
                  <Image
                    className="w-100"
                    src="/assets/images/content-writing.svg"
                    alt=""
                    width={200}
                    height={200}
                  />
                </div>
                <h3 className="card-title gr-text-6 mb-6">Content Writing</h3>
                <p className="gr-text-9 mb-11">
                  We write contents for Blogs, and Web pages which includes your
                  home, landing, about us, contact us etc.
                </p>
                <a
                  href="/"
                  className="gr-text-9 btn-link with-icon mt-auto text-black"
                >
                  Learn more{" "}
                  <i className="icon icon-tail-right font-weight-bold"></i>
                </a>
              </div>
            </Col>

            <Col
              md="6"
              lg="4"
              className="mb-9 mb-lg-0"
              data-aos="fade-up"
              data-aos-duration="750"
            >
              <div className="service-card rounded-10 gr-hover-shadow-4 d-flex flex-column text-center pt-15 px-9 pb-11 bg-services-pink h-100">
                <div className="card-img mb-11">
                  <Image
                    className="rounded-10 w-100"
                    src="/assets/images/seo.svg"
                    alt=""
                    width={200}
                    height={200}
                  />
                </div>
                <h3 className="card-title gr-text-6 mb-6">SEO</h3>
                <p className="gr-text-9 mb-11">
                  We do SEOs to bring in organic traffic which attracts
                  prospective customers to your business.
                </p>
                <a
                  href="/"
                  className="gr-text-9 btn-link with-icon mt-auto text-black"
                >
                  Learn more{" "}
                  <i className="icon icon-tail-right font-weight-bold"></i>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Services;
