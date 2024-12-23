import Image from "next/image";
import React, { useEffect, useState } from "react";
import WhyChooseUsSection from "../global/WhyChooseUsSection";
import useElementHeight from "@/hooks/useElementHeight";

const AboutPageDesign = () => {
  const [contentHeight, rightContentRef] = useElementHeight();

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="xl:p-16 lg:p-8 p-4 flex flex-col md:flex-row gap-4 xlg:gap-8">
      <section
        style={{ height: isSmallScreen ? "auto" : `${contentHeight}px` }}
        className="flex flex-col gap-6 w-full md:w-[50%]"
      >
        <Image
          src={"/images/aboutus1.png"}
          alt="about us"
          height={648}
          width={801}
          className=" w-full rounded-sm h-[49%] object-cover"
        />
        <Image
          src={"/images/about2.png"}
          alt="about us"
          height={450}
          width={789}
          className=" w-full rounded-sm h-[49%] object-cover"
        />
      </section>
      <section
        ref={rightContentRef}
        className="md:w-[50%] w-full flex flex-col gap-3 lg:gap-5 xlg:gap-8"
      >
        <div className="flex flex-col gap-2 xlg:gap-5">
          <h1 className="text-site-main text-xl lg:text-2xl xlg:text-3xl font-semibold">
            Most Popular Dental Clinic In Kolkata
          </h1>
          <p className="text-site-typo text-xs/[17px] lg:text-sm/[21px] xlg:text-base/[26px]">
            EVERY TOOTH IN A PERSON IS MORE VALUABLE THAN A DIAMOND. Smile is
            the first thing people notice when they meet one another. Smile is
            something that can change the world. So in our DENTITY DENTAL
            Clinics we create a confident smile for you. We THE DENTITY DENTAL -
            A CHAIN OF MULTISPECIALITY DENTAL CLINICS in Kolkata(Tollygunge
            Netajinagar,Tollyhunge Suryanagar, Sonarpur, Dumdum Cantonment, VIP
            ROAD TEGHORIA, RAJARHAT | TEGHORIA | NEWTOWN | CHINARPARK, GARIAHAT,
            BELEGHATA) and various places of WEST BENGAL(DENTAL MID WORLD,
            MIDNAPUR) already served uncountable number of happy and patients
            with our ultramodern equipments, latest advance technology and most
            importantly highly skilled specialist Dentists. <br />
            EVERY TOOTH IN A PERSON IS MORE VALUABLE THAN A DIAMOND. Smile is
            the first thing people notice when they meet one another. Smile is
            something that can change the world. So in our DENTITY DENTAL
            Clinics we create a confident smile for you. We THE DENTITY DENTAL -
            A CHAIN OF MULTISPECIALITY DENTAL CLINICS in Kolkata(Tollygunge
            Netajinagar,Tollyhunge Suryanagar, Sonarpur, Dumdum Cantonment, VIP
            ROAD TEGHORIA, RAJARHAT | TEGHORIA | NEWTOWN | CHINARPARK, GARIAHAT,
            BELEGHATA) <br /> EVERY TOOTH IN A PERSON IS MORE VALUABLE THAN A
            DIAMOND. Smile is the first thing people notice when they meet one
            another. Smile is something that can change the world. So in our
            DENTITY DENTAL Clinics we create a confident smile for you. We THE
            DENTITY DENTAL - A CHAIN OF MULTISPECIALITY DENTAL CLINICS in
            Kolkata(Tollygunge Netajinagar,Tollyhunge Suryanagar, Sonarpur,
            Dumdum Cantonment, VIP ROAD TEGHORIA, RAJARHAT | TEGHORIA | NEWTOWN
            | CHINARPARK, GARIAHAT, BELEGHATA)
          </p>
        </div>
        <WhyChooseUsSection />
      </section>
    </section>
  );
};

export default AboutPageDesign;
