import { Treatments } from "@/lib/treatmentDataList";
import BranchServiceCard from "../global/BranchServiceCard";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});

export default function RelatedTreatment({ currentQuery }) {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 260) {
        setSlidesToShow(2);
      } else if (window.innerWidth <= 600) {
        setSlidesToShow(2);
      } else if (window.innerWidth <= 860) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(3);
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
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 500,
    arrows: false,
    centerPadding: "20px",
    lazyLoad: "ondemand",
    adaptiveHeight: true,
  };

  const relatedTreatMents = Treatments.filter(
    (treatment) => !treatment.href.includes(currentQuery)
  );

  return (
    <section className="flex flex-col relative gap-4 lg:gap-9 p-4 lg:p-8 xl:p-16">
      <h1 className="text-lg md:text-3xl font-medium text-site-main">
        See Other Treatments
      </h1>
      <h3 className="text-site-typo md:text-lg text-base">
        EVERY TOOTH IN A PERSON IS MORE VALUABLE THAN A DIAMOND. Smile is the
        first thing people notice when they meet one another. Smile is something
        that can change the world. So in our DENTITY DENTAL Clinics we create a
        confident smile for you.
      </h3>
      <Slider {...settings}>
        {relatedTreatMents.slice(0, 10).map((item, index) => (
          <div key={index} className="!flex justify-center px-2 lg:px-6 py-4">
            <BranchServiceCard content={item} />
          </div>
        ))}
      </Slider>
    </section>
  );
}
