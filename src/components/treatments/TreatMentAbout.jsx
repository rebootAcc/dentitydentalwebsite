import Image from "next/image";
import EnquiryBox from "../global/EnquiryBox";
import WhyChooseUsSection from "../global/WhyChooseUsSection";

export default function TreatMentAbout() {
  return (
    <section className="flex flex-col relative md:flex-row gap-4 lg:gap-9 p-4 lg:p-8 xl:p-16">
      <section className="flex flex-col gap-2 lg:gap-7 w-full md:w-[60%]">
        <h1 className="text-lg md:text-3xl font-medium text-site-main">
          Depigmentation of Gum
        </h1>
        <h3 className="text-site-typo md:text-lg text-base">
          This process comes under oral cosmetic plastic surgery. Persons with
          high smile line if have black or hyperpigmented gum &amp; by
          profession or by passion have the urge to get a beautiful smile prefer
          to undergo this process. Gum depigmentation or gum bleaching can be
          done by bur abrasion, partial thickness flap surgery, gingival
          scraping, cryotherapy, electrosurgery, laser surgery etc.We, Dentity
          Dental provide all types of this kind of services as per your demand,
          requirement &amp; indication. Click &amp; come to our clinic to get
          beautiful gum.
        </h3>
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <Image
            src="/treatments/treatments-1.png"
            alt="treatment-1"
            width={373}
            height={144}
            className="flex-1"
          />
          <Image
            src="/treatments/treatments-2.png"
            alt="treatment-2"
            width={373}
            height={144}
            className="flex-1"
          />
        </div>
        <WhyChooseUsSection />
      </section>
      <div className="md:w-[40%] w-full">
        <EnquiryBox />
      </div>
    </section>
  );
}
