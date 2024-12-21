import dynamic from "next/dynamic";
import BlogCard from "../blogs/BlogCard";
import { useEffect, useState } from "react";
import { Blogs } from "@/lib/blogDataList";

const Slider = dynamic(() => import("react-slick/lib/slider"), {
  ssr: false,
});
export default function HomeBlogList() {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [autoslide, setAutoslide] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 340) {
        setSlidesToShow(1);
        setAutoslide(true);
      } else if (window.innerWidth <= 560) {
        setSlidesToShow(1);
        setAutoslide(true);
      } else if (window.innerWidth <= 860) {
        setSlidesToShow(2);
        setAutoslide(true);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(3);
        setAutoslide(true);
      } else if (window.innerWidth <= 1780) {
        setSlidesToShow(4);
        setAutoslide(true);
      } else {
        setSlidesToShow(4);
        setAutoslide(true);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    infinite: Blogs.length > slidesToShow,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: autoslide,
    speed: 5000,
    autoplaySpeed: 2000,
    arrows: false,
  };
  return (
    <div className="flex flex-col gap-8 xl:p-16 lg:p-8 p-4 ">
      <section className="flex flex-col gap-1 lg:gap-2">
        <h3 className="text-lg md:text-3xl font-medium text-site-main">
          See Our Latest Helpful Blogs
        </h3>
        <h1 className="text-site-typo md:text-lg text-base font-semibold">
          EVERY TOOTH IN A PERSON IS MORE VALUABLE THAN A DIAMOND. Smile is the
          first thing people notice when they meet one another. Smile is
          something that can change the world. So in our DENTITY DENTAL Clinics
          we create a confident smile for you.
        </h1>
      </section>

      <div className="w-full">
        <Slider {...settings}>
          {Blogs.map((blog) => (
            <div
              key={blog.blogId}
              className="!flex w-full justify-center items-center"
            >
              <div className="w-[95%] cursor-pointer">
                <BlogCard blog={blog} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
