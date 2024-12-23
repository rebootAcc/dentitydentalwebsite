import useElementHeight from "@/hooks/useElementHeight";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ContactUsPage = () => {
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
  const contact = [
    {
      heading: "Dentity Dental Dum Dum Cantonment",
      address:
        "Dentity Dental Tollygunge Suryanagar, Tollygunge, Titli Apartment, (opposite. Tollygunge Homes), 203 A , NCS Bose Road, Surya Nagar, Pin 700040 Kolkata WB",
      phone: "+91 12345 67890, +91 12345 67890",
      whatsapp: "+91 12345 67890",
      timing: "Monday - Saturday (10:00 AM - 09:00 PM)",
      image: "/images/contact.png",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.476503588133!2d88.4109816!3d22.636015900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89f9b0dc8575b%3A0xa2a420ef56dfe5df!2sDentity%20Dental%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1734972467227!5m2!1sen!2sin",
    },
  ];
  return (
    <div className="xl:p-16 lg:p-8 p-4 flex flex-col gap-8 ">
      {contact.map((item, index) => (
        <section
          className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 xlg:gap-8"
          key={index}
        >
          <div className="flex flex-col " ref={rightContentRef}>
            <div className="w-full h-[4rem] lg:h-[4.5rem] flex justify-center items-center bg-site-main text-white lg:text-2xl text-xl font-semibold">
              {item.heading}
            </div>
            <div className="flex flex-col gap-6 p-4 lg:p-6 xlg:p-10 shadow-custom ">
              <div className="flex flex-col gap-1">
                <h1 className="xlg:text-xl lg:text-lg text-base font-semibold text-site-sub">
                  Address:
                </h1>
                <h1 className="xlg:text-lg lg:text-base text-sm text-site-typo">
                  {item.address}
                </h1>
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="xlg:text-xl lg:text-lg text-base font-semibold text-site-sub">
                  Phone:
                </h1>
                <h1 className="xlg:text-lg lg:text-base text-sm text-site-typo">
                  {item.phone}
                </h1>
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="xlg:text-xl lg:text-lg text-base font-semibold text-site-sub">
                  Whatsapp:
                </h1>
                <h1 className="xlg:text-lg lg:text-base text-sm text-site-typo">
                  {item.whatsapp}
                </h1>
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="xlg:text-xl lg:text-lg text-base font-semibold text-site-sub">
                  Timing:
                </h1>
                <h1 className="xlg:text-lg lg:text-base text-sm text-site-typo">
                  {item.timing}
                </h1>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col gap-4"
            style={{ height: isSmallScreen ? "auto" : `${contentHeight}px` }}
          >
            <div className="h-[50%]">
              <iframe
                src={item.map}
                className="w-full h-full "
                loading="lazy"
              ></iframe>
            </div>
            <div className="w-full h-[50%]">
              <Image
                src={item.image}
                alt="Conatct"
                width={954}
                height={417}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ContactUsPage;
