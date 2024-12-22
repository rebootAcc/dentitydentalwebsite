import Footer from "@/components/global/Footer";
import NavBar from "@/components/global/Navbar";
import Head from "next/head";

export default function WebsiteTemplate({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
