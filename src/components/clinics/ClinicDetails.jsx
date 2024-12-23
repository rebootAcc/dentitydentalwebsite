import Image from "next/image";
import EnquiryBox from "../global/EnquiryBox";

export default function ClinicDetails() {
  return (
    <section className="flex flex-col relative md:flex-row gap-4 lg:gap-9 p-4 lg:p-8 xl:p-16">
      <section className="flex flex-col gap-2 lg:gap-7 w-full md:w-[60%]">
        <h1 className="text-lg md:text-3xl font-medium text-site-main">
          Dentity Dental Tollygunge Surayanagar
        </h1>
        <h3 className="text-site-typo md:text-lg text-base">
          This process comes under oral cosmetic plastic surgery. Persons with
          high smile line if have black or hyperpigmented gum &amp; by
          profession or by passion have the urge to get a beautiful smile prefer
          to undergo this process.Gum depigmentation
        </h3>
        <div className="flex flex-col gap-5 md:gap-3">
          <h1 className="text-base md:text-2xl font-medium text-site-main">
            Details
          </h1>
          <div className="flex flex-col gap-2">
            <h1 className="text-site-typo text-sm lg:text-lg">
              <span className="text-[#222]">Timing:</span> Monday - Saturday
              &#40;10:00 AM - 09:00 PM&#41;
            </h1>
            <h1 className="text-site-typo text-sm lg:text-lg">
              <span className="text-[#222]">Contact Number:</span> +91 12345
              67890, +91 12345 67890
            </h1>
            <h1 className="text-site-typo text-sm lg:text-lg">
              <span className="text-[#222]">Address:</span> SBI ATM /Dhaka
              Sweets, Cantonment 28, Subhas Nagar Rd, near Cantonment Station,
              Subhash Nagar, Dum Dum, Kolkata, West Bengal 700065
            </h1>
          </div>
        </div>
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
      </section>
      <div className="md:w-[40%] w-full">
        <EnquiryBox />
      </div>
    </section>
  );
}
