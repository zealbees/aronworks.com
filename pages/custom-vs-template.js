import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import Image from "next/image";

const TermsConditions = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          theme: "light",
          align: "right",
          button: "null", // cta, account, null
        }}
        footerConfig={{
          theme: "light",
          style: "style1", //style1, style2
        }}
      >
        <div className="inner-banner pt-29">
          <Container>
            <Row className="justify-content-center pt-5">
              <Col xl="8" lg="9" md="11">
                <div className="pr-xl-15 pr-lg-8">
                  <h2 className="title gr-text-3 mb-8">
                    The best way to build a website: custom vs template
                  </h2>
                  <p className="gr-text-11 mb-8">
                    <span>17 Mar 2021</span>&nbsp;·&nbsp;<span>3 min read</span>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="mb-8">
          <Container>
            <Row className="justify-content-center">
              <Col lg="10" xl="8">
                <Image
                  layout="responsive"
                  className="w-100 rounded-10"
                  src="/assets/images/temp.jpeg"
                  alt=""
                  width={210}
                  height={140}
                />
              </Col>
            </Row>
          </Container>
        </div>

        <div className="main-block pb-21">
          <Container>
            <Row className="justify-content-center">
              <Col lg="10" xl="8">
                <div className="px-lg-8 px-xl-3">
                  <div className="single-block mb-11">
                    <p className="gr-text-8">
                      Before getting into custom or template websites, I will
                      try to throw a little light on what is a custom built
                      website and template website.
                    </p>
                  </div>
                  <div className="single-block mb-11">
                    <h3 className="gr-text-6 font-weight-bold pb-3">
                      Custom website{" "}
                    </h3>
                    <p className="gr-text-8">
                      Custom website design involves doing everything from
                      scratch to cater to the specific needs of the client. A
                      team is involved right from designing the look and feel of
                      the website to its functionality part.It's a long process
                      involving time, money and labour and is unique
                    </p>

                    <p className="gr-text-8">
                      On the other hand template websites are readily available
                      resources with layouts and features already designed.There
                      are quite a lot of template providers in the market who
                      make it available for free or for some price for the
                      businesses to use.The developers just have to change
                      content and add on some plugin and make it available to
                      the clients.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </PageWrapper>
    </>
  );
};
export default TermsConditions;
