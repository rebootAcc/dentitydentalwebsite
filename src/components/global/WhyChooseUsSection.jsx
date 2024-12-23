import React from "react";

const WhyChooseUsSection = () => {
  const whychooseus = [
    {
      name: "Years of Services",
      number: "20",
    },
    {
      name: "Patients Served",
      number: "10,00,000",
    },
    {
      name: "Patients Served",
      number: "10,00,000",
    },
    {
      name: "Multiplicity Dental Clinic",
      number: "07",
    },
    {
      name: "Trusted Awards",
      number: "5",
    },
    {
      name: "Best Dentist Award 2021",
      number: "5",
    },
  ];
  return (
    <section className="flex flex-col gap-2">
      <h1 className="xlg:text-2xl text-xl font-semibold text-site-main">
        Why Choose Dentity Dental
      </h1>
      <section className="grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-4 md:gap-y-0 md:gap-2 xl:gap-4">
        {whychooseus.map((item, index) => (
          <div key={index} className="flex flex-row items-center gap-2">
            <div className=" ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="30"
                viewBox="0 0 26 30"
                fill="none"
                className=" size-[2rem]"
              >
                <path
                  d="M1.93311 15.1956C4.19801 18.6955 4.393 20.9804 4.64799 23.8703L4.72299 24.7402C4.98798 27.5651 5.21297 30 7.46787 30C8.49283 30 8.83781 28.5951 9.31779 26.6551C9.91776 24.2053 10.6677 21.1604 12.7426 21.1604C14.8175 21.1604 15.4675 24.2003 16.0025 26.6401C16.4275 28.5901 16.7325 30 17.7674 30C20.0823 30 20.5023 27.5101 20.7623 24.7402L20.8373 23.8703C21.0923 20.9804 21.2873 18.6955 23.5522 15.1956C25.3621 12.3958 25.9921 8.00596 25.0521 4.7461C24.4921 2.81119 23.4172 1.42625 21.9472 0.746276C19.0524 -0.593666 17.0975 0.151302 15.3725 0.811273C14.4826 1.15126 13.6376 1.47624 12.7426 1.47624C11.8477 1.47624 11.0027 1.15126 10.1128 0.811273C8.38783 0.151302 6.43292 -0.593666 3.53804 0.746276C2.06811 1.42625 0.993153 2.81119 0.433177 4.7461C-0.506782 8.00596 0.123191 12.3958 1.93311 15.1956ZM1.39314 5.02609C1.72312 3.87614 2.44309 2.35621 3.95802 1.65124C6.46791 0.491287 8.06784 1.10126 9.75777 1.74623C10.6927 2.10622 11.6627 2.4762 12.7426 2.4762C13.8226 2.4762 14.7926 2.10622 15.7275 1.74623C17.4174 1.10126 19.0174 0.491287 21.5273 1.65124C23.0422 2.35621 23.7622 3.87614 24.0921 5.02609C24.9471 7.98096 24.3521 12.1158 22.7122 14.6507C20.3123 18.3605 20.0973 20.8754 19.8423 23.7853C19.8173 24.0653 19.7923 24.3552 19.7673 24.6502C19.4273 28.3051 18.8024 29 17.7974 29.005C17.5074 28.85 17.1874 27.3901 16.9775 26.4252C16.4025 23.7853 15.6125 20.1604 12.7426 20.1604C9.88776 20.1604 8.9978 23.7753 8.34783 26.4152C8.10784 27.3851 7.74786 28.86 7.46787 29C6.37292 29 6.04793 28.1851 5.71795 24.6502C5.69295 24.3552 5.66795 24.0653 5.64295 23.7853C5.38796 20.8754 5.17297 18.3605 2.77308 14.6507C1.13315 12.1158 0.538173 7.98096 1.39314 5.02609Z"
                  fill="#104099"
                />
                <path
                  d="M8.39183 3.37115C8.60332 3.44665 8.81881 3.52914 9.0428 3.61514C9.16483 3.65444 9.29728 3.64546 9.41289 3.59005C9.5285 3.53464 9.61847 3.43702 9.66427 3.31728C9.71008 3.19754 9.70824 3.0648 9.65913 2.94638C9.61002 2.82796 9.51739 2.73287 9.40029 2.68068C9.1698 2.59269 8.94731 2.50769 8.72882 2.42969C8.60404 2.38501 8.46662 2.39172 8.34679 2.44835C8.22696 2.50498 8.13453 2.6069 8.08984 2.73168C8.04516 2.85646 8.05187 2.99388 8.1085 3.11371C8.16514 3.23354 8.26705 3.32646 8.39183 3.37115ZM3.09906 11.8553C3.16228 11.8376 3.22139 11.8077 3.27302 11.7671C3.32465 11.7266 3.36779 11.6763 3.39997 11.6191C3.43215 11.5619 3.45274 11.4989 3.46056 11.4337C3.46838 11.3686 3.46328 11.3025 3.44555 11.2393C2.90957 9.32289 2.85857 7.15499 3.31405 5.58156C3.53154 4.83009 3.96502 3.85363 4.79749 3.46815C5.36296 3.20666 5.87344 3.05817 6.35792 3.01467C6.42369 3.00932 6.48776 2.991 6.54642 2.96076C6.60508 2.93053 6.65717 2.88899 6.6997 2.83852C6.74223 2.78806 6.77434 2.72968 6.79419 2.66674C6.81404 2.60381 6.82124 2.53757 6.81537 2.47184C6.80949 2.40611 6.79067 2.34219 6.75997 2.28377C6.72927 2.22535 6.68732 2.17359 6.63652 2.13147C6.58572 2.08934 6.52708 2.05769 6.46399 2.03834C6.4009 2.01899 6.33461 2.01232 6.26892 2.01871C5.66795 2.07221 5.04948 2.2497 4.37751 2.56069C3.20256 3.10466 2.62808 4.35261 2.35309 5.30357C1.84162 7.07199 1.88962 9.39139 2.48259 11.5088C2.50031 11.572 2.53031 11.6312 2.57089 11.6828C2.61146 11.7344 2.66181 11.7776 2.71905 11.8097C2.7763 11.8419 2.83932 11.8625 2.90453 11.8703C2.96973 11.8781 3.03583 11.873 3.09906 11.8553ZM10.6027 14.9456C10.787 15.1321 11.0066 15.2798 11.2487 15.3803C11.4908 15.4807 11.7506 15.5318 12.0127 15.5306C12.5476 15.5306 13.0526 15.3256 13.4276 14.9456L18.1374 10.2359C18.3238 10.0516 18.4716 9.83195 18.572 9.58985C18.6725 9.34774 18.7236 9.08803 18.7224 8.82591C18.7224 8.29094 18.5174 7.78596 18.1374 7.41097C17.3574 6.63101 16.0875 6.63101 15.3125 7.41097L12.0127 10.7058L10.4677 9.1559C10.0921 8.78134 9.58327 8.571 9.0528 8.571C8.52233 8.571 8.0135 8.78134 7.63786 9.1559C7.26288 9.53088 7.05289 10.0359 7.05289 10.5708C7.05289 11.1058 7.26288 11.6058 7.63786 11.9858L10.6027 14.9456Z"
                  fill="#28AF88"
                />
              </svg>
            </div>
            <div className="flex flex-col ">
              <h1 className="text-site-main text-base/[18px] xlg:text-lg/[17px] font-medium">
                {item.number} +
              </h1>
              <h2 className="text-site-typo text-sm/[14px] xlg:text-base/[16px] ">
                {item.name}
              </h2>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default WhyChooseUsSection;
