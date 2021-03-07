import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

const News = () => (
  <>
    {/* <!-- News section --> */}
    <div className="news-section pt-12 pb-8 py-lg-23 bg-default-2">
      <Container>
        <Row className="justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-9">
            <div className="section-title text-center mb-11 mb-lg-18">
              <h2 className="title gr-text-4 mb-6">News that helps</h2>
              <p className="gr-text-8 px-lg-8 mb-0">
                We love connecting to our partners by various means. Sharing our
                thoughts, and experince is one among them.
              </p>
            </div>
          </div>
        </Row>
        <Row
          className="justify-content-center"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <Col md="6" lg="4">
            <div className="location-card mb-9 gr-hover-shadow-1">
              <Link href="/">
                <a className="card-img">
                  <Image
                    layout="responsive"
                    className="w-100 rounded-top-10"
                    src="/assets/images/news-card-img1.jpg"
                    alt=""
                    width={350}
                    height={301}
                  />
                </a>
              </Link>
              <div className="card-content px-9 py-8 bg-white rounded-bottom-10">
                <Link href="/">
                  <a>
                    <p className="gr-text-11 mb-4 d-inline-block gr-color-blackish-blue-opacity-7">
                      Career
                    </p>
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <h3 className="title text-eerie-black gr-text-7 mb-0">
                      How to win any job you want. Get started with 5 steps.
                    </h3>
                  </a>
                </Link>
              </div>
            </div>
          </Col>
          <Col md="6" lg="4">
            <div className="location-card mb-9 gr-hover-shadow-1">
              <Link href="/">
                <a className="card-img">
                  <Image
                    layout="responsive"
                    className="w-100 rounded-top-10"
                    src="/assets/images/news-card-img2.jpg"
                    alt=""
                    width={350}
                    height={301}
                  />
                </a>
              </Link>
              <div className="card-content px-9 py-8 bg-white rounded-bottom-10">
                <Link href="/">
                  <a>
                    <p className="gr-text-11 mb-4 d-inline-block gr-color-blackish-blue-opacity-7">
                      Lifestyle
                    </p>
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <h3 className="title text-eerie-black gr-text-7 mb-0">
                      10 ways to reduce your office work depression.
                    </h3>
                  </a>
                </Link>
              </div>
            </div>
          </Col>
          <Col md="6" lg="4">
            <div className="location-card mb-9 gr-hover-shadow-1">
              <Link href="/">
                <a className="card-img">
                  <Image
                    layout="responsive"
                    className="w-100 rounded-top-10"
                    src="/assets/images/news-card-img3.jpg"
                    alt=""
                    width={350}
                    height={301}
                  />
                </a>
              </Link>
              <div className="card-content px-9 py-8 bg-white rounded-bottom-10">
                <Link href="/">
                  <a>
                    <p className="gr-text-11 mb-4 d-inline-block gr-color-blackish-blue-opacity-7">
                      Career
                    </p>
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <h3 className="title text-eerie-black gr-text-7 mb-0">
                      Why should you work as a team even on small projects.
                    </h3>
                  </a>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

export default News;
