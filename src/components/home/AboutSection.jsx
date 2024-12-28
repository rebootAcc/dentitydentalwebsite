import Image from "next/image";
import React, { useEffect, useState } from "react";
import useElementHeight from "@/hooks/useElementHeight";
import WhyChooseUsSection from "../global/WhyChooseUsSection";

const AboutSection = () => {
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

  const aboutcontent = [
    {
      heading: "Most Affordable Dental  Clinic In Kolkata",
      text: "Dentity Dental Is an ISO Certified Brand & Awarded by the Governor of West Bengal. Multiple times, this brand has ranked in the number 1 position according to the Times of India Health Survey. Dentity Dental Is the Best & Affordable Multi-speciality Chain Dental Clinic, which provides all kinds of Oral, Dental & Facial Treatments in a Highly Expertised Way.Every Tooth in a Person Is More Valuable Than a Diamond. <br/> <br/> Smile is the first thing people notice when they meet one another. Smile is something that can change the world. So in our Dentity Dental Clinics, we create a confident smile for you. We the Dentity Dental – a chain of multispeciality Dental Clinics in Kolkata (Tollygunge Netajinagar, Tollyhunge Suryanagar, Sonarpur, Dumdum Cantonment, VIP Road Teghoria, Rajarhat-Teghoria-Newtown-Chinapark, Gariahat, Beleghata) & various places of West Bengal (Dental Mid World, Midnapur) already served an uncountable number of happy patients with our ultramodern equipment, latest advanced technology, and most importantly, highly skilled specialist dentists.",
    },
    {
      heading: "Why Choose Dentity Dental?",
      text: "At Dentity Dental, we understand that your smile is important. Here's why you should consider us for your dental care: <br/> <br/>  <strong>Experienced and Skilled Dentists: </strong> Dentity Dental has the industry expertise Dentists for you & your family's complete teeth care. <br/> <strong>Multispeciality Clinic:</strong> Dentity Dental is multispeciality Dental Claim Chain in Kolkata, provides all kinds of Dental Services under one roof. <br/> <strong>Complete Dental Services:</strong> Whether you need a routine check-up, cosmetic dentistry, orthodontics, or facial treatments, Dentity Dental Offers wide range of Dental Treatment services. <br/> <strong>Trusted and Awarded:</strong> As an ISO certified brand awarded by the Governor of West Bengal, and ranked number 1 in the Times of India Health Survey, you can trust us to provide excellent care and service. <br/> <strong> Friendly and Caring Staff: </strong> From the Walk-in to Exit we our staffs are friendly that they will guide you everything with care. <br/> <strong> Convenient Locations: </strong> With multiple clinics across Kolkata and West Bengal, including Tollygunge, Netajinagar, Suryanagar, and more, It is very easy to find a Dentity Dental Branch clinic near you. <br/> <strong> Positive Patient Experiences: </strong> We have countless number of patients who are satisfied & give us a positive feedback. <br/> <strong> Hygiene and Safety: </strong> Patient Heath & safety is priority for us, Dentity Dental is committed to maintain Dental hygiene & safety.",
    },
  ];
  return (
    <div className="flex flex-col gap-4 md:gap-8 xlg:gap-16 xl:p-16 lg:p-8 p-4">
      <section className="flex flex-col md:flex-row gap-4 xlg:gap-8">
        <section
          className="flex flex-col gap-6 w-full md:w-[50%]"
          style={{ height: isSmallScreen ? "auto" : `${contentHeight}px` }}
        >
          <section className="flex flex-col gap-3 h-[50%]">
            <Image
              src={"/images/toi-about.jpg"}
              alt="about us"
              height={648}
              width={801}
              className=" w-full rounded-sm h-[95%] object-cover "
            />
            <h1 className="lg:text-xl text-base font-semibold h-[5%] text-site-text ">
              Times of India Health Survey Ranking 2023
            </h1>
          </section>
          <section className="h-[50%] flex flex-col gap-2">
            <Image
              src={"/images/gov-about.jpg"}
              alt="about us"
              height={450}
              width={789}
              className=" w-full rounded-sm h-[49%] object-cover"
            />
            <Image
              src={"/images/gov2-about.jpg"}
              alt="about us"
              height={450}
              width={789}
              className=" w-full rounded-sm h-[49%] object-cover"
            />
          </section>
        </section>
        <section
          ref={rightContentRef}
          className="md:w-[50%] w-full flex flex-col gap-3 lg:gap-5 xlg:gap-8"
        >
          {aboutcontent.map((item, index) => (
            <div className="flex flex-col gap-2 xlg:gap-5" key={index}>
              <h1 className="text-site-main text-xl lg:text-2xl xlg:text-3xl font-semibold">
                {item.heading}
              </h1>
              <p
                className="text-site-typo text-sm lg:text-sm/[21px] xlg:text-base/[26px]"
                dangerouslySetInnerHTML={{ __html: item.text }}
              ></p>
            </div>
          ))}
        </section>
      </section>
      <section className="flex flex-col md:flex-row gap-4 xlg:gap-8">
        <section className="lg:w-[50%] w-full">
          <p className="lg:text-base xlg:text-[17px]/[25px] md:text-sm text-site-typo text-xs/[17px]">
            Dr. Saikat Paul &#40;Consultant Oral, Dental Surgeon & Maxillofacial
            Prosthodontist Founder cum Owner of Dentity Dental &#40;ISO
            certified, Best multispeciality dental chain clinic in Kolkata &
            West Bengal as per Times Of India Health Survey&#41; Receiving Award
            from honourable governor &#40;Shri C.V. Ananda Bose&#41; of West
            Bengal for professional and academic excellance in Health Care
            Sector.
          </p>
        </section>
        <section className="lg:w-[50%] w-full">
          <WhyChooseUsSection />
        </section>
      </section>
    </div>
  );
};

export default AboutSection;
