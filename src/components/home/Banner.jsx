import dynamic from "next/dynamic";
import Image from "next/image";

const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});
export default function Banner() {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    arrows: false,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };
  const slides = [
    {
      imageSrc: "/slider/hero-slider.png",
    },
    {
      imageSrc: "/slider/hero-slider.png",
    },
    {
      imageSrc: "/slider/hero-slider.png",
    },
  ];
  return (
    <div className="mt-[2rem] md:mt-[5rem] lg:mt-[6rem]">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div className="carousel-item relative rounded-lg" key={index}>
            <div className="w-full relative ">
              <Image
                src={slide.imageSrc}
                loading="lazy"
                alt="banner"
                width={4320}
                height={1959}
                className="w-full resize sm:h-auto md:h-auto "
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
