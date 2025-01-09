import Image from "next/image";
import EnquiryBox from "../global/EnquiryBox";
import Link from "next/link";

export default function ClinicDetails({
  title,
  description,
  cover,
  address,
  timing,
  map,
  iframe,
  phone,
}) {
  return (
    <section className="flex flex-col relative md:flex-row gap-4 lg:gap-9 p-4 lg:p-8 xl:p-16">
      <section className="flex flex-col gap-2 lg:gap-7 w-full md:w-[60%]">
        <h1 className="text-lg md:text-3xl font-medium text-site-main">
          {title}
        </h1>
        <h3
          className="text-site-typo md:text-lg text-base"
          dangerouslySetInnerHTML={{ __html: description }}
        ></h3>
        <div className="flex flex-col gap-5 md:gap-3">
          <h1 className="text-base md:text-2xl font-medium text-site-main">
            Details
          </h1>
          <div className="flex flex-col gap-2">
            <h1 className="text-site-typo text-sm lg:text-lg">
              <span className="text-[#222]">Timing:</span> {timing}
            </h1>
            <div className="flex gap-2">
              <span className="text-[#222]">Contact Number:</span>{" "}
              {Array.isArray(phone) &&
                phone.map((number, index) => (
                  <Link
                    href={`tel:${number}`}
                    key={index}
                    className="xlg:text-lg lg:text-base text-sm text-site-typo inline"
                  >
                    +91 {number}
                  </Link>
                ))}
            </div>
            <h1 className="text-site-typo text-sm lg:text-lg">
              <span className="text-[#222]">Address:</span> {address}
            </h1>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="flex-1">
            <iframe
              src={iframe}
              className="w-full h-full "
              loading="lazy"
            ></iframe>
          </div>
          <Image
            src={cover}
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
