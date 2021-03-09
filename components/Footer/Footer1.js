import React, { useContext } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

import GlobalContext from "../../context/GlobalContext";
import Logo from "../Logo";

const Footer = () => {
  const gContext = useContext(GlobalContext);

  const contactClassName =
    gContext.footer.theme === "dark" ? "gr-text-color" : "text-primary";

  const linkClassName =
    gContext.footer.theme === "dark"
      ? "gr-text-color gr-hover-text-red"
      : "gr-text-color gr-hover-text-red";

  const iconClassName =
    gContext.footer.theme === "dark"
      ? "text-storm gr-hover-text-red"
      : "gr-text-color gr-hover-text-red";

  return (
    <>
      <div
        className={`footer-section pt-15 pt-lg-25 pb-lg-21 ${
          gContext.footer.theme === "dark"
            ? "dark-mode-texts bg-blackish-blue"
            : ""
        }`}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg="3" md="4">
              <Logo
                white={gContext.footer.theme === "dark"}
                className="footer-logo mb-7"
              />
              <p className="gr-text-11">
                Whether its expansion or growth, selling product or services,
                partner with us for strong online presence.
              </p>
              <ul className="social-icons py-7 list-unstyled mb-7 mb-lg-0">
                <li className="mr-2">
                  <Link href="/">
                    <a className={iconClassName}>
                      <i className="icon icon-logo-twitter"></i>
                    </a>
                  </Link>
                </li>
                <li className="mr-2">
                  <Link href="/">
                    <a className={iconClassName}>
                      <i className="icon icon-logo-facebook"></i>
                    </a>
                  </Link>
                </li>
                <li className="mr-2">
                  <Link href="/">
                    <a className={iconClassName}>
                      <i className="icon icon-instant-camera-2"></i>
                    </a>
                  </Link>
                </li>
                <li className="mr-2">
                  <Link href="/">
                    <a className={iconClassName}>
                      <i className="icon icon-logo-linkedin"></i>
                    </a>
                  </Link>
                </li>
              </ul>
            </Col>

            <Col lg="8" md="8" className="offset-lg-1">
              <Row>
                <Col xs="6" lg="4">
                  <div className="single-footer mb-13 mb-lg-9">
                    <p className="footer-title gr-text-11 mb-7">Services</p>
                    <ul className="footer-list list-unstyled gr-text-9">
                      <li className="py-2">
                        <Link href="/">
                          <a className={linkClassName}>Web Development</a>
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link href="/">
                          <a className={linkClassName}>Content Writing</a>
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link href="/">
                          <a className={linkClassName}>SEO for Business</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col xs="6" lg="4">
                  <div className="single-footer mb-13 mb-lg-9">
                    <p className="footer-title gr-text-11 mb-7">Legal</p>
                    <ul className="footer-list list-unstyled gr-text-9">
                      <li className="py-2">
                        <Link href="/">
                          <a className={linkClassName}>Privacy Policy</a>
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link href="/terms-conditions">
                          <a className={linkClassName}>
                            Terms &amp; Conditions
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col xs="6" lg="4">
                  <div className="single-footer mb-13 mb-lg-9">
                    <p className="footer-title gr-text-11 mb-7">Contact us</p>
                    <ul className="footer-list list-unstyled">
                      <li className="py-2">
                        <a
                          className={`gr-text-9 font-weight-bold hover-underline active ${contactClassName}`}
                          href="mailto:hello@aronworks.com"
                        >
                          hello@aronworks.com
                        </a>
                      </li>
                      <li className="py-2">
                        <a
                          className={`gr-text-9 font-weight-bold hover-underline active ${contactClassName}`}
                          href="tel:+917708521528"
                        >
                          +91 7708 521 528
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
