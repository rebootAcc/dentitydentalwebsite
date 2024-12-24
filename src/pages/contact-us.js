import ContactUsPage from "@/components/ContactUsPage";
import SubBanner from "@/components/global/SubBanner";
import WebsiteTemplate from "@/templates/WebsiteTemplate";
import React from "react";
import { Clinic } from "@/lib/clinicsDataList";

const ContactUs = () => {
  return (
    <WebsiteTemplate title={"Contact Us"} description={""}>
      <SubBanner heading={"Contact US"} />
      <ContactUsPage contact={Clinic} />
    </WebsiteTemplate>
  );
};

export default ContactUs;
