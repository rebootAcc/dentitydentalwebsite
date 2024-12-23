import FacilitiesPage from "@/components/FacilitiesPage";
import SubBanner from "@/components/global/SubBanner";
import HomeEnquiry from "@/components/home/HomeEnquiry";
import WebsiteTemplate from "@/templates/WebsiteTemplate";
import React from "react";

const Facilities = () => {
  return (
    <WebsiteTemplate title={"Facilities"} description={""}>
      <SubBanner heading={"Facilities"} />
      <FacilitiesPage />
      <HomeEnquiry />
    </WebsiteTemplate>
  );
};

export default Facilities;
