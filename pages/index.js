import React from "react";
import dynamic from "next/dynamic";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing1/Hero";
import Services from "../sections/landing1/Services";

// import Feature from "../sections/landing1/Feature";
// import Pricing from "../sections/landing1/Pricing";
// import Testimonials from "../sections/landing1/Testimonials";
// import News from "../sections/landing1/News";
// import CTA from "../sections/landing1/CTA";

const Feature = dynamic(() => import("../sections/landing1/Feature"));
const Pricing = dynamic(() => import("../sections/landing1/Pricing"));
const Testimonials = dynamic(() => import("../sections/landing1/Testimonials"));
const News = dynamic(() => import("../sections/landing1/News"));
const CTA = dynamic(() => import("../sections/landing1/CTA"));

const IndexPage = () => {
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
        <Hero />
        <Services />
        {/* <Content2 /> */}
        <Feature />
        {/* <Alert /> */}
        <Pricing />
        <Testimonials />
        <News />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
