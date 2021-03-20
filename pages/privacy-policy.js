import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import Head from "next/head";

const TermsConditions = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - AronWorks</title>

        <meta
          name="description"
          content="Review the AronWorks privacy policy."
        />
      </Head>
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
        <div className="inner-banner pt-29 pb-6">
          <Container>
            <Row className="justify-content-center pt-5">
              <Col xl="8" lg="9" md="11">
                <div className="px-xl-15 px-lg-8 text-center">
                  <h2 className="title gr-text-2 mb-9">Privacy Policy</h2>
                </div>
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
                    <p className="gr-text-9 pb-5">
                      At AronWorks, accessible from https://aronworks.com, one
                      of our main priorities is the privacy of our visitors.
                      This Privacy Policy document contains types of information
                      that is collected and recorded by AronWorks and how we use
                      it.
                    </p>

                    <p className="gr-text-9 pb-5">
                      If you have additional questions or require more
                      information about our Privacy Policy, do not hesitate to
                      contact us.
                    </p>

                    <p className="gr-text-9 pb-5">
                      This Privacy Policy applies only to our online activities
                      and is valid for visitors to our website with regards to
                      the information that they shared and/or collect in
                      AronWorks. This policy is not applicable to any
                      information collected offline or via channels other than
                      this website.
                    </p>

                    <h2 className="gr-text-8 font-weight-bold pb-5">Consent</h2>

                    <p className="gr-text-9 pb-5">
                      By using our website, you hereby consent to our Privacy
                      Policy and agree to its terms.
                    </p>

                    <h2 className="gr-text-8 font-weight-bold pb-5">
                      Information we collect
                    </h2>

                    <p className="gr-text-9 pb-5">
                      The personal information that you are asked to provide,
                      and the reasons why you are asked to provide it, will be
                      made clear to you at the point we ask you to provide your
                      personal information.
                    </p>
                    <p className="gr-text-9 pb-5">
                      If you contact us directly, we may receive additional
                      information about you such as your name, email address,
                      phone number, the contents of the message and/or
                      attachments you may send us, and any other information you
                      may choose to provide.
                    </p>
                    <p className="gr-text-9 pb-5">
                      When you register for an Account, we may ask for your
                      contact information, including items such as name, company
                      name, address, email address, and telephone number.
                    </p>

                    <h2 className="gr-text-8 font-weight-bold pb-5">
                      How we use your information
                    </h2>

                    <p className="gr-text-9 pb-5">
                      We use the information we collect in various ways,
                      including to:
                    </p>

                    <div className="single-block mb-13">
                      <ul className="list-unstyled">
                        <li className="mt-7 gr-text-9">
                          <i
                            className="rounded-circle bg-dark d-inline-block mr-5"
                            css={`
                              width: 9px;
                              height: 9px;
                            `}
                          ></i>
                          Provide, operate, and maintain our webste
                        </li>
                        <li className="mt-7 gr-text-9">
                          <i
                            className="rounded-circle bg-dark d-inline-block mr-5"
                            css={`
                              width: 9px;
                              height: 9px;
                            `}
                          ></i>
                          Improve, personalize, and expand our webste
                        </li>
                        <li className="mt-7 gr-text-9">
                          <i
                            className="rounded-circle bg-dark d-inline-block mr-5"
                            css={`
                              width: 9px;
                              height: 9px;
                            `}
                          ></i>
                          Understand and analyze how you use our webste
                        </li>

                        <li className="mt-7 gr-text-9">
                          <i
                            className="rounded-circle bg-dark d-inline-block mr-5"
                            css={`
                              width: 9px;
                              height: 9px;
                            `}
                          ></i>
                          Develop new products, services, features, and
                          functionality
                        </li>

                        <li className="mt-7 gr-text-9">
                          <i
                            className="rounded-circle bg-dark d-inline-block mr-5"
                            css={`
                              width: 9px;
                              height: 9px;
                            `}
                          ></i>
                          Communicate with you, either directly or through one
                          of our partners, including for customer service, to
                          provide you with updates and other information
                          relating to the webste, and for marketing and
                          promotional purposes
                        </li>

                        <li className="mt-7 gr-text-9">
                          <i
                            className="rounded-circle bg-dark d-inline-block mr-5"
                            css={`
                              width: 9px;
                              height: 9px;
                            `}
                          ></i>
                          Send you emails
                        </li>

                        <li className="mt-7 gr-text-9">
                          <i
                            className="rounded-circle bg-dark d-inline-block mr-5"
                            css={`
                              width: 9px;
                              height: 9px;
                            `}
                          ></i>
                          Find and prevent fraud
                        </li>
                      </ul>
                    </div>

                    <h2 className="gr-text-8 font-weight-bold pb-5">
                      Log Files
                    </h2>

                    <p className="gr-text-9 pb-5">
                      AronWorks follows a standard procedure of using log files.
                      These files log visitors when they visit websites. All
                      hosting companies do this and a part of hosting services'
                      analytics. The information collected by log files include
                      internet protocol (IP) addresses, browser type, Internet
                      Service Provider (ISP), date and time stamp,
                      referring/exit pages, and possibly the number of clicks.
                      These are not linked to any information that is personally
                      identifiable. The purpose of the information is for
                      analyzing trends, administering the site, tracking users'
                      movement on the website, and gathering demographic
                      information.
                    </p>

                    <h2 className="gr-text-8 font-weight-bold pb-5">
                      Cookies and Web Beacons
                    </h2>

                    <p className="gr-text-9 pb-5">
                      Like any other website, AronWorks uses 'cookies'. These
                      cookies are used to store information including visitors'
                      preferences, and the pages on the website that the visitor
                      accessed or visited. The information is used to optimize
                      the users' experience by customizing our web page content
                      based on visitors' browser type and/or other information.
                    </p>

                    <h2 className="gr-text-8 font-weight-bold pb-5">
                      Google DoubleClick DART Cookie
                    </h2>

                    <p className="gr-text-9 pb-5">
                      Google is one of a third-party vendor on our site. It also
                      uses cookies, known as DART cookies, to serve ads to our
                      site visitors based upon their visit to www.website.com
                      and other sites on the internet. However, visitors may
                      choose to decline the use of DART cookies by visiting the
                      Google ad and content network Privacy Policy at the
                      following URL –{" "}
                      <a href="https://policies.google.com/technologies/ads">
                        https://policies.google.com/technologies/ads
                      </a>
                    </p>

                    <h2 className="gr-text-8 font-weight-bold pb-5">
                      Our Advertising Partners
                    </h2>

                    <p className="gr-text-9 pb-5">
                      Some of advertisers on our site may use cookies and web
                      beacons. Our advertising partners are listed below. Each
                      of our advertising partners has their own Privacy Policy
                      for their policies on user data. For easier access, we
                      hyperlinked to their Privacy Policies below.
                    </p>

                    <ul>
                      <li>
                        <p className="gr-text-9">Google</p>
                        <p className="gr-text-9 pb-5">
                          <a href="https://policies.google.com/technologies/ads">
                            https://policies.google.com/technologies/ads
                          </a>
                        </p>
                      </li>
                    </ul>

                    <h2 className="gr-text-8 font-weight-bold pb-5">
                      Advertising Partners Privacy Policies
                    </h2>

                    <p className="gr-text-9 pb-5">
                      You may consult this list to find the Privacy Policy for
                      each of the advertising partners of AronWorks.
                    </p>

                    <p className="gr-text-9 pb-5">
                      Third-party ad servers or ad networks uses technologies
                      like cookies, JavaScript, or Web Beacons that are used in
                      their respective advertisements and links that appear on
                      AronWorks, which are sent directly to users' browser. They
                      automatically receive your IP address when this occurs.
                      These technologies are used to measure the effectiveness
                      of their advertising campaigns and/or to personalize the
                      advertising content that you see on websites that you
                      visit.
                    </p>

                    <p className="gr-text-9 pb-5">
                      Note that AronWorks has no access to or control over these
                      cookies that are used by third-party advertisers.
                    </p>

                    <h2 className="gr-text-8 font-weight-bold pb-5">
                      Third Party Privacy Policies
                    </h2>

                    <p className="gr-text-9 pb-5">
                      AronWorks's Privacy Policy does not apply to other
                      advertisers or websites. Thus, we are advising you to
                      consult the respective Privacy Policies of these
                      third-party ad servers for more detailed information. It
                      may include their practices and instructions about how to
                      opt-out of certain options.{" "}
                    </p>

                    <p className="gr-text-9 pb-5">
                      You can choose to disable cookies through your individual
                      browser options. To know more detailed information about
                      cookie management with specific web browsers, it can be
                      found at the browsers' respective websites.
                    </p>

                    <h2 className="gr-text-8 font-weight-bold pb-5">
                      CCPA Privacy Rights (Do Not Sell My Personal Information)
                    </h2>

                    <p className="gr-text-9 pb-5">
                      Under the CCPA, among other rights, California consumers
                      have the right to:
                    </p>
                    <p className="gr-text-9 pb-5">
                      Request that a business that collects a consumer's
                      personal data disclose the categories and specific pieces
                      of personal data that a business has collected about
                      consumers.
                    </p>
                    <p className="gr-text-9 pb-5">
                      Request that a business delete any personal data about the
                      consumer that a business has collected.
                    </p>
                    <p className="gr-text-9 pb-5">
                      Request that a business that sells a consumer's personal
                      data, not sell the consumer's personal data.
                    </p>
                    <p className="gr-text-9 pb-5">
                      If you make a request, we have one month to respond to
                      you. If you would like to exercise any of these rights,
                      please contact us.
                    </p>

                    <h2 className="gr-text-8 font-weight-bold pb-5">
                      GDPR Data Protection Rights
                    </h2>

                    <p className="gr-text-9 pb-5">
                      We would like to make sure you are fully aware of all of
                      your data protection rights. Every user is entitled to the
                      following:
                    </p>
                    <p className="gr-text-9 pb-5">
                      The right to access – You have the right to request copies
                      of your personal data. We may charge you a small fee for
                      this service.
                    </p>
                    <p className="gr-text-9 pb-5">
                      The right to rectification – You have the right to request
                      that we correct any information you believe is inaccurate.
                      You also have the right to request that we complete the
                      information you believe is incomplete.
                    </p>
                    <p className="gr-text-9 pb-5">
                      The right to erasure – You have the right to request that
                      we erase your personal data, under certain conditions.
                    </p>
                    <p className="gr-text-9 pb-5">
                      The right to restrict processing – You have the right to
                      request that we restrict the processing of your personal
                      data, under certain conditions.
                    </p>
                    <p className="gr-text-9 pb-5">
                      The right to object to processing – You have the right to
                      object to our processing of your personal data, under
                      certain conditions.
                    </p>
                    <p className="gr-text-9 pb-5">
                      The right to data portability – You have the right to
                      request that we transfer the data that we have collected
                      to another organization, or directly to you, under certain
                      conditions.
                    </p>
                    <p className="gr-text-9 pb-5">
                      If you make a request, we have one month to respond to
                      you. If you would like to exercise any of these rights,
                      please contact us.
                    </p>

                    <h2 className="gr-text-8 font-weight-bold pb-5">
                      Children's Information
                    </h2>

                    <p className="gr-text-9 pb-5">
                      Another part of our priority is adding protection for
                      children while using the internet. We encourage parents
                      and guardians to observe, participate in, and/or monitor
                      and guide their online activity.
                    </p>

                    <p className="gr-text-9 pb-5">
                      AronWorks does not knowingly collect any Personal
                      Identifiable Information from children under the age of
                      13. If you think that your child provided this kind of
                      information on our website, we strongly encourage you to
                      contact us immediately and we will do our best efforts to
                      promptly remove such information from our records.
                    </p>
                  </div>

                  <div className="single-block pb-11">
                    <h3 className="gr-text-8 font-weight-bold pb-5">
                      Changes about terms
                    </h3>
                    <p className="gr-text-9 pb-5 mb-0">
                      If we change our terms of use we will post those changes
                      on this page. Registered users will be sent an email that
                      outlines changes made to the terms of use.
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
