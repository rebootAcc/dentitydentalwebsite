import ContactUsPage from "@/components/ContactUsPage";
import SubBanner from "@/components/global/SubBanner";
import WebsiteTemplate from "@/templates/WebsiteTemplate";
import React from "react";

const ContactUs = () => {
  return (
    <WebsiteTemplate title={"Contact Us"} description={""}>
      <SubBanner heading={"Contact US"} />
      <ContactUsPage />
    </WebsiteTemplate>
  );
};

export default ContactUs;
