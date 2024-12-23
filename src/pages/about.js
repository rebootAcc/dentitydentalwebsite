import AboutPageDesign from "@/components/aboutus/AboutPageDesign";
import SubBanner from "@/components/global/SubBanner";
import CertifiedSlider from "@/components/home/CertifiedSlider";
import HomeEnquiry from "@/components/home/HomeEnquiry";
import WebsiteTemplate from "@/templates/WebsiteTemplate";
import React from "react";

const About = () => {
  return (
    <WebsiteTemplate title={"About"} description={""}>
      <SubBanner heading="About Us" />
      <AboutPageDesign />
      <CertifiedSlider />
      <HomeEnquiry />
    </WebsiteTemplate>
  );
};

export default About;
