import Banner from "@/components/home/Banner";
import CertifiedSlider from "@/components/home/CertifiedSlider";
import HomeBlogList from "@/components/home/HomeBlogList";
import WebsiteTemplate from "@/templates/WebsiteTemplate";

export default function Home() {
  return (
    <WebsiteTemplate>
      <Banner />
      <CertifiedSlider />
      <div>home</div>
      <HomeBlogList />
    </WebsiteTemplate>
  );
}
