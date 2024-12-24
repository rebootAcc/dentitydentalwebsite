import Image from "next/image";
import EnquiryBox from "../global/EnquiryBox";
import WhyChooseUsSection from "../global/WhyChooseUsSection";

export default function TreatMentAbout({ title, description, cover }) {
  return (
    <section className="flex flex-col relative md:flex-row gap-4 lg:gap-9 p-4 lg:p-8 xl:p-16">
      <section className="flex flex-col gap-2 lg:gap-7 w-full md:w-[60%]">
        <h1 className="text-lg md:text-3xl font-medium text-site-main">
          {title}
        </h1>
        <h3 className="text-site-typo md:text-lg text-base">{description}</h3>
        <div className="flex flex-col md:flex-row justify-between gap-4 lg:gap-6">
          {cover.map((item, index) => (
            <div className="md:w-[50%] w-full">
              <Image
                src={item}
                alt={title}
                width={373}
                key={index}
                height={144}
                className="w-full"
              />
            </div>
          ))}
        </div>
        <WhyChooseUsSection />
      </section>
      <div className="md:w-[40%] w-full">
        <EnquiryBox />
      </div>
    </section>
  );
}
