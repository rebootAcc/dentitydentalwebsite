import SubBanner from "@/components/global/SubBanner";
import WebsiteTemplate from "@/templates/WebsiteTemplate";
import Image from "next/image";
import React from "react";

const Awards = () => {
  const awards = [
    "/images/govornor-awards.jpg",
    "/images/govornor-awards2.jpg",
    "/images/toi-article.jpg",
    "/images/toi-awards.jpg",
  ];
  return (
    <WebsiteTemplate title={"Awards"} description={""}>
      <SubBanner heading={"Awards"} />
      <section className="xl:p-16 lg:p-8 p-4">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
          {awards.map((item, index) => (
            <div className="" key={index}>
              <Image
                src={item}
                alt="Awards"
                width={1000}
                height={563}
                className="w-full rounded-sm shadow-custom"
              />
            </div>
          ))}
        </section>
      </section>
    </WebsiteTemplate>
  );
};

export default Awards;
