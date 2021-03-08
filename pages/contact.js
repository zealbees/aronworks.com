import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import { Select } from "../components/Core";

const defaultOptions = [
  { value: "dm", label: "Digital Marketing" },
  { value: "cr", label: "Content Writing" },
  { value: "gd", label: "Graphic Design" },
  { value: "seo", label: "SEO for Business" },
];

const Contact = () => {
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
        <div className="inner-banner pt-29 pb-md-11 bg-default-2">
          <Container>
            <Row className="justify-content-center pt-5">
              <Col lg="9" xl="8">
                <div className="px-md-15 text-center">
                  <h2 className="title gr-text-2 mb-9">Contact us</h2>
                  <p className="gr-text-8 mb-13">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next consultancy website within
                    few minutes.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="contact-section pb-5 pb-md-29 bg-default-2 ">
          <Container>
            <Row className="justify-content-center">
              <Col
                sm="5"
                md="6"
                lg="5"
                xl="5"
                className="offset-lg-1 d-flex flex-column justify-content-center mb-9 order-sm-2"
              >
                <div className="single-contact-widget mb-13">
                  <h3 className="gr-text-6 mb-5">Call / WhatsApp us</h3>
                  <p className="gr-text-7 mb-0">
                    <a
                      href="https://api.whatsapp.com/send?phone=917708521528&text=Hey"
                      target="_blank"
                      className="text-opacity-eerie-black"
                    >
                      +91 7708 521 528
                    </a>

                    <svg
                      viewBox="0 0 512 512"
                      height="13"
                      style={{ marginLeft: "8px" }}
                      fill="rgba(34, 34, 34, 0.7)"
                    >
                      <path d="M488.727 0H302.545c-12.853 0-23.273 10.42-23.273 23.273s10.42 23.273 23.273 23.273h129.997L192.999 286.09c-9.089 9.089-9.089 23.823 0 32.912a23.195 23.195 0 0016.455 6.816 23.194 23.194 0 0016.457-6.817L465.455 79.458v129.997c0 12.853 10.42 23.273 23.273 23.273s23.273-10.42 23.273-23.273V23.273C512 10.42 501.58 0 488.727 0z" />
                      <path d="M395.636 232.727c-12.853 0-23.273 10.42-23.273 23.273v209.455H46.545V139.636H256c12.853 0 23.273-10.42 23.273-23.273S268.853 93.091 256 93.091H23.273C10.42 93.091 0 103.511 0 116.364v372.364C0 501.58 10.42 512 23.273 512h372.364c12.853 0 23.273-10.42 23.273-23.273V256c-.001-12.853-10.421-23.273-23.274-23.273z" />
                    </svg>
                  </p>
                </div>
                <div className="single-contact-widget mb-13">
                  <h3 className="gr-text-6 mb-5">Email us</h3>
                  <p className="gr-text-7 mb-0">
                    <a
                      href="mailto:hello@aronworks.com"
                      className="text-opacity-eerie-black"
                    >
                      hello@aronworks.com
                    </a>

                    <svg
                      viewBox="0 0 512 512"
                      height="13"
                      style={{ marginLeft: "8px" }}
                      fill="rgba(34, 34, 34, 0.7)"
                    >
                      <path d="M488.727 0H302.545c-12.853 0-23.273 10.42-23.273 23.273s10.42 23.273 23.273 23.273h129.997L192.999 286.09c-9.089 9.089-9.089 23.823 0 32.912a23.195 23.195 0 0016.455 6.816 23.194 23.194 0 0016.457-6.817L465.455 79.458v129.997c0 12.853 10.42 23.273 23.273 23.273s23.273-10.42 23.273-23.273V23.273C512 10.42 501.58 0 488.727 0z" />
                      <path d="M395.636 232.727c-12.853 0-23.273 10.42-23.273 23.273v209.455H46.545V139.636H256c12.853 0 23.273-10.42 23.273-23.273S268.853 93.091 256 93.091H23.273C10.42 93.091 0 103.511 0 116.364v372.364C0 501.58 10.42 512 23.273 512h372.364c12.853 0 23.273-10.42 23.273-23.273V256c-.001-12.853-10.421-23.273-23.274-23.273z" />
                    </svg>
                  </p>
                </div>
                <div className="single-contact-widget">
                  <h3 className="gr-text-6 mb-5">Visit us</h3>
                  <p className="gr-text-7 mb-0">
                    No. 4025, Mapleton Apt,
                    <br />
                    Chennai, India 600100
                  </p>
                </div>
              </Col>
              <Col sm="7" md="6" lg="5" xl="4" className="order-sm-1">
                <div className="login-form bg-white border-gray-3 px-7 pt-8 pb-9 shadow-1 rounded-10">
                  <form
                    name="contact1"
                    method="post"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                  >
                    {/* You still need to add the hidden input with the form name to your JSX form */}
                    <input type="hidden" name="form-name" value="contact1" />
                    <div className="form-group">
                      <label
                        htmlFor="name"
                        className="gr-text-11 font-weight-bold text-blackish-blue"
                      >
                        Name
                      </label>
                      <input
                        className="form-control px-7 gr-text-11 border"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="i.e. John Doe"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="name"
                        className="gr-text-11 font-weight-bold text-blackish-blue"
                      >
                        Email
                      </label>
                      <input
                        className="form-control px-7 gr-text-11 border"
                        type="text"
                        id="email"
                        name="email"
                        placeholder="i.e. john@mail.com"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="name"
                        className="gr-text-11 font-weight-bold text-blackish-blue"
                      >
                        Phone
                      </label>
                      <input
                        className="form-control px-7 gr-text-11 border"
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="i.e. 123-456-7890"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="name"
                        className="gr-text-11 font-weight-bold text-blackish-blue"
                      >
                        Which service do you need?{" "}
                      </label>
                      <Select
                        options={defaultOptions}
                        className=" gr-text-11 mb-7"
                        accentColor="primary"
                        bg="transparent"
                      />
                    </div>
                    <div className="button-block mb-2">
                      <Button className="form-btn w-100" type="submit">
                        Send
                      </Button>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </PageWrapper>
    </>
  );
};
export default Contact;
