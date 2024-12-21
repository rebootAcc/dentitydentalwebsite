import Footer from "@/components/global/Footer";
import NavBar from "@/components/global/Navbar";

export default function WebsiteTemplate({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
