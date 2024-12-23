import AboutSection from "@/components/home/AboutSection";
import Banner from "@/components/home/Banner";
import CertifiedSlider from "@/components/home/CertifiedSlider";
import HomeBlogList from "@/components/home/HomeBlogList";
import HomeEnquiry from "@/components/home/HomeEnquiry";
import OurBranchesSection from "@/components/home/OurBranchesSection";
import TreatmentSection from "@/components/home/TreatmentSection";
import WebsiteTemplate from "@/templates/WebsiteTemplate";

export default function Home() {
  return (
    <WebsiteTemplate
      title="Home"
      description="Dentity Dental designed & developed by Reboot AI Private Limited"
    >
      <Banner />
      <CertifiedSlider />
      <AboutSection />
      <OurBranchesSection />
      <TreatmentSection />
      <HomeEnquiry />
      <HomeBlogList />
    </WebsiteTemplate>
  );
}
