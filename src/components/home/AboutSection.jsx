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

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize); // Add event listener for resizing

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup listener
    };
  }, []);

  const aboutcontent = [
    {
      heading: "Most Affordable Dental  Clinic In Kolkata",
      text: "Lorem ipsum dolor sit amet consectetur. Faucibus cursus ut dignissim nisl pellentesque velit. Et varius pretium auctor pharetra nisi. Purus id quis convallis augue facilisi mauris sapien tempus malesuada. Mattis dictum mi ultrices nisi. Adipiscing augue et vitae risus. Odio morbi elit adipiscing facilisis augue feugiat hendrerit facilisis. Eu dolor porta ut scelerisque sagittis. Non nibh pretium leo malesuada aliquet id pharetra.<br/> Sed tortor sit aliquam felis viverra adipiscing. Est lacus phasellus condimentum fringilla. Non pellentesque pellentesque commodo duis morbi. Amet commodo ut purus nam facilisis ut purus a. Ultricies ac id viverra fringilla at lorem leo. Senectus sagittis sagittis euismod dolor arcu urna interdum purus sed. In pharetra molestie morbi viverra lorem leo a blandit cursus. Nulla pulvinar pellentesque blandit aenean sem aliquam ut ut. Egestas vitae diam eu nibh consequat.Lorem viverra vitae scelerisque pretium varius viverra nulla pharetra. Rutrum commodo sed posuere neque non praesent pulvinar. Vitae integer commodo nulla odio ipsum pulvinar ultrices morbi eu. A nec odio ullamcorper tellus faucibus venenatis. Senectus gravida euismod euismod et sit massa feugiat nec. Magna duis risus eget amet est gravida at.",
    },
    {
      heading: "Most Affordable Dental  Clinic In Kolkata",
      text: "Plementum egestas blandit nibh suspendisse ultrices porta. Fringilla leo ultricies in tortor orci. Volutpat ultrices nam nulla felis lacus rhoncus turpis eget est. Velit ultrices enim dignissim et arcu. Nam odio egestas enim interdum feugiat ut fermentum et. Varius mi curabitur massa hendrerit ipsum mattis. Consequat nulla id tellus integer in lectus mattis et neque. Fermentum lacus eu tristique fermentum sit condimentum porta mi. Pharetra eget dolor ultrices cum sit id faucibus a pellentesque.<br/> Porta congue at eu lectus et natoque amet sed vitae. Eget ultricies elementum nibh cras dolor. Aliquet aliquam nulla quis varius adipiscing arcu nibh id. Fermentum sit feugiat accumsan volutpat massa viverra ultricies. Id amet cras dignissim integer arcu elit senectus. Sed aenean eget mattis ac nulla libero euismod ante. <br/> Vitae est enim orci egestas. Ornare tristique nulla vel libero placerat suspendisse felis. Metus consectetur elementum ipsum donec suspendisse mattis. Quam congue in eget ultrices dolor faucibus.",
    },
    {
      heading: "Most Affordable Dental  Clinic In Kolkata",
      text: "EVERY TOOTH IN A PERSON IS MORE VALUABLE THAN A DIAMOND. Smile is the first thing people notice when they meet one another. Smile is something that can change the world. So in our DENTITY DENTAL Clinics we create a confident smile for you. We THE DENTITY DENTAL - A CHAIN OF MULTISPECIALITY DENTAL CLINICS in Kolkata(Tollygunge Netajinagar,Tollyhunge Suryanagar, Sonarpur, Dumdum Cantonment, VIP ROAD TEGHORIA, RAJARHAT | TEGHORIA | NEWTOWN | CHINARPARK, GARIAHAT, BELEGHATA)",
    },
  ];
  return (
    <div className="flex flex-col gap-4 md:gap-8 xlg:gap-16 xl:p-16 lg:p-8 p-4">
      <section className="flex flex-col md:flex-row gap-4 xlg:gap-8">
        <section
          className="flex flex-col gap-6 w-full md:w-[50%]"
          style={{ height: isSmallScreen ? "auto" : `${contentHeight}px` }}
        >
          <section className="flex flex-col gap-3 h-[40%]">
            <Image
              src={"/images/aboutus1.png"}
              alt="about us"
              height={648}
              width={801}
              className=" w-full rounded-sm h-[95%] object-cover "
            />
            <h1 className="lg:text-2xl text-lg font-semibold h-[5%] text-site-text ">
              Most Affordable Dental Clinic In Kolkata
            </h1>
          </section>
          <section className="h-[60%] flex flex-col gap-4">
            <Image
              src={"/images/about2.png"}
              alt="about us"
              height={450}
              width={789}
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
                className="text-site-typo text-xs/[17px] lg:text-sm/[21px] xlg:text-base/[26px]"
                dangerouslySetInnerHTML={{ __html: item.text }}
              ></p>
            </div>
          ))}
        </section>
      </section>
      <section className="flex flex-col md:flex-row gap-4 xlg:gap-8">
        <section className="lg:w-[50%] w-full">
          <p className="lg:text-base xlg:text-[17px]/[25px] md:text-sm text-site-typo text-xs/[17px]">
            Lorem ipsum dolor sit amet consectetur. Faucibus accumsan
            condimentum sed vitae et adipiscing nascetur. Mauris sed sed
            adipiscing amet pellentesque suspendisse mi sollicitudin nisl.
            Dignissim porttitor ac mi amet. Pellentesque in egestas lectus
            aliquam nulla arcu cras. Dui convallis amet diam nunc et donec
            scelerisque tellus sit. Vulputate egestas in placerat urna netus
            viverra. Nulla orci fermentum sit lorem dignissim venenatis. In
            vestibulum donec leo sed sit rhoncus tristique.
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
