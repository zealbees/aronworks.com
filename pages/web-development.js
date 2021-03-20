import React from "react";
import PageWrapper from "../components/PageWrapper";
import CTA from "../sections/landing1/CTA";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Head from "next/head";

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Web Development Service - AronWorks</title>
        <meta
          name="description"
          content="We build affordable, accesible and engaging websites for small and medium scale business."
        />
      </Head>
      <PageWrapper
        headerConfig={{
          theme: "dark",
          align: "right",
          button: "null", // cta, account, null
        }}
        footerConfig={{
          theme: "light",
          style: "style1", //style1, style2
        }}
      >
        <>
          <div
            className="bg-image bg-gradient bg-gradient-black pb-17 pt-24 pt-lg-32 pb-lg-28"
            css={`
              background-image: url(https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80);
            `}
          >
            <Container>
              <Row className="justify-content-center align-items-center">
                <Col
                  sm="10"
                  md="9"
                  lg="7"
                  xl="6"
                  data-aos="fade-right"
                  data-aos-duration="750"
                  data-aos-delay="500"
                >
                  <div className="hero-content text-center dark-mode-texts">
                    <h1 className="gr-text-3 mb-8">Web Development</h1>
                    <p className="gr-text-8">
                      We build accesible and engaging websites for small and
                      medium scale business to expand their growth.
                    </p>
                  </div>
                </Col>
                <Col sm="10" className="mt-15 mt-lg-23"></Col>
              </Row>
            </Container>
          </div>

          <div className="content-section pt-lg-25 pt-14 pb-10 pb-lg-15">
            <Container>
              <Row>
                <Col md="6">
                  <div className="section-title mb-13 mb-lg-21">
                    <h2 className="title gr-text-3 mb-7">
                      Web Development is in our Core!
                    </h2>
                    <p className="gr-text-8">
                      We are capable of creating high performance and
                      aesthetically appealing websites. Our concentration is on
                      user-centric design as usability and utility determine the
                      success of the website.
                    </p>

                    <p className="gr-text-8">
                      We use all kinds of complex, latest tools and technologies
                      to make the entire work process effortless.
                    </p>

                    <p className="gr-text-8">
                      We provide one of the best professional web development
                      experience which is affordable without compromising the
                      quality of work.
                    </p>

                    <p className="gr-text-8">
                      Our experience stretches in all areas of web development
                      including e-commerce, custom and template web development.
                    </p>

                    <p className="gr-text-8">
                      Cross-Browser Compatibility is truly a vital aspect of
                      website development hence we take utmost care to make the
                      site consistently visible across all web browsers.
                    </p>

                    <p className="gr-text-8">
                      According to your digital marketing strategy we design and
                      build your website, further optimize it to generate
                      traffic and engage the audience.
                    </p>
                  </div>
                </Col>
                <Col md="6" data-aos="fade-up" data-aos-duration="1000">
                  <div className="image-right mt-9 mt-lg-4 pl-xl-6">
                    <Image
                      src="/assets/images/content1-img2.jpg"
                      alt="AronWorks"
                      className="w-100 rounded-10"
                      width={520}
                      height={670}
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="content-section bg-default-2 pt-lg-15 pb-13 pb-lg-24">
            <Container>
              <Row className="align-items-center justify-content-center">
                <Col sm="10" lg="7">
                  <div
                    className="content-img pr-9"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-delay="500"
                  >
                    {/* <img
                  src={imgHero}
                  alt=""
                  className="gr-image-box-shadow mw-100"
                /> */}
                  </div>
                </Col>
                <Col sm="10" lg="5">
                  <div className="content-text pt-11 pt-lg-0 pl-xl-7">
                    <h2 className="gr-text-4 mb-7">HTML / CSS Development</h2>
                    <p className="gr-text-8 mb-0">
                      We carry out front-end development using HTML5 to have an
                      incredible web presence that reflects your business and
                      gives you a platform to compete with more established
                      competitors.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="content-section bg-default-2 pt-lg-13 pb-13 pb-lg-21">
            <Container>
              <Row className="align-items-center justify-content-center">
                <Col
                  sm="10"
                  lg="6"
                  className="offset-xl-1  order-lg-2 mb-9 mb-lg-0"
                >
                  <div
                    className="double-image-group-opacity"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-delay="500"
                  >
                    {/* <img className="main-img w-100" src={imgHero} alt="" /> */}
                  </div>
                </Col>
                <Col sm="10" lg="5" className="order-lg-1">
                  <div className="content-text">
                    <h2 className="gr-text-4 mb-7">Front-end Architecture</h2>
                    <p className="gr-text-8 mb-0">
                      We are strong in front- end architecture which creates
                      robust and expansible web applications by following all
                      modern standards.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="content-section bg-default-2 pt-lg-15 pb-13 pb-lg-24">
            <Container>
              <Row className="align-items-center justify-content-center">
                <Col sm="10" lg="7">
                  <div
                    className="content-img pr-9"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-delay="500"
                  >
                    {/* <img
                  src={imgHero}
                  alt=""
                  className="gr-image-box-shadow mw-100"
                /> */}
                  </div>
                </Col>
                <Col sm="10" lg="5">
                  <div className="content-text pt-11 pt-lg-0 pl-xl-7">
                    <h2 className="gr-text-4 mb-7">SPA Application</h2>
                    <p className="gr-text-8">
                      Web Apps are more convenient to use, they are easy to
                      update, and they are not bound to one device. Though users
                      are moving from browser-based web applications into mobile
                      ones, the demand for complex and refined apps is still
                      growing.
                    </p>

                    <p className="gr-text-8 mb-0">
                      We create Single Page Applications with modern JavaScript
                      frameworks alongside SEO.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="content-section bg-default-2 pt-lg-13 pb-13 pb-lg-21">
            <Container>
              <Row className="align-items-center justify-content-center">
                <Col
                  sm="10"
                  lg="6"
                  className="offset-xl-1  order-lg-2 mb-9 mb-lg-0"
                >
                  <div
                    className="double-image-group-opacity"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-delay="500"
                  >
                    {/* <img className="main-img w-100" src={imgHero} alt="" /> */}
                  </div>
                </Col>
                <Col sm="10" lg="5" className="order-lg-1">
                  <div className="content-text">
                    <h2 className="gr-text-4 mb-7">AMP App Development</h2>
                    <p className="gr-text-8 mb-0">
                      We use Accelerated Mobile Pages(AMP) which has a huge
                      impact on mobile search engine rankings. pages that are
                      AMP-optimized are faster and they unquestionably convert
                      more mobile page visitors into customers.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="content-section bg-default-2 pt-lg-15 pb-13 pb-lg-24">
            <Container>
              <Row className="align-items-center justify-content-center">
                <Col sm="10" lg="7">
                  <div
                    className="content-img pr-9"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-delay="500"
                  >
                    {/* <img
                  src={imgHero}
                  alt=""
                  className="gr-image-box-shadow mw-100"
                /> */}
                  </div>
                </Col>
                <Col sm="10" lg="5">
                  <div className="content-text pt-11 pt-lg-0 pl-xl-7">
                    <h2 className="gr-text-4 mb-7">PWA App Development</h2>
                    <p className="gr-text-8 mb-0">
                      Progressive web apps (PWA) is one of the most talked-about
                      technology shifts in the web and has gained unparalleled
                      momentum among the practitioners in the IT world. We
                      involve PWA as it's reliable, fast and engaging.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <CTA />
        </>
      </PageWrapper>
    </>
  );
};
export default IndexPage;
