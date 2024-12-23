import SubBanner from "@/components/global/SubBanner";
import RelatedTreatment from "@/components/treatments/RelatedTreatment";
import TreatMentAbout from "@/components/treatments/TreatMentAbout";
import WebsiteTemplate from "@/templates/WebsiteTemplate";

export default function Treatments() {
  return (
    <WebsiteTemplate
      title="Our Treatments"
      description="Dentity Dental designed & developed by Reboot AI Private Limited"
    >
      <SubBanner heading="Treatment" />
      <TreatMentAbout />
      <RelatedTreatment />
    </WebsiteTemplate>
  );
}

