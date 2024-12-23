import ClinicDetails from "@/components/clinics/ClinicDetails";
import RelatedClinics from "@/components/clinics/RelatedClinics";
import SubBanner from "@/components/global/SubBanner";
import WebsiteTemplate from "@/templates/WebsiteTemplate";

export default function Clinic() {
  return (
    <WebsiteTemplate
      title="Our Clinics"
      description="Dentity Dental designed & developed by Reboot AI Private Limited"
    >
      <SubBanner heading="Our Clinics" />
      <ClinicDetails />
      <RelatedClinics />
    </WebsiteTemplate>
  );
}
