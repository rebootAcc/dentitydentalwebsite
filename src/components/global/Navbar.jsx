import { Clinic } from "@/lib/clinicsDataList";
import { Treatments } from "@/lib/treatmentDataList";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiCloseLine, RiMenuAddLine } from "react-icons/ri";

export default function NavBar() {
  const [dropdownStates, setDropdownStates] = useState({});
  const [menuopen, setMenuopen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const router = useRouter();

  const isActiveRoute = (href) => {
    return router.asPath === href ? true : false;
  };

  const togglemenuopen = () => {
    setMenuopen(!menuopen);
  };

  const toggleDropdown = (index) => {
    setDropdownStates({
      ...dropdownStates,
      [index]: !dropdownStates[index],
    });
  };

  const NavElement = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },

    {
      name: "Our Treatments",
      dropdownItems: Treatments.map((item) => ({
        name: item.label,
        link: item.href,
      })),
    },

    { name: "Our Facilities", link: "/facilities" },
    {
      name: "Our Clinics",
      dropdownItems: Clinic.map((item) => ({
        name: item.label,
        link: item.href,
      })),
    },

    { name: "Media", link: "/gallery" },

    { name: "Awards", link: "/gallery" },

    { name: "Blogs", link: "/blogs" },

    { name: "Contact Us", link: "/contact-us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getGridColumnsClass = (items) => {
    return items.length >= 30 ? "grid-cols-5 w-full" : "grid-cols-1 w-fit";
  };

  return (
    <>
      <div className="fixed top-0 bg-white z-[60] w-full">
        <div className="hidden lg:flex justify-between  items-center sm:gap-2 z-[50] lg:gap-0 flex-row p-3 lg:px-8">
          <Link href={"/"} className="">
            <Image
              src="/images/logo.svg"
              alt=""
              height={162}
              width={70}
              className="h-[2rem] w-fit"
            />
          </Link>
          <div className="flex gap-4  font-medium sm:text-sm  lg:text-base">
            <button className="rounded-md px-2 lg:px-4 h-[2rem] lg:h-[2.5rem] bg-site-main text-white  flex justify-center gap-2 lg:gap-3 items-center">
              <div className="relative lg:w-6 lg:h-6 h-5 w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 17 18"
                  fill="none"
                >
                  <path
                    d="M4.4828 18C4.7602 18 5.0442 17.9984 5.3344 17.9984H10.8278C11.1176 17.9984 11.4016 18 11.679 18C14.2208 18 16.163 17.87 16.163 15.2128C16.163 12.4316 14.036 10.1484 11.3196 9.90021C11.298 10.8732 8.082 13.2744 8.082 13.2744C8.082 13.2744 4.8652 10.8734 4.8434 9.90041C2.1274 10.1484 0 12.4316 0 15.2128C0 17.87 1.9414 18 4.4828 18ZM10.4814 14.3714C10.4814 14.2922 10.5528 14.2284 10.6416 14.2284H11.5104V13.36C11.5104 13.272 11.5738 13.1998 11.653 13.1998H12.5104C12.5892 13.1998 12.653 13.2714 12.653 13.36V14.2286H13.5214C13.6094 14.2286 13.6814 14.2924 13.6814 14.3716V15.2286C13.6814 15.3078 13.61 15.3716 13.5214 15.3716H12.6528V16.24C12.6528 16.3284 12.5888 16.4 12.5098 16.4H11.6528C11.5736 16.4 11.5098 16.3286 11.5098 16.24V15.3714H10.6414C10.553 15.3714 10.4812 15.3076 10.4812 15.2284L10.4814 14.3714Z"
                    fill="white"
                  />
                  <path
                    d="M8.083 10.5984C10.5398 10.5984 12.5312 6.9042 12.5312 4.4476C12.5312 1.9914 10.5398 0 8.083 0C5.6266 0 3.6352 1.9914 3.6352 4.4476C3.6352 6.9042 5.6266 10.5984 8.083 10.5984Z"
                    fill="white"
                  />
                </svg>
              </div>
              <span>Patient Corner</span>
            </button>
            <Link
              href="#"
              className="rounded-md  px-2 lg:px-4 h-[2rem] lg:h-[2.5rem] bg-site-main text-white  flex justify-center gap-2 lg:gap-4 items-center"
            >
              <div className="relative lg:w-6 lg:h-6 h-5 w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389955 7.20038 -0.17433 9.00998 0.172936 10.7558C0.520203 12.5016 1.37737 14.1053 2.63604 15.364C3.89471 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C17.9974 6.61383 17.0484 4.32613 15.3611 2.63886C13.6739 0.951584 11.3862 0.0025525 9 0ZM12.2143 7.07143C12.3848 7.07143 12.5483 7.13916 12.6689 7.25972C12.7894 7.38027 12.8571 7.54379 12.8571 7.71428C12.8571 7.88478 12.7894 8.04829 12.6689 8.16885C12.5483 8.28941 12.3848 8.35714 12.2143 8.35714H10.8643C10.7255 9.03325 10.3732 9.64686 9.85911 10.1074C9.34507 10.568 8.69659 10.8511 8.00936 10.9151L11.2725 12.9549C11.4174 13.0452 11.5205 13.1895 11.5591 13.3558C11.5977 13.5222 11.5686 13.6971 11.4782 13.842C11.3879 13.9869 11.2436 14.09 11.0772 14.1286C10.9109 14.1672 10.736 14.1381 10.5911 14.0477L5.44822 10.8334C5.32886 10.7601 5.23673 10.6498 5.18584 10.5192C5.13495 10.3887 5.12809 10.2452 5.16629 10.1104C5.2045 9.97561 5.28568 9.857 5.3975 9.77261C5.50931 9.68821 5.64563 9.64265 5.78572 9.64286H7.71429C8.11174 9.64121 8.49898 9.5168 8.82302 9.28666C9.14707 9.05651 9.39209 8.73187 9.52457 8.35714H5.78572C5.61522 8.35714 5.45171 8.28941 5.33115 8.16885C5.21059 8.04829 5.14286 7.88478 5.14286 7.71428C5.14286 7.54379 5.21059 7.38027 5.33115 7.25972C5.45171 7.13916 5.61522 7.07143 5.78572 7.07143H9.52457C9.39209 6.6967 9.14707 6.37206 8.82302 6.14191C8.49898 5.91177 8.11174 5.78736 7.71429 5.78571H5.78572C5.61522 5.78571 5.45171 5.71798 5.33115 5.59742C5.21059 5.47687 5.14286 5.31335 5.14286 5.14286C5.14286 4.97236 5.21059 4.80885 5.33115 4.68829C5.45171 4.56773 5.61522 4.5 5.78572 4.5H12.2143C12.3848 4.5 12.5483 4.56773 12.6689 4.68829C12.7894 4.80885 12.8571 4.97236 12.8571 5.14286C12.8571 5.31335 12.7894 5.47687 12.6689 5.59742C12.5483 5.71798 12.3848 5.78571 12.2143 5.78571H10.269C10.5612 6.16421 10.7645 6.60365 10.8636 7.07143H12.2143Z"
                    fill="white"
                  />
                </svg>
              </div>

              <span>Pay Now</span>
            </Link>
            <button className="rounded-md px-2 lg:px-4 h-[2rem] lg:h-[2.5rem] bg-site-main text-white  flex justify-center gap-2 lg:gap-4 items-center">
              <div className="relative lg:w-6 lg:h-6 h-5 w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M8.06896 3.10345H9.62069V4.34483L11.0601 3.10345H13.0345C13.3774 3.10345 13.6552 2.82569 13.6552 2.48276V0.62069C13.6552 0.277759 13.3774 0 13.0345 0H8.06896C7.72603 0 7.44828 0.277759 7.44828 0.62069V2.48276C7.44828 2.82569 7.72603 3.10345 8.06896 3.10345ZM12.4138 1.24138H13.0345V1.86207H12.4138V1.24138ZM9.31034 1.24138H11.7931V1.86207H9.31034V1.24138ZM8.06896 1.24138H8.68966V1.86207H8.06896V1.24138ZM11.4828 15.5172V18H13.3122L13.064 15.5172H11.4828ZM11.4828 14.2759V14.8966H14.5862C15.4418 14.8966 16.1379 14.2004 16.1379 13.3448V9.93103H15.5172V12.7241C15.5172 13.5797 14.8211 14.2759 13.9655 14.2759H11.4828ZM2.7931 13.6552H3.72414V14.2759H2.7931V17.3793H0V18H3.53231L4.153 16.7586H9.50218L10.1229 18H10.8621V14.2759H4.34483V13.6552H10.8621V13.0345H2.7931V13.6552ZM14.2759 8.72725C14.2759 8.53537 14.1198 8.37931 13.9279 8.37931C13.8357 8.37953 13.7473 8.41612 13.6818 8.48114L11.6113 10.5517H8.68966C8.51842 10.5517 8.37931 10.6908 8.37931 10.8621C8.37931 11.0333 8.51842 11.1724 8.68966 11.1724H11.975L14.174 8.97331C14.239 8.9079 14.2756 8.8195 14.2759 8.72728V8.72725ZM12.4138 5.89655V6.51724C12.4138 7.20186 12.9706 7.75862 13.6552 7.75862C14.3398 7.75862 14.8966 7.20186 14.8966 6.51724V5.89655C14.8966 5.21193 14.3398 4.65517 13.6552 4.65517C12.9706 4.65517 12.4138 5.21193 12.4138 5.89655Z"
                    fill="white"
                  />
                  <path
                    d="M11.4828 13.6552H13.9655C14.4788 13.6552 14.8966 13.2374 14.8966 12.7241V8.8815C14.8966 8.85907 14.8904 8.83832 14.8876 8.81695C14.8664 9.04001 14.7718 9.25321 14.6129 9.41219L12.4138 11.6113V13.0345H11.4828V13.6552ZM4.53667 17.3793L4.22633 18H9.42887L9.11852 17.3793H4.53667ZM2.17242 11.7931H11.7931V12.4138H2.17242V11.7931ZM7.75863 10.8621C7.75863 10.3488 8.17643 9.93104 8.68967 9.93104H8.98636C8.95319 9.69053 8.78743 9.48388 8.54966 9.41583L7.27116 9.05063C7.09139 9.28522 6.74109 9.6207 6.20691 9.6207C5.67273 9.6207 5.32242 9.28522 5.14239 9.05032L3.86388 9.41552C3.59912 9.49152 3.4138 9.73677 3.4138 10.0127V11.1724H7.81577C7.7809 11.075 7.75863 10.9713 7.75863 10.8621ZM6.20691 7.75863C6.89153 7.75863 7.44829 7.20187 7.44829 6.51725V5.89656C7.44829 5.21194 6.89153 4.65518 6.20691 4.65518C5.52229 4.65518 4.96553 5.21194 4.96553 5.89656V6.51725C4.96553 7.20187 5.52229 7.75863 6.20691 7.75863ZM5.58622 8.2707V8.60405C5.66318 8.72283 5.87701 9.00001 6.20691 9.00001C6.5368 9.00001 6.75063 8.72283 6.8276 8.60405V8.27066C6.63301 8.33963 6.42481 8.37932 6.20691 8.37932C5.98901 8.37932 5.7808 8.33963 5.58622 8.2707ZM14.4915 17.3793L14.3054 15.5173H13.6878L13.936 18H18V17.3793H14.4915Z"
                    fill="white"
                  />
                </svg>
              </div>
              <span>Online Consult</span>
            </button>
          </div>
        </div>
      </div>
      <header
        className={`bg-white fixed top-0 lg:top-[4rem] z-50 w-full ${
          scrolled ? " " : ""
        }`}
      >
        <div
          className="lg:flex hidden shadow-custom z-[100] justify-center lg:gap-6 gap-5 xlg:gap-10 relative"
          onMouseLeave={() => {
            setDropdownStates(false);
          }}
        >
          {NavElement.map((navbar, index) => (
            <div
              key={index}
              className={`font-semibold text-site-main hover:bg-site-sub hover:text-white p-2 ${
                isActiveRoute(navbar.link) && "bg-site-sub text-white"
              }`}
            >
              {navbar.dropdownItems ? (
                <div className="">
                  <button
                    onClick={() => toggleDropdown(index)}
                    onMouseEnter={() => toggleDropdown(index)}
                    className="flex flex-row gap-2 items-center"
                  >
                    <div>{navbar.name} </div>
                  </button>
                  {dropdownStates[index] && (
                    <div className="absolute top-10 px-4  z-50 left-1/2 flex justify-center items-center -translate-x-1/2 w-full">
                      <div
                        className={`grid bg-white/90 gap-2 ${getGridColumnsClass(
                          navbar.dropdownItems
                        )}`}
                      >
                        {navbar.dropdownItems.map((item, i) => (
                          <Link
                            key={i}
                            href={item.link}
                            className={`flex p-1 xlg:p-2 text-xs xlg:text-sm hover:text-site-main hover:bg-gray-200 basis-1/12 ${
                              isActiveRoute(item.link)
                                ? "bg-gray-200 text-site-main"
                                : "text-site-typo"
                            }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link href={navbar.link}>{navbar.name}</Link>
              )}
            </div>
          ))}
        </div>
        <div>
          <div className="flex justify-between items-center w-full md:p-3 p-2 px-9 lg:hidden">
            <Link href={"/"} className="lg:hidden">
              <Image
                src="/images/logo.svg"
                alt=""
                height={120}
                width={806}
                className="h-[2rem] w-fit"
              />
            </Link>
            <button onClick={togglemenuopen} className="">
              {menuopen ? (
                <RiCloseLine className="sm:text-[2rem] md:text-3xl text-site-main font-semibold" />
              ) : (
                <RiMenuAddLine className="sm:text-[2rem] md:text-3xl text-site-main font-semibold" />
              )}
            </button>
          </div>
          {menuopen && (
            <div className="flex bg-site-main flex-col h-[50vh] md:h-[40vh] lg:text-3xl text-xl overflow-scroll lg:hidden px-9 relative">
              {NavElement.map((navbar, index) => (
                <div
                  key={index}
                  className="font-semibold text-white p-4 md:py-10 border-b-2 border-gray-200"
                >
                  {navbar.dropdownItems ? (
                    <div className="relative ">
                      <button
                        onClick={() => toggleDropdown(index)}
                        onMouseEnter={() => toggleDropdown(index)}
                        className="flex flex-row gap-2 items-center "
                      >
                        <div>{navbar.name} </div>
                        <span className=" text-lg">
                          {dropdownStates[index] ? "▲" : "▼"}
                        </span>
                      </button>
                      <div className="w-full flex items-center justify-center z-50 relative top-0 ">
                        {dropdownStates[index] && (
                          <div className="relative bg-transparent rounded-lg mt-1 p-2 w-full transition-opacity border-gray-200 text-white opacity-100">
                            {navbar.dropdownItems.map((item, i) => (
                              <Link
                                key={i}
                                href={item.link}
                                onClick={() => setMenuopen(false)}
                                className="block py-4 px-4 border-b-[0.5px] border-gray-200 text-white "
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <Link href={navbar.link} onClick={() => setMenuopen(false)}>
                      {navbar.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </header>
    </>
  );
}
