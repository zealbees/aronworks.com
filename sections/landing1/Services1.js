import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

const Services = () => {
  return (
    <>
      {/* <!-- Services Area --> */}
      <div className="service-section bg-default-2 pt-12 py-lg-23">
        <Container>
          <Row className="justify-content-center">
            <Col xl="6" lg="8" md="10">
              <div className="section-title text-center mb-11 mb-lg-15">
                <h2 className="title gr-text-4 mb-6">
                  Services we offer for you
                </h2>
                <p className="gr-text-8 mb-0 px-lg-7 px-xl-0">
                  We treat our clients as our partners and offer customized
                  solutions. Kindly inquire if what you are looking for is not
                  listed in our services.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center">
            <Col lg="4" md="6" sm="10" className="mb-13 mb-lg-0">
              <div className="service-card">
                <div className="img-thumb mb-8">
                  <Image
                    className="rounded-10 w-100"
                    src="/assets/images/web-development.svg"
                    alt=""
                    width={500}
                    height={500}
                  />
                </div>
                <h3 className="card-title gr-text-7 mb-7">Web Development</h3>

                <p className="excerpt gr-text-9 mb-6">
                  We build accesible and engaging websites for small and medium
                  scale business to expand their growth.
                </p>
                <Link href="/#">
                  <a className="btn-link with-icon gr-text-9 font-weight-bold text-secondary">
                    Learn more{" "}
                    <i className="icon icon-tail-right font-weight-bold"></i>
                  </a>
                </Link>
              </div>
            </Col>
            <Col lg="4" md="6" sm="10" className="mb-13 mb-lg-0">
              <div className="service-card">
                <div className="img-thumb mb-8">
                  <Image
                    className="rounded-10 w-100"
                    src="/assets/images/seo.svg"
                    alt=""
                    width={500}
                    height={500}
                  />
                </div>
                <h3 className="card-title gr-text-7 mb-7">
                  Search Engine Optimization
                </h3>

                <p className="excerpt gr-text-9 mb-6">
                  We do SEOs to bring in organic traffic which attracts
                  prospective customers to your business.
                </p>
                <Link
                  href="/#"
                  className="btn-link with-icon gr-text-9 font-weight-bold"
                >
                  <a className="btn-link with-icon gr-text-9 font-weight-bold text-secondary">
                    Learn more{" "}
                    <i className="icon icon-tail-right font-weight-bold"></i>
                  </a>
                </Link>
              </div>
            </Col>

            <Col lg="4" md="6" sm="10" className="mb-13 mb-lg-0">
              <div className="service-card">
                <div className="img-thumb mb-8">
                  <Image
                    className="w-100"
                    src="/assets/images/content-writing.svg"
                    alt=""
                    width={500}
                    height={500}
                  />
                </div>
                <h3 className="card-title gr-text-7 mb-7">Content Writing</h3>

                <p className="excerpt gr-text-9 mb-6">
                  We write contents for Blogs, and Web pages which includes your
                  home, landing, about us, contact us etc.
                </p>
                <Link
                  href="/#"
                  className="btn-link with-icon gr-text-9 font-weight-bold"
                >
                  <a className="btn-link with-icon gr-text-9 font-weight-bold text-secondary">
                    Learn more{" "}
                    <i className="icon icon-tail-right font-weight-bold"></i>
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

export default Services;
