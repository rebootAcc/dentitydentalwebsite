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
      title="Best Dental Clinic in Kolkata | Dentity Dental"
      description="Discover the best dental clinic in Kolkata at Dentity Dental. We provide advanced oral, dental, and facial treatments with state-of-the-art technology and expert dentists."
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
