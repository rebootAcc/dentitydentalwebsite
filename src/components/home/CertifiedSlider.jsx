import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";

const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});

export default function CertifiedSlider() {
  const [slidesToShow, setSlidesToShow] = useState(5);
  const [autoplaymode, setAutoplayMode] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 260) {
        setSlidesToShow(2);
        setAutoplayMode(false);
      } else if (window.innerWidth <= 600) {
        setSlidesToShow(2);
        setAutoplayMode(false);
      } else if (window.innerWidth <= 860) {
        setSlidesToShow(4);
        setAutoplayMode(false);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(5);
        setAutoplayMode(false);
      } else if (window.innerWidth <= 1780) {
        setSlidesToShow(6);
        setAutoplayMode(false);
      } else {
        setSlidesToShow(6);
        setAutoplayMode(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const settings = {
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: autoplaymode,
    speed: 6000,
    autoplaySpeed: 500,
    arrows: false,
    centerPadding: "60px",
    lazyLoad: "ondemand",
    adaptiveHeight: true,
  };

  const experience = [
    { icon: "/acknowledgement/iso-globe.svg", name: "ISO 9001:2015 Certified" },
    {
      icon: "/acknowledgement/toi.svg",
      name: "Top Dental Clinic in WB by Times of India Health Survey 2023",
    },
    {
      icon: "/acknowledgement/star.svg",
      name: "Top Dental Clinic in West Bengal by Honorable Governor of WB",
    },
    {
      icon: "/acknowledgement/municiplicity.svg",
      name: "Multiplicity Dental Clinic Chain in WB",
    },
    {
      icon: "/acknowledgement/denatal-clinic.svg",
      name: "Most Affordable Dental Clinic in Kolkata & WB",
    },
  ];

  return (
    <div className="w-full xl:p-16 lg:p-8 p-4">
      <Slider
        {...settings}
        className="rounded-l-full rounded-r-full overflow-hidden"
      >
        {experience.map((item, index) => (
          <section
            key={index}
            className="w-full !flex justify-center items-center py-4"
          >
            <div className="basis-11/12 flex flex-col gap-2 p-4 justify-center items-center bg-site-gray h-20 lg:h-40">
              <section className="w-full h-[4rem] relative ">
                <Image
                  src={item.icon}
                  alt=""
                  fill
                  className="w-full object-contain"
                />
              </section>
              <h1 className="xlg:text-lg lg:text-base text-sm font-medium line-clamp-2 text-[#222222] text-center">
                {item.name}
              </h1>
            </div>
          </section>
        ))}
      </Slider>
    </div>
  );
}