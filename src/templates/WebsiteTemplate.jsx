import Footer from "@/components/global/Footer";
import NavBar from "@/components/global/Navbar";
import Head from "next/head";
import CallWithUs from "./CallWithUs";

export default function WebsiteTemplate({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <NavBar />
      <div className="lg:mt-[6.5rem] md:mt-[4.5rem] mt-[3.5rem]">
        {children}
      </div>
      <CallWithUs />
      <Footer />
    </>
  );
}
