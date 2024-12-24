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
          src={"/images/toi-about.jpg"}
          alt="about us"
          height={648}
          width={801}
          className=" w-full rounded-sm h-[49%] object-cover"
        />
        <Image
          src={"/images/gov-about.jpg"}
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
            Dentity Dental Is an ISO Certified Brand & Awarded by the Governor
            of West Bengal. Multiple times, this brand has ranked in the number
            1 position according to the Times of India Health Survey. Dentity
            Dental Is the Best & Affordable Multi-speciality Chain Dental
            Clinic, which provides all kinds of Oral, Dental & Facial Treatments
            in a Highly Expertised Way.Every Tooth in a Person Is More Valuable
            Than a Diamond. <br /> Smile is the first thing people notice when
            they meet one another. Smile is something that can change the world.
            So in our Dentity Dental Clinics, we create a confident smile for
            you. We the Dentity Dental - a chain of multispeciality Dental
            Clinics in Kolkata (Tollygunge Netajinagar, Tollyhunge Suryanagar,
            Sonarpur, Dumdum Cantonment, VIP Road Teghoria,
            Rajarhat-Teghoria-Newtown-Chinapark, Gariahat, Beleghata) & various
            places of West Bengal (Dental Mid World, Midnapur) already served an
            uncountable number of happy patients with our ultramodern equipment,
            latest advanced technology, and most importantly, highly skilled
            specialist dentists.
          </p>
          <h1 className="text-site-main text-xl lg:text-2xl xlg:text-3xl font-semibold">
            Why Choose Dentity Dental?
          </h1>
          <p className="text-site-typo text-xs/[17px] lg:text-sm/[21px] xlg:text-base/[26px]">
            <strong> Experienced and Skilled Dentists:</strong> Dentity Dental
            has the industry expertise Dentists for you & your family's complete
            teeth care. <br /> <strong>Multispeciality Clinic:</strong> Dentity
            Dental is multispeciality Dental Claim Chain in Kolkata, provides
            all kinds of Dental Services under one roof. <br />{" "}
            <strong>Complete Dental Services: </strong> Whether you need a
            routine check-up, cosmetic dentistry, orthodontics, or facial
            treatments, Dentity Dental Offers wide range of Dental Treatment
            services. <br /> <strong>Trusted and Awarded: </strong> As an ISO
            certified brand awarded by the Governor of West Bengal, and ranked
          </p>
        </div>
        <WhyChooseUsSection />
      </section>
    </section>
  );
};

export default AboutPageDesign;
