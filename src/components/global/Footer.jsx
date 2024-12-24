import { Facilities } from "@/lib/facilitiesDataList";
import { Treatments } from "@/lib/treatmentDataList";
import Image from "next/image";
import Link from "next/link";
import { FaRegWindowClose } from "react-icons/fa";
import EnquiryBox from "./EnquiryBox";
import { useState } from "react";

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);

  const openModal = (componentName) => {
    setSelectedComponent(componentName);
    setModalOpen(true);
  };

  const closeModal = () => {
    const modalElement = document.querySelector(".modal-container");
    modalElement.classList.add("zoom-out");
    setTimeout(() => setModalOpen(false), 300);
  };
  function chunkArray(array, chunkSize = 10) {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }

  const treatmentGroups = chunkArray(Treatments);

  const facilitiesGroup = chunkArray(Facilities);

  return (
    <footer className="bg-[url('/background/footer-bg.png')] bg-cover bg-center">
      <div className="flex flex-col gap-12 bg-white/70 xl:p-16 lg:p-8 p-4 flex-1">
        <div className="grid gap-4 lg:gap-10 grid-cols-1 lg:grid-cols-4 justify-between">
          <div className="flex flex-col gap-3 lg:gap-2 xlg:gap-3 justify-between">
            <Image
              src="/images/logo.svg"
              alt="logo"
              height={84}
              width={194}
              className="max-w-[13.5vmax] w-full"
            />
            <p className="font-medium text-xs lg:text-sm text-site-typo lg:max-w-[53ch]">
              Dentity Dental is a Multispeciality Clinic Chain in Kolkata &
              Various Parts of West Bengal. Ranked multiple times in Times of
              India Health Survery & awarded by Governor of WB for Dental
              Excellence.
            </p>
            <div className="flex flex-col gap-3 lg:gap-2 xlg:gap-3">
              <button
                onClick={() => openModal("EnquiryBoxComponent")}
                className="rounded-md px-2 md:px-4 lg:px-2 xlg:px-4 h-[2.5rem] bg-site-sub text-white flex justify-center md:gap-2 xlg:gap-4 lg:gap-2 gap-1 items-center buttonshine"
              >
                <div className="relative w-4 h-4 xlg:w-6 xlg:h-6">
                  <div className="relative w-4 h-4">
                    <Image
                      src={"/images/onlineconsultationicon.svg"}
                      alt="online consultation"
                      fill
                      className=""
                    />
                  </div>
                </div>
                <span className="text-xs md:text-base lg:text-[10px] xlg:text-sm xl:text-base">
                  Online Consult
                </span>
                {modalOpen && (
                  <div className="fixed top-0 z-[1300] left-0 w-full h-full flex items-center justify-center overflow-y-scroll bg-black bg-opacity-50">
                    <div className=" w-full sm:h-[50vh] lg:h-[100vh] justify-center items-center flex flex-col modal-container  rounded-lg">
                      <div className="w-full flex p-4 justify-end items-center"></div>
                      <div className=" w-[95%] md:w-[60%] lg:w-[45%] xl:w-[40%] xxl:w-[30%] z-[1300] relative">
                        <button
                          className="bg-primary text-site-main lg:w-16 right-2  absolute z-[1400] top-2 lg:h-10 sm:w-12 sm:h-8 flex items-center justify-center rounded-lg hover:bg-white hover:text-primary border-2 border-site-main transition-colors duration-300"
                          onClick={closeModal}
                        >
                          <FaRegWindowClose className="lg:text-2xl sm:text-xl" />
                        </button>
                        {selectedComponent === "EnquiryBoxComponent" && (
                          <EnquiryBox />
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </button>
              <Link
                href={"#"}
                className="rounded-md px-2 md:px-4 lg:px-2 xlg:px-4 h-[2.5rem] bg-site-main text-white flex justify-center md:gap-2 xlg:gap-4 lg:gap-2 gap-1 items-center buttonshine"
              >
                <div className="relative w-4 h-4 ">
                  <Image
                    src={"/images/payonlineicon.svg"}
                    alt="pay now"
                    fill
                    className=""
                  />
                </div>
                <span className="text-xs md:text-base lg:text-[10px] xlg:text-sm xl:text-base">
                  Pay Online
                </span>
              </Link>
            </div>
            <div className="flex justify-between gap-3 lg:gap-2 xlg:gap-3">
              <Link
                href="https://www.youtube.com/channel/UC-iPLeqAzrCXv3_gowjrqWw"
                target="_blank"
                className="text-[1.5rem] xlg:text-[2.5rem] object-cover"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.8886 3.37061C12.1776 1.17298 16.0444 0 20 0C25.3043 0 30.3914 2.10714 34.1421 5.85786C37.8929 9.60859 40 14.6957 40 20C40 23.9556 38.827 27.8224 36.6294 31.1114C34.4318 34.4004 31.3082 36.9638 27.6537 38.4776C23.9991 39.9913 19.9778 40.3874 16.0982 39.6157C12.2186 38.844 8.65492 36.9392 5.85787 34.1421C3.06082 31.3451 1.15601 27.7814 0.384303 23.9018C-0.387401 20.0222 0.00866564 16.0009 1.52242 12.3463C3.03617 8.69181 5.59962 5.56823 8.8886 3.37061ZM30.224 25.064C30.4239 24.5806 30.5267 24.0626 30.5263 23.5395V16.4605C30.5267 15.9374 30.4239 15.4194 30.224 14.936C30.0241 14.4527 29.7308 14.0134 29.3611 13.6434C28.9913 13.2734 28.5523 12.9799 28.069 12.7796C27.5858 12.5794 27.0678 12.4763 26.5447 12.4763H13.4553C12.9322 12.4763 12.4142 12.5794 11.931 12.7796C11.4477 12.9799 11.0087 13.2734 10.6389 13.6434C10.2692 14.0134 9.97595 14.4527 9.77602 14.936C9.57608 15.4194 9.47335 15.9374 9.47369 16.4605V23.5395C9.47335 24.0626 9.57608 24.5806 9.77602 25.064C9.97595 25.5473 10.2692 25.9866 10.6389 26.3566C11.0087 26.7266 11.4477 27.0201 11.931 27.2203C12.4142 27.4206 12.9322 27.5237 13.4553 27.5237H26.5447C27.0678 27.5237 27.5858 27.4206 28.069 27.2203C28.5523 27.0201 28.9913 26.7266 29.3611 26.3566C29.7308 25.9866 30.0241 25.5473 30.224 25.064ZM22.7737 20.0076L17.2263 23.2261V16.7734L22.7737 20.0076Z"
                    fill="#104099"
                  />
                </svg>
              </Link>
              <Link
                href="https://www.facebook.com/dentity.dental/"
                target="_blank"
                className="text-[1.5rem] xlg:text-[2.5rem] object-cover"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M40 20.1225C40 9.00887 31.0461 0 20.0025 0C8.95388 0.00249969 0 9.00888 0 20.125C0 30.1662 7.31409 38.4902 16.8729 40V25.9393H11.7985V20.125H16.8779V15.688C16.8779 10.6462 19.865 7.86152 24.4319 7.86152C26.6217 7.86152 28.9089 8.25397 28.9089 8.25397V13.2034H26.3867C23.9045 13.2034 23.1296 14.7557 23.1296 16.348V20.1225H28.6739L27.789 25.9368H23.1271V39.9975C32.6859 38.4877 40 30.1637 40 20.1225Z"
                    fill="#104099"
                  />
                </svg>
              </Link>
              <Link
                href=""
                className="text-[1.5rem] xlg:text-[2.5rem] object-cover"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M23.2199 20.486C23.2079 21.1195 23.0079 21.7352 22.6455 22.255C22.2831 22.7749 21.7746 23.1754 21.1843 23.4058C20.594 23.6363 19.9486 23.6863 19.3298 23.5495C18.7111 23.4127 18.1469 23.0953 17.7087 22.6375C17.2706 22.1797 16.9783 21.6021 16.8687 20.978C16.7592 20.3538 16.8375 19.7112 17.0936 19.1316C17.3497 18.552 17.7722 18.0615 18.3074 17.7222C18.8426 17.383 19.4665 17.2103 20.1 17.226C20.9418 17.2572 21.7383 17.615 22.3208 18.2235C22.9032 18.8321 23.2257 19.6436 23.2199 20.486Z"
                    fill="#104099"
                  />
                  <path
                    d="M25.526 10.4661H14.6761C13.6025 10.4661 12.5729 10.8925 11.8138 11.6517C11.0546 12.4108 10.6282 13.4404 10.6282 14.514V25.6079C10.6282 26.1395 10.7329 26.6658 10.9363 27.157C11.1397 27.6481 11.4379 28.0943 11.8138 28.4702C12.1897 28.8461 12.6359 29.1443 13.127 29.3477C13.6181 29.5511 14.1445 29.6558 14.6761 29.6558H25.526C26.0576 29.6558 26.5839 29.5511 27.0751 29.3477C27.5662 29.1443 28.0124 28.8461 28.3883 28.4702C28.7642 28.0943 29.0624 27.6481 29.2658 27.157C29.4692 26.6658 29.5739 26.1395 29.5739 25.6079V14.534C29.576 14.0009 29.4729 13.4726 29.2705 12.9794C29.068 12.4862 28.7703 12.0378 28.3942 11.6599C28.0182 11.282 27.5713 10.982 27.0791 10.7772C26.5869 10.5723 26.0591 10.4666 25.526 10.4661ZM20.1 25.9119C19.026 25.9361 17.9691 25.6398 17.0642 25.0607C16.1593 24.4816 15.4474 23.646 15.0195 22.6606C14.5916 21.6752 14.4669 20.5846 14.6615 19.5281C14.8562 18.4715 15.3612 17.4969 16.1121 16.7286C16.863 15.9603 17.8259 15.4332 18.8777 15.2145C19.9296 14.9959 21.0227 15.0956 22.0176 15.5009C23.0126 15.9062 23.8642 16.5988 24.4638 17.4903C25.0633 18.3817 25.3837 19.4316 25.384 20.5059C25.3922 21.2079 25.262 21.9046 25.0008 22.5562C24.7397 23.2078 24.3527 23.8016 23.862 24.3036C23.3713 24.8057 22.7865 25.2061 22.141 25.482C21.4955 25.758 20.802 25.904 20.1 25.9119ZM25.972 15.102C25.84 15.102 25.7094 15.0757 25.5877 15.0246C25.466 14.9735 25.3557 14.8987 25.2634 14.8044C25.171 14.7102 25.0983 14.5984 25.0497 14.4758C25.001 14.3531 24.9773 14.222 24.98 14.09C24.98 13.8216 25.0866 13.5642 25.2764 13.3744C25.4662 13.1846 25.7236 13.078 25.992 13.078C26.2604 13.078 26.5178 13.1846 26.7076 13.3744C26.8973 13.5642 27.004 13.8216 27.004 14.09C27.0079 14.2329 26.981 14.3749 26.925 14.5064C26.8689 14.6379 26.7852 14.7557 26.6794 14.8518C26.5736 14.9479 26.4483 15.0201 26.312 15.0632C26.1758 15.1064 26.0318 15.1196 25.89 15.102H25.972Z"
                    fill="#104099"
                  />
                  <path
                    d="M20.1 0.000250345C14.7957 -0.026271 9.69819 2.0554 5.92875 5.78733C2.15932 9.51926 0.0267717 14.5957 0.000250345 19.9C-0.026271 25.2043 2.0554 30.3018 5.78733 34.0713C9.51926 37.8407 14.5957 39.9732 19.9 39.9998C22.5264 40.0129 25.1297 39.5086 27.5612 38.5156C29.9927 37.5227 32.2048 36.0605 34.0713 34.2127C35.9377 32.3648 37.4219 30.1674 38.4391 27.746C39.4563 25.3245 39.9866 22.7264 39.9998 20.1C40.0129 17.4736 39.5086 14.8703 38.5156 12.4388C37.5227 10.0073 36.0605 7.79519 34.2127 5.92875C32.3648 4.06232 30.1674 2.57812 27.746 1.56091C25.3245 0.543694 22.7264 0.0133824 20.1 0.000250345ZM32.2458 25.4039C32.2514 26.3012 32.0788 27.1906 31.7381 28.0207C31.3974 28.8507 30.8953 29.6049 30.2609 30.2395C29.6265 30.874 28.8725 31.3764 28.0425 31.7173C27.2126 32.0583 26.3232 32.2312 25.4259 32.2258H14.7781C13.881 32.2309 12.9918 32.0579 12.1619 31.717C11.3321 31.3761 10.5782 30.874 9.94372 30.2397C9.30927 29.6054 8.80692 28.8516 8.46575 28.0219C8.12459 27.1922 7.95138 26.303 7.95615 25.4059V14.7561C7.95058 13.8588 8.12316 12.9694 8.46389 12.1393C8.80463 11.3093 9.30674 10.5551 9.94111 9.92053C10.5755 9.28597 11.3295 8.78364 12.1595 8.44266C12.9894 8.10168 13.8788 7.92884 14.7761 7.93415H25.4259C26.323 7.92884 27.2122 8.10162 28.0421 8.44247C28.8719 8.78333 29.6258 9.28548 30.2602 9.91982C30.8945 10.5542 31.3967 11.3081 31.7375 12.1379C32.0784 12.9678 32.2512 13.857 32.2458 14.7541V25.4039Z"
                    fill="#104099"
                  />
                </svg>
              </Link>
              <Link
                href="https://api.whatsapp.com/send?phone=919051553253"
                className="text-[1.5rem] xlg:text-[2.5rem] object-cover"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M20.005 0H19.995C8.9675 0 0 8.97 0 20C0 24.375 1.41 28.43 3.8075 31.7225L1.315 39.1525L9.0025 36.695C12.165 38.79 15.9375 40 20.005 40C31.0325 40 40 31.0275 40 20C40 8.9725 31.0325 0 20.005 0ZM31.6425 28.2425C31.16 29.605 29.245 30.735 27.7175 31.065C26.6725 31.2875 25.3075 31.465 20.7125 29.56C14.835 27.125 11.05 21.1525 10.755 20.765C10.4725 20.3775 8.38 17.6025 8.38 14.7325C8.38 11.8625 9.8375 10.465 10.425 9.865C10.9075 9.3725 11.705 9.1475 12.47 9.1475C12.7175 9.1475 12.94 9.16 13.14 9.17C13.7275 9.195 14.0225 9.23 14.41 10.1575C14.8925 11.32 16.0675 14.19 16.2075 14.485C16.35 14.78 16.4925 15.18 16.2925 15.5675C16.105 15.9675 15.94 16.145 15.645 16.485C15.35 16.825 15.07 17.085 14.775 17.45C14.505 17.7675 14.2 18.1075 14.54 18.695C14.88 19.27 16.055 21.1875 17.785 22.7275C20.0175 24.715 21.8275 25.35 22.475 25.62C22.9575 25.82 23.5325 25.7725 23.885 25.3975C24.3325 24.915 24.885 24.115 25.4475 23.3275C25.8475 22.7625 26.3525 22.6925 26.8825 22.8925C27.4225 23.08 30.28 24.4925 30.8675 24.785C31.455 25.08 31.8425 25.22 31.985 25.4675C32.125 25.715 32.125 26.8775 31.6425 28.2425Z"
                    fill="#104099"
                  />
                </svg>
              </Link>
              <Link
                href=""
                className="text-[1.5rem] xlg:text-[2.5rem] object-cover"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 49 40"
                  fill="none"
                >
                  <path
                    d="M19.875 4.24265V29.2466C19.875 37.7586 14.2988 40.0002 9.57687 40.0002C5.97589 40.0002 0 38.613 0 34.2097C0 32.8494 1.20003 31.1145 2.90755 31.1145C4.98874 31.1145 6.80315 32.9824 9.15021 32.9824C12.0587 32.9824 12.0587 30.3409 12.0587 28.7129V4.24265C12.0587 1.70811 13.7123 0.293945 15.9534 0.293945C18.1944 0.293945 19.8481 1.70811 19.8481 4.24265H19.875Z"
                    fill="#104099"
                  />
                  <path
                    d="M44.318 0C42.1039 0 40.5293 1.628 40.5293 4.05562V13.9826C38.529 12.3016 35.9681 11.4472 33.3265 11.4472C25.1894 11.4472 21.1349 18.8127 21.1349 25.9105C21.1349 33.0083 25.9637 39.6533 33.5932 39.6533C36.181 39.6533 39.1155 38.5329 40.5293 36.2912C41.0099 38.2121 42.2108 39.3334 44.318 39.3334C46.5322 39.3334 48.1058 37.7054 48.1058 35.2769V4.05562C48.1058 1.628 46.5322 0 44.318 0ZM34.5804 32.9553C30.6318 32.9553 28.6844 29.0066 28.6844 25.5907C28.6844 22.1747 30.6318 18.1452 34.5804 18.1452C38.529 18.1452 40.5293 21.801 40.5293 25.3508C40.5293 28.9006 38.7418 32.9553 34.5804 32.9553Z"
                    fill="#104099"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3 xlg:text-base lg:text-xs text-base xlg:gap-3">
            <h1 className="text-lg xlg:text-2xl font-semibold text-custom-gold truncate text-site-main">
              Quick Link
            </h1>
            <ul className="flex flex-col gap-4 text-sm lg:text-xs xlg:text-base leading-7 lg:leading-10 font-medium text-white">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Our Treatments", href: "/treatments/" },
                { label: "Our Facilities", href: "/facilities" },
                { label: "Our Clinics", href: "/clinics" },
                { label: "Media", href: "/gallery" },
                { label: "Awards", href: "/awards" },
                { label: "Contact Us", href: "/contact-us" },
                { label: "Patient Corner", href: "/pdfs/Bengali Version.pdf" },
                { label: "Online Consult", href: "/contact-us" },
                { label: "Pay Online", href: "#" },
              ].map((link, key) => (
                <li key={key}>
                  <Link
                    href={link.href}
                    className="text-site-typo hover:text-site-main"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {treatmentGroups.map((group, index) => (
            <FooterList
              key={index}
              Treatments={group}
              title={"Our Treatments"}
            />
          ))}
          {facilitiesGroup.map((group, index) => (
            <FooterList
              key={index}
              Treatments={group}
              title={"Our Facilities"}
            />
          ))}
        </div>
        <div className="w-full h-[1px] bg-site-typo" />
        <div className="flex flex-col lg:flex-row items-center gap-4 xlg:gap-0 justify-between">
          <h1 className="text-site-typo font-medium text-sm lg:text-xl text-left">
            &copy; Copyright{" "}
            <span className="font-semibold">Dentity Dental - 2025</span> All
            Rights Reserved
          </h1>
          <h1 className="text-site-typo font-medium text-sm lg:text-xl text-right">
            Design &amp; Developed By:{" "}
            <Link
              href="https://rebootai.in/"
              target="_blank"
              className="inline"
            >
              Reboot AI Pvt. Ltd.
            </Link>
          </h1>
        </div>
      </div>
    </footer>
  );
}

function FooterList({ Treatments, title }) {
  return (
    <div className="flex flex-col gap-3 xlg:text-base lg:text-xs text-base xlg:gap-3">
      <h1 className="text-lg xlg:text-2xl font-semibold text-custom-gold truncate text-site-main">
        {title}
      </h1>
      <ul className="flex flex-col gap-4 text-sm lg:text-xs xlg:text-base leading-7 lg:leading-10 font-medium text-white">
        {Treatments.map((link, groupIndex) => (
          <ul
            key={groupIndex}
            className="flex flex-col gap-4 text-sm lg:text-xs xlg:text-base leading-7 lg:leading-10 font-medium text-white"
          >
            <li>
              <Link
                href={link.href}
                className="text-site-typo hover:text-site-main"
              >
                {link.label}
              </Link>
            </li>
          </ul>
        ))}
      </ul>
    </div>
  );
}
