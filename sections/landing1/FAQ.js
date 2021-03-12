import React, { useState } from "react";
import { Row, Col, Container, Collapse } from "react-bootstrap";
import Link from "next/link";
import { openFreshChat } from "../../utils/freshChat";

const FAQ = () => {
  const [openItem, setOpenItem] = useState(1);

  return (
    <div className="bg-default-2 pt-lg-7 pb-9 pb-lg-22">
      <Container>
        <Row className="justify-content-center">
          <Col xl="8" lg="9">
            <div className="px-md-12 text-center mb-9 mb-lg-18">
              <h2 className="title gr-text-3 mb-8">
                Frequently Asked Questions
              </h2>
              <p className="gr-text-8 mb-0">
                With lots of unique blocks, you can easily build a page without
                coding. Build your next consultancy website within few minutes.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xl="8" lg="9">
            <div className="accordion" id="accordionExample">
              <div className="border rounded-10 mb-3 bg-white overflow-hidden">
                <div
                  className="mb-0 py-8 pl-9 pr-7 border-bottom-0 bg-white"
                  id="heading4-1"
                >
                  <button
                    className="btn-reset gr-text-7 font-weight-bold text-left text-blackish-blue p-0 accordion-trigger arrow-icon w-100"
                    type="button"
                    aria-controls="collapse-1"
                    onClick={() => setOpenItem(1)}
                    aria-expanded={openItem === 1}
                  >
                    Can I use Albino for my clients?
                  </button>
                </div>
                <Collapse in={openItem === 1}>
                  <div>
                    <div className="card-body gr-color-blackish-blue-opacity-7 pt-0 pl-9 pr-15 gr-text-9 pb-9">
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page. Integer ut
                      Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam
                      sagittis interdum Melisandre.
                    </div>
                  </div>
                </Collapse>
              </div>
              <div className="border rounded-10 mb-3 bg-white overflow-hidden">
                <div
                  className="mb-0 py-8 pl-9 pr-7 border-bottom-0 bg-white"
                  id="heading4-2"
                >
                  <button
                    className="btn-reset gr-text-7 font-weight-bold text-left text-blackish-blue p-0 accordion-trigger arrow-icon w-100"
                    type="button"
                    aria-controls="collapse-2"
                    onClick={() => setOpenItem(2)}
                    aria-expanded={openItem === 2}
                  >
                    Does it work with WordPress?
                  </button>
                </div>
                <Collapse in={openItem === 2}>
                  <div>
                    <div className="card-body gr-color-blackish-blue-opacity-7 pt-0 pl-9 pr-15 gr-text-9 pb-9">
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page.
                    </div>
                  </div>
                </Collapse>
              </div>
              <div className="border rounded-10 mb-3 bg-white overflow-hidden">
                <div
                  className="mb-0 py-8 pl-9 pr-7 border-bottom-0 bg-white"
                  id="heading4-3"
                >
                  <button
                    className="btn-reset gr-text-7 font-weight-bold text-left text-blackish-blue p-0 accordion-trigger arrow-icon w-100"
                    type="button"
                    aria-controls="collapse-3"
                    onClick={() => setOpenItem(3)}
                    aria-expanded={openItem === 3}
                  >
                    Do I get free updates?
                  </button>
                </div>
                <Collapse in={openItem === 3}>
                  <div>
                    <div className="card-body gr-color-blackish-blue-opacity-7 pt-0 pl-9 pr-15 gr-text-9 pb-9">
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page.
                    </div>
                  </div>
                </Collapse>
              </div>
              <div className="border rounded-10 mb-3 bg-white overflow-hidden">
                <div
                  className="mb-0 py-8 pl-9 pr-7 border-bottom-0 bg-white"
                  id="heading4-4"
                >
                  <button
                    className="btn-reset gr-text-7 font-weight-bold text-left text-blackish-blue p-0 accordion-trigger arrow-icon w-100"
                    type="button"
                    aria-controls="collapse-4"
                    onClick={() => setOpenItem(4)}
                    aria-expanded={openItem === 4}
                  >
                    Organize your campaigns
                  </button>
                </div>
                <Collapse in={openItem === 4}>
                  <div>
                    <div className="card-body gr-color-blackish-blue-opacity-7 pt-0 pl-9 pr-15 gr-text-9 pb-9">
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page.
                    </div>
                  </div>
                </Collapse>
              </div>
              <div className="border rounded-10 mb-3 bg-white overflow-hidden">
                <div
                  className="mb-0 py-8 pl-9 pr-7 border-bottom-0 bg-white"
                  id="heading4-5"
                >
                  <button
                    className="btn-reset gr-text-7 font-weight-bold text-left text-blackish-blue p-0 accordion-trigger arrow-icon w-100"
                    type="button"
                    aria-controls="collapse-5"
                    onClick={() => setOpenItem(5)}
                    aria-expanded={openItem === 5}
                  >
                    Will you provide support?
                  </button>
                </div>
                <Collapse in={openItem === 5}>
                  <div>
                    <div className="card-body gr-color-blackish-blue-opacity-7 pt-0 pl-9 pr-15 gr-text-9 pb-9">
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page.
                    </div>
                  </div>
                </Collapse>
              </div>
            </div>
          </Col>
          <div className="col-12 text-center pt-11">
            <p className="gr-text-9 gr-text-9 gr-text-color">
              Haven’t got your answer?{" "}
              <span onClick={openFreshChat} className="cursor-pointer btn-link">
                Contact our support now
              </span>
            </p>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default FAQ;
